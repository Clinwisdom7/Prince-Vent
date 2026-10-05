import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MessageSquare, Menu, X, MapPin, ChevronRight, Mail } from 'lucide-react';
import { PRIMARY_PHONE, SUPPORT_EMAIL, getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Door Guide', href: '#door-guide' },
    { label: 'Gallery', href: '#catalog' },
    { label: 'Showroom & Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-md shadow-amber-950/5 py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-amber-100/60 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-0.5"
            >
              <Logo theme="light" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-xs uppercase tracking-wider font-bold text-zinc-700 hover:text-amber-600 transition-colors relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* WhatsApp Quick CTA */}
              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold bg-emerald-50 border border-emerald-500/40 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-600 transition-all shadow-sm"
                title="Chat on WhatsApp"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="hidden md:inline">WhatsApp</span>
              </a>

              {/* Call Us Button */}
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="relative group overflow-hidden px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5B83B] to-[#C59A27] text-zinc-950 font-extrabold text-xs tracking-wider uppercase flex items-center gap-2 shadow-[0_4px_15px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_22px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-950" />
                <span>Call {PRIMARY_PHONE}</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-700 font-bold"
                aria-label="Call TOF4 DOORS"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-zinc-100 border border-zinc-300 text-zinc-800 hover:text-amber-700 hover:border-amber-400 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-amber-600" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#fdfcf9] border-l border-amber-200/80 p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-200">
                <Logo variant="compact" theme="light" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tagline badge */}
              <div className="mt-4 px-3 py-1.5 rounded-md bg-amber-50 border border-amber-200 text-[11px] text-amber-800 font-bold tracking-wide">
                Strong doors, Safe homes.
              </div>

              {/* Navigation Links */}
              <div className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-bold text-zinc-800 hover:bg-amber-100/60 hover:text-amber-700 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="pt-6 border-t border-zinc-200 space-y-3">
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5B83B] text-zinc-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call {PRIMARY_PHONE}</span>
              </a>

              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs tracking-wide flex items-center justify-center gap-2 transition-colors border border-zinc-200"
              >
                <Mail className="w-4 h-4 text-amber-700" />
                <span>{SUPPORT_EMAIL}</span>
              </a>

              <div className="flex items-start gap-2 pt-2 text-[11px] text-zinc-600">
                <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Tech, Aiyigya, opposite Sakafia SHS, Ghana</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
