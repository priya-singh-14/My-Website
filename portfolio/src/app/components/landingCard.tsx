"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { colSpanClasses } from "../utils/grid";
import MediaSkeleton from "./media-skeleton";

interface LandingCardProps {
  cover: string;
  width: number;
  title?: string;
  subtitle?: string;
  path?: string;
  priority?: boolean;
  colSpan?: number;
  rawImg?: boolean;
}

export default function LandingCard(props: LandingCardProps) {
  const [loaded, setLoaded] = useState(false);
  const widthStyle = { flexGrow: props.width, flexBasis: 0 };
  const gridClass = props.colSpan ? colSpanClasses[props.colSpan] : "";

  const content = (
    <>
      <div
        className={`relative w-full min-h-[280px] md:min-h-0 md:flex-1 flex items-center justify-center overflow-hidden ${
          props.rawImg ? "bg-blackPrimary" : ""
        }`}
      >
        <MediaSkeleton loaded={loaded} />
        {props.rawImg ? (
          <img
            src={"/" + props.cover}
            alt={props.title ? `${props.title} project cover` : "Project cover"}
            width={480}
            ref={(el) => {
              if (el?.complete) setLoaded(true);
            }}
            onLoad={() => setLoaded(true)}
          />
        ) : (
          <Image
            src={"/" + props.cover}
            fill
            priority={props.priority}
            // Matches the actual rendered width (colSpan/12 of the row on
            // desktop, full width on mobile where cards stack) so Next
            // requests an appropriately-sized variant instead of defaulting
            // to 100vw for every card regardless of how narrow it renders.
            sizes={
              props.colSpan
                ? `(max-width: 768px) 100vw, ${Math.round((props.colSpan / 12) * 100)}vw`
                : "100vw"
            }
            className="object-cover"
            alt={props.title ? `${props.title} project cover` : "Project cover"}
            onLoad={() => setLoaded(true)}
          ></Image>
        )}
      </div>
      {props.title && (
        <div className="pt-3 shrink-0">
          <p className="font-semibold text-greyPrimary">{props.title}</p>
          {props.subtitle && (
            <p className="text-greyPrimary text-sm opacity-70">
              {props.subtitle}
            </p>
          )}
        </div>
      )}
    </>
  );

  const rootClassName = `flex flex-col min-w-0 md:h-full ${gridClass}`;

  if (props.path) {
    return (
      <Link href={props.path} style={widthStyle} className={rootClassName}>
        {content}
      </Link>
    );
  }

  return (
    <div style={widthStyle} className={rootClassName}>
      {content}
    </div>
  );
}
