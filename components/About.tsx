import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-sand-light/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Image Side - Clean, simple treatment */}
          <div className="lg:w-5/12 order-2 lg:order-1">
            <div className="relative">
              <img
                src="/whythiswork.jpeg"
                alt="Jonas - Founder"
                className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[3/4]"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-md">
                <p className="font-serif text-deep-teal font-bold">Jonas</p>
                <p className="text-sage text-xs uppercase tracking-wider">Founder, New Earth Economy</p>
              </div>
            </div>
          </div>

          {/* Text Side - Condensed */}
          <div className="lg:w-7/12 order-1 lg:order-2">
            <h2 className="font-serif text-4xl md:text-5xl text-deep-teal mb-6">
              Why I Do This Work
            </h2>

            <div className="space-y-5 text-gray-700 font-light text-lg leading-relaxed">
              <p>
                In 2018, I was deep in the world of paid social media marketing and advertising. It looked successful, but in 2020, a profound spiritual awakening changed everything. I dove into healing and shadow integration as my old life crumbled. The work felt hollow, I lost most clients, and hit rock bottom, starting again from zero.
              </p>
              <p>
                Eventually, I found a new path working with spiritual businesses. I saw my skills could do more than help e-commerce brands sell products; they could help genuine gifts create real transformation. This lit me up in a way I hadn't felt in years.
              </p>
              <p>
                But I noticed a painful truth: impactful offers were held back by lack of systems, while the loudest businesses thrived. That didn't feel right.
              </p>
              <p>
                Now, I bridge that gap. Using AI not as a replacement for authenticity, but as an ally, I help holistic coaches build systems that free them from chaos to grow with structure and soul.
              </p>

              {/* Pull quote - more prominent */}
              <blockquote className="text-xl md:text-2xl font-serif text-deep-teal italic border-l-4 border-sand pl-6 py-3">
                "I believe we're entering a new economy built on passion and purpose. Where work is about bringing your gifts into the world in a way that energizes you, sustains you, and creates genuine transformation."
              </blockquote>

              <p>
                That's why I do this work.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;