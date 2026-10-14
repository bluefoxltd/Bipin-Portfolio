export interface SmmPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  isPopular?: boolean;
  features: string[];
  adBudget?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  behanceUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  badge: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
    category: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  details: string;
}

export interface CertificationItem {
  title: string;
  organization: string;
  date: string;
}

export interface ExternalTool {
  id: string;
  name: string;
  category: 'creative' | 'office' | 'developer';
  description: string;
  url: string;
  shortCode: string;
  color: string;
  badge?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Bipin Chapagain",
    title: "Brand Identity, Product & Packaging Designer | Vibe Coder",
    headline: "Branding that you need Indeed",
    subheadline: "Crafting Unique Brand Identities · Elevate your brand with custom identity and package design.",
    experienceYears: "15+",
    stats: {
      projectsCompleted: "180+",
      clientSatisfaction: "96%",
      yearsExperience: "15+"
    },
    location: "Itahari, Sunsari & Kathmandu, Nepal",
    address: "Itahari, Sunsari, Nepal",
    email: "bipinxettry2019@gmail.com",
    whatsappPhone: "+977-9742290123",
    whatsappLink: "https://wa.me/9779742290123",
    instagram: "https://www.instagram.com/bpnxetry/",
    facebook: "https://www.facebook.com/profile.php?id=61578128660414",
    linkedin: "https://www.linkedin.com/in/bipinchapagain",
    github: "https://github.com/bluefoxltd",
    framerSite: "http://bipin.framer.ai/",
    behance: "https://www.behance.net/bipinchapagain",
    profilePhoto: "https://framerusercontent.com/images/B71N7auZ3OgQdiZzOANotZXcapE.jpeg?width=960",
    profilePicSecondary: "https://framerusercontent.com/images/2ykNbP9yTVcgDAh16NU417q8mM.png?width=741",
    profileSummary: "I'm Bipin Chapagain, a passionate Brand Identity & Product Designer based in Kathmandu & Itahari. With 15+ Years of Experience I specialize in crafting bold visual identities, Print Designs, UX/UI and packaging that captivate and inspire, blending creativity with strategy to elevate brands.",
    bio: "Multi-disciplinary Designer with a unique background bridging UX/UI design, commercial print production, Visual Design, Video Editing and product packaging. Proven track record in delivering intuitive digital interfaces alongside shelf-ready food packaging and precision-cut graphics, expertly balancing aesthetic user journeys with technical manufacturing constraints.",
    quote: "Designing interfaces with soul, coding experiences with rhythm, and bridging digital products with industrial precision.",
  },

  education: [
    {
      institution: "WORLD VISION MODERN SECONDARY SCHOOL",
      degree: "+2 (Higher Secondary)",
      year: "2022",
      details: "Science & Technology, Visual Communication"
    },
    {
      institution: "BHRIKUTI SECONDARY SCHOOL",
      degree: "School Leaving Certificate (SLC)",
      year: "2012",
      details: "High Academic Standing, Foundations of Art & Computing"
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "International Certified Career Coach",
      organization: "Career Development Alliance (USA)",
      date: "25-26 August, 2023"
    },
    {
      title: "Design Thinking Professional",
      organization: "Global Skill Development Council",
      date: "January 10, 2022"
    },
    {
      title: "Introduction to Critical Infrastructure Protection",
      organization: "OPSWAT Academy",
      date: "06 June, 2026"
    }
  ] as CertificationItem[],

  trainings: [
    "Cyber Security & Ethical Hacking",
    "Python Programming",
    "Digital Marketing & SMM Strategy"
  ],

  languages: [
    { name: "Nepali", fluency: "Native" },
    { name: "Hindi", fluency: "Fluent" },
    { name: "English", fluency: "Professional Working Proficiency" }
  ],

  interests: [
    "Graphic Design",
    "Visual Design",
    "UX/UI Design",
    "Product Design",
    "Packaging Design",
    "Digital Art",
    "Motion Design",
    "Character Design",
    "Apparels Design",
    "Print Design",
    "3D Animation",
    "Social Media Design"
  ],

  experience: [
    {
      id: "exp-bluefox-2026",
      role: "Lead Management & Technical Support Lead",
      company: "Blue Fox Pvt Ltd · Blue Fox Academy · Blue Fox Hoster",
      period: "2026 - Present (Continuing)",
      location: "Itahari, Sunsari, Nepal",
      description: "Directing lead operations and technology across the full Blue Fox enterprise ecosystem:",
      highlights: [
        "Blue Fox Pvt Ltd: Lead Management — directing creative workflows, project roadmaps, client communications, and social growth marketing.",
        "Blue Fox Academy: Lead Management & Instructor — mentoring emerging designers, conducting masterclasses on UI/UX, Figma, Framer, and modern creative workflows.",
        "Blue Fox Hoster: Technical Support — overseeing server uptime, deployment configurations, client domain infrastructures, and web hosting support."
      ]
    },
    {
      id: "exp-lakhan-2025",
      role: "Senior Graphic Designer & Print Production Lead",
      company: "Lakhan Traders",
      period: "2025 - 2026",
      location: "Nepal",
      description: "Senior Graphic Designer and Print Production Lead driving creative and manufacturing operations:",
      highlights: [
        "Bridged innovative branding and complex industrial manufacturing processes, including CNC laser cutting, custom apparel DTF transfers, and precision die-cut packaging.",
        "Optimized pre-press workflows, established high-quality standard templates, and mentored design staff to deliver premium, error-free commercial graphics under tight deadlines.",
        "Engineered scalable production pipelines for high-precision digital cutting and industrial print assets."
      ]
    },
    {
      id: "exp-vinayak-2019",
      role: "Product Designer",
      company: "Vinayak Stickers & Printers",
      period: "2019 - 2025",
      location: "Nepal",
      description: "Served as a dedicated Product and Packaging Designer specializing in consumer-facing food products:",
      highlights: [
        "Conceptualized and designed end-to-end food packaging layouts, regulatory-compliant labels, and custom product stickers that significantly enhanced retail shelf appeal.",
        "Conducted extensive technical pre-press engineering of vector die-lines, bleed management, and registration marks for high-speed label presses.",
        "Calibrated CMYK and Pantone color profiles across vinyl, clear films, and metallic substrates."
      ]
    },
    {
      id: "exp-bluefox-early",
      role: "Graphic / UX UI Designer",
      company: "Blue Fox Pvt Ltd",
      period: "2012 - 2018",
      location: "Itahari & Kathmandu, Nepal",
      description: "Dynamic Hybrid Designer with comprehensive foundations in digital interfaces and commercial graphics:",
      highlights: [
        "Designed user journeys, wireframes, and high-fidelity digital interfaces in Figma and Framer.",
        "Mastered advanced technical skills in vector pathing for laser/die-cutting and DTF apparel printing."
      ]
    }
  ] as ExperienceItem[],

  // Software Skills
  cvSoftwareSkills: [
    { name: "Photoshop", level: 85, icon: "photoshop", category: "Adobe", description: "Raster manipulation, photo composite, packaging mockups" },
    { name: "Illustrator", level: 75, icon: "illustrator", category: "Adobe", description: "Vector identity, die-lines, pre-press precision, logo design" },
    { name: "Coreldraw", level: 60, icon: "coreldraw", category: "Vector", description: "Commercial print layouts, laser cutting vectors, signage" },
    { name: "Figma", level: 60, icon: "figma", category: "UI/UX", description: "Wireframes, user journeys, responsive web & app design systems" },
    { name: "Krita", level: 50, icon: "krita", category: "Art", description: "Digital painting, character art, conceptual illustrations" },
    { name: "Premiere", level: 45, icon: "premiere", category: "Video", description: "Video editing, reels, promo clips, commercial pacing" },
    { name: "After Effects", level: 35, icon: "aftereffects", category: "Motion", description: "Motion graphics, title intros, visual effects" },
    { name: "Framer", level: 35, icon: "framer", category: "Web", description: "Interactive web design, micro-interactions, responsive publishing" }
  ],

  // 100% Original Projects from bipin.framer.ai with authentic Framer CDN images & Behance links
  projects: [
    {
      id: "proj-study-abroad",
      title: "Study Abroad Social Media Post",
      category: "Social Media Design",
      description: "High-engagement social media promotional visuals tailored for international education consultancy, driving student inquiries and brand visibility.",
      image: "https://framerusercontent.com/images/vSFtF8TzkQjPdgk5tjwIXED00.png?width=954",
      tags: ["Social Media", "Photoshop", "Typography", "Marketing"],
      behanceUrl: "https://www.behance.net/gallery/231091495/Study-Aborad-Social-Media-Post",
      liveUrl: "https://www.behance.net/gallery/231091495/Study-Aborad-Social-Media-Post",
      featured: true
    },
    {
      id: "proj-photoshop-poster",
      title: "Photoshop Poster",
      category: "Visual Design & Composite",
      description: "Complex digital compositing, dramatic lighting effects, and cinematic typography crafted in Adobe Photoshop for commercial event branding.",
      image: "https://framerusercontent.com/images/AKJ6FsLE2NGlHhVMJMmsT2DaUI.png?width=1082",
      tags: ["Photoshop", "Digital Art", "Composite", "Retouching"],
      behanceUrl: "https://www.behance.net/gallery/222173209/Photoshop-Poster",
      liveUrl: "https://www.behance.net/gallery/222173209/Photoshop-Poster",
      featured: true
    },
    {
      id: "proj-grilled-sekuwa",
      title: "Grilled Sekuwa",
      category: "Packaging & Food Branding",
      description: "Appetite-driven culinary branding, food packaging identity, and promotional collateral for authentic Nepali grilled meat franchise.",
      image: "https://framerusercontent.com/images/xuYyzwAcg1C9j1hJXT758GDHSo.png?width=561",
      tags: ["Food Packaging", "Illustrator", "Branding", "Print"],
      behanceUrl: "https://www.behance.net/gallery/222427273/Grilled-Sekuwa",
      liveUrl: "https://www.behance.net/gallery/222427273/Grilled-Sekuwa",
      featured: true
    },
    {
      id: "proj-wafer-chocolate",
      title: "Wafer Chocolate Packaging",
      category: "Product Packaging",
      description: "Shelf-ready commercial confectionery packaging with high-contrast color psychology, foil stamping die-lines, and industrial barcode integration.",
      image: "https://framerusercontent.com/images/4xDVrftf2IhzcqtcL6y48FOKK4E.png?width=1096",
      tags: ["Packaging", "Illustrator", "Pantone", "Pre-Press"],
      behanceUrl: "https://www.behance.net/gallery/230472907/Wafer-Chocolate-Packaging",
      liveUrl: "https://www.behance.net/gallery/230472907/Wafer-Chocolate-Packaging",
      featured: true
    },
    {
      id: "proj-ojesh-branding",
      title: "Ojesh Branding",
      category: "Brand Identity",
      description: "Complete visual identity system comprising logo design, stationary suites, color tokens, and brand guidelines for corporate positioning.",
      image: "https://framerusercontent.com/images/tNCkFK57IzYbJr0Q6BL1DvwoXxg.png?width=706",
      tags: ["Brand Identity", "Logo Design", "Figma", "Guidelines"],
      behanceUrl: "https://www.behance.net/gallery/222172439/Ojesh-Branding",
      liveUrl: "https://www.behance.net/gallery/222172439/Ojesh-Branding",
      featured: true
    },
    {
      id: "proj-green-harvest",
      title: "Green Harvest",
      category: "Packaging & Eco Branding",
      description: "Eco-friendly sustainable product packaging design celebrating agricultural purity with earthy palettes and clean minimalist typography.",
      image: "https://framerusercontent.com/images/zgvpvmZsK0aRQapQLmoxtDJFL8.png?width=1203",
      tags: ["Eco Packaging", "Illustrator", "Sustainability", "Print"],
      behanceUrl: "https://www.behance.net/gallery/222169777/Green-Harvest",
      liveUrl: "https://www.behance.net/gallery/222169777/Green-Harvest",
      featured: true
    },
    {
      id: "proj-social-media-design",
      title: "Social Media Design",
      category: "Social Media Design",
      description: "Strategic digital marketing banners, Instagram carousel series, and promotional templates engineered to maximize CTR and follower engagement.",
      image: "https://framerusercontent.com/images/K3f4lwdNrErkGX6xnrFhs4N6ug.png?width=719",
      tags: ["Social Media", "Reels Graphics", "Photoshop", "SMM"],
      behanceUrl: "https://www.behance.net/gallery/222154441/Social-Media-Design",
      liveUrl: "https://www.behance.net/gallery/222154441/Social-Media-Design",
      featured: true
    },
    {
      id: "proj-advertisement-design",
      title: "Advertisement Design",
      category: "Commercial Print & Advertising",
      description: "Full-page magazine advertisements, outdoor hoardings, and digital display campaigns created for commercial retail promotions.",
      image: "https://framerusercontent.com/images/8ns6pFZotpMIrB6kmnJ37pOrjU.png?width=930",
      tags: ["Advertisement", "Print Production", "CorelDraw", "Illustrator"],
      behanceUrl: "https://www.behance.net/gallery/222155131/Advertisement-Design",
      liveUrl: "https://www.behance.net/gallery/222155131/Advertisement-Design",
      featured: true
    },
    // Featured Framer Showcase Assets
    {
      id: "proj-brand-identity-system",
      title: "Brand Identity & Product Systems",
      category: "Brand Identity",
      description: "End-to-end design token systems, typography scales, and high-fidelity product mockups featured on bipin.framer.ai.",
      image: "https://framerusercontent.com/images/tOVWKiQMnmFI3jv9FNqDx1P6U.png?width=1024",
      tags: ["Figma", "Design System", "Product Mockup"],
      liveUrl: "http://bipin.framer.ai/",
      featured: true
    },
    {
      id: "proj-uxui-experience",
      title: "UX/UI Design & Micro-Interactions",
      category: "UX/UI Design",
      description: "Fluid web interactions, user journey wireframes, and responsive dashboard design built for modern SaaS and mobile platforms.",
      image: "https://framerusercontent.com/images/57Vxzp242shwV9mz0IrrIuiUzDg.webp?width=1024",
      tags: ["Framer", "UI/UX", "Responsive", "Interactive"],
      liveUrl: "http://bipin.framer.ai/",
      featured: true
    },
    {
      id: "proj-apparel-design",
      title: "Apparel Design & Production Tech Packs",
      category: "Apparel Design",
      description: "Striking streetwear graphics, custom typography, DTF printing separations, and complete technical specifications for clothing manufacturers.",
      image: "https://framerusercontent.com/images/zRQQpx0shzwwJ4uBXBND3yibyLQ.webp?width=1024",
      tags: ["Apparel", "DTF Transfer", "Fashion Tech Pack"],
      liveUrl: "http://bipin.framer.ai/",
      featured: true
    },
    {
      id: "proj-digital-art",
      title: "Digital Art & Creative Packaging",
      category: "Packaging & Art",
      description: "Concept art, custom label illustrations, and 3D product visualizations that captivate consumers on retail shelves.",
      image: "https://framerusercontent.com/images/EQvJdRGIpqnJQNALR3Vf7UDJg.webp?width=1024",
      tags: ["Digital Art", "Krita", "Labeling"],
      liveUrl: "http://bipin.framer.ai/",
      featured: true
    }
  ] as ProjectItem[],

  // 100% Original Client Testimonials from bipin.framer.ai with real avatar photos
  testimonials: [
    {
      id: "test-1",
      clientName: "Richards Johnson",
      role: "Creative Director & Lead Designer",
      company: "Creative Director & Lead Designer",
      avatar: "https://framerusercontent.com/images/PjaPY2S6qP6ii6fCxTJHhHU66SM.png?width=1200",
      quote: "Working with Bipin was a seamless experience. His ability to merge creativity with functionality resulted in designs that not only looked stunning but also drove meaningful engagement. Highly recommended!"
    },
    {
      id: "test-2",
      clientName: "June Lee",
      role: "CEO of GreenRoots",
      company: "GreenRoots Eco Brand",
      avatar: "https://framerusercontent.com/images/GTWhJyJde9nAeuMXqgYJh6jQhrU.jpg?width=800",
      quote: "Bipin's strategic approach to design brought our brand vision to life. The packaging and brand elements he developed elevated our aesthetic and aligned perfectly with our sustainability values."
    },
    {
      id: "test-3",
      clientName: "Jona Carter",
      role: "Founder of EcoLux",
      company: "EcoLux Luxury Goods",
      avatar: "https://framerusercontent.com/images/c5E9pkEhKO6BmnqFuXLWa9Xqw34.png?width=904",
      quote: "Every project Bipin touches turns into a perfect blend of design and purpose. He crafted packaging that reflected our eco-friendly mission while making our products stand out on the shelves."
    },
    {
      id: "test-4",
      clientName: "Sofia Toms",
      role: "Founder at GreenK Studios",
      company: "GreenK Studios",
      avatar: "https://framerusercontent.com/images/hSbSnYWGLq3elsCJfJAmFGgQZOc.png?width=1200",
      quote: "Bipin's designs speak for themselves — bold, strategic, and impactful. He took the time to understand our brand, delivering packaging concepts that resonated with our target audience and boosted our product's visibility."
    }
  ] as TestimonialItem[],

  // 100% Original Design Process from bipin.framer.ai
  process: [
    {
      step: "01",
      badge: "Step 1",
      title: "Define Your Vision",
      description: "Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity."
    },
    {
      step: "02",
      badge: "Step 2",
      title: "Submit Your Request",
      description: "As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life—on time and beyond expectations."
    },
    {
      step: "03",
      badge: "Step 3",
      title: "Project Delivered",
      description: "Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly."
    }
  ] as ProcessStep[],

  // 100% Original Design Services from bipin.framer.ai
  servicesList: [
    {
      id: "logo-design",
      title: "Logo Design",
      tagline: "Memorable Visual Anchors",
      description: "Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems — ensuring every touchpoint reflects your brand's essence.",
      iconName: "Palette"
    },
    {
      id: "package-design",
      title: "Package Design",
      tagline: "Shelf-Ready Consumer Impact",
      description: "Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers — turning first impressions into lasting brand loyalty.",
      iconName: "Layers"
    },
    {
      id: "ux-ui-design",
      title: "UX/UI Design",
      tagline: "Effortlessly Functional Digital Presence",
      description: "We bridge the gap between stunning visual identity and seamless user interaction, ensuring your digital presence is not just beautiful, but effortlessly functional.",
      iconName: "Code2"
    },
    {
      id: "brand-design",
      title: "Brand Design",
      tagline: "Comprehensive Visual Systems",
      description: "Tailored design mockups that align perfectly with your brand's aesthetic — because every detail matters when showcasing your product's true potential.",
      iconName: "Sparkles"
    },
    {
      id: "mockup-design",
      title: "Mockup Design",
      tagline: "Photorealistic 3D Previews",
      description: "Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview of how your packaging and visuals will stand out in the real world.",
      iconName: "Laptop"
    },
    {
      id: "apparel-design",
      title: "Apparel Design",
      tagline: "Fashion Tech Packs & Print Separations",
      description: "From initial concept sketch to production-ready tech packs, we bring your clothing line to life with striking visual identity and market-ready precision.",
      iconName: "Shirt"
    }
  ] as ServiceDetail[],

  // Extended Services Tags from bipin.framer.ai
  extendedServices: [
    "Product Design",
    "Brand Identity Design",
    "UX Design",
    "Digital Art",
    "Print Design",
    "Packaging Design",
    "Labeling",
    "Apparel Design",
    "Video Editing",
    "Motion Graphics",
    "Copywriting",
    "Re-Branding",
    "Digital Marketing",
    "Brand Landing Pages",
    "Social Media",
    "Brand Visibility",
    "Trainings"
  ],

  // 100% Original FAQs from bipin.framer.ai
  faqs: [
    {
      question: "What services do you provide?",
      answer: "I specialize in brand identity and package design, with experience in web design, UI/UX, and creating holistic brand experiences that captivate and convert."
    },
    {
      question: "How do I start working with you?",
      answer: "You can easily start by clicking 'Book a Free Call' or messaging directly on WhatsApp at +977-9742290123 / emailing bipinxettry2019@gmail.com with your project brief."
    },
    {
      question: "What design tools do you use?",
      answer: "I work with industry-standard creative tools including Adobe Photoshop, Illustrator, CorelDraw, Figma, Framer, InDesign, Premiere Pro, After Effects, and Adobe Dimension."
    },
    {
      question: "How long does a project take?",
      answer: "As a dedicated designer, most standard graphics and packaging prototypes are delivered within 2-3 days with precision and high attention to detail."
    },
    {
      question: "Do you provide revisions?",
      answer: "Yes, I offer iterative revision rounds to guarantee that your final brand assets and packaging die-lines meet your exact expectations and technical manufacturing standards."
    },
    {
      question: "What industries do you work with?",
      answer: "I have extensive experience with food & beverage packaging, educational consultancies, fashion apparel, eco-conscious wellness brands, and tech startups."
    },
    {
      question: "Do you offer development services?",
      answer: "Yes! In addition to visual design, I build interactive responsive websites in Framer and modern web applications with React, TypeScript, and Tailwind CSS."
    },
    {
      question: "What is your pricing structure?",
      answer: "I offer both milestone-based project pricing and flexible monthly subscription plans (such as our structured Social Media Packages starting from Rs 8,000/month)."
    },
    {
      question: "Can you redesign my existing website or packaging?",
      answer: "Absolutely. I specialize in re-branding legacy products, modernizing typography, and converting outdated packaging into shelf-popping commercial assets."
    }
  ] as FaqItem[],

  // SMM Packages (Special Developer Offer matching SMM.png)
  smmPackages: [
    {
      id: "starter",
      name: "Starter",
      tagline: "For marketing newbies and small house teams",
      price: "Rs 8,000",
      period: "/ mon",
      isPopular: false,
      features: [
        "Platform (Facebook, Instagram)",
        "Professional Copywriting",
        "Post Scheduling & Calendar",
        "5 Graphical Banners",
        "1 Free Festive Greeting Post"
      ]
    },
    {
      id: "basic",
      name: "Basic",
      tagline: "For new but established companies seeking to grow",
      price: "Rs 15,000",
      period: "/ mon",
      isPopular: true,
      features: [
        "Platform (Facebook, Instagram)",
        "Page Setup and Optimization",
        "Planning and Strategy",
        "Profile / Cover Image Creation",
        "Monthly Content Calendar",
        "10 Graphical Banners",
        "2 High-Retention GIF / Reels",
        "1 Free Festive Post",
        "Ad Budget $20 (included)",
        "Scheduling the Post",
        "Monitor and Growth Analysis",
        "Monthly Performance Report",
        "Meta Ads Management"
      ]
    },
    {
      id: "standard",
      name: "Standard",
      tagline: "For those looking to grow their business/brand",
      price: "Rs 28,000",
      period: "/ mon",
      isPopular: false,
      features: [
        "Platform (Facebook, Instagram, as per your need)",
        "Page Setup and Optimization",
        "Competitor Market Analysis",
        "Planning and Growth Strategy",
        "Profile / Cover Image Creation",
        "Keyword-Based Content",
        "Monthly Content Calendar",
        "15 Graphical Banners",
        "4 High-Retention GIF / Reels",
        "Voice-over for Reels",
        "2 Free Festive Posts",
        "Ad Budget $30 (included)",
        "Targeted Campaign Auditing",
        "Weekly Milestone Reviews"
      ]
    },
    {
      id: "premium",
      name: "Premium",
      tagline: "For ambitious businesses seeking dominant market presence",
      price: "Rs 32,000",
      period: "/ mon",
      isPopular: false,
      features: [
        "Platform (Facebook, Instagram, LinkedIn, as per your need)",
        "Comprehensive Page Setup & Brand Identity",
        "Deep Competitor & Audience Analysis",
        "Full-Funnel Planning and Strategy",
        "Custom Profile / Banner Kit",
        "Keyword & SEO-Optimized Copy",
        "Dynamic Monthly Content Calendar",
        "20 Bespoke Graphical Banners",
        "8 Viral GIF / Reels Productions",
        "Professional Voice-over for Reels",
        "3 Free Festive Posts",
        "Ad Budget $50 (included)",
        "Full Paid Ad Engine Setup & Retargeting",
        "Dedicated Account Lead & 24/7 Priority Support"
      ]
    }
  ] as SmmPlan[],

  toolsSuite: [
    {
      id: "photo-editor",
      name: "Photo Editor",
      category: "creative",
      description: "Layers, blend modes, brushes, selections, curves and 55+ filters.",
      url: "https://edititall.com/photo-editor/app",
      shortCode: "Ph",
      color: "from-teal-800 to-emerald-950",
      badge: "Free"
    },
    {
      id: "vector-editor",
      name: "Vector Editor",
      category: "creative",
      description: "Pen tool, Pathfinder booleans, layers, smart guides and SVG import/export.",
      url: "https://edititall.com/vector-editor/app",
      shortCode: "Vc",
      color: "from-amber-700 to-yellow-900",
      badge: "Free"
    },
    {
      id: "spreadsheet",
      name: "Spreadsheet",
      category: "office",
      description: "Formulas, ranges and instant recalculation, right in your browser.",
      url: "https://edititall.com/sheet-editor/app",
      shortCode: "Sh",
      color: "from-emerald-800 to-green-950",
      badge: "Free"
    },
    {
      id: "document",
      name: "Document",
      category: "office",
      description: "Write and format rich text with real page layout — nothing is uploaded.",
      url: "https://edititall.com/word-editor/app",
      shortCode: "Wd",
      color: "from-blue-700 to-indigo-900",
      badge: "Free"
    },
    {
      id: "presentation",
      name: "Presentation",
      category: "office",
      description: "Design slides with shapes and snap-align guides, then present seamlessly.",
      url: "https://edititall.com/slides-editor/app",
      shortCode: "Sl",
      color: "from-rose-800 to-red-950",
      badge: "Free"
    },
    {
      id: "vscode",
      name: "VS Code Web",
      category: "developer",
      description: "Full-featured online development environment with extensions, Git integration, and terminal.",
      url: "https://vscode.dev/",
      shortCode: "Vs",
      color: "from-blue-600 to-cyan-800",
      badge: "Dev"
    }
  ] as ExternalTool[],

  contactInfo: {
    phone: "+977-9742290123",
    whatsapp: "+977-9742290123",
    email: "bipinxettry2019@gmail.com",
    address: "Itahari, Sunsari, Nepal",
    website: "www.bipin.framer.ai",
    responseHours: "Sun - Fri: 9:00 AM - 8:00 PM NPT",
    availability: "Available for Senior Product Design, Packaging & SMM Contracts"
  }
};
