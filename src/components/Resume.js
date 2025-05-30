"use client";
import React from 'react';
import fileIconImg from '../assets/32.jpeg';
import radioIconImg from '../assets/30.jpeg';
import maximizeIconImg from '../assets/31.jpeg';
const HeroSection = () => {
  return (
    <section className="flex flex-col gap-5 items-center text-center">
      <h1 className="w-full text-8xl font-semibold text-center max-w-[852px] max-md:text-6xl max-sm:text-5xl max-sm:leading-none">
        <span className="text-[#6DE754]">Win your dream & job</span>
        <span className="text-white"> with MoRe Experts</span>
      </h1>

      <p className="w-full text-base tracking-wide leading-6 text-center max-w-[474px] text-neutral-400 max-sm:text-sm max-sm:leading-5">
        Submit better job and build your dreams
      </p>

      {/* <div className="flex gap-1 items-center py-2 pr-0 pl-4 w-full rounded-2xl border border-solid bg-neutral-900 border-neutral-400 max-w-[567px] max-sm:flex-col max-sm:gap-4 max-sm:p-4 max-sm:max-w-full">
        <div className="flex justify-between items-center py-0 pr-2 pl-6 w-full flex-[1_0_0] max-sm:flex-col max-sm:gap-4 max-sm:p-0">
          <label htmlFor="email" className="text-lg leading-6 text-neutral-400 max-sm:text-center">
            Your Email
          </label>
          <button className="gap-2.5 px-8 py-3 text-base font-semibold tracking-normal leading-5 text-center text-gray-800 bg-[#6DE754] rounded-xl cursor-pointer max-sm:w-full hover:bg-black hover:text-white transition">
            Start For Free
          </button>
        </div>
      </div> */}
    </section>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <article className="box-border flex flex-col gap-4 items-start p-6 w-full rounded-xl bg-stone-900 max-w-[361px] max-md:max-w-full max-sm:max-w-full">
      <img src={icon} alt={`${title} icon`} className="w-12 h-12 rounded-md" />
      <h3 className="text-base font-semibold tracking-wide leading-5 text-white">
        {title}
      </h3>
      <p className="w-full text-base tracking-wide leading-6 max-w-[313px] text-neutral-400">
        {description}
      </p>
    </article>
  );
};

const FeatureCards = () => {
  const features = [
    {
      icon: fileIconImg,
      title: "Resume",
      description: "A resume scanner uses OCR and AI to analyze resumes, extract key details, and optimize content for better matching with job descriptions and applicant tracking systems (ATS)."
    },
    {
      icon: radioIconImg,
      title: "Poster",
      description: "This poster highlights key features and benefits, using bold visuals and concise text to capture attention, inform viewers, and inspire action at a glance."
    },
    {
      icon: maximizeIconImg,
      title: "Website",
      description: "Our website offers user-friendly access to services, information, and support, ensuring a seamless experience with secure navigation, modern design, and reliable performance across all devices."
    }
  ];

  return (
    <section className="flex flex-wrap gap-8 justify-center items-start w-full max-md:gap-6 max-sm:flex-col max-sm:gap-4">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
};

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-20 items-center pb-16 w-full bg-neutral-900 min-h-[910px]">
      {/* <Header /> */}
      <div className="flex flex-col gap-14 items-center px-5 py-0 mx-auto my-0 w-full max-w-[1147px]">
        <HeroSection />
        <FeatureCards />
      </div>
    </main>
  );
};

export default LandingPage;