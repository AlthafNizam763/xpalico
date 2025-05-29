"use client";
import * as React from "react";

const ResumeDesignSection: React.FC = () => {
  const handleCreateAccount = () => {
    console.log("Create an Account clicked");
  };

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 flex justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl w-full">
        {/* Text Content */}
        <div className="w-full max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Create website for you
          </h1>
          <p className="text-neutral-400 text-base md:text-lg leading-6 mb-8">
            We help you build a modern, responsive, and professional website tailored to your brand or portfolio—no tech skills needed. Launch your online presence easily!
          </p>
          <div className="flex justify-center lg:justify-start">
            {/* <button
              onClick={handleCreateAccount}
              className="px-6 py-3 bg-black border border-green-400 text-white rounded-full font-semibold hover:bg-green-400 hover:text-black transition"
            >
              Create an Account
            </button> */}
          </div>
        </div>

        {/* Illustration */}
        <div className="w-full max-w-xl">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a80bcfb6ecd8b5e31aedcdbcbc95b1407c2130b9?placeholderIfAbsent=true&apiKey=6e2cc41a9940411dacbf8c84ca7be0f5"
            alt="Resume design illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ResumeDesignSection;
