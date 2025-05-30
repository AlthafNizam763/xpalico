// Header.tsx
"use client";
import React, { useState } from "react";
import logoImage from "../assets/34.jpeg";
import Navbar from "./Navbar";
import SignInModal from "./ui/SignInModal"; // ✅ Import the modal

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="box-border flex relative justify-between items-center px-28 pt-16 pb-4 w-full bg-neutral-900 max-md:px-14 max-md:pt-8 max-md:pb-4 max-sm:flex-row max-sm:justify-between max-sm:px-5 max-sm:py-4">
        <div className="flex gap-1 justify-center items-center p-3 rounded-[100px]">
          <img src={logoImage} alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="text-base font-medium tracking-wide text-white">MoRe Experts</span>
        </div>

        <Navbar />

        <div className="flex gap-4 items-start max-sm:gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="gap-2.5 px-8 py-3 text-base font-semibold tracking-normal leading-5 text-center text-white rounded-xl border border-[#6DE754] border-solid cursor-pointer max-sm:px-4 max-sm:py-2 max-sm:text-sm hover:bg-[#6DE754] hover:text-black transition"
          >
            Sign In
          </button>
          <button className="gap-2.5 px-8 py-3 text-base font-semibold tracking-normal leading-5 text-center text-black bg-[#6DE754] rounded-xl cursor-pointer max-sm:px-4 max-sm:py-2 max-sm:text-sm hover:bg-black hover:text-white transition">
            Get Started
          </button>
        </div>
      </header>

      {/* Modal Component */}
      <SignInModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
