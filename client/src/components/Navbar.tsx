import React, { useState, useEffect } from "react";
import { Anchor, Download, Menu, X, Phone, Mail, Award, BookOpen } from "lucide-react";
import { CHEF_DATA } from "../data/chefData";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#profile" },
    { name: "Culinary Portfolio", href: "#portfolio" },
    { name: "Experience", href: "#experience" },
    { name: "Maritime & Safety", href: "#maritime" },
    { name: "Skills", href: "#skills" },
    { name: "References", href: "#references" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f14]/95 backdrop-blur-md border-b border-[#c5a880]/20 py-3 shadow-2xl"
          : "bg-gradient-to-b from-[#0b0f14]/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="group flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full border border-[#c5a880]/50 flex items-center justify-center bg-[#16202e] text-[#c5a880] group-hover:scale-105 transition-transform duration-200">
              <Anchor className="w-5 h-5 text-[#c5a880]" />
            </div>
            <div>
              <span className="font-display text-base sm:text-lg tracking-wider font-semibold text-white block group-hover:text-[#c5a880] transition-colors">
                CARLO CORRO
              </span>
              <span className="text-[10px] tracking-widest text-[#c5a880] font-mono uppercase block">
                Sous Chef · Sushi Specialist
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium text-slate-300 hover:text-[#c5a880] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c5a880] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={CHEF_DATA.pdfDownloadUrl}
              download="Carlo_Corro_Sous_Chef_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded border border-[#c5a880]/60 text-[#c5a880] hover:bg-[#c5a880] hover:text-[#0b0f14] transition-all duration-200 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
            <a
              href="#contact"
              className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded bg-[#c5a880] text-[#0b0f14] hover:bg-[#d6bc96] transition-all duration-200 shadow-lg shadow-[#c5a880]/20"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Inquire</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={CHEF_DATA.pdfDownloadUrl}
              download
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#c5a880] border border-[#c5a880]/40 rounded hover:bg-[#c5a880]/10"
              title="Download CV"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#c5a880]" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-xl bg-[#0f1520] border border-[#c5a880]/30 shadow-2xl">
            <div className="flex flex-col space-y-3 pb-3 border-b border-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-300 hover:text-[#c5a880] py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 flex flex-col space-y-2">
              <a
                href={`tel:${CHEF_DATA.phone}`}
                className="flex items-center justify-center space-x-2 text-xs font-semibold py-2.5 rounded bg-[#c5a880] text-[#0b0f14]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {CHEF_DATA.phone}</span>
              </a>
              <a
                href={CHEF_DATA.pdfDownloadUrl}
                download
                className="flex items-center justify-center space-x-2 text-xs font-semibold py-2.5 rounded border border-[#c5a880]/60 text-[#c5a880]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official CV (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
