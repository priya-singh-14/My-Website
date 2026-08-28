"use client";
import { useState } from "react";
import Image from "next/image";
import Typewriter from "@/components/fancy/text/typewriter";
import MediaSkeleton from "./media-skeleton";

export default function AboutContent() {
  const [loadedMap, setLoadedMap] = useState<Record<string, boolean>>({});
  const markLoaded = (key: string) => () =>
    setLoadedMap((prev) => ({ ...prev, [key]: true }));

  return (
    <div className="flex flex-col md:flex-1 md:flex-row md:justify-between pt-4 md:mt-2">
      <div className="flex w-full flex-col gap-10 md:w-[45%] md:shrink-0">
        <p className="md:text-h2 md:font-light text-h4 font-light text-primary/90">
          <Typewriter
            as="span"
            text="Hi, I'm Priya."
            speed={30}
            loop={false}
            showCursor={false}
          />
          <span className="inline-block w-[0.5em] h-[1em] bg-primary/90 ml-1 align-center animate-blink" />
        </p>
        <p className="text-p text-primary/90 font-light">
          I&apos;m a technical creative fueled by an ongoing exploration of new
          technologies, practices, and ideas. I am open to full-time product
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

      <div className="hidden md:flex md:w-[40%] flex-col gap-5 md:shrink-0">
        <div className="relative w-full aspect-[691/436] overflow-hidden">
          <MediaSkeleton loaded={Boolean(loadedMap.me)} />
          <Image
            src="/about-assets/me.jpeg"
            alt="Priya Singh"
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover"
            priority
            onLoad={markLoaded("me")}
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="relative aspect-square overflow-hidden">
            <MediaSkeleton loaded={Boolean(loadedMap.tile)} />
            <Image
              src="/about-assets/tile.png"
              alt="Decorative tile pattern"
              fill
              sizes="(max-width: 768px) 50vw, 23vw"
              className="object-cover"
              onLoad={markLoaded("tile")}
            />
          </div>
          <div className="relative aspect-square overflow-hidden">
            <MediaSkeleton loaded={Boolean(loadedMap.flw)} />
            <Image
              src="/about-assets/flw.png"
              alt="Flowers against a wall"
              fill
              sizes="(max-width: 768px) 50vw, 23vw"
              className="object-cover"
              onLoad={markLoaded("flw")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
