import React from 'react';
import { Shield, Lock, Award, ArrowRight, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { PRIMARY_PHONE, getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import brightHeroDoorImg from '@/src/assets/images/tof4_bright_hero_1791033403941.jpg';

export const Hero: React.FC = () => {
  const scrollToCatalog = (e: React.MouseEvent) => {
    e.preventDefault();
    const catalog = document.querySelector('#catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#FAF9F5]">
      {/* Background Architectural Door Image with Bright Radiant Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={brightHeroDoorImg}
          alt="TOF4 DOORS Bright Sunlit Luxury Entrance"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse [animation-duration:10s] opacity-75 filter brightness-105 contrast-105"
        />
        {/* Luminous Warm Light Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/75 to-[#FAF9F5]/60" />
        <div className="absolute inset-0 bg-radial-at-c from-amber-400/15 via-white/50 to-[#FAF9F5]/80" />
        {/* Subtle architectural dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #92400e 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Brand Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-amber-300 shadow-md shadow-amber-900/5 text-amber-900 text-xs uppercase tracking-widest font-extrabold mb-6">
            <Sparkles className="w-4 h-4 text-amber-600 fill-amber-400" />
            <span>Tech, Aiyigya • Opposite Sakafia SHS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-zinc-700">Ghana</span>
          </div>

          {/* Master Headline: STRONG DOORS. SAFE HOMES. */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 uppercase font-cinzel leading-[1.08] drop-shadow-sm">
            STRONG DOORS.
            <br />
            <span className="bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#B38728] bg-clip-text text-transparent underline decoration-[#D4AF37]/50 decoration-2 underline-offset-8">
              SAFE HOMES.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-700 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Premium doors designed to protect your home while giving it a beautiful, modern appearance.
            Specializing in Turkish doors, single and 1½ doors, wooden steel, and bathroom doors.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <a
              href="#catalog"
              onClick={scrollToCatalog}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5B83B] to-[#C59A27] text-zinc-950 font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_6px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Explore Our Doors</span>
              <ArrowRight className="w-4 h-4 text-zinc-950" />
            </a>

            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/95 hover:bg-white border-2 border-amber-400 text-zinc-900 font-bold text-sm tracking-wide flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call {PRIMARY_PHONE}</span>
            </a>

            <a
              href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-emerald-600/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Highlights Bar */}
          <div className="mt-14 pt-8 border-t border-amber-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/90 backdrop-blur-sm border border-amber-200/80 shadow-md shadow-amber-900/5 hover:border-amber-400 transition-colors">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-700 border border-amber-200">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Armored Steel</p>
                <p className="text-[11px] text-zinc-600 font-medium">Multi-point lock security</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/90 backdrop-blur-sm border border-amber-200/80 shadow-md shadow-amber-900/5 hover:border-amber-400 transition-colors">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-700 border border-amber-200">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Turkish Precision</p>
                <p className="text-[11px] text-zinc-600 font-medium">Imported security craft</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/90 backdrop-blur-sm border border-amber-200/80 shadow-md shadow-amber-900/5 hover:border-amber-400 transition-colors">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-700 border border-amber-200">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Custom Sizes</p>
                <p className="text-[11px] text-zinc-600 font-medium">Single & 1½ leaf options</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/90 backdrop-blur-sm border border-emerald-200/80 shadow-md shadow-emerald-900/5 hover:border-emerald-400 transition-colors">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Waterproof Line</p>
                <p className="text-[11px] text-zinc-600 font-medium">Zero swelling bathroom doors</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Radiant Gold Baseline Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5B83B] to-transparent" />
    </section>
  );
};
