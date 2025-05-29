"use client";
import * as React from "react";

function AboutSection1() {
  return (
    <section className="overflow-hidden">
      <div className="flex overflow-hidden flex-col items-center px-14 pt-14 w-full bg-green-400 rounded-xl max-md:px-5 max-md:max-w-full">
        
        {/* Hero Content */}
        <h1 className="text-5xl font-semibold text-center text-black w-[420px] max-md:text-4xl">
          Submit Better job applications
        </h1>
        <h2 className="z-10 text-9xl font-semibold text-center text-black max-md:max-w-full max-md:text-4xl">
          10x faster
        </h2>
        <p className="-mt-1 text-base tracking-wide leading-6 text-center text-black w-[474px] max-md:max-w-full">
          AI cover letter generator, resume keyword checker, outreach message
          writer, and more. Powered by GPT
        </p>

        {/* Image Section */}
        <div className="flex relative flex-col items-start self-stretch px-7 pt-10 pb-96 mt-3 rounded-3xl min-h-[534px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/28458a2f5cd31cff814c09dfcbfc184f82fb0581?placeholderIfAbsent=true&apiKey=a6f97e95494e4cca9a87f73491cc7921"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/57909f33450cdd0f8d4c36a6e3da74d3a55540a9?placeholderIfAbsent=true&apiKey=a6f97e95494e4cca9a87f73491cc7921"
            alt=""
            className="object-contain mb-0 w-10 aspect-square max-md:mb-2.5"
          />
        </div>

      </div>
    </section>
  );
}

export default AboutSection1;
