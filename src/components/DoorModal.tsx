import React from 'react';
import { X, MessageSquare, Phone, ShieldCheck, Ruler, CheckCircle } from 'lucide-react';
import { DoorItem } from '../data/doorsData';
import { PRIMARY_PHONE, getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface DoorModalProps {
  door: DoorItem | null;
  onClose: () => void;
}

export const DoorModal: React.FC<DoorModalProps> = ({ door, onClose }) => {
  if (!door) return null;

  const whatsappMessage = WHATSAPP_MESSAGES.product(door.name, door.category);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white border-2 border-amber-400 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 border border-zinc-300 text-zinc-700 hover:text-zinc-950 hover:border-amber-500 transition-colors shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-80 md:h-full min-h-[380px] bg-zinc-100">
            <img
              src={door.image}
              alt={door.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-wider bg-white/95 backdrop-blur-md text-amber-950 border border-amber-300 shadow-md">
                {door.category}
              </span>
            </div>
            {door.tag && (
              <div className="absolute bottom-4 left-4 hidden md:block">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E5B83B] text-zinc-950 shadow-md">
                  {door.tag}
                </span>
              </div>
            )}
          </div>

          {/* Details Side */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto bg-white">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-1">
                {door.category}
              </div>
              <h3 className="text-2xl font-bold text-zinc-950 font-cinzel tracking-tight">
                {door.name}
              </h3>

              {/* Price placeholder */}
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Contact us for price</span>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-zinc-600 leading-relaxed font-normal">
                {door.details || door.shortDesc}
              </p>

              {/* Features List */}
              {door.features && door.features.length > 0 && (
                <div className="mt-5">
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>Security & Craft Highlights</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {door.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                        <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sizes Available */}
              {door.sizes && door.sizes.length > 0 && (
                <div className="mt-5">
                  <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <Ruler className="w-4 h-4 text-amber-600" />
                    <span>Available Configurations</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {door.sizes.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-zinc-100 border border-zinc-200 text-[11px] text-zinc-800 font-mono font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommended Application */}
              {door.recommendedFor && (
                <div className="mt-4 text-xs text-zinc-600">
                  <span className="font-bold text-zinc-900">Ideal For: </span>
                  {door.recommendedFor}
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-5 border-t border-zinc-100 space-y-2.5">
              <a
                href={getWhatsAppLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="w-full py-3 px-4 rounded-xl bg-zinc-100 hover:bg-amber-50 border border-amber-400 text-zinc-900 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Call {PRIMARY_PHONE} For Pricing</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
