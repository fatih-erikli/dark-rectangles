import { useEffect, useRef, useState } from "react";
import "./App.css";

const SCALE_FACTOR = 0.03;

type Point = {
  x: number;
  y: number;
};

function convertScreenCoordsToSvgCoords(
  x: number,
  y: number,
  svgElement: SVGSVGElement,
  groupElement: SVGGraphicsElement
) {
  var point = svgElement.createSVGPoint();  // An SVGPoint SVG DOM object
  point.x = x;
  point.y = y;
  point = point.matrixTransform(groupElement.getScreenCTM()?.inverse());
  return {
    x: point.x,
    y: point.y,
  };
}

let groupTransform: DOMMatrix;

function App() {
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(600);
  const [transformationMatrix, setTransformationMatrix] = useState<DOMMatrix>(new DOMMatrix());
  const [viewboxStart, setViewboxStart] = useState<Point>({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState<Point>({ x: -1, y: -1 });
  const [initialViewboxStart, setInitialViewboxStart] = useState<Point>({
    x: -1,
    y: -1,
  });
  const [readyToRender, setReadyToRender] = useState(false);
  
  const svgRef = useRef<SVGSVGElement>(null);
  const transformableGroupRef = useRef<SVGGraphicsElement>(null);
  useEffect(() => {
    setSize();
    setReadyToRender(true);
  }, []);

  const setSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    if (svgRef.current) {
      groupTransform = svgRef.current.createSVGMatrix();
      
      svgRef.current.addEventListener('wheel', onWheel, {
        passive: false,
      });
    }

    window.addEventListener('resize', () => {
      setSize();
    });

    document.addEventListener('gesturestart', (event) => {
      event.preventDefault();
      
    });
    document.addEventListener('gesturechange', (event) => {
      event.preventDefault();
      
    });
    document.addEventListener('gestureend', (event) => {
      event.preventDefault();
      
    });
    document.addEventListener('DOMMouseScroll', (event) => {
      event.preventDefault();
    });
  }, [readyToRender]);

  const onWheel = (event: any) => {
    if (!svgRef.current || !transformableGroupRef.current) {
      return;
    }
    event.preventDefault();
    const scale = event.deltaY * SCALE_FACTOR * -1;
    var coords = convertScreenCoordsToSvgCoords(
      event.clientX,
      event.clientY,
      svgRef.current,
      transformableGroupRef.current);

    groupTransform = groupTransform.translate(coords.x, coords.y);
    groupTransform = groupTransform.scale(1 + scale);
    groupTransform = groupTransform.translate(-coords.x, -coords.y);

    const transform = svgRef.current.createSVGTransform();
    transform.setMatrix(groupTransform);
    setTransformationMatrix(transform.matrix);
  };
  return (
    <div className="container">
      {readyToRender && (
        <svg
        onContextMenu={(event) => event.preventDefault()}
        onMouseDown={(event) => {
          setDragStart({ x: event.clientX, y: event.clientY });
          setInitialViewboxStart(viewboxStart);
        }}
        onTouchStart={({ touches, nativeEvent }) => {
          const firstTouch = touches[0];
          setDragStart({ x: firstTouch.clientX, y: firstTouch.clientY });
          setInitialViewboxStart(viewboxStart);
        }}
        onTouchMove={({ touches }) => {
          if (dragStart.x > -1 && dragStart.y > -1) {
            const firstTouch = touches[0];
            
            setViewboxStart({
              x: initialViewboxStart.x + (firstTouch.clientX - dragStart.x) * -1,
              y: initialViewboxStart.y + (firstTouch.clientY - dragStart.y) * -1,
            });
          }
        }}
        onMouseMove={(event) => {
          if (dragStart.x > -1 && dragStart.y > -1) {
            setViewboxStart({
              x: initialViewboxStart.x + (dragStart.x - event.clientX),
              y: initialViewboxStart.y + (dragStart.y - event.clientY),
            });
          }
        }}
        onMouseUp={() => {
          if (dragStart.x > -1 && dragStart.y > -1) {
            setDragStart({
              x: -1,
              y: -1,
            });
          }
        }}
        width={width}
        ref={svgRef}
        height={height}
        viewBox={`${viewboxStart.x} ${viewboxStart.y} ${width} ${height}`}
        style={{
          background: "snow",
        }}
      >
        <g
          transform={
            `matrix(
              ${transformationMatrix.a},
              ${transformationMatrix.b},
              ${transformationMatrix.c},
              ${transformationMatrix.d},
              ${transformationMatrix.e},
              ${transformationMatrix.f}
            )`
          }
          ref={transformableGroupRef}
        >
          <rect width={width-600} fill="rgb(40, 40, 40)" height={height-200} x={100} y={100} />
          <rect width={300} fill="rgb(40, 40, 40)" height={250} x={width-400} y={100} />
        </g>
      </svg>
      )}
    </div>
  );
}

export default App;
