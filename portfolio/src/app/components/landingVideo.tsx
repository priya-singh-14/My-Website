"use client";
import React, { useState } from "react";

interface LandingVideoProps {
  cover: string;
  width: number;
  height?: number;
  aspect?: string;
  hoverCaption?: string;
  path: string;
}

export default function LandingVideo(props: LandingVideoProps) {
  const [isHovered, setIsHovered] = useState(false);

  const widthStyle = { width: `${props.width * 100}%` };

  return (
    <div
      className={`aspect-${props.aspect} relative`}
      style={widthStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        className={`aspect-${
          props.aspect
        } w-full h-full object-cover transition-all ${
          isHovered && props.hoverCaption ? "cursor-pointer md:blur-sm md:brightness-[.65]" : ""
        }`}
        src={props.cover}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      />
      <div
        className={`absolute bottom-0 left-0 p-4 text-white font-mono transition-opacity ${
          isHovered ? "md:opacity-100 opacity-0" : "opacity-0"
        }`}
      >
        <div className="bg-opacity-50 px-3 py-2">{props.hoverCaption}</div>
      </div>
    </div>
  );
}
