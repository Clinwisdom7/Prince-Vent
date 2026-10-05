import React from 'react';
import { Phone, MessageSquare, MapPin, Sparkles } from 'lucide-react';
import { PRIMARY_PHONE, getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const CallToAction: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-b from-[#FAF9F5] via-[#FFF6DC] to-[#FAF9F5] border-y border-amber-300">
      {/* Background radial gold glow */}
      <div className="absolute inset-0 bg-radial-at-c from-amber-400/20 via-transparent to-transparent pointer-events-none" />

      {/* Decorative Gold Border Lines */}
      <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-amber-300 text-amber-900 text-xs font-extrabold uppercase tracking-widest mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-600 fill-amber-300" />
          <span>Transform Your Entrance</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 font-cinzel tracking-tight leading-tight">
          Ready to Upgrade Your Door?
        </h2>

        {/* Supporting text */}
        <p className="mt-5 text-base sm:text-xl text-zinc-700 max-w-2xl mx-auto leading-relaxed font-medium">
          Visit TOF4 DOORS or call us to discuss the right door for your home.
          Discover exceptional security, genuine craftsmanship, and designs tailored to your architectural style.
        </p>

        {/* Location note */}
        <p className="mt-3 text-sm text-amber-900 font-bold flex items-center justify-center gap-1.5">
          <MapPin className="w-4 h-4 text-amber-700" />
          <span>Showroom in Tech, Aiyigya — Opposite Sakafia SHS</span>
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PRIMARY_PHONE}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5B83B] to-[#C59A27] text-zinc-950 font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_6px_25px_rgba(212,175,55,0.45)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Phone className="w-4 h-4 text-zinc-950" />
            <span>Call {PRIMARY_PHONE}</span>
          </a>

          <a
            href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-md hover:shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
