import { Suspense } from "react";
import Link from "next/link";
import { colSpanClasses } from "../utils/grid";

interface LandingVideoProps {
  cover: string;
  width: number;
  title?: string;
  subtitle?: string;
  path?: string;
  colSpan?: number;
}

export default function LandingVideo(props: LandingVideoProps) {
  const widthStyle = { flexGrow: props.width, flexBasis: 0 };
  const gridClass = props.colSpan ? colSpanClasses[props.colSpan] : "";

  const content = (
    <>
      <Suspense fallback={<p>Loading video...</p>}>
        <video
          className="w-full h-full flex-1 min-h-0 object-cover"
          src={props.cover}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        />
      </Suspense>
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

  const rootClassName = `flex flex-col min-w-0 h-full ${gridClass}`;

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
