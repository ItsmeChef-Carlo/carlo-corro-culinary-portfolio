import React, { useState } from "react";
import { Sparkles, Utensils, Anchor, Maximize2, X, CheckCircle2 } from "lucide-react";
import { CHEF_DATA, MenuItem } from "../data/chefData";

export const PortfolioGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Japanese' | 'Italian' | 'Yacht Special'>('All');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = activeFilter === 'All'
    ? CHEF_DATA.portfolioGallery
    : CHEF_DATA.portfolioGallery.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 relative bg-[#090d13]">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.06),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#c5a880]/30 bg-[#16202e]/60 text-[#c5a880] text-xs uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Culinary Repertoire &amp; Galley Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-5">
            Gastronomic <span className="gold-gradient-text">Portfolio</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From precision Michelin-standard sushi &amp; sashimi omakase to artisanal Italian confections and luxury offshore yacht provisioning. Each course reflects disciplined technique and uncompromising standards.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {(['All', 'Japanese', 'Italian', 'Yacht Special'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-[#c5a880] text-[#0b0f14] shadow-lg shadow-[#c5a880]/20 scale-105'
                    : 'bg-[#151c27] text-slate-300 hover:text-white hover:bg-[#1e2736] border border-slate-800'
                }`}
              >
                {filter === 'All' ? 'Complete Portfolio' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.title}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d131c] via-transparent to-black/30" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-mono tracking-wider uppercase font-semibold px-3 py-1 rounded-full bg-[#0b0f14]/80 backdrop-blur-md text-[#c5a880] border border-[#c5a880]/30 shadow-md">
                    {item.category}
                  </span>
                </div>

                {/* Enlarge trigger */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="p-2 rounded-full bg-[#0b0f14]/80 backdrop-blur-md text-white hover:text-[#c5a880] border border-white/20">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-white group-hover:text-[#c5a880] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Highlights Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {item.highlights.slice(0, 3).map((hl) => (
                    <span
                      key={hl}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#101724] text-slate-300 border border-slate-800"
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Maritime Special Callout Card */}
        <div className="mt-16 rounded-2xl p-8 sm:p-10 glass-panel border border-[#c5a880]/30 relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#c5a880] mb-3">
                <Anchor className="w-4 h-4" />
                <span>Yacht &amp; Marine Operations Ready</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                Precision Galley Service &amp; Global Voyage Catering
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Trained in maritime safety (STCW/BT) and certified in Ship Catering (NC I), Carlo brings disciplined galley operations, rigorous portion control, offshore waste reduction, and the stamina to deliver luxury multi-course services across long-haul marine charters.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-300">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                  <span>STCW / BT Certified</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                  <span>Ship Catering NC I</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                  <span>Fire Rescue Boat Certified</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                  <span>HACCP Food Safety Compliant</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-stretch">
              <a
                href={CHEF_DATA.pdfDownloadUrl}
                download
                className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#c5a880] text-[#0b0f14] font-semibold text-xs tracking-wider uppercase hover:bg-[#d6bc96] transition-colors shadow-lg shadow-[#c5a880]/20 text-center"
              >
                <span>Download Full Dossier (PDF)</span>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl border border-[#c5a880]/50 text-[#c5a880] font-semibold text-xs tracking-wider uppercase hover:bg-[#c5a880]/10 transition-colors text-center"
              >
                <span>Schedule Galley Interview</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for detail inspection */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="max-w-3xl w-full bg-[#101724] border border-[#c5a880]/40 rounded-2xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-slate-300 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[16/9] w-full overflow-hidden bg-black">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880] font-semibold">
                {selectedItem.category} Repertoire
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 mb-3">
                {selectedItem.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedItem.description}
              </p>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                  Key Culinary &amp; Operational Attributes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.highlights.map((hl) => (
                    <span
                      key={hl}
                      className="text-xs px-3 py-1 rounded-full bg-[#1b2535] text-[#c5a880] border border-[#c5a880]/30"
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
