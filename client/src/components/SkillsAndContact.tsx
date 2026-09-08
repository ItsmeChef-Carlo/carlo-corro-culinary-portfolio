import React, { useState } from "react";
import { 
  Fish, 
  CakeSlice, 
  Receipt, 
  Anchor, 
  ShieldCheck, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Download, 
  Send, 
  Check, 
  Copy,
  ExternalLink,
  ChefHat
} from "lucide-react";
import { CHEF_DATA } from "../data/chefData";

export const SkillsSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Fish: <Fish className="w-6 h-6 text-[#c5a880]" />,
    CakeSlice: <CakeSlice className="w-6 h-6 text-[#c5a880]" />,
    Receipt: <Receipt className="w-6 h-6 text-[#c5a880]" />,
    Anchor: <Anchor className="w-6 h-6 text-[#c5a880]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#c5a880]" />,
    Users: <Users className="w-6 h-6 text-[#c5a880]" />,
  };

  const technicalCompetencies = [
    { title: "Japanese Sushi & Sashimi Craft", level: 95 },
    { title: "Italian Cuisine, Pastry & Baking", level: 90 },
    { title: "Menu Engineering & Food Cost Control", level: 92 },
    { title: "Inventory & Offshore Stock Management", level: 90 },
    { title: "HACCP & International Food Safety", level: 98 },
    { title: "Yacht Galley & Shipboard Catering", level: 94 },
    { title: "Dietary Restrictions & Allergen Isolation", level: 95 },
    { title: "Culinary Brigade Leadership & Training", level: 88 }
  ];

  return (
    <section id="skills" className="py-24 bg-[#090d13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#c5a880]/30 bg-[#16202e]/60 text-[#c5a880] text-xs uppercase tracking-widest mb-4">
            <ChefHat className="w-3.5 h-3.5" />
            <span>Mastery &amp; Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Culinary &amp; Galley <span className="gold-gradient-text">Strengths</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Combining refined Japanese artistry with disciplined kitchen management, maritime resilience, and international banquet execution.
          </p>
        </div>

        {/* 6 Core Strength Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CHEF_DATA.culinaryStrengths.map((item) => (
            <div
              key={item.title}
              className="glass-card p-6 sm:p-8 rounded-2xl hover:border-[#c5a880]/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#151f2e] border border-[#c5a880]/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {iconMap[item.icon] || <ChefHat className="w-6 h-6 text-[#c5a880]" />}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#c5a880] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Proficiency Bars Matrix */}
        <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-800">
          <h3 className="font-serif text-2xl font-bold text-white mb-6 text-center sm:text-left">
            Technical Skill Proficiency &amp; Compliance Rating
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {technicalCompetencies.map((skill) => (
              <div key={skill.title} className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="font-medium text-slate-200">{skill.title}</span>
                  <span className="font-mono text-[#c5a880] font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-[#9e7b4f] via-[#c5a880] to-[#e6d0b0] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    roleType: "Yacht Chef",
    message: ""
  });

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0e16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#c5a880]/30 bg-[#16202e]/60 text-[#c5a880] text-xs uppercase tracking-widest mb-4">
            <Anchor className="w-3.5 h-3.5" />
            <span>Open for Engagements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Connect With <span className="gold-gradient-text">Chef Carlo</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Actively open for international luxury superyachts, private estates, fine dining restaurants, and executive culinary opportunities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[#c5a880]/30">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Direct inquiry line for vessel captains, fleet managers, executive chefs, and recruitment agents.
              </p>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-[#121926] border border-slate-800 mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1a2538] flex items-center justify-center text-[#c5a880]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">Phone / WhatsApp</span>
                    <a href={`tel:${CHEF_DATA.phone}`} className="text-sm font-bold text-white hover:text-[#c5a880]">
                      {CHEF_DATA.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(CHEF_DATA.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-[#121926] border border-slate-800 mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1a2538] flex items-center justify-center text-[#c5a880]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">Email Address</span>
                    <a href={`mailto:${CHEF_DATA.email}`} className="text-xs sm:text-sm font-bold text-white hover:text-[#c5a880] break-all">
                      {CHEF_DATA.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(CHEF_DATA.email, 'email')}
                  className="p-2 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Download CV CTA */}
              <a
                href={CHEF_DATA.pdfDownloadUrl}
                download="Carlo_Corro_Sous_Chef_CV.pdf"
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl bg-[#c5a880] text-[#0b0f14] font-semibold text-xs tracking-wider uppercase hover:bg-[#d6bc96] transition-all shadow-lg shadow-[#c5a880]/20 text-center"
              >
                <Download className="w-4 h-4" />
                <span>Download Official CV Portfolio (PDF)</span>
              </a>
            </div>

            {/* Maritime Readiness Badge Box */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center space-x-3 mb-2">
                <Anchor className="w-5 h-5 text-[#c5a880]" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  International Yacht &amp; Marine Status
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Immediate availability for international voyages, luxury motor yachts, and high-end hospitality venues globally. Valid maritime documents and health clearance.
              </p>
              <div className="text-[11px] font-mono text-[#c5a880] bg-[#141d2b] p-2.5 rounded-lg border border-slate-800">
                Status: Available · Passport Ready · STCW Compliant
              </div>
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-2xl border border-slate-800">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Send an Opportunity Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Looking for a Sous Chef to lead your sushi counter, yacht galley, or fine dining kitchen? Send direct details below.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-[#14231f] border border-emerald-500/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-white">Inquiry Received</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out. Chef Carlo has received your message and will respond promptly via email or WhatsApp.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 text-xs text-[#c5a880] underline hover:text-white"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                      Your Name / Hiring Lead
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Capt. James Wilson"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121926] border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                      Vessel / Organization
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. M/Y Sea Serenity / Fine Dining Group"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121926] border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                    Role Category
                  </label>
                  <select
                    value={formData.roleType}
                    onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121926] border border-slate-800 text-sm text-white focus:outline-none focus:border-[#c5a880] transition-colors"
                  >
                    <option value="Luxury Yacht Sous Chef">Luxury Yacht Galley Sous Chef</option>
                    <option value="Head Sushi Chef / Specialist">Head Sushi Chef / Specialist</option>
                    <option value="Italian Sous Chef / Pastry">Italian Sous Chef / Pastry</option>
                    <option value="Private Estate Executive Chef">Private Estate Executive Chef</option>
                    <option value="Consultancy / Menu Development">Consultancy / Menu Development</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                    Message / Opportunity Brief
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about the itinerary, vessel/establishment specifications, timeline, and package..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121926] border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#c5a880] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-xl bg-[#c5a880] text-[#0b0f14] font-bold text-xs tracking-wider uppercase hover:bg-[#d6bc96] transition-all shadow-lg shadow-[#c5a880]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070a0f] border-t border-slate-800 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full border border-[#c5a880]/40 flex items-center justify-center bg-[#111722] text-[#c5a880]">
              <Anchor className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif text-base font-bold text-white block">
                CARLO CRISANTO CORRO
              </span>
              <span className="text-[10px] text-slate-500 font-mono">
                Sous Chef · Japanese Sushi Specialist · Yacht Hospitality
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-slate-400">
            <a href="#profile" className="hover:text-[#c5a880] transition-colors">About</a>
            <a href="#portfolio" className="hover:text-[#c5a880] transition-colors">Portfolio</a>
            <a href="#experience" className="hover:text-[#c5a880] transition-colors">Experience</a>
            <a href="#maritime" className="hover:text-[#c5a880] transition-colors">Certifications</a>
            <a href="#references" className="hover:text-[#c5a880] transition-colors">References</a>
          </div>

          <div className="text-center md:text-right text-slate-500 text-[11px]">
            <p>© {new Date().getFullYear()} Carlo Crisanto Corro. All rights reserved.</p>
            <p className="mt-1">Digital CV &amp; Yacht Galley Portfolio</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
