import React from 'react';
import { ShieldAlert, Sparkles, LockKeyhole, UserCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Strong & Durable',
      description:
        'Engineered with reinforced materials and heavy-gauge construction built to withstand harsh weather, persistent use, and the elements over years of service.',
      icon: ShieldAlert,
    },
    {
      title: 'Modern Designs',
      description:
        'Carefully styled door designs that complement contemporary architectural trends, elevating the luxury and curb appeal of any building or home.',
      icon: Sparkles,
    },
    {
      title: 'Built for Security',
      description:
        'Integrated with multi-point perimeter locking cylinders, anti-pry sub-frames, and armored cores designed to protect what matters most.',
      icon: LockKeyhole,
    },
    {
      title: 'Professional Service',
      description:
        'Dedicated customer guidance to assist you with door selection, sizing specifications, and direct showroom support from our location in Tech, Aiyigya.',
      icon: UserCheck,
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#FAF9F6] relative border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
            TOF4 Commitment
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 font-cinzel tracking-tight">
            Why Choose TOF4 DOORS
          </h2>

          <p className="mt-4 text-zinc-600 text-base sm:text-lg font-medium">
            Our reputation is built on high standards of strength, security, and attentive service for every home and development.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-white border border-zinc-200/90 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between shadow-md shadow-zinc-900/5 hover:shadow-2xl hover:shadow-amber-500/15 hover:-translate-y-1"
              >
                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#E5B83B] group-hover:text-zinc-950 transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-zinc-950 group-hover:text-amber-700 transition-colors font-cinzel tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                    TOF4 Standard 0{idx + 1}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-200 group-hover:bg-amber-500 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
