import React from 'react';
import { Phone, MessageSquare, Navigation } from 'lucide-react';
import { PRIMARY_PHONE, getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const MobileBottomBar: React.FC = () => {
  const handleDirections = (e: React.MouseEvent) => {
    e.preventDefault();
    const contact = document.querySelector('#contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-amber-200/90 px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] shadow-[0_-8px_25px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${PRIMARY_PHONE}`}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5B83B] text-zinc-950 font-extrabold shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 mb-0.5 text-zinc-950" />
          <span className="text-[11px] uppercase tracking-wider leading-none">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold shadow-sm active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] uppercase tracking-wider leading-none">WhatsApp</span>
        </a>

        {/* Get Directions Button */}
        <a
          href="#contact"
          onClick={handleDirections}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200 font-bold active:scale-95 transition-transform"
        >
          <Navigation className="w-4 h-4 mb-0.5 text-amber-600" />
          <span className="text-[11px] uppercase tracking-wider leading-none">Directions</span>
        </a>
      </div>
    </div>
  );
};
