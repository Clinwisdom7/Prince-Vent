import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { CATEGORY_SUMMARIES, CategoryType } from '../data/doorsData';

interface ProductsSectionProps {
  onSelectCategory: (category: CategoryType) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (categoryName: string) => {
    onSelectCategory(categoryName as CategoryType);
    const catalogElement = document.querySelector('#catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 sm:py-28 bg-[#F6F5F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Product Collection</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 font-cinzel tracking-tight">
            Engineered For Protection.
            <br />
            <span className="bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#B38728] bg-clip-text text-transparent">
              Designed For Prestige.
            </span>
          </h2>

          <p className="mt-4 text-zinc-600 text-base sm:text-lg font-medium">
            Explore our core door categories built for Ghanaian climates, modern architectural tastes, and unyielding home security.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CATEGORY_SUMMARIES.map((cat, idx) => (
            <div
              key={cat.category}
              className="group relative rounded-2xl bg-white border border-zinc-200/90 hover:border-amber-400 transition-all duration-500 flex flex-col overflow-hidden shadow-lg shadow-zinc-900/5 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1.5"
            >
              {/* Product Image Container */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-zinc-100">
                <img
                  src={cat.image}
                  alt={cat.headline}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Subtle Image Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-white/95 backdrop-blur-md text-amber-900 border border-amber-300 shadow-md">
                    {cat.badge}
                  </span>
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 text-xs font-mono font-extrabold px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white">
                  0{idx + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-zinc-950 group-hover:text-amber-700 transition-colors font-cinzel tracking-tight">
                    {cat.headline}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-normal">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-100">
                  <button
                    type="button"
                    onClick={() => handleCategoryClick(cat.category)}
                    className="w-full py-3 px-4 rounded-xl bg-zinc-100 group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-[#E5B83B] text-zinc-900 group-hover:text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
