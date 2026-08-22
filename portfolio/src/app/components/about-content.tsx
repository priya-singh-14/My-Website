import Image from "next/image";

export default function AboutContent() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-20 pt-8 md:mt-2 mb-10 pb-10">
      <div className="flex w-full flex-col gap-10 md:w-[28%] md:shrink-0">
        <p className="text-p2 text-primary/90 font-light">
          Hi, I&apos;m Priya. I&apos;m actively looking for full time product design and design engineering roles at this time.
          <br />
          <br />
          Want to chat? You can find me on{" "}
          <a
            href="https://linkedin.com/in/priyagracesingh"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            linkedin
          </a>{" "}
          or directly at{" "}
          <a
            href="mailto:priyagracesingh05@gmail.com"
            className="underline hover:text-primary"
          >
            @priyagracesingh05@gmail.com
          </a>
          .
        </p>

        <div className="text-p2">
          <p className="font-bold text-greyAccent mb-2">Experience</p>
          <p className="text-primary/90 font-light mb-4">
            Klaviyo — Incoming Product Designer
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
            2025 Cornell UX Designathon Winner
          </p>
        </div>

        <div className="flex gap-8">
          <a
            href="https://github.com/priya-singh-14"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-p2 text-primary/90 hover:text-primary"
          >
            Github <span className="inline-block -rotate-45">→</span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-p2 text-primary/90 hover:text-primary"
          >
            Resume <span className="inline-block -rotate-45">→</span>
          </a>
        </div>
      </div>

      <div className="flex w-full flex-col gap-5 md:w-[38%] md:shrink-0">
        <div className="relative w-full aspect-[691/436] overflow-hidden">
          <Image
            src="/about-assets/me.jpeg"
            alt="Priya Singh"
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/about-assets/tile.png"
              alt="Decorative tile pattern"
              fill
              sizes="(max-width: 768px) 50vw, 23vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/about-assets/flw.png"
              alt="Flowers against a wall"
              fill
              sizes="(max-width: 768px) 50vw, 23vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
