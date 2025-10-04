//One of the three components
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-pink-800 text-white flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/about">About Me</Link>
      <Link href="/counter">Counter</Link>
    </nav>
  );
}
