import React, { useRef, useState, useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
};

const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const Canvas = ({ updateImage }) => {
  const canvas = useRef(null);
  const [eraser, setEraser] = useState(false);

  useEffect(() => {
    canvas.current.eraseMode(eraser);
  }, [eraser]);

  const exportImage = () => {
    canvas.current
      .exportImage("png")
      .then((data) => {
        updateImage(data);
      })
      .catch((e) => {
        console.log(e);
        updateImage(data);
      });
  };

  return (
    <div>
      <ReactSketchCanvas
        ref={canvas}
        strokeWidth={5}
        strokeColor="black"
        on
        width="10em"
        height="10rem"
        onUpdate={debounce(() => exportImage())}
      />
      <button
        onClick={() => {
          canvas.current.resetCanvas();
          debounce(() => exportImage());
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          canvas.current.undo();
          debounce(() => exportImage());
        }}
      >
        undo
      </button>
      <button
        onClick={() => {
          canvas.current.redo();
          debounce(() => exportImage());
        }}
      >
        redo
      </button>
      <button onClick={() => setEraser(!eraser)}>eraser</button>

      <button
        onClick={() => {
          canvas.current
            .exportImage("png")
            .then((data) => {
              console.log(data);
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        Get Image
      </button>
    </div>
  );
};

export default Canvas;
