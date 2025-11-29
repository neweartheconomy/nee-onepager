import React from 'react';
import { RefreshCcw, Layers, Clock, UserX } from 'lucide-react';

const problems = [
  {
    number: "01",
    icon: RefreshCcw,
    title: "Endless Content Loop",
    description: "Feeling stuck on a hamster wheel of creation, constantly needing to post, repurpose, and engage just to stay relevant."
  },
  {
    number: "02",
    icon: UserX,
    title: "Misaligned Outsourcing",
    description: "Trying to offload work to VAs or agencies, but finding they never quite capture your voice or understand your vision."
  },
  {
    number: "03",
    icon: Layers,
    title: "Tool Overload",
    description: "Juggling too many platforms, drafts, and disjointed systems that add complexity instead of removing it."
  },
  {
    number: "04",
    icon: Clock,
    title: "The Ops Trap",
    description: "Spending more time managing the backend than serving clients, effectively becoming the operations manager of your own dream."
  }
];

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-off-white">
      <div className="container mx-auto px-6">
        {/* Header with integrated quote */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl md:text-5xl text-deep-teal mb-6">
              Does This Feel Familiar?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
              You started your business to do meaningful work and create freedom. On paper, it's working. But behind the scenes?
            </p>
          </div>

          {/* Quote as intro statement */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-sand rounded-full"></div>
            <p className="text-xl md:text-2xl font-serif text-deep-teal italic leading-relaxed pl-8">
              The work that used to feel inspiring now feels heavy. Every attempt to fix it, whether hiring help or testing generic AI tools, only seems to add more complexity.
            </p>
          </div>
        </div>

        {/* 2x2 Grid with numbered progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.number}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group relative overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-6 text-6xl font-serif font-bold text-sage/10 group-hover:text-sand/20 transition-colors">
                  {problem.number}
                </span>

                <div className="relative">
                  <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center mb-5 text-sage group-hover:bg-deep-teal group-hover:text-sand transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-deep-teal mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;