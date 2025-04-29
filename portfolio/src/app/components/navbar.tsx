"use client";
import Link from "next/link";
import ContactModal from "./contactModal";
import { useState } from "react";


export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center text-li text-blueSecondary font-mono pt-7 px-5 w-full bg-transparent">
        <Link className="pl-5 hover:text-bluePrimary md:pl-4" href="/">
          PRIYA SINGH
        </Link>

        {/* navbar */}
        <div className="font-mono hidden md:flex pr-7 space-x-12">
          <Link className="hover:text-bluePrimary" href="/development">
            DEV
          </Link>
          <Link className="hover:text-bluePrimary" href="/design">
            DESIGN
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="hover:text-bluePrimary"
          >
            CONTACT
          </button>
        </div>

       {/* hamburger menu */}
        <button
          className="md:hidden pr-7 text-blueSecondary z-30 relative"
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

      {/* Fullscreen Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-primary z-20 flex flex-col justify-start pt-24">
          <div className="flex flex-col items-start px-8 space-y-20 text-3xl font-mono">
            <Link
              className="text-black py-2"
              href="/development"
              onClick={() => setIsMenuOpen(false)}
            >
              DEVELOPMENT
            </Link>
            <Link
              className="text-black py-2"
              href="/design"
              onClick={() => setIsMenuOpen(false)}
            >
              DESIGN
            </Link>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="text-black py-2"
            >
              CONTACT
            </button>
          </div>
        </div>
      )}
      <div className="font-mono">
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        ></ContactModal>
      </div>
    </>
  );
}
