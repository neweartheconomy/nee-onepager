import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsVideoOpen(false);
    };
    if (isVideoOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVideoOpen]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-teal text-white pt-20">
      
      {/* 1. Background Layer: Deep & Abstract */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-forest-green/40 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-sage/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] bg-deep-teal/80 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
        
        {/* Subtle Noise Texture for Premium Feel */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        
        {/* Eyebrow - Visual Hierarchy Level 3 */}
        <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up">
           <span className="w-2 h-2 rounded-full bg-sand animate-pulse"></span>
           <span className="text-sand text-xs font-bold uppercase tracking-[0.2em]">For Conscious Entrepreneurs</span>
        </div>
        
        {/* Headline - Visual Hierarchy Level 1 */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 tracking-tight animate-fade-in-up delay-100 drop-shadow-2xl">
          Your Business Should <br />
          <span className="italic text-sand relative inline-block">
            Support You
            {/* Hand-drawn underline effect SVG */}
            <svg className="absolute w-[110%] h-3 -bottom-2 -left-2 text-sand/60 pointer-events-none" viewBox="0 0 100 15" preserveAspectRatio="none">
              <path d="M0 8 Q 50 15 100 8" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>,
          Not Drain You.
        </h1>
        
        {/* Subhead - Visual Hierarchy Level 2 */}
        <p className="font-sans text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up delay-200">
          Sacred Systems™ installs AI as your ally. Reclaim your time and scale your impact without compromising your voice.
        </p>
        
        {/* CTA Area - Micro-interactions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
          
          <a 
            href="#booking" 
            className="group relative px-8 py-4 bg-sand text-deep-teal font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(214,189,152,0.3)] hover:shadow-[0_0_35px_rgba(214,189,152,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Your Free Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          <button
            onClick={() => setIsVideoOpen(true)}
            className="group px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-sand/40 transition-all duration-300 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-sand group-hover:text-deep-teal transition-all duration-300 scale-100 group-hover:scale-110">
              <Play size={14} fill="currentColor" className="ml-1" />
            </div>
            <span className="font-semibold tracking-wide">Watch the Vision</span>
          </button>

        </div>

      </div>

      {/* Scroll Indicator - Subtle chevron (hidden on mobile) */}
      <a
        href="#problem"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-40 hover:opacity-80 transition-opacity cursor-pointer"
      >
        <svg
          className="w-6 h-6 text-sand animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={() => setIsVideoOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-deep-teal/95 backdrop-blur-md" />

          {/* Modal Content */}
          <div
            className="relative w-full max-w-4xl aspect-video bg-deep-teal rounded-2xl overflow-hidden shadow-2xl border border-sand/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 md:top-4 md:right-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-sand hover:text-deep-teal transition-all duration-300"
            >
              <X size={20} />
            </button>

            {/* YouTube Embed */}
            <iframe
              src="https://www.youtube.com/embed/y6x6RZkllMU?autoplay=1&rel=0"
              title="The Vision"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default Hero;