"use client";
import { Suspense, useState } from "react";
import Link from "next/link";
import { colSpanClasses } from "../utils/grid";
import MediaSkeleton from "./media-skeleton";

interface LandingVideoProps {
  cover: string;
  width: number;
  title?: string;
  subtitle?: string;
  path?: string;
  colSpan?: number;
}

export default function LandingVideo(props: LandingVideoProps) {
  const [loaded, setLoaded] = useState(false);
  const widthStyle = { flexGrow: props.width, flexBasis: 0 };
  const gridClass = props.colSpan ? colSpanClasses[props.colSpan] : "";

  const content = (
    <>
      <div className="relative w-full min-h-[280px] md:min-h-0 md:h-full md:flex-1 overflow-hidden">
        <MediaSkeleton loaded={loaded} />
        <Suspense fallback={null}>
          <video
            className="absolute inset-0 h-full w-full object-cover"
            aria-label={props.title ? `${props.title} preview` : "Project preview"}
            src={props.cover}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            onLoadedData={() => setLoaded(true)}
          />
        </Suspense>
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
