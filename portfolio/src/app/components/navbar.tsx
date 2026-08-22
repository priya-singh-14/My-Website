"use client";
import Link from "next/link";
import Modal from "./modal";
import AboutContent from "./about-content";
import ArchiveContent from "./archive-content";
import { useState } from "react";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  return (
    <>
      <nav id="header" className="flex justify-between items-center text-li text-greyPrimary font-manrope py-5 w-full bg-transparent px-5">
        <Link className="text-greyAccent" href="/">
          %
        </Link>
        {/* navbar */}
        <div className="font-manrope text-li hidden md:flex space-x-12">
          <button onClick={() => setIsAboutOpen(true)}>About</button>
          <button onClick={() => setIsArchiveOpen(true)}>Archive</button>
        </div>

        {/* hamburger menu */}
        <button
          className="md:hidden pr-2 text-greyPrimary z-30 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-primary z-20 flex flex-col justify-start pt-24">
          <div className="flex flex-col items-start px-8 space-y-20 text-2xl font-manrope">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsAboutOpen(true);
              }}
              className="text-black py-2 text-li "
            >
              About
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsArchiveOpen(true);
              }}
              className="text-black py-2  text-li "
            >
              Archive
            </button>
          </div>
        </div>
      )}
      <Modal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)}>
        <AboutContent />
      </Modal>
      <Modal isOpen={isArchiveOpen} onClose={() => setIsArchiveOpen(false)}>
        <ArchiveContent />
      </Modal>
    </>
  );
}
