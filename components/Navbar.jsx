"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link
        href={"/"}
        className="px-4 py-2 rounded-lg bg-[#8B5A2B] text-[#FFF8DC] text-lg font-semibold 
          flex items-center justify-center shadow-md transform hover:scale-105 transition-all duration-300"
      >
        <p className="text-shadow-md">Arihant's World</p>
      </Link>

      {/* Navigation Links */}
      <nav className="flex text-lg gap-7 font-medium">
        <Link
          href={"/about"}
          className={`hover:text-[#C47F37] transition-all duration-300 ${
            pathname === "/about" ? "text-[#C47F37] font-bold" : "text-[#4A3F35]"
          }`}
        >
          About
        </Link>
        <Link
          href={"/projects"}
          className={`hover:text-[#C47F37] transition-all duration-300 ${
            pathname === "/projects" ? "text-[#C47F37] font-bold" : "text-[#4A3F35]"
          }`}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
