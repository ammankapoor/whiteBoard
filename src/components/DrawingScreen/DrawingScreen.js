import React, { useState, useRef, useEffect } from "react";
import "./DrawingScreen.css";

function DrawingScreen({savedScreen,setSavedScreen,setSelectedImg, selectedImg, lineWidth, lineColor, current}) {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "blue";
    context.lineWidth = 1;
    contextRef.current = context;
  }, []);

  useEffect(()=>{
    const context = canvasRef.current.getContext("2d");
    context.lineWidth = lineWidth;
  },[lineWidth])

  useEffect(()=>{
    console.log(lineColor);
    const context = canvasRef.current.getContext("2d");
    context.strokeStyle =lineColor;
  },[lineColor])

  useEffect(()=>{
    const context = canvasRef.current.getContext("2d");
    if(current === 'eraser')
    {
      context.lineWidth = lineWidth;
      context.strokeStyle ="white";
    }
    else {
      context.lineWidth = lineWidth;
      context.strokeStyle =lineColor;
    }
  },[current])

  useEffect(()=>{
    const ctx = canvasRef.current.getContext("2d");
    if(selectedImg)
    {
      ctx.scale(0.5,0.5);
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      var pat = ctx.createPattern(selectedImg,'repeat');
      ctx.rect(0, 0,window.innerWidth, window.innerHeight);
      ctx.fillStyle = pat;
      ctx.fill();
      ctx.scale(2,2);
    }
    else {
      ctx.scale(1,1);
    }
  },[selectedImg])

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
    contextRef.current.closePath();
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const saveCanvas = () => {
    var canvasUrl = canvasRef.current.toDataURL();
    setSavedScreen([...savedScreen,canvasUrl ]);
  }

  const newCanvas =() => {
    setSelectedImg(null);
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  }
  return (
    <div>
      <div className="title-div">
        <div className="title">
          Draw Below
        </div>
        <div className="options">
       New: <img
          onClick={() => newCanvas()}
          style={{ maxHeight: "30px", cursor: "pointer" }}
          alt="new"
          title= "New"
          src="https://img.icons8.com/cotton/2x/plus--v3.png"
        />&nbsp;
       Save: <img
          onClick={() => saveCanvas()}
          style={{ maxHeight: "30px", cursor: "pointer" }}
          alt="save"
          title= "Save"
          src="https://icons-for-free.com/iconfiles/png/512/download+guardar+import+save+icon-1320086208900265667.png"
        /> 
        </div>
        
      </div>
      <div>
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef}
        />
      </div>
    </div>
  );
}

export default DrawingScreen;
