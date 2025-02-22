"use client";
import Link from "next/link";
import ContactModal from "./contactModal";
import { useState } from "react";
  
export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="flex justify-between text-li text-blueSecondary font-mono pt-7 px-5 w-full bg-transparent">
     <Link className="hover:text-bluePrimary pl-6" href="/">PRIYA SINGH</Link>
      <div className="flex pr-7 space-x-12">
        <Link className="hover:text-bluePrimary" href="/development">DEV</Link>
        <Link className="hover:text-bluePrimary" href="/design">DESIGN</Link>
        <button onClick={() => setIsModalOpen(true)} className="hover:text-bluePrimary">
        CONTACT
      </button>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></ContactModal>
      </div>
    </nav>
  );
}
