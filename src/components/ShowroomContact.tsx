import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Send, Clock, CheckCircle2, Navigation, Mail } from 'lucide-react';
import { PRIMARY_PHONE, SUPPORT_EMAIL, getWhatsAppLink, SHOWROOM_LOCATION } from '../utils/whatsapp';

export const ShowroomContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: 'Turkish Doors',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Generate formatted WhatsApp message and open it
    const msg = `Hello TOF4 DOORS,\nMy name is ${formData.name}.\nPhone: ${formData.phone}\nInterested in: ${formData.product}\nMessage: ${formData.message || 'I would like more information and pricing.'}`;
    window.open(getWhatsAppLink(msg), '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
            <MapPin className="w-4 h-4 text-amber-700" />
            <span>Showroom & Contact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 font-cinzel tracking-tight">
            Visit Our Showroom or Connect
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg font-medium">
            Experience the weight, build quality, and finishes of TOF4 DOORS in person at our Tech, Aiyigya showroom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Showroom Information & Map Card */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-2xl bg-[#FAFAF8] border border-amber-300/80 shadow-lg shadow-amber-900/5 relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-950 font-cinzel tracking-tight">
                    TOF4 DOORS
                  </h3>
                  <p className="text-xs uppercase tracking-widest font-extrabold text-amber-800 mt-1">
                    Strong doors, Safe homes.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-amber-100 border border-amber-300 text-amber-800 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>

              {/* Physical Location Details */}
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-zinc-950">Showroom Address</p>
                    <p className="text-sm text-zinc-700 font-medium">Tech, Aiyigya</p>
                    <p className="text-sm text-amber-900 font-bold">Opposite Sakafia SHS</p>
                    <p className="text-xs text-zinc-500 font-medium">Kumasi, Ghana</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-zinc-950">Direct Phone Line</p>
                    <div className="mt-0.5">
                      <a
                        href={`tel:${PRIMARY_PHONE}`}
                        className="text-base font-extrabold text-amber-800 hover:text-amber-950 hover:underline"
                      >
                        {PRIMARY_PHONE}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-zinc-950">Support Email</p>
                    <div className="mt-0.5">
                      <a
                        href={`mailto:${SUPPORT_EMAIL}`}
                        className="text-sm font-bold text-amber-800 hover:text-amber-950 hover:underline break-all"
                      >
                        {SUPPORT_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-zinc-950">Working Hours</p>
                    <p className="text-xs text-zinc-700 font-medium">{SHOWROOM_LOCATION.hours}</p>
                    <p className="text-[11px] text-zinc-500">Sunday by appointment</p>
                  </div>
                </div>
              </div>

              {/* 3 Prominent Quick Action Buttons */}
              <div className="mt-8 pt-6 border-t border-zinc-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="py-3 px-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5B83B] text-zinc-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={getWhatsAppLink(
                    'Hello TOF4 DOORS, I would like to enquire about your doors and prices.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={getWhatsAppLink(
                    'Hello TOF4 DOORS, please send me directions to your showroom at Tech, Aiyigya opposite Sakafia SHS.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-zinc-800 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all text-center"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-700" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Styled Google Maps Architectural Concept */}
            <div className="rounded-2xl bg-[#FAFAF8] border border-zinc-200/90 p-6 flex flex-col justify-between shadow-md shadow-zinc-900/5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600 animate-ping" />
                  <span className="text-xs font-extrabold text-zinc-950 uppercase tracking-wider">
                    Showroom Landmark Map
                  </span>
                </div>
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Kumasi — Aiyigya
                </span>
              </div>

              {/* Graphic Map representation */}
              <div className="relative h-44 rounded-xl overflow-hidden bg-gradient-to-br from-amber-50 via-zinc-100 to-amber-100/60 border border-zinc-200 flex items-center justify-center p-4">
                {/* Stylized road grid lines */}
                <div className="absolute inset-0 opacity-40">
                  <div className="w-full h-2 bg-amber-300 top-1/2 absolute -translate-y-1/2" />
                  <div className="h-full w-2 bg-zinc-300 left-1/3 absolute" />
                  <div className="h-full w-2 bg-zinc-300 right-1/4 absolute" />
                </div>

                <div className="relative z-10 text-center bg-white/95 backdrop-blur-md p-4 rounded-xl border border-amber-300 shadow-xl max-w-sm">
                  <div className="flex items-center justify-center gap-2 text-zinc-950 font-bold text-sm font-cinzel">
                    <MapPin className="w-4 h-4 text-red-600" />
                    <span>TOF4 DOORS</span>
                  </div>
                  <p className="text-xs text-zinc-800 mt-1 font-bold">Opposite Sakafia SHS</p>
                  <p className="text-[11px] text-zinc-600 font-medium">Tech, Aiyigya Road</p>
                  <div className="mt-2 text-[10px] text-amber-900 bg-amber-100 font-semibold px-2.5 py-1 rounded border border-amber-200">
                    Landmark: Directly opposite Sakafia Senior High School
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Enquiry Contact Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#FAFAF8] border border-zinc-200/90 shadow-xl shadow-zinc-900/5 relative">
              <h3 className="text-2xl font-bold text-zinc-950 font-cinzel tracking-tight">
                Send an Enquiry
              </h3>
              <p className="mt-2 text-sm text-zinc-600 font-medium">
                Fill out the quick form below. Our team in Tech, Aiyigya will respond with specifications, design catalogs, and pricing.
              </p>

              {submitted ? (
                <div className="mt-8 p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-base font-bold text-emerald-950">Enquiry Prepared!</h4>
                  <p className="text-xs text-emerald-800 mt-1 mb-4 font-medium">
                    Your details have opened in WhatsApp. If it didn't launch automatically, tap below:
                  </p>
                  <a
                    href={getWhatsAppLink(
                      `Hello TOF4 DOORS, My name is ${formData.name}. Phone: ${formData.phone}. Interested in: ${formData.product}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="block mx-auto mt-4 text-xs text-zinc-600 underline hover:text-zinc-900 font-medium"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kwame Mensah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 text-sm transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1.5">
                      Phone Number (Ghana)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 054 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 text-sm transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1.5">
                      Product Interested In
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-zinc-950 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 text-sm transition-all shadow-sm"
                    >
                      <option value="Turkish Doors">Turkish Doors</option>
                      <option value="Single & 1½ Doors">Single and 1½ Doors</option>
                      <option value="Wooden Steel Doors">Wooden Steel Doors</option>
                      <option value="Bathroom Doors">Bathroom Doors</option>
                      <option value="Multiple Doors / Full House Project">
                        Multiple Doors / Entire Building
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1.5">
                      Message / Specifications (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your doorway sizes, quantity needed, or project stage..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-300 text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 text-sm transition-all resize-none shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5B83B] to-[#C59A27] text-zinc-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <Send className="w-4 h-4 text-zinc-950" />
                    <span>Send Enquiry</span>
                  </button>

                  <p className="text-xs text-zinc-500 font-medium text-center mt-2">
                    Direct instant connection via WhatsApp, Call ({PRIMARY_PHONE}), or Email: {SUPPORT_EMAIL}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
