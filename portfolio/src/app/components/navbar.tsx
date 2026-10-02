"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "motion/react";
import Modal from "./modal";
import { useEffect, useState } from "react";

// Deferred out of the shared navbar bundle (present on every page) since
// these pull in the archive grid's engine/motion code, which is only ever
// needed once someone actually opens one of these modals.
const AboutContent = dynamic(() => import("./about-content"), { ssr: false });
const ArchiveContent = dynamic(() => import("./archive-content"), { ssr: false });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // About and Archive share one modal so About can hand off to Archive by
  // cross-fading the content under a single scrim. `panel` is kept after
  // closing so the content stays mounted through the modal's exit fade.
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [panel, setPanel] = useState<"about" | "archive">("about");
  const openPanel = (next: "about" | "archive") => {
    setPanel(next);
    setIsModalOpen(true);
  };

  // Warms the chunk cache shortly after the page settles so the modal
  // content is already loaded by the time someone opens it, instead of
  // popping in mid-animation on the first click.
  useEffect(() => {
    import("./about-content");
    import("./archive-content");
  }, []);

  return (
    <>
      <nav id="header" className="flex justify-between items-center text-li text-greyPrimary font-manrope py-5 w-full bg-transparent px-5">
        <Link className="text-greyAccent" href="/">
          %
        </Link>
        {/* navbar */}
        <div className="font-manrope text-li hidden md:flex space-x-12">
          <button onClick={() => openPanel("about")}>About</button>
          <button onClick={() => openPanel("archive")}>Archive</button>
        </div>

        {/* hamburger menu */}
        <button
          className="md:hidden pr-2 text-greyAccent z-30 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.25}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.25}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-primary z-20 flex flex-col justify-start pt-20">
          <div className="flex flex-col px-5 font-manrope">
            {(["about", "archive"] as const).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setIsMenuOpen(false);
                  openPanel(key);
                }}
                className="w-full border-b border-[#E3E3E3] py-6 text-left text-[20px] capitalize text-blackPrimary"
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={panel}
            className="flex min-h-0 flex-1 flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.15, ease: "easeIn" } }}
          >
            {panel === "about" ? (
              <AboutContent onOpenArchive={() => setPanel("archive")} />
            ) : (
              <ArchiveContent />
            )}
          </motion.div>
        </AnimatePresence>
      </Modal>
    </>
  );
}
