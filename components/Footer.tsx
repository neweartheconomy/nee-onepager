import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-teal text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">

          {/* Brand column */}
          <div>
            <div className="mb-4">
              <img
                src="/nee_logo.svg"
                alt="New Earth Economy"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Reclaim your time and energy.<br />
              AI systems for purpose-driven growth.
            </p>
          </div>

          {/* Connect column */}
          <div>
            <h4 className="font-semibold text-sand text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:jonas@newearth-economy.com"
                className="flex items-center gap-3 text-gray-300 hover:text-sand transition-colors group"
              >
                <Mail size={18} className="text-gray-500 group-hover:text-sand transition-colors" />
                jonas@newearth-economy.com
              </a>
              <a
                href="https://instagram.com/newearth.economy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-sand transition-colors group"
              >
                <Instagram size={18} className="text-gray-500 group-hover:text-sand transition-colors" />
                @newearth.economy
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Made with love */}
            <p className="text-gray-400 text-sm flex items-center gap-1.5">
              Built with
              <span className="inline-block animate-pulse text-sand">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </span>
              for conscious entrepreneurs
            </p>

            {/* Copyright & links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm">
              <span className="text-gray-500">© 2025 New Earth Economy</span>
              <div className="flex gap-6">
                <a href="#/privacy" className="text-gray-500 hover:text-sand transition-colors">
                  Privacy Policy
                </a>
                <a href="#/site-notice" className="text-gray-500 hover:text-sand transition-colors">
                  Site Notice
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;