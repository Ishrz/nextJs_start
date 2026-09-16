"use client";

import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Shop<span className="text-blue-600">Ease</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="font-medium hover:text-blue-600">
            Home
          </Link>

          <Link href="/shop" className="font-medium hover:text-blue-600">
            Shop
          </Link>

          <Link href="/categories" className="font-medium hover:text-blue-600">
            Categories
          </Link>

          <Link href="/about" className="font-medium hover:text-blue-600">
            About
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="text-xl">🔍</button>
          <button className="text-xl">🛒</button>

          <button className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-blue-600">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t px-6 py-5 md:hidden">

          <div className="flex flex-col gap-5">
            <Link href="/" className="font-medium">
              Home
            </Link>

            <Link href="/shop" className="font-medium">
              Shop
            </Link>

            <Link href="/categories" className="font-medium">
              Categories
            </Link>

            <Link href="/about" className="font-medium">
              About
            </Link>

            <button className="w-full rounded-full bg-gray-900 py-3 text-white">
              Login
            </button>
          </div>

        </div>
      )}
    </nav>
  );
}