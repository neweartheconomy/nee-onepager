import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "AnnaSophia V.",
      role: "Business Owner",
      quote: "I worked together with Jonas to optimize sales funnels and lead generation. His skill and expertise greatly helped propel my business forward.",
      photo: "/anna sophia.jpeg"
    },
    {
      id: 2,
      name: "Hanin A.",
      role: "Conscious Creator",
      quote: "Jonas delivered incredible results, growing our Instagram to 80k. His use of AI for content creation keeps saving us a lot of time. If you want growth and efficiency, hire Jonas.",
      photo: "/hanin a.jpeg"
    },
    {
      id: 3,
      name: "Pierre R.",
      role: "Marketing Director",
      quote: "I had the opportunity to work with Jonas on multiple projects. His skills in lead generation and automation are certain. It will be a pleasure to work with him again.",
      photo: "/pierre.jpeg"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sage text-sm uppercase tracking-[0.2em] font-bold">Real Transformations</span>
          <h2 className="font-serif text-4xl text-deep-teal mt-4">
            Don't Just Take My Word For It
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-off-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:border-sand transition-colors duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-sand text-sand" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed">"{t.quote}"</p>
              <div className="mt-auto flex items-center gap-3">
                {/* Profile photo */}
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-serif text-deep-teal font-bold">{t.name}</p>
                  <p className="text-xs text-sage uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;