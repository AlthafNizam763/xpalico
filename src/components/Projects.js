"use client";
import React from 'react';

// --- CTA Button ---
interface CtaButtonProps {
  text: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ text }) => {
  return (
    <button className="gap-2.5 px-8 py-3 text-base font-semibold tracking-normal leading-5 text-center text-black rounded-xl border border-solid transition-all cursor-pointer border-neutral-900 duration-[0.2s] ease-[ease] hover:bg-black hover:text-white max-sm:px-6 max-sm:py-2.5 max-sm:w-full">
      {text}
    </button>
  );
};

// --- Content Block ---
interface ContentBlockProps {
  title: string;
  description: string;
  buttonText: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, description, buttonText }) => {
  return (
    <div className="flex flex-col gap-6 items-start w-[456px] max-md:items-center max-md:w-full max-md:max-w-[600px]">
      <h2 className="text-5xl font-semibold text-black max-md:text-4xl max-sm:text-3xl">{title}</h2>
      <p className="text-base tracking-wide leading-6 text-black max-sm:text-sm max-sm:leading-5">{description}</p>
      <CtaButton text={buttonText} />
    </div>
  );
};

// --- Hero Section ---
const HeroSection: React.FC = () => {
  return (
    <section className="flex gap-20 items-center mb-20 w-full max-md:flex-col max-md:gap-10 max-md:text-center max-sm:gap-8">
      <ContentBlock
        title="Free AI cover letter generator powered by GPT"
        description="A free AI cover letter generator powered by GPT is a tool that uses artificial intelligence and natural language processing to help job seekers create customized and effective cover letters."
        buttonText="Try For free Now"
      />
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg id="165:315" layer-name="Illustration" width="501" height="500" viewBox="0 0 501 500" fill="none" xmlns="http://www.w3.org/2000/svg" class="ai-illustration" style="width: 500px; height: 500px; flex-shrink: 0">
              <!-- SVG content from the design - full path data here -->
            </svg>`
          }}
        />
      </div>
    </section>
  );
};

// --- Optimize Section ---
const OptimizeSection: React.FC = () => {
  return (
    <section className="flex gap-20 items-center w-full max-md:flex-col-reverse max-md:gap-10 max-md:text-center max-sm:gap-8">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg id="165:522" layer-name="Illustration" width="501" height="500" viewBox="0 0 501 500" fill="none" xmlns="http://www.w3.org/2000/svg" class="optimize-illustration" style="width: 500px; height: 500px; flex-shrink: 0">
              <!-- SVG content from the design - full path data here -->
            </svg>`
          }}
        />
      </div>
      <ContentBlock
        title="Optimize the keywords in your resume"
        description="By optimizing keywords in your resume, you can increase your chances of getting noticed by recruiters and landing interviews for the jobs you want."
        buttonText="Optimize your Resume"
      />
    </section>
  );
};

// --- Main Page Component ---
const InputDesign: React.FC = () => {
  return (
    <main className="box-border flex flex-col justify-center items-center px-60 py-10 mx-auto w-full max-w-none bg-green-400 min-h-[1080px] max-md:px-16 max-md:py-10 max-md:max-w-[991px] max-sm:p-5 max-sm:max-w-screen-sm">
      <link
        href="https://fonts.googleapis.com/css2?family=SF+Pro+Text:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <HeroSection />
      <OptimizeSection />
    </main>
  );
};

export default InputDesign;
