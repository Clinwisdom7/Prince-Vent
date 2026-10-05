import React from 'react';
import { MapPin, Phone, MessageSquare, CheckCircle2, Building2, Home } from 'lucide-react';
import { PRIMARY_PHONE, getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import turkishDoorImg from '@/src/assets/images/tof4_turkish_door_1791028933878.jpg';

export const AboutSection: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF9F5] relative overflow-hidden border-t border-zinc-200/80">
      {/* Subtle backdrop glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Border Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D4AF37] via-[#E5B83B] to-[#D4AF37] rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition-all duration-500" />

              <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-amber-300 shadow-2xl">
                <img
                  src={turkishDoorImg}
                  alt="TOF4 DOORS Craftsmanship and Security"
                  className="w-full h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Showroom Badge Card on Bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-amber-300 shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span>Showroom Location</span>
                  </div>
                  <p className="mt-1 text-sm font-extrabold text-zinc-950">
                    Tech, Aiyigya — Opposite Sakafia SHS
                  </p>
                  <p className="text-xs text-zinc-600 mt-0.5 font-medium">Kumasi, Ghana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
              About TOF4 DOORS
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 font-cinzel leading-tight tracking-tight">
              Strong Doors Designed for <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#B38728] bg-clip-text text-transparent">
                Peace of Mind and Elegance.
              </span>
            </h2>

            <p className="mt-6 text-zinc-700 text-base sm:text-lg leading-relaxed font-normal">
              TOF4 DOORS specializes in providing high-quality, durable doors for homes, apartments, offices, and modern commercial buildings. Based in Tech, Aiyigya (opposite Sakafia SHS), we bring homeowners and developers reliable security solutions that elevate entrance aesthetics.
            </p>

            <p className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
              Whether you are completing a new residential build, renovating an apartment, or outfitting commercial spaces, our curated range covers genuine Turkish security entrance doors, flexible single and 1½ configurations, architectural wooden steel blends, and specialized moisture-resistant bathroom doors.
            </p>

            {/* Application Focus Tags */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-zinc-200 shadow-sm">
                <Home className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span className="text-sm font-bold text-zinc-900">Residential Homes & Villas</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-zinc-200 shadow-sm">
                <Building2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span className="text-sm font-bold text-zinc-900">Apartments & Gated Estates</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-zinc-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span className="text-sm font-bold text-zinc-900">Corporate & Office Buildings</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-zinc-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span className="text-sm font-bold text-zinc-900">Waterproof Washroom Solutions</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5B83B] text-zinc-950 font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-zinc-950" />
                <span>Visit Our Showroom</span>
              </a>

              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 border-2 border-amber-400 text-zinc-900 font-bold text-xs tracking-wide transition-all flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Call {PRIMARY_PHONE}</span>
              </a>

              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGES.visit)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide transition-all flex items-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-white" />
                <span>Ask Showroom Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
