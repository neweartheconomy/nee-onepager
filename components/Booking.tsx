import React from 'react';
import { Check, MessageCircle } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-24 bg-deep-teal relative text-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Curious How This Could <br/> Work For You?
            </h2>
            <p className="text-gray-300 text-lg mb-8 font-light">
              Book a free discovery call to see how Sacred Systems™ can help you reclaim your time and scale without burning out.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="bg-sand/20 p-2 rounded-full text-sand"><Check size={20} /></div>
                <span className="text-lg">Get back 10+ hours per week</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-sand/20 p-2 rounded-full text-sand"><Check size={20} /></div>
                <span className="text-lg">AI that actually sounds like you</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-sand/20 p-2 rounded-full text-sand"><Check size={20} /></div>
                <span className="text-lg">Systems that grow with you</span>
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
               <div className="flex items-start gap-4">
                 <div className="bg-sand text-deep-teal p-3 rounded-full">
                   <MessageCircle size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-sand mb-1">What happens on the call?</h4>
                   <p className="text-sm text-gray-300">
                     We'll look at what's taking up most of your time, what's working, and whether Sacred Systems makes sense for your situation. It's a conversation, not a sales pitch.
                   </p>
                 </div>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <iframe
                  src="https://calendly.com/jonas-newearth-economy/social-funnel-call?hide_gdpr_banner=1&background_color=ffffff&text_color=1A3636&primary_color=D6BD98"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Schedule a call"
                  className="min-w-[320px]"
                ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Booking;