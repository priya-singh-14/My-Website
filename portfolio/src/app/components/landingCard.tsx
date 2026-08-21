import Image from "next/image";
import Link from "next/link";
import { colSpanClasses } from "../utils/grid";

interface LandingCardProps {
  cover: string;
  width: number;
  title?: string;
  subtitle?: string;
  path?: string;
  priority?: boolean;
  colSpan?: number;
}

export default function LandingCard(props: LandingCardProps) {
  const widthStyle = { flexGrow: props.width, flexBasis: 0 };
  const gridClass = props.colSpan ? colSpanClasses[props.colSpan] : "";

  const content = (
    <>
      <div className="relative w-full flex-1 min-h-0">
        <Image
          src={"/" + props.cover}
          fill
          priority={props.priority}
          className="object-cover"
          alt={props.title ?? "Landing Card"}
        ></Image>
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
