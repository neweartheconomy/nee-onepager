import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  "Reclaim 10+ hours every week by automating the heavy lifting.",
  "AI that actually sounds like you. Not robotic, not generic.",
  "Systems that grow with you, without adding more to your plate.",
  "More time for clients, more time for life."
];

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-deep-teal text-white relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-forest-green/10 blur-3xl rounded-l-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Mobile-first: stack vertically, image first on mobile */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text content */}
          <div className="lg:w-1/2">
            <span className="inline-block py-1 px-3 border border-sand/30 rounded-full text-sand text-xs uppercase tracking-[0.2em] mb-6">
              The Solution
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
              Introducing <span className="text-sand">Sacred Systems™</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed font-light">
              What if the back-end of your business actually ran itself, without losing what makes your work yours?
            </p>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
              Sacred Systems™ is a done-for-you AI infrastructure that handles content creation, client communications, and operations. Trained on your voice, your values, and your way of working.
            </p>

            <ul className="space-y-5">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-0.5 min-w-[24px] text-sand">
                    <CheckCircle size={22} fill="#D6BD98" className="text-deep-teal" />
                  </div>
                  <span className="text-gray-200 font-light text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="#booking"
                className="inline-block px-8 py-4 bg-sand text-deep-teal font-bold rounded-full hover:bg-white transition-colors duration-300"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Image - Sacred Systems visualization */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/visual3.jpeg"
                alt="Sacred Systems visualization"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solution;