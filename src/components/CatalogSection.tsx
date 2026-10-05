import React from 'react';
import { DoorItem, DOORS_DATA, CATEGORIES, CategoryType } from '../data/doorsData';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { MessageSquare, Eye, PhoneCall, Sparkles } from 'lucide-react';

interface CatalogSectionProps {
  activeCategory: CategoryType;
  onSelectCategory: (category: CategoryType) => void;
  onSelectDoor: (door: DoorItem) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  activeCategory,
  onSelectCategory,
  onSelectDoor,
}) => {
  const filteredDoors =
    activeCategory === 'All Doors'
      ? DOORS_DATA
      : DOORS_DATA.filter((door) => door.category === activeCategory);

  return (
    <section id="catalog" className="py-20 sm:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/70 border border-amber-300 text-amber-900 text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Showroom Catalog & Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 font-cinzel tracking-tight">
            Explore Our Door Designs
          </h2>
          <p className="mt-4 text-zinc-600 text-base sm:text-lg font-medium">
            Browse our signature door styles. Click any door to inspect specifications or enquire directly via WhatsApp for available sizes and current pricing.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5B83B] text-zinc-950 shadow-[0_4px_18px_rgba(212,175,55,0.4)] scale-105'
                    : 'bg-zinc-100 hover:bg-zinc-200/80 text-zinc-700 hover:text-zinc-950 border border-zinc-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Doors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoors.map((door) => {
            const productWhatsAppLink = getWhatsAppLink(
              WHATSAPP_MESSAGES.product(door.name, door.category)
            );

            return (
              <div
                key={door.id}
                className="group rounded-2xl bg-[#FAFAF8] border border-zinc-200/90 hover:border-amber-400 flex flex-col overflow-hidden transition-all duration-500 shadow-md shadow-zinc-900/5 hover:shadow-2xl hover:shadow-amber-500/15 hover:-translate-y-1"
              >
                {/* Image Container with Quick View overlay */}
                <div
                  className="relative h-80 sm:h-96 w-full overflow-hidden bg-zinc-100 cursor-pointer"
                  onClick={() => onSelectDoor(door)}
                >
                  <img
                    src={door.image}
                    alt={door.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-white/95 backdrop-blur-md text-amber-950 border border-amber-300 shadow-md">
                      {door.category}
                    </span>
                  </div>

                  {/* Flagship Tag */}
                  {door.tag && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-[#E5B83B] text-zinc-950 shadow-md">
                        {door.tag}
                      </span>
                    </div>
                  )}

                  {/* Hover Quick View Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <div className="px-4 py-2.5 rounded-full bg-white text-zinc-950 border border-amber-400 text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4 text-amber-600" />
                      <span>View Specifications</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3
                      onClick={() => onSelectDoor(door)}
                      className="text-lg font-bold text-zinc-950 group-hover:text-amber-700 transition-colors font-cinzel tracking-tight cursor-pointer line-clamp-2"
                    >
                      {door.name}
                    </h3>

                    {/* Price Status */}
                    <div className="mt-2 text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-md inline-flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      <span>Contact us for price</span>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-zinc-600 line-clamp-3 leading-relaxed">
                      {door.shortDesc}
                    </p>
                  </div>

                  {/* Action Buttons: "Ask for Price" / "WhatsApp Us" */}
                  <div className="mt-6 pt-4 border-t border-zinc-100 grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => onSelectDoor(door)}
                      className="py-2.5 px-3 rounded-xl bg-zinc-100 hover:bg-amber-100 border border-zinc-200 text-zinc-900 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                      <span>Ask Price</span>
                    </button>

                    <a
                      href={productWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
