import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-20 bg-deep-teal">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <span className="inline-block py-1 px-3 border border-sand/30 rounded-full text-sand text-xs uppercase tracking-[0.2em] mb-4">
              The Vision
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              See How It Works
            </h2>
            <p className="text-gray-300 font-light max-w-2xl mx-auto">
              A quick look at how AI-powered systems can transform the way you run your business.
            </p>
          </div>

          {/* Video embed */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-deep-teal border border-white/10">
            {/* Aspect ratio container */}
            <div className="relative pt-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/y6x6RZkllMU?rel=0"
                title="The Vision"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Optional CTA below video */}
          <div className="text-center mt-10">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sand text-deep-teal font-bold rounded-full hover:bg-white transition-colors"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
