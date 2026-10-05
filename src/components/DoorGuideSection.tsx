import React, { useState } from 'react';
import { Ruler, ShieldCheck, HelpCircle, MessageSquare, CheckCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const DoorGuideSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'turkish' | 'singleOneHalf' | 'woodenSteel' | 'bathroom'>('turkish');

  const guideData = {
    turkish: {
      title: 'Turkish Security Doors',
      bestFor: 'Main Front Entrance, Luxury Residence, Master Villa',
      keyBenefit: 'Heavy steel armored core + embossed luxury architectural finish',
      standardSizes: '3ft x 7ft (Single) or 3.5ft x 7ft (Wide Profile)',
      hardware: 'Multi-point deadlock cylinder with anti-tamper security keys',
      recommendation:
        'Ideal if you want maximum burglar deterrence combined with high-end aesthetic appeal that makes a powerful first impression on visitors.',
    },
    singleOneHalf: {
      title: 'Single and 1½ Doors (Mother-and-Child)',
      bestFor: 'Main Living Room Entrance, Wide Hallways, Double-Height Porticos',
      keyBenefit: 'Unequal double leaves: one wide daily door + secondary leaf for oversized furniture',
      standardSizes: '4ft x 7ft or 5ft x 7ft',
      hardware: 'Dual internal flush bolts on smaller leaf with heavy-duty pivot bearings',
      recommendation:
        'The most versatile configuration for modern residential living. Daily use is effortless with the primary 3ft leaf, while the secondary half opens when needed.',
    },
    woodenSteel: {
      title: 'Wooden Steel Doors',
      bestFor: 'Modern Contemporary Homes, Back Security Entrances, Executive Offices',
      keyBenefit: 'Natural organic warmth of wood grain supported by solid steel backing plate',
      standardSizes: '3ft x 7ft or 3.5ft x 7ft',
      hardware: 'Perimeter locking bolts with long vertical architectural gold pull handles',
      recommendation:
        'Perfect if you love timber aesthetic but refuse to sacrifice the safety and non-warping durability of a heavy-gauge steel door.',
    },
    bathroom: {
      title: 'Waterproof Bathroom Doors',
      bestFor: 'Master En-suite, Guest Powder Rooms, High-Moisture Restrooms',
      keyBenefit: '100% moisture resistance, zero swelling, warp-proof engineered composite',
      standardSizes: '2.5ft x 7ft or 2.75ft x 7ft',
      hardware: 'Moisture-resistant privacy lockset with frosted architectural glass',
      recommendation:
        'Standard wooden doors in Ghana often warp or rot quickly near showers. Our waterproof bathroom series is formulated to last indefinitely in humid conditions.',
    },
  };

  const active = guideData[selectedType];

  return (
    <section id="door-guide" className="py-20 sm:py-28 bg-[#FFFFFF] relative border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
            <Ruler className="w-4 h-4 text-amber-700" />
            <span>Buyer’s Guide & Sizing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 font-cinzel tracking-tight">
            Choosing The Right Door
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg font-medium">
            Not sure whether a Single, 1½, Turkish, or Wooden Steel door fits your opening? Use our quick guide below or consult our team directly.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {(
            [
              { key: 'turkish', label: 'Turkish Doors' },
              { key: 'singleOneHalf', label: 'Single & 1½ Doors' },
              { key: 'woodenSteel', label: 'Wooden Steel Doors' },
              { key: 'bathroom', label: 'Bathroom Doors' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setSelectedType(tab.key)}
              className={`px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                selectedType === tab.key
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5B83B] text-zinc-950 shadow-[0_4px_18px_rgba(212,175,55,0.4)] scale-105'
                  : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Detail Guide Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#FAFAF8] border border-amber-300/80 p-6 sm:p-10 shadow-xl shadow-amber-900/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span className="text-xs uppercase tracking-widest font-extrabold text-amber-800">
                Door Profile Overview
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 font-cinzel tracking-tight mt-1">
                {active.title}
              </h3>

              <div className="mt-6 space-y-3.5">
                <div className="flex items-start gap-2.5 text-sm">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-zinc-900">Recommended Location: </span>
                    <span className="text-zinc-600 font-medium">{active.bestFor}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-sm">
                  <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-zinc-900">Core Strength: </span>
                    <span className="text-zinc-600 font-medium">{active.keyBenefit}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-sm">
                  <Ruler className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-zinc-900">Standard Available Sizes: </span>
                    <span className="text-zinc-700 font-mono text-xs font-semibold">{active.standardSizes}</span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm text-zinc-700 bg-white p-4 rounded-xl border border-zinc-200/80 leading-relaxed font-normal shadow-sm">
                {active.recommendation}
              </p>
            </div>

            {/* Quick Action Side */}
            <div className="md:col-span-4 flex flex-col justify-center items-stretch bg-white p-6 rounded-xl border border-amber-200 text-center shadow-md">
              <HelpCircle className="w-10 h-10 text-amber-600 mx-auto mb-3" />
              <h4 className="text-base font-bold text-zinc-950">Need Exact Sizing?</h4>
              <p className="text-xs text-zinc-600 mt-1 mb-5 font-medium">
                Share your doorway dimensions or masonry opening with us on WhatsApp.
              </p>

              <a
                href={getWhatsAppLink(
                  `Hello TOF4 DOORS, I would like advice on selecting ${active.title} for my building opening. Please guide me.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask Sizing On WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
