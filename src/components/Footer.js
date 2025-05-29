import * as React from "react";

// --- Footer Hero Section ---
const FooterHero: React.FC = () => (
  <section className="flex flex-col items-center max-w-full text-center w-[456px]">
    <header className="flex flex-col items-center w-full">
      <h2 className="text-6xl font-semibold text-neutral-900 max-md:text-4xl">What's next</h2>
      <p className="mt-2 text-base tracking-wide leading-6 text-black max-md:max-w-full">
        Submit better job app — 10x faster. AI cover letter generator, resume keyword checker,
        outreach message writer, and more. Powered by GPT
      </p>
    </header>
    <button className="gap-2.5 self-stretch px-8 py-3 mt-6 text-base font-semibold tracking-normal leading-none text-black rounded-xl border border-solid border-neutral-900 min-h-11 max-md:px-5 hover:bg-black hover:text-white transition">
      Try For Free
    </button>
  </section>
);

// --- Footer Menu Section Component ---
interface FooterMenuSectionProps {
  title: string;
  items: string[];
  className?: string;
}

const FooterMenuSection: React.FC<FooterMenuSectionProps> = ({ title, items, className = "" }) => (
  <div className={`text-black ${className}`}>
    <h3 className="text-xl font-medium leading-tight">{title}</h3>
    <nav className="mt-4 text-base tracking-wide leading-none">
      {items.map((item, index) => (
        <div key={index} className={index > 0 ? "mt-3" : ""}>
          {item}
        </div>
      ))}
    </nav>
  </div>
);

// --- Footer Social Media Icons ---
const FooterSocialMedia: React.FC = () => (
  <div className="flex gap-6 items-start mt-6">
    {[
      "55981ad1496032e056fc680ac190f7a97f77d7d8",
      "3902b0f17193f26596fa9b7c235094fed2d9960f",
      "17af2cb45fd63fb2b889d20a4dbcc3ae495a1804",
      "bd7475c5aff05f6c99984e82352c54d5bedc451c",
    ].map((id) => (
      <img
        key={id}
        src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${id}?placeholderIfAbsent=true&apiKey=6e2cc41a9940411dacbf8c84ca7be0f5`}
        className="object-contain shrink-0 w-6 aspect-square"
        alt="Social media icon"
      />
    ))}
  </div>
);

// --- Footer Menu (All Sections) ---
const FooterMenu: React.FC = () => {
  const platformItems = [
    "Plans and Prices",
    "AI Create Letters",
    "AI Resume Checker",
    "Resume Templates",
    "Sell Templates",
    "Blog",
  ];

  const featuresItems = [
    "AI Cover Letter Creator",
    "Resume Keywords Optimizer",
    "ATS Resume Checker",
  ];

  const resourcesItems = [
    "4 AI Tools for Applying a Job",
    "How to optimize Resume keywords",
    "Why you should use Chat GPT for create Resume",
    "What should you include in a Cover Letter",
  ];

  return (
    <nav className="flex flex-wrap gap-10 justify-between items-start mt-10 w-full">
      <FooterMenuSection title="Platform" items={platformItems} />
      <FooterMenuSection title="Features" items={featuresItems} />
      <FooterMenuSection title="Resources" items={resourcesItems} className="min-w-60 w-[294px]" />
      <div className="flex flex-col">
        <div className="self-start text-black whitespace-nowrap">
          <h3 className="text-xl font-medium leading-tight">Support</h3>
          <address className="mt-4 text-base tracking-wide leading-none not-italic">
            support@gmail.com
          </address>
        </div>
        <FooterSocialMedia />
      </div>
    </nav>
  );
};

// --- Footer Copyright ---
const FooterCopyright: React.FC = () => (
  <footer className="flex flex-wrap gap-2 items-center mt-10 text-base leading-none text-gray-800 max-md:max-w-full">
    <span className="self-stretch my-auto text-xl leading-none text-center">©</span>
    <span className="self-stretch my-auto">Copywriting</span>
    <span className="self-stretch my-auto">|</span>
    <span className="self-stretch my-auto">All Rights Reserved</span>
    <span className="self-stretch my-auto">|</span>
    <a href="#" className="self-stretch my-auto hover:underline">Terms of Use</a>
    <span className="self-stretch my-auto">|</span>
    <a href="#" className="self-stretch my-auto hover:underline">Privacy</a>
  </footer>
);

// --- Main Footer Component ---
const Footer: React.FC = () => {
  return (
    <footer className="overflow-hidden">
      <div className="flex flex-col items-center pt-12 pb-20 w-full bg-green-400 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[1126px]">
          <FooterHero />
          <FooterMenu />
        </div>
        <div className="flex mt-10 max-w-full bg-neutral-900 min-h-px w-[1192px]" />
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
