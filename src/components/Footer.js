import * as React from "react";
import { FaLinkedinIn, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa"; // Correct import for Medium icon

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-[#FFF6D6] px-8 py-16 flex flex-col md:flex-row justify-between items-start gap-12 w-full">
      {/* Left Column */}
      <div className="flex flex-col justify-between h-full max-w-xl">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight uppercase">
            The time is now
          </h1>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight uppercase mt-2">
            The path is forward
          </h2>
        </div>

        {/* Social + Copyright */}
        <div className="mt-10">
          <div className="flex gap-5 text-white text-xl">
            <FaLinkedinIn />
            <FaFacebookF />
            <FaXTwitter />
            <FaMedium />
          </div>
          <p className="text-sm text-[#888] mt-4">
            Copyright ©2024 FinFLO. All Rights Reserved
          </p>
        </div>
      </div>

      {/* Center Lat/Long */}
      <div className="flex flex-col gap-3 items-start justify-center">
        <div>
          <span className="text-sm text-[#AAA]">Latitude</span>
          <p className="text-xl font-bold text-orange-500">37.7749</p>
        </div>
        <div>
          <span className="text-sm text-[#AAA]">Longitude</span>
          <p className="text-xl font-bold text-orange-500">-122.4194</p>
        </div>
      </div>

      {/* Right Links */}
      <div className="flex flex-col gap-3 text-sm text-[#CCC]">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Cookie Policy</a>
        <a href="#" className="hover:underline">Disclaimer</a>
      </div>
    </footer>
  );
};

export default Footer;
