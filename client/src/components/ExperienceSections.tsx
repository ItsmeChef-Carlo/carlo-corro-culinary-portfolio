import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle, Award, Compass, Shield, HeartHandshake, Phone, Mail, FileCheck } from "lucide-react";
import { CHEF_DATA } from "../data/chefData";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0c111a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#c5a880]/30 bg-[#16202e]/60 text-[#c5a880] text-xs uppercase tracking-widest mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Professional <span className="gold-gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Over 7+ years ascending through high-pressure kitchen hierarchies, spearheading sushi bars, leading Italian pastry stations, and managing culinary crews.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#c5a880] via-[#c5a880]/40 to-transparent -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {CHEF_DATA.experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.role}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Icon (Desktop) */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#121926] border-2 border-[#c5a880] items-center justify-center text-[#c5a880] z-10 shadow-lg shadow-black">
                    <span className="text-xs font-bold font-mono">{index + 1}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full sm:w-[calc(50%-36px)] ${isEven ? "sm:text-left" : "sm:text-left"}`}>
                    <div className="glass-card p-6 sm:p-8 rounded-2xl relative group hover:border-[#c5a880]/50 transition-all duration-300">
                      {/* Role & Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono tracking-wider uppercase font-semibold px-2.5 py-0.5 rounded bg-[#1f2b3e] text-[#c5a880] border border-[#c5a880]/30">
                          {exp.tag}
                        </span>
                        <div className="flex items-center text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5 mr-1 text-[#c5a880]" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#c5a880] transition-colors">
                        {exp.role}
                      </h3>
                      
                      <div className="text-sm font-semibold text-[#c5a880] mb-4 flex items-center">
                        <span>{exp.company}</span>
                        {exp.location && (
                          <>
                            <span className="mx-2 text-slate-600">·</span>
                            <span className="text-xs text-slate-400 font-normal flex items-center">
                              <MapPin className="w-3 h-3 mr-0.5" />
                              {exp.location}
                            </span>
                          </>
                        )}
                      </div>

                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start">
                            <span className="text-[#c5a880] mr-2 mt-1.5 flex-shrink-0">▪</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export const MaritimeSection: React.FC = () => {
  return (
    <section id="maritime" className="py-24 bg-[#090d13] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#c5a880]/30 bg-[#16202e]/60 text-[#c5a880] text-xs uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Maritime &amp; Safety Compliance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Maritime Certifications &amp; <span className="gold-gradient-text">Safety</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Equipped with formal International Maritime Organization (IMO) standards, shipboard catering credentials, and emergency response qualifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHEF_DATA.certifications.map((cert) => {
            const isMaritime = cert.type === 'Maritime';
            const isSafety = cert.type === 'Safety';
            return (
              <div
                key={cert.title}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:border-[#c5a880]/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border ${
                        isMaritime
                          ? "bg-blue-950/60 text-blue-300 border-blue-800/60"
                          : isSafety
                          ? "bg-amber-950/60 text-amber-300 border-amber-800/60"
                          : "bg-emerald-950/60 text-emerald-300 border-emerald-800/60"
                      }`}
                    >
                      {cert.type} Qualification
                    </span>
                    <Shield className="w-4 h-4 text-[#c5a880]" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#c5a880] font-mono mb-3">
                    {cert.authority}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
                    Verified Credential
                  </span>
                  <span className="text-slate-500 font-mono">CV Certified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Education & Language Row */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 glass-card p-8 rounded-2xl">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#c5a880] font-semibold block mb-2">
              Academic Foundation &amp; Ethos
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mb-1">
              {CHEF_DATA.education.degree}
            </h3>
            <p className="text-xs text-slate-400 font-mono mb-4">
              {CHEF_DATA.education.institution} · {CHEF_DATA.education.period}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {CHEF_DATA.education.note}
            </p>
          </div>

          <div className="lg:col-span-5 glass-card p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#c5a880] font-semibold block mb-2">
                Linguistic Competencies
              </span>
              <h3 className="font-serif text-xl font-bold text-white mb-4">
                Multilingual Communication
              </h3>
              <div className="space-y-4">
                {CHEF_DATA.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between p-3 rounded-xl bg-[#121926] border border-slate-800">
                    <span className="font-semibold text-white text-sm">{lang.name}</span>
                    <span className="text-xs font-mono text-[#c5a880]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ReferencesSection: React.FC = () => {
  return (
    <section id="references" className="py-24 bg-[#0c111a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#c5a880]/30 bg-[#16202e]/60 text-[#c5a880] text-xs uppercase tracking-widest mb-4">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Endorsements &amp; Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Professional <span className="gold-gradient-text">References</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Executive leadership and human resources verifications directly from international hospitality organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CHEF_DATA.references.map((ref) => (
            <div
              key={ref.name}
              className="glass-card p-8 rounded-2xl border border-slate-800 hover:border-[#c5a880]/50 transition-all duration-300 relative group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#c5a880] transition-colors">
                    {ref.name}
                  </h3>
                  <div className="text-sm font-semibold text-[#c5a880]">
                    {ref.title}
                  </div>
                  <div className="text-xs text-slate-400">
                    {ref.company}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#182333] border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880]">
                  <FileCheck className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs text-slate-300 italic mb-6">
                "{ref.relation}"
              </p>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">Contact:</span>
                <a
                  href={`tel:${ref.phone}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-white hover:text-[#c5a880] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{ref.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
