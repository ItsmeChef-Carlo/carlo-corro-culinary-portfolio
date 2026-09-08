import React from "react";
import { 
  Anchor, 
  Download, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  ChevronDown,
  Compass,
  FileText
} from "lucide-react";
import { CHEF_DATA } from "../data/chefData";
import { Navbar } from "../components/Navbar";
import { PortfolioGallery } from "../components/PortfolioGallery";
import { ExperienceSection, MaritimeSection, ReferencesSection } from "../components/ExperienceSections";
import { SkillsSection, ContactSection, Footer } from "../components/SkillsAndContact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f14] text-slate-100 selection:bg-[#c5a880] selection:text-[#0b0f14]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[92vh] pt-28 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-[#0b0f14] via-[#0e141f] to-[#0c111a]">
        {/* Subtle background glow effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Intro & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Availability Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#16202e] border border-[#c5a880]/40 text-[#c5a880] text-xs font-mono uppercase tracking-widest shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Yacht &amp; International Opportunities</span>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08]">
                  Carlo Crisanto <br />
                  <span className="gold-gradient-text">Corro</span>
                </h1>
                <p className="font-mono text-sm sm:text-base text-[#c5a880] tracking-widest uppercase mt-3 font-semibold">
                  Sous Chef · Japanese Sushi Specialist · Italian Patisserie
                </p>
              </div>

              {/* Hook & Summary */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Versatile culinary leader with <strong>7+ years</strong> across luxury Japanese sushi bars, fine Italian dining, and high-volume brigade management. Fully credentialed with <strong>Ship Catering NC I</strong> and <strong>STCW/BT Maritime Safety</strong> certification, ready to deliver calm, five-star gastronomy for superyacht galleys and elite private charters worldwide.
              </p>

              {/* Key Quick Facts */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3">
                {CHEF_DATA.metrics.map((m) => (
                  <div key={m.label} className="p-3.5 rounded-xl bg-[#121926]/80 border border-slate-800 text-center lg:text-left">
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-white text-[#c5a880]">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#portfolio"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl bg-[#c5a880] text-[#0b0f14] font-bold text-xs uppercase tracking-wider hover:bg-[#d6bc96] transition-all shadow-xl shadow-[#c5a880]/20"
                >
                  <span>Explore Gastronomic Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={CHEF_DATA.pdfDownloadUrl}
                  download="Carlo_Corro_Sous_Chef_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl border border-[#c5a880]/50 text-[#c5a880] hover:bg-[#c5a880]/10 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV (PDF)</span>
                </a>
              </div>

              {/* Quick Contact Line */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <a href={`tel:${CHEF_DATA.phone}`} className="flex items-center space-x-1.5 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{CHEF_DATA.phone}</span>
                </a>
                <a href={`mailto:${CHEF_DATA.email}`} className="flex items-center space-x-1.5 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{CHEF_DATA.email}</span>
                </a>
                <span className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Global Yacht &amp; Hospitality Placement</span>
                </span>
              </div>
            </div>

            {/* Right Column: Visual Portrait & Credentials Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Decorative border frame */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#c5a880]/30 via-transparent to-[#c5a880]/10 blur-sm pointer-events-none" />

                {/* Main Card */}
                <div className="relative rounded-2xl overflow-hidden bg-[#111724] border border-[#c5a880]/30 shadow-2xl">
                  {/* Portrait photo */}
                  <div className="aspect-[4/5] relative overflow-hidden bg-slate-900">
                    <img
                      src="/manus-storage/901AC62C-8E83-458C-A9B5-F8DAF6319EE7_309cfc0e.png"
                      alt="Carlo Crisanto Corro - Sous Chef"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111724] via-transparent to-transparent" />

                    {/* Quick CV download placed directly beside the hero portrait */}
                    <a
                      href={CHEF_DATA.pdfDownloadUrl}
                      download="Carlo_Corro_Sous_Chef_CV.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="absolute top-4 right-4 z-10 inline-flex items-center space-x-2 rounded-lg border border-[#f0dfbf]/60 bg-[#0b0f14]/85 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#f0dfbf] shadow-lg backdrop-blur-md transition-all hover:border-[#f0dfbf] hover:bg-[#c5a880] hover:text-[#0b0f14]"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download CV</span>
                    </a>
                    
                    {/* Floating badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0b0f14]/85 backdrop-blur-md border border-[#c5a880]/30 flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-9 h-9 rounded-lg bg-[#182333] border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880]">
                          <Anchor className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Yacht &amp; Galley Ready</div>
                          <div className="text-[10px] text-slate-400 font-mono">STCW / BT &amp; Ship Catering NC I</div>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                        Verified
                      </span>
                    </div>
                  </div>

                  {/* Card bottom summary */}
                  <div className="p-5 border-t border-slate-800/80 bg-[#0e1420]">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Current Role</span>
                      <span className="text-white font-semibold">Sous Chef / Sushi Specialist</span>
                    </div>
                    <div className="flex items-center justify-between text-xs mt-2">
                      <span className="text-slate-400">Recent Venue</span>
                      <span className="text-[#c5a880] font-mono">Radical / Dar Al Abbar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest font-mono text-slate-500 mb-1">Scroll</span>
          <ChevronDown className="w-4 h-4 text-[#c5a880]" />
        </div>
      </section>

      {/* Professional Profile Section */}
      <section id="profile" className="py-20 bg-[#0e1420] border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#c5a880]">
                <FileText className="w-4 h-4" />
                <span>Executive Summary</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Dedicated Craftsmanship, <br />
                <span className="gold-gradient-text">Calm Under Sea Conditions</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Carlo combines the meticulous discipline required for authentic Japanese knife work with the operational vigor of international luxury hospitality. Whether engineering bespoke degustation menus for VIP guests or supervising daily multi-station kitchen workflows, he maintains impeccable standards.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-xl border border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-[#182333] text-[#c5a880] flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Dual-Cuisine Versatility</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Seamlessly alternating between Japanese omakase (sushi, sashimi, maki, tempura) and artisanal Italian dessert and savory traditions.
                </p>
              </div>

              <div className="glass-card p-5 rounded-xl border border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-[#182333] text-[#c5a880] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Rigorous Food Safety</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Certified mastery of HACCP protocols, temperature control logs, pathogen prevention, and dedicated allergen-isolation menus.
                </p>
              </div>

              <div className="glass-card p-5 rounded-xl border border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-[#182333] text-[#c5a880] flex items-center justify-center mb-3">
                  <Anchor className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Maritime Self-Sufficiency</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Expertise in vessel provisioning, tight inventory control, zero-waste portioning, and calm performance in moving galleys.
                </p>
              </div>

              <div className="glass-card p-5 rounded-xl border border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-[#182333] text-[#c5a880] flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">Ethical Leadership</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Grounded by seminary leadership studies, bringing clear communication, mentorship patience, and reliable team cohesion.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gastronomic Portfolio Gallery */}
      <PortfolioGallery />

      {/* Professional Experience Section */}
      <ExperienceSection />

      {/* Maritime Certifications & Training Section */}
      <MaritimeSection />

      {/* Technical Skills & Competencies */}
      <SkillsSection />

      {/* Professional References */}
      <ReferencesSection />

      {/* Contact & Inquiries */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
