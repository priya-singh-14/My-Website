"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Typewriter from "@/components/fancy/text/typewriter";
import MediaSkeleton from "./media-skeleton";

interface Photo {
  // Leave out to show a grey placeholder (with its caption) until the image exists.
  src?: string;
  alt: string;
  caption?: string;
}

type PhotoSetKey = "default" | "travel" | "hike" | "eats";

const photoSets: Record<PhotoSetKey, Photo[]> = {
  default: [
    { src: "/about-assets/me.png", alt: "Priya Singh", caption: "That's me!" },
  ],
  travel: [
    {
      src: "/about-assets/travel2.png",
      alt: "",
      caption: "Walking around the Amsterdam canals",
    },
    { src: "/about-assets/travel3.png", alt: "", caption: "Navigating the U-Bahn in Berlin" },
    {
      src: "/about-assets/travel1.png",
      alt: "",
      caption: "Colors in CDMX",
    },
  ],
  hike: [
    {
      src: "/about-assets/hike1.png",
      alt: "",
      caption: "Griffith Observatory in LA",
    },
    { src: "/about-assets/hike2.png", alt: "", caption: "Views from Acadia" },
    {
      src: "/about-assets/hike3.png",
      alt: "",
      caption: "Trails around Neuschwanstein Castle",
    },
  ],
  eats: [
    {
      src: "/about-assets/food1.png",
      alt: "",
      caption: "La Once Mil, some of the best tacos I've ever had",
    },
    {
      src: "/about-assets/food2.png",
      alt: "",
      caption: "I usually have a flat white in hand",
    },
    { src: "/about-assets/food3.png", alt: "", caption: "Doner kebab!!" },
  ],
};

interface AboutContentProps {
  onOpenArchive?: () => void;
}

function AboutPhoto({
  photo,
  sizes,
  priority,
}: {
  photo?: Photo;
  sizes: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  if (!photo?.src) return <div className="absolute inset-0 bg-greyLight/40" />;
  return (
    <>
      <MediaSkeleton loaded={loaded} />
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        quality={90}
        sizes={sizes}
        className="object-cover"
        priority={priority}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}

function PhotoFrame({
  className = "",
  aspect,
  caption,
  children,
}: {
  className?: string;
  aspect: string;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <figure
      className={`flex flex-col rounded-[2px] border border-white/25 bg-white/10 px-1.5 pt-1.5 backdrop-blur-sm ${className}`}
    >
      <div
        className={`relative w-full overflow-hidden rounded-[2px] ${aspect}`}
      >
        {children}
      </div>
      <figcaption className="shrink-0 truncate px-0.5 py-2 text-[12px] leading-[16px] font-light text-primary/70 min-h-[32px]">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function AboutContent({ onOpenArchive }: AboutContentProps) {
  const [activeSet, setActiveSet] = useState<PhotoSetKey>("default");
  const photos = photoSets[activeSet];

  const photoLink = (key: PhotoSetKey, label: string) => (
    <button
      type="button"
      onClick={() => setActiveSet((prev) => (prev === key ? "default" : key))}
      aria-pressed={activeSet === key}
      className={`pointer-events-none md:pointer-events-auto md:underline md:hover:text-primary ${
        activeSet === key ? "md:text-primary" : ""
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-col md:flex-1 md:flex-row md:justify-between pt-4 md:mt-2">
      <div className="flex w-full flex-col gap-10 md:w-[45%] md:shrink-0">
        <p className="md:text-h2 md:font-light text-h4 font-light text-primary/90">
          <Typewriter
            as="span"
            text="Hi, I'm Priya!"
            speed={30}
            loop={false}
            showCursor={false}
          />
          <span className="inline-block w-[0.5em] h-[1em] bg-primary/90 ml-1 align-center animate-blink" />
        </p>
        <p className="text-p text-primary/90 font-light">
          I&apos;m a technical creative and a systems thinker by nature. As much
          as I love to{" "}
          <button
            type="button"
            onClick={onOpenArchive}
            className="underline hover:text-primary"
          >
            build
          </button>
          , I am also a big {photoLink("travel", "traveler")}, an occasional{" "}
          {photoLink("hike", "hiker")}, and a lover of{" "}
          {photoLink("eats", "good eats")} . I am open to full-time product
          design and design engineering roles at this time.
          <br />
          <br />
          Want to chat? You can find me on{" "}
          <a
            href="https://linkedin.com/in/priyagracesingh"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            LinkedIn
          </a>{" "}
          or directly at{" "}
          <a
            href="mailto:priyagracesingh05@gmail.com"
            className="underline hover:text-primary"
          >
            priyagracesingh05@gmail.com
          </a>
          .
          <br />
          <br />
        </p>

        <div className="text-p2">
          <p className="font-bold text-greyAccent mb-2">Experience</p>
          <p className="text-primary/90 font-light mb-4">
            Klaviyo — Incoming Product Designer (Part-Time)
            <br />
            2027
          </p>
          <p className="text-primary/90 font-light mb-4">
            Klaviyo — Product Design Co-op (6 months)
            <br />
            2026
          </p>
          <p className="text-primary/90 font-light">
            Verizon (Contract) — Software Engineering Co-op (6 months)
            <br />
            2025
          </p>
        </div>

        <div className="text-p2">
          <p className="font-bold text-greyAccent mb-2">Awards</p>
          <p className="text-primary/90 font-light">
            2025 Cornell UX Design-a-thon Winner
          </p>
        </div>
        <div className="flex gap-8 md:mt-auto">
          <a
            href="https://github.com/priya-singh-14"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-p2 text-primary/90 hover:text-primary"
          >
            Github <span className="inline-block -rotate-45">→</span>
          </a>
          <a
            href="/Priya_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-p2 text-primary/90 hover:text-primary"
          >
            Resume <span className="inline-block -rotate-45">→</span>
          </a>
        </div>
      </div>

      {/* The photos are absolutely positioned inside this column so they never
          set the row's height: the text column does, and the photos flex to
          fit it rather than pushing the GitHub/Resume links down. */}
      <div className="relative hidden md:block md:w-[48%] md:shrink-0">
        <motion.div
          key={activeSet}
          className="absolute inset-0 flex flex-col gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {photos.length === 1 ? (
            <PhotoFrame
              className="min-h-0 flex-1"
              aspect="min-h-0 flex-1"
              caption={photos[0].caption}
            >
              <AboutPhoto photo={photos[0]} sizes="48vw" priority />
            </PhotoFrame>
          ) : (
            <>
              <PhotoFrame
                className="min-h-0 flex-1"
                aspect="min-h-0 flex-1"
                caption={photos[0]?.caption}
              >
                <AboutPhoto photo={photos[0]} sizes="48vw" priority />
              </PhotoFrame>
              <div className="grid shrink-0 grid-cols-2 gap-5">
                {[photos[1], photos[2]].map((photo, i) => (
                  <PhotoFrame
                    key={i}
                    aspect="aspect-[5/4]"
                    caption={photo?.caption}
                  >
                    <AboutPhoto photo={photo} sizes="24vw" />
                  </PhotoFrame>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
