import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between text-li text-blueSecondary font-mono pt-7 px-5 w-full bg-transparent">
     <Link className="hover:text-bluePrimary pl-6" href="/">PRIYA SINGH</Link>
      <div className="flex pr-7 space-x-12">
        <Link className="hover:text-bluePrimary" href="/development">DEV</Link>
        <Link className="hover:text-bluePrimary" href="/design">DESIGN</Link>
        <Link className="hover:text-bluePrimary" href="/">CONTACT ME</Link>
      </div>
    </nav>
  );
}
