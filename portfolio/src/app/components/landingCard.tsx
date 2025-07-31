"use client";
import React, { useState } from "react";

interface LandingCardProps {
  cover: string;
  width: number;
  height?: number;
  aspect?: string;
  hoverCaption?: string;
  path: string;
}

export default function LandingCard(props: LandingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const widthStyle = { width: `${props.width * 100}%` };

  return (
    <div
      className={`aspect-${props.aspect} relative cursor-pointer`}
      style={widthStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={props.cover}
        className={`aspect-${
          props.aspect
        } w-full h-full object-cover transition-all ${
          isHovered && props.hoverCaption
            ? "blur-sm brightness-[.65] duration-150"
            : ""
        }`}
        alt="Landing Card"
      />
      <div
        className={`absolute bottom-0 left-0 p-4 text-white font-mono font-light transition-opacity ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="bg-opacity-50 px-3 py-2">{props.hoverCaption}</div>
      </div>
    </div>
  );
}
