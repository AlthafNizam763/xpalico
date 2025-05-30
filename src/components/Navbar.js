"use client";
import { Link } from 'react-router-dom';
import React from 'react';
import logoImage from '../assets/34.jpeg';

const Header = () => {
  return (
    <header className="box-border flex relative justify-between items-center px-30 pt-5 pb-1 w-full bg-neutral-900 max-md:px-14 max-md:pt-8 max-md:pb-4 max-sm:flex-row max-sm:justify-between max-sm:px-5 max-sm:py-4">
      <div className="flex gap-1 justify-center items-center p-3 rounded-[100px]">
        <img src={logoImage} alt="Logo" className="w-10 h-10 rounded-full" />
        <span className="text-base font-medium tracking-wide text-white">MoRe Experts</span>
      </div>

      <nav className="flex absolute left-2/4 gap-6 items-start -translate-x-2/4 max-md:hidden max-sm:hidden">
        <a href="#" className="text-base font-semibold tracking-wide leading-5 cursor-pointer text-neutral-400">
          Resume
        </a>
        <a href="#" className="text-base font-semibold tracking-wide leading-5 cursor-pointer text-neutral-400">
          Poster
        </a>
        <a href="#" className="text-base font-semibold tracking-wide leading-5 cursor-pointer text-neutral-400">
          Website
        </a>
      </nav>

      <div className="flex gap-4 items-start max-sm:gap-2">
        <button className="gap-2.5 px-8 py-3 text-base font-semibold tracking-normal leading-5 text-center text-white rounded-xl border border-[#6DE754] border-solid cursor-pointer max-sm:px-4 max-sm:py-2 max-sm:text-sm hover:bg-[#6DE754] hover:text-black transition">
          Sign In
        </button>
        <button className="gap-2.5 px-8 py-3 text-base font-semibold tracking-normal leading-5 text-center text-black bg-[#6DE754] rounded-xl cursor-pointer max-sm:px-4 max-sm:py-2 max-sm:text-sm hover:bg-black hover:text-white transition">
          Get Started
        </button>
      </div>
    </header>
  );
};


export default Header;
