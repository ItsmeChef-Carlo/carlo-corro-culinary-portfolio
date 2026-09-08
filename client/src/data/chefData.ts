export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
  tag: string;
  icon: string;
}

export interface ReferenceItem {
  name: string;
  title: string;
  company: string;
  phone: string;
  email?: string;
  relation: string;
}

export interface MenuItem {
  title: string;
  category: 'Japanese' | 'Italian' | 'Yacht Special';
  description: string;
  highlights: string[];
  image: string;
}

export const CHEF_DATA = {
  name: "CARLO CRISANTO CORRO",
  role: "Sous Chef / Japanese Sushi Specialist",
  tagline: "Versatile Culinary Leader & Maritime Yacht Ready Professional",
  summary: "Culinary Professional with 7+ years of international hospitality experience in Sous Chef, Italian Sous Chef, and Chef de Partie roles across fine dining establishments. Specialized in authentic Japanese cuisine, precision sushi & sashimi omakase, artisanal Italian culinary, and luxury yacht galley operations. Fully certified with National Certificate I in Ship Catering, STCW/BT maritime safety, and fire rescue standards.",
  phone: "+966 56 981 9245",
  email: "carlocorro0620@gmail.com",
  location: "Jeddah / Riyadh, Saudi Arabia (Available Globally & Maritime)",
  availability: "Available for International Luxury Yacht & Fine Dining Opportunities",
  languages: [
    { name: "English", level: "Fluent (Professional Proficiency)" },
    { name: "Tagalog", level: "Native / Mother Tongue" }
  ],
  education: {
    degree: "Bachelor of Arts in Theology",
    institution: "Words of Life Theological Seminary College",
    period: "2008 – 2012",
    note: "Strong moral grounding, leadership integrity, discipline, and composed mental stamina in high-pressure brigade environments."
  },
  metrics: [
    { value: "7+", label: "Years Culinary Mastery" },
    { value: "2", label: "World-Class Cuisines (Japanese & Italian)" },
    { value: "100%", label: "Maritime & STCW Certified" },
    { value: "Top Tier", label: "VIP Yacht Galley Ready" }
  ],
  culinaryStrengths: [
    {
      title: "Japanese Sushi & Sashimi",
      description: "Artisanal Nigiri, Sashimi, Maki rolls, contemporary sushi burgers, delicate knife craftsmanship (Yanagiba / Deba techniques), and authentic Japanese flavor balancing.",
      icon: "Fish"
    },
    {
      title: "Italian Gastronomy & Pastry",
      description: "Signature European pastries, deconstructed confections, authentic doughs, client consultation for large-scale banquets, and dietary customization.",
      icon: "CakeSlice"
    },
    {
      title: "Menu Planning & Food Costing",
      description: "Strategic menu development, ingredient yield optimization, portion control, waste reduction, and rigorous kitchen inventory management.",
      icon: "Receipt"
    },
    {
      title: "Galley Operations & Superyacht Readiness",
      description: "Calm execution under maritime high-pressure environments, high-volume sea catering, independent provisioning, and immaculate organization.",
      icon: "Anchor"
    },
    {
      title: "HACCP & Dietary Standards",
      description: "Strict international food hygiene compliance, allergen isolation, gluten-free accommodations, and health authority safety protocols.",
      icon: "ShieldCheck"
    },
    {
      title: "Brigade Leadership & Mentorship",
      description: "Supervising multi-station kitchen workflows, hands-on training of commis and assistant chefs, maintaining peak morale and consistency.",
      icon: "Users"
    }
  ],
  experiences: [
    {
      role: "Sous Chef / Japanese Sushi",
      company: "Radical / Dar Al Abbar",
      period: "Nov 2024 – Aug 2026",
      location: "Saudi Arabia",
      tag: "Japanese Fine Dining",
      icon: "UtensilsCrossed",
      points: [
        "Supported sushi bar and restaurant menu development, curating premium sashimi, maki rolls, and traditional Japanese specialty dishes.",
        "Managed daily kitchen preparation, line stations, and culinary operations while strictly upholding international food-safety and HACCP hygiene standards.",
        "Optimized ingredient procurement and daily kitchen prep practices, directly contributing to measurable food-cost reductions and waste minimization.",
        "Supervised kitchen brigade workflow and maintained consistent plating perfection in a high-volume, fast-paced luxury dining room."
      ]
    },
    {
      role: "Italian Sous Chef",
      company: "United Foods Company",
      period: "Oct 2022 – Nov 2024",
      location: "Saudi Arabia",
      tag: "Italian & Pastry Operations",
      icon: "Sparkles",
      points: [
        "Led and managed pastry-section operations, directing the preparation of signature desserts, confections, and artisanal baked items.",
        "Trained, mentored, and supported assistant chefs and commis to achieve high production efficiency and standardized presentation.",
        "Consulted directly with VIP clients on bespoke pastry orders and luxury customized dessert tables for large-scale gala events.",
        "Monitored ingredient stocks and actively innovated gluten-free, vegan, and dietary-restricted options into daily preparation.",
        "Instituted precise inventory control and sustainable waste-reduction practices across daily shifts."
      ]
    },
    {
      role: "Chef de Partie",
      company: "Business Facilities Company",
      period: "Sep 2019 – Sep 2022",
      location: "Saudi Arabia",
      tag: "Specialty Appetizers & Sushi",
      icon: "Award",
      points: [
        "Spearheaded preparation of Japanese appetizers, specialized soups, and nigiri/sushi utilizing pristine daily-sourced fresh seafood.",
        "Contributed creative and contemporary menu concepts, including viral sushi burgers and modern fusion appetizers.",
        "Coordinated closely with front-of-house service staff to fulfill intricate guest customizations and strict allergy constraints.",
        "Ensured rigorous dietary-safety compliance and sustained high culinary output during intense peak dining hours."
      ]
    }
  ] as ExperienceItem[],
  certifications: [
    {
      title: "National Certificate I in Ship Catering",
      authority: "TESDA / Maritime Authority",
      description: "Specialized training in vessel catering operations, galley hygiene, food storage at sea, and crew/guest nutrition.",
      type: "Maritime"
    },
    {
      title: "STCW / BT Course (Standards of Training, Certification and Watchkeeping)",
      authority: "IMO Standard Maritime Training",
      description: "Personal Survival Techniques, Fire Prevention & Fire Fighting, Elementary First Aid, and Personal Safety & Social Responsibilities.",
      type: "Maritime"
    },
    {
      title: "Proficiency in Fire Rescue Boats",
      authority: "Maritime Safety Authority",
      description: "Handling emergency marine rescue craft and advanced waterborne firefighting protocols.",
      type: "Safety"
    },
    {
      title: "Safety Officer Awareness Certification",
      authority: "Occupational Safety and Health Standards",
      description: "Hazard identification, risk prevention, incident command, and workplace safety compliance.",
      type: "Safety"
    },
    {
      title: "National Certificate II in Fundamental Cookery",
      authority: "TESDA",
      description: "Comprehensive qualification covering foundational classical culinary techniques, stocks, mother sauces, and butchery.",
      type: "Culinary"
    },
    {
      title: "National Certificate II in Pastry and Bakery",
      authority: "TESDA",
      description: "Professional certification covering artisanal breads, laminations, classic European patisserie, and dessert art.",
      type: "Culinary"
    }
  ],
  references: [
    {
      name: "Anton Mykytas",
      title: "Head Chef",
      company: "Dar Al Abbar Company",
      phone: "+966 50 364 2741",
      relation: "Direct Executive Chef & Culinary Supervisor (Radical / Dar Al Abbar)"
    },
    {
      name: "Raghad Safar",
      title: "HR Manager",
      company: "United Foods Company",
      phone: "+966 55 180 1553",
      relation: "Human Resources Management (United Foods Company)"
    }
  ] as ReferenceItem[],
  portfolioGallery: [
    {
      title: "Master Sushi & Sashimi Omakase",
      category: "Japanese" as const,
      description: "Artfully composed selection of fresh salmon, bluefin tuna otoro with edible gold leaf, yellowtail hamachi, botan ebi, and intricate hand-carved cucumber fan garnishing.",
      highlights: ["Knife Craftsmanship", "Fresh Raw Fish Selection", "Gold Leaf Accent", "Traditional Plating"],
      image: "/manus-storage/sushi_omakase_a9746f41.jpg"
    },
    {
      title: "Artisanal Italian Patisserie Trio",
      category: "Italian" as const,
      description: "Deconstructed espresso tiramisu with crisp cacao tuile, Sicilian pistachio ricotta cannoli, and fresh glazed berry tartelette with spun gold leaf.",
      highlights: ["Artisanal Confectionery", "Gluten-Free Balance", "Pastry Precision", "VIP Event Presentation"],
      image: "/manus-storage/italian_pastry_93c0d5e3.jpg"
    },
    {
      title: "Superyacht Galley Operation & Provisioning",
      category: "Yacht Special" as const,
      description: "Fully-equipped commercial grade marine galley designed for offshore voyages, fine dining preparation at sea, and high-standard galley sanitation.",
      highlights: ["STCW Certified Ready", "Offshore Provisioning", "HACCP Maritime Standards", "Calm Under Sea Conditions"],
      image: "/manus-storage/luxury_yacht_galley_65872dd4.jpg"
    },
    {
      title: "Precision Yanagiba Knife Craftsmanship",
      category: "Japanese" as const,
      description: "Traditional single-bevel Yanagiba technique executing delicate cuts for uramaki, sashimi morsels, and contemporary sushi innovations.",
      highlights: ["Precision Filleting", "Sushi Burger Mastery", "Texture Control", "Zero-Waste Portioning"],
      image: "/manus-storage/sushi_craftsmanship_03f8656a.jpg"
    },
    {
      title: "Sunset Al Fresco Yacht Banquet",
      category: "Yacht Special" as const,
      description: "Multi-course gourmet private dining service set on the aft deck, marrying fresh catch seafood, Italian pasta courses, and pairing selections.",
      highlights: ["VIP Private Dining", "Multi-Course Coordination", "Al Fresco Elegance", "Guest Allergy Discretion"],
      image: "/manus-storage/yacht_deck_dining_7040ace4.jpg"
    }
  ],
  pdfDownloadUrl: "/manus-storage/Carlo_Corro_Sous_Chef_CV_Portfolio_Updated_ae1ee73a.pdf"
};
