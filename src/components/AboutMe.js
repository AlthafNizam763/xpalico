"use client";
import React from 'react';

// SVG Icon Component
const SVGIcon: React.FC<{ svg: string }> = ({ svg }) => {
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
};

// Feature Card Component
const FeatureCard: React.FC<{ icon: string; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="box-border flex flex-col gap-4 items-start p-6 rounded-xl bg-stone-900 w-[361px] max-md:min-w-[300px] max-md:w-[calc(50%_-_16px)] max-sm:w-full max-sm:max-w-[400px]">
      <SVGIcon svg={icon} />
      <h3 className="text-base font-semibold tracking-wide leading-5 text-white">{title}</h3>
      <p className="h-20 text-base tracking-wide leading-5 text-neutral-400 w-[313px] max-sm:w-full max-sm:h-auto">
        {description}
      </p>
    </article>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <header className="flex flex-col gap-4 items-center">
      <h1 className="text-5xl font-semibold text-center text-white w-[420px] max-md:w-full max-md:text-4xl max-md:max-w-[420px] max-sm:text-3xl max-sm:leading-tight ">
        Spend less time looking for work
      </h1>
      <p className="text-base tracking-wide leading-5 text-center text-neutral-400 w-[358px] max-md:w-full max-md:max-w-[358px] max-sm:text-sm max-sm:leading-5">
        We'll help you through the hardest part of your job search.
      </p>
      {/* <button className="gap-2.5 px-8 py-3 text-base font-semibold tracking-normal leading-5 text-center text-white rounded-xl border border-[#6DE754] border-solid cursor-pointer max-sm:w-full max-sm:max-w-[300px] hover:bg-[#6DE754] hover:text-black transition">
        Create an Account
      </button> */}
    </header>
  );
};

// Feature Grid Component
const FeatureGrid = () => {
  const FEATURES_DATA = [
    {
      icon: `<svg width="24" height="24"...></svg>`,
      title: "Cover Letter",
      description: "A cover letter is a document that accompanies a job application and is written to introduce the applicant to the employer.",
    },
    {
      icon: `<svg width="24" height="24"...></svg>`,
      title: "Resignation Letters",
      description: "A resignation letter is a formal document that an employee writes to inform their employer of their decision to leave the company.",
    },
    {
      icon: `<svg width="24" height="24"...></svg>`,
      title: "Connection Request",
      description: "A connection request is a message sent on a social networking site, such as LinkedIn, requesting to connect with another user.",
    },
    {
      icon: `<svg width="24" height="24"...></svg>`,
      title: "Outreach Emails",
      description: "Outreach emails are messages sent by individuals or businesses to introduce themselves, establish a connection, or propose a collaboration.",
    },
    {
      icon: `<svg width="24" height="24"...></svg>`,
      title: "Resume Optimization",
      description: "Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.",
    },
    {
      icon: `<svg width="24" height="24"...></svg>`,
      title: "Resume Design",
      description: "A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 items-start">
      <div className="flex gap-8 items-start max-md:flex-wrap max-md:justify-center max-sm:flex-col max-sm:items-center">
        {FEATURES_DATA.slice(0, 3).map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      <div className="flex gap-8 items-start max-md:flex-wrap max-md:justify-center max-sm:flex-col max-sm:items-center">
        {FEATURES_DATA.slice(3).map((feature, index) => (
          <FeatureCard key={index + 3} {...feature} />
        ))}
      </div>
    </div>
  );
};

// Main Job Search Section Component
const JobSearchSection = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=SF+Pro+Text:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <section className="box-border flex flex-col gap-8 items-center px-44 py-10 mx-auto w-full max-w-none bg-black min-h-[782px] max-md:px-16 max-md:py-10 max-md:max-w-[991px] max-sm:p-5 max-sm:max-w-screen-sm">
        <HeroSection />
        <FeatureGrid />
      </section>
    </>
  );
};

export default JobSearchSection;
