import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  // Close menu when clicking outside
  const handleOutsideClick = (e) => {
    if (!e.target.closest(".menu-container")) {
      setNav(false);
    }
  };

  return (
    <div className="w-screen flex justify-between h-[80px] z-10 bg-white drop-shadow-lg fixed">
      <div className="px-4 flex justify-between items-center w-full h-full">
        {/* Logo & Desktop Menu */}
        <div className="flex items-center cursor-pointer">
          <h1 className="text-3xl font-bold mr-4">BRAND.</h1>
          <ul className="hidden md:flex space-x-6 text-lg">
            <li className="hover:text-indigo-600 cursor-pointer">Home</li>
            <li className="hover:text-indigo-600 cursor-pointer">About</li>
            <li className="hover:text-indigo-600 cursor-pointer">Support</li>
            <li className="hover:text-indigo-600 cursor-pointer">Platforms</li>
            <li className="hover:text-indigo-600 cursor-pointer">Pricing</li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex pr-4 space-x-4">
          <button className="border-2 px-6 py-2 bg-transparent text-black rounded-md hover:bg-gray-100">
            Sign In
          </button>
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-md">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={handleClick} role="button" aria-label="Toggle Menu" tabIndex="0">
          {nav ? <IoMdClose size={30} className="cursor-pointer" /> : <IoMenuOutline size={30} className="cursor-pointer" />}
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`fixed top-20 left-0 w-full bg-white shadow-md transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden menu-container`}
        onClick={handleOutsideClick}
      >
        <ul className=" justify-between text-center py-6 space-y-4 text-lg">
          <li className="py-2 hover:text-indigo-600 cursor-pointer">Home</li>
          <li className="py-2 hover:text-indigo-600 cursor-pointer">About</li>
          <li className="py-2 hover:text-indigo-600 cursor-pointer">Support</li>
          <li className="py-2 hover:text-indigo-600 cursor-pointer">Platforms</li>
          <li className="py-2 hover:text-indigo-600 cursor-pointer">Pricing</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
