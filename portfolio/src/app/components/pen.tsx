"use client";

import { useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

interface PenProps{
    canvasImage: string,
}

export default function Pen(props: PenProps) {
    const [isDrawing, setIsDrawing] = useState(false);
    const [message, setMessage] = useState("click me to draw!");

    const canvasRef = useRef<any>(null);

    const styles = {
        border: '0.0625rem solid #868684',
        borderRadius: '0.25rem',
      };

    const toggleDrawing = () => {
        if (isDrawing && canvasRef.current) {
            canvasRef.current.clearCanvas(); 
            setMessage("click me to draw!");
        } else {
            setMessage("click me to clear!");
        }
        setIsDrawing(!isDrawing);
    };

    return (
        <div>
            <h4 className="ml-36 font-mono text-h4 text-cardDarkGrey transform rotate-15">{message}</h4>
            <div className="relative flex">
                <img src={props.canvasImage} className="overflow-hidden w-full h-full z-0 mx-10 mt-6 pt-5" alt="Canvas Image" />
                {isDrawing && (
                    // <div className="absolute w-5/6 ml-36 h-full z-10 p-10 m-5">
                    //     <ReactSketchCanvas
                    //         ref={canvasRef}
                    //         strokeWidth={3}
                    //         canvasColor="#FAF9F6"
                    //         strokeColor="#006AF5"
                    //     />
                    // </div>
                    <div className="absolute w-full h-full z-10 pl-10 pr-10 pt-10">
                    <ReactSketchCanvas
                        ref={canvasRef}
                        style={styles}
                        strokeWidth={3}
                        canvasColor="#FAF9F6"
                        strokeColor="#006AF5"
                    />
                </div>
                )}
                <img className="ml-20 absolute cursor-pointer z-20 bg-transparent hover:scale-110 transition-transform"
                    src="pen.svg"
                    alt="pen"
                    onClick={toggleDrawing}
                />
            </div>        
        </div>
    );
}
