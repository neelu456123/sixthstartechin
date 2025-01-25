"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


const Navbars = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300  ${
        isScrolled
          ? "w-[75%] rounded-full shadow-lg bg-[#3d3c3c] dark:bg-gray-900/30 backdrop-blur-sm"
          : "w-full"
      } `}
    >
      <div className="container mx-auto 
      flex items-center justify-between">
        {/* Logo (Same for both Desktop & Mobile) */}
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1737794251/Untitled_design_3_nbbi5n.png"
            width={120}
            height={25}
            alt="Logo"
            className="dark:hidden"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white">
          <NavLink href="/cloud-hosting">Cloud Hosting</NavLink>
          <NavLink href="/spamfilter">Spam Filter</NavLink>
          <NavLink href="/Ssl-Certificate">SSL Certificate</NavLink>
          <NavLink href="https://sixthstartech.com/mail-services/carbonio-mail">Carbonio</NavLink>
          
        </div>

        <div className="items-center hidden md:flex space-x-4  max-w-64">
          
        <NavLink href="/Contact-us">
  <button className="px-5 py-2.5 text-sm font-medium text-white bg-black hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 rounded-full transition-colors">
    Contact Us
  </button>
</NavLink>  
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white dark:text-gray-300  focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <>
          {/* Navigation Links - Left Aligned */}
          <div className=" fixed inset-1  left-0 top-20 w-[98%] h-max p-6 rounded-xl bg-[#3d3c3c] dark:bg-gray-900/30 backdrop-blur-sm border-r border-white/10 shadow-lg z-50 transform transition-transform duration-300 flex flex-col space-y-6 ">
            <NavLink href="cloud-hosting" onClick={() => setIsOpen(false)}>
             Cloud Hosting
            </NavLink>
            <NavLink href="/spamfilter" onClick={() => setIsOpen(false)}>
              Spam Filter
            </NavLink>
            <NavLink href="/Ssl-Certificate" onClick={() => setIsOpen(false)}>
              SSl Certificate
            </NavLink>
            <NavLink href="https://sixthstartech.com/mail-services/carbonio-mail" onClick={() => setIsOpen(false)}>
              Carbonio Mail
            </NavLink>
            <NavLink href="/Contact-us" onClick={() => setIsOpen(false)}>
            Contact Us
            </NavLink>
            <div className="items-center hidden md:flex space-x-4">
              
            <NavLink href="/Contact-us">
  <button className="px-5 py-2.5 text-sm font-medium text-white bg-black hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 rounded-full transition-colors">
 
  </button>
</NavLink>  
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

// Reusable NavLink Component
const NavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="relative text-sm font-medium text-white dark:text-gray-300 transition duration-200 hover:text-gray-900 dark:hover:text-white"
  >
    {children}
  </Link>
);

export default Navbars;
