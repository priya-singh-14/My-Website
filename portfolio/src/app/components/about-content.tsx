export default function AboutContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 mt-10 md:mt-2">
      <div className="md:col-span-1 flex flex-col gap-10">
        <p className="text-p2 text-primary/90 font-light">
          Hi, I&apos;m Priya. I'm actively looking for full time product design and design engineering roles at this time.
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

      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5 content-start">
        {["Caption", "Caption", "Caption", "Caption"].map((caption, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="w-full aspect-[4/3] bg-primary/10" />
            <div>
              <p className="text-li font-semibold text-primary/40">
                {caption}
              </p>
              <p className="text-li font-light text-primary/40">
                maybe another caption or other metadata
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
