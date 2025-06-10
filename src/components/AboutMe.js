"use client";
import React from "react";

// SVG Icon Component
const SVGIcon: React.FC<{ svg: string }> = ({ svg }) => {
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
};

// Feature Card Component
const FeatureCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <article className="box-border flex flex-col gap-4 items-start p-6 rounded-xl bg-stone-900 w-[361px] max-md:min-w-[300px] max-md:w-[calc(50%_-_16px)] max-sm:w-full max-sm:max-w-[400px]">
      <h3 className="text-base font-serif font-semibold tracking-wide leading-5 text-[#FFF6D6]">
        {title}
      </h3>
      <p className="font-mono h-20 text-base tracking-wide leading-5 text-neutral-400 w-[313px] max-sm:w-full max-sm:h-auto">
        {description}
      </p>
    </article>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <header className="flex flex-col gap-4 items-center text-center">
      <h1 className="text-5xl font-serif text-[#FFF6D6] w-[420px] max-md:w-full max-md:text-4xl max-sm:text-3xl max-sm:leading-tight">
        Spend less time looking for work
      </h1>
      <p className="font-mono text-base tracking-wide leading-5 text-neutral-400 w-[358px] max-md:w-full max-sm:text-sm">
        We'll help you through the hardest part of your job search.
      </p>
    </header>
  );
};

// Feature Grid Component
const FeatureGrid = () => {
  const FEATURES_DATA = [
    {
      title: "Cover Letter",
      description:
        "A cover letter is a document that accompanies a job application and is written to introduce the applicant to the employer.",
    },
    {
      title: "Resignation Letters",
      description:
        "A resignation letter is a formal document that an employee writes to inform their employer of their decision to leave the company.",
    },
    {
      title: "Connection Request",
      description:
        "A connection request is a message sent on a social networking site, such as LinkedIn, requesting to connect with another user.",
    },
    {
      title: "Outreach Emails",
      description:
        "Outreach emails help individuals or businesses introduce themselves and propose connections or collaborations effectively.",
    },
    {
      title: "Resume Optimization",
      description:
        "Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.",
    },
    {
      title: "Resume Design",
      description:
        "A resume scanner is a software application that uses OCR to extract and analyze data from resumes.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 items-center w-full">
      <div className="flex flex-wrap justify-center gap-8 w-full">
        {FEATURES_DATA.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
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
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Libre+Baskerville&display=swap"
        rel="stylesheet"
      />
      <section className="box-border flex flex-col gap-16 items-center px-10 py-20 mx-auto w-full bg-black min-h-screen max-md:px-6 max-sm:px-4">
        <HeroSection />
        <FeatureGrid />
      </section>
    </>
  );
};

export default JobSearchSection;
