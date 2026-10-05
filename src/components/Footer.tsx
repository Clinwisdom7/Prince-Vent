import React from 'react';
import { Logo } from './Logo';
import { Phone, MapPin, MessageSquare, ArrowUp, Mail, Code } from 'lucide-react';
import { PRIMARY_PHONE, SUPPORT_EMAIL, getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

interface FooterProps {
  onOpenCodeViewer?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCodeViewer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Gallery', href: '#catalog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#111215] text-zinc-300 border-t border-amber-500/20 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="large" theme="dark" />
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed mt-4">
              Premium Turkish doors, single & 1½ doors, wooden steel doors, and waterproof bathroom doors. Engineered for strength, designed for architectural elegance.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
                Strong doors, Safe homes.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors font-medium text-zinc-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-extrabold text-white mb-4">
              Showroom & Contact
            </h4>

            <div className="flex items-start gap-2.5 text-sm text-zinc-300">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-white">TOF4 DOORS Showroom</p>
                <p>Tech, Aiyigya, opposite Sakafia SHS</p>
                <p className="text-xs text-zinc-400">Kumasi, Ghana</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-sm text-zinc-300 pt-2">
              <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-white">Direct Phone Line</p>
                <a href={`tel:${PRIMARY_PHONE}`} className="text-amber-400 hover:text-amber-300 font-bold hover:underline">
                  {PRIMARY_PHONE}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-sm text-zinc-300 pt-2">
              <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-white">Support Email</p>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-amber-400 hover:text-amber-300 font-bold hover:underline break-all">
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-900 text-xs font-bold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp ({PRIMARY_PHONE})</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 TOF4 DOORS. All rights reserved.</p>
          <div className="flex items-center gap-5 sm:gap-6 flex-wrap">
            {onOpenCodeViewer && (
              <button
                type="button"
                onClick={onOpenCodeViewer}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-amber-300/90 hover:text-amber-300 border border-amber-500/30 transition-colors font-mono text-[11px]"
              >
                <Code className="w-3.5 h-3.5 text-amber-400" />
                <span>View & Copy Code</span>
              </button>
            )}
            <span className="hidden sm:inline">Tech, Aiyigya • Opposite Sakafia SHS</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-amber-400 transition-colors font-medium"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
