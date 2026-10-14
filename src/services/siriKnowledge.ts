import { PORTFOLIO_DATA } from '../data/portfolioData';

export interface SiriResponse {
  text: string;
  action?: {
    label: string;
    appId?: string;
    url?: string;
  };
  secondaryAction?: {
    label: string;
    appId?: string;
    url?: string;
  };
}

/**
 * In-depth knowledge base trained on every aspect of Bipin Chapagain's work,
 * portfolio, career timeline, education, software tools, pricing, and contact info.
 */
export const answerSiriQuery = (rawQuery: string): SiriResponse => {
  const q = rawQuery.toLowerCase().trim();

  // 1. Email & Contact Specifics
  if (q.includes('email') || q.includes('mail')) {
    return {
      text: `Bipin Chapagain's official direct email is bipinxettry2019@gmail.com. You can reach out anytime for project quotes, brand design, or web inquiries. (Note: Please do not use old agency addresses; bipinxettry2019@gmail.com is his active direct inbox).`,
      action: {
        label: "Email Bipin (bipinxettry2019@gmail.com)",
        url: "mailto:bipinxettry2019@gmail.com"
      },
      secondaryAction: {
        label: "Chat on WhatsApp",
        url: PORTFOLIO_DATA.personal.whatsappLink
      }
    };
  }

  // 2. WhatsApp / Phone / Direct Message / Hire
  if (q.includes('whatsapp') || q.includes('phone') || q.includes('call') || q.includes('contact') || q.includes('reach') || q.includes('hire') || q.includes('book')) {
    return {
      text: `You can connect directly with Bipin on WhatsApp at +977-9742290123 for immediate consultations, project discussions, and pricing inquiries. He is available for freelance contracts and corporate projects.`,
      action: {
        label: "Message on WhatsApp (+977-9742290123)",
        url: PORTFOLIO_DATA.personal.whatsappLink
      },
      secondaryAction: {
        label: "Send Email",
        url: "mailto:bipinxettry2019@gmail.com"
      }
    };
  }

  // 3. Location / Address
  if (q.includes('location') || q.includes('address') || q.includes('where') || q.includes('city') || q.includes('nepal') || q.includes('itahari') || q.includes('sunsari') || q.includes('kathmandu')) {
    return {
      text: `Bipin is based in Itahari, Sunsari, Nepal, with active professional operations across Kathmandu and Bhaisepati, Lalitpur. He works with clients locally across Nepal and internationally worldwide.`,
      action: {
        label: "View Weather in Itahari",
        appId: "weather"
      },
      secondaryAction: {
        label: "Contact via WhatsApp",
        url: PORTFOLIO_DATA.personal.whatsappLink
      }
    };
  }

  // 4. Experience, Timeline, Lakhan Traders & Blue Fox
  if (q.includes('lakhan') || q.includes('traders')) {
    return {
      text: `At Lakhan Traders (2025 - 2026), Bipin served as Senior Graphic Designer & Print Production Lead. He spearheaded commercial manufacturing operations including CNC laser vector pathing, custom apparel DTF transfers, precision die-cut packaging, and pre-press standardization.`,
      action: {
        label: "View Full Experience Window",
        appId: "experience"
      },
      secondaryAction: {
        label: "Open Resume",
        appId: "resume"
      }
    };
  }

  if (q.includes('blue fox') || q.includes('academy') || q.includes('hoster') || q.includes('lead management') || q.includes('instructor') || q.includes('technical support')) {
    return {
      text: `From 2026 - Present (Continuing), Bipin leads operations across the Blue Fox ecosystem in Itahari:\n• Blue Fox Pvt Ltd: Lead Management — directing creative workflows, project roadmaps, and client growth.\n• Blue Fox Academy: Lead Management & Instructor — training emerging designers in UI/UX, Figma, and Framer.\n• Blue Fox Hoster: Technical Support — overseeing server infrastructure, web hosting, and deployment.`,
      action: {
        label: "View Experience Details",
        appId: "experience"
      },
      secondaryAction: {
        label: "Check Portfolio Projects",
        appId: "projects"
      }
    };
  }

  if (q.includes('experience') || q.includes('history') || q.includes('work') || q.includes('career') || q.includes('job') || q.includes('background') || q.includes('vinayak')) {
    return {
      text: `Bipin brings 15+ years of multidisciplinary design and production experience:\n• 2026 - Present: Blue Fox Pvt Ltd (Lead Management), Blue Fox Academy (Instructor), Blue Fox Hoster (Technical Support)\n• 2025 - 2026: Lakhan Traders (Senior Graphic Designer & Print Production Lead)\n• 2019 - 2025: Vinayak Stickers & Printers (Product & Packaging Designer)\n• 2012 - 2018: Blue Fox Pvt Ltd (Graphic / UX UI Designer)`,
      action: {
        label: "Open Experience Window",
        appId: "experience"
      },
      secondaryAction: {
        label: "View Resume.pdf",
        appId: "resume"
      }
    };
  }

  // 5. Pricing, Rates, SMM Packages
  if (q.includes('smm') || q.includes('package') || q.includes('price') || q.includes('pricing') || q.includes('cost') || q.includes('rate') || q.includes('fee') || q.includes('budget')) {
    return {
      text: `Bipin offers 4 structured Social Media & Brand Growth Packages:\n1. Starter: Rs 8,000/mo (12 static graphics, content calendar, captions)\n2. Basic: Rs 15,000/mo (Most Popular! 20 designs, 2 motion reels, monthly analytics)\n3. Standard: Rs 28,000/mo (30 custom graphics, 6 motion reels, targeted ad setup)\n4. Premium: Rs 32,000/mo (Omni-channel growth, 40+ deliverables, 10 reels, ad management)`,
      action: {
        label: "Open SMM Packages Window",
        appId: "smm"
      },
      secondaryAction: {
        label: "Book SMM on WhatsApp",
        url: PORTFOLIO_DATA.personal.whatsappLink
      }
    };
  }

  // 6. Projects, Behance, Portfolio
  if (q.includes('project') || q.includes('portfolio') || q.includes('work') || q.includes('behance') || q.includes('case') || q.includes('sample') || q.includes('framer site')) {
    return {
      text: `Bipin's portfolio showcases 100% original designs from bipin.framer.ai and Behance across Social Media Design, Confectionery Packaging, Brand Identity, Visual Posters, and Print Advertising (e.g. Namkeen Bites, Royal Bakery, Himalayan Tea, Study Abroad Campaign).`,
      action: {
        label: "Explore Projects Showcase",
        appId: "projects"
      },
      secondaryAction: {
        label: "Visit bipin.framer.ai",
        url: "http://bipin.framer.ai/"
      }
    };
  }

  // 7. Packaging & Food Design
  if (q.includes('packaging') || q.includes('food') || q.includes('label') || q.includes('box') || q.includes('pouch') || q.includes('bottle') || q.includes('die-line') || q.includes('sticker')) {
    return {
      text: `Packaging is one of Bipin's signature specialties! He designs shelf-ready food packaging boxes, confectionery pouches, beverage bottle labels, and vector die-lines with pre-press precision (bleed management, CMYK/Pantone calibration) that dramatically boost retail shelf appeal.`,
      action: {
        label: "View Packaging Projects",
        appId: "projects"
      },
      secondaryAction: {
        label: "Inquire on WhatsApp",
        url: PORTFOLIO_DATA.personal.whatsappLink
      }
    };
  }

  // 8. Software, Tools, Technologies & Skills
  if (q.includes('tool') || q.includes('software') || q.includes('skill') || q.includes('photoshop') || q.includes('illustrator') || q.includes('figma') || q.includes('framer') || q.includes('corel') || q.includes('tech') || q.includes('stack')) {
    return {
      text: `Bipin's core software & technology toolkit includes:\n• Creative Design: Adobe Photoshop (85%), Illustrator (75%), CorelDRAW (60%), Figma (60%), Krita (50%)\n• Motion & Video: Premiere Pro (45%), After Effects (35%)\n• Web & Vibe Coding: Framer (35%), React, TypeScript, Tailwind CSS, Vite\n• Built-in macOS Tools: VS Code, Vector Editor, Photo Editor, Spreadsheet, and Document Suite.`,
      action: {
        label: "Open Creative Tools Suite",
        appId: "tools"
      },
      secondaryAction: {
        label: "Launch VS Code",
        appId: "vscode"
      }
    };
  }

  // 9. Education, Degrees & Certifications
  if (q.includes('education') || q.includes('school') || q.includes('college') || q.includes('degree') || q.includes('certificate') || q.includes('qualification') || q.includes('study')) {
    return {
      text: `Bipin's academic background and credentials:\n• Education:\n  - World Vision Modern Secondary School: +2 Higher Secondary (2022) in Science & Technology, Visual Communication\n  - Bhrikuti Secondary School: School Leaving Certificate (SLC, 2012)\n• Certifications:\n  - International Certified Career Coach (USA CDA, 2023)\n  - Design Thinking Professional (Global Skill Dev Council, 2022)\n  - Critical Infrastructure Protection (OPSWAT Academy, 2026)\n• Specialized Trainings: Cyber Security & Ethical Hacking, Python Programming, Digital Marketing.`,
      action: {
        label: "Open Resume & Credentials",
        appId: "resume"
      },
      secondaryAction: {
        label: "View About Bipin",
        appId: "about"
      }
    };
  }

  // 10. Services
  if (q.includes('service') || q.includes('offer') || q.includes('what can') || q.includes('what do') || q.includes('help') || q.includes('capability') || q.includes('capabilities')) {
    return {
      text: `Bipin offers end-to-end creative and technology services:\n1. Brand Identity Design (Logos, color palettes, typography, guidelines)\n2. Food & Product Packaging (Boxes, pouches, bottle labels, die-lines)\n3. UI/UX & Web Development (Figma interfaces, Framer sites, vibe coding)\n4. Social Media Marketing (Custom posts, motion reels, campaigns)\n5. Commercial Print Production (CNC laser cutting vectors, DTF transfers)\n6. Lead Management & Technical Support (Blue Fox ecosystem)`,
      action: {
        label: "Check Projects",
        appId: "projects"
      },
      secondaryAction: {
        label: "View SMM Packages",
        appId: "smm"
      }
    };
  }

  // 11. Languages & Communication
  if (q.includes('language') || q.includes('speak') || q.includes('nepali') || q.includes('hindi') || q.includes('english')) {
    return {
      text: `Bipin is multilingual and communicates fluently across:\n• Nepali: Native\n• Hindi: Fluent\n• English: Professional Working Proficiency\nHe collaborates smoothly with local and international teams.`,
      action: {
        label: "Chat with Bipin",
        url: PORTFOLIO_DATA.personal.whatsappLink
      }
    };
  }

  // 12. Turnaround Time / Delivery
  if (q.includes('turnaround') || q.includes('delivery') || q.includes('time') || q.includes('how long') || q.includes('timeline') || q.includes('deadline')) {
    return {
      text: `Standard project turnaround times:\n• Social media graphics: 24 to 48 hours\n• Packaging & label concepts: 3 to 7 business days\n• Full Brand Identity system: 1 to 2 weeks\n• Custom Framer / Web UI: 1 to 3 weeks\nRush delivery options can be arranged via WhatsApp inquiry.`,
      action: {
        label: "Inquire via WhatsApp",
        url: PORTFOLIO_DATA.personal.whatsappLink
      }
    };
  }

  // 13. System Settings / Wallpaper / Theme
  if (q.includes('wallpaper') || q.includes('desktop') || q.includes('setting') || q.includes('theme') || q.includes('sound')) {
    return {
      text: `You can customize this macOS environment in System Settings! The default desktop wallpaper is set to "Bipin's Creative Studio" portrait, and you can switch to macOS Coastal, Sonoma, Dark Mode, or toggle realistic sound effects anytime.`,
      action: {
        label: "Open System Settings",
        appId: "settings"
      }
    };
  }

  // 14. Default / General Catch-All
  return {
    text: `Bipin Chapagain (Bipin Xettry) is a Creative Brand Identity, Product & Packaging Designer and Vibe Coder based in Itahari, Sunsari, Nepal (with roots in Kathmandu). He has 15+ years of experience, leads management at Blue Fox Pvt Ltd, Blue Fox Academy, and Blue Fox Hoster, and previously led print production at Lakhan Traders (2025-2026). How can I assist you with his work, pricing, or contacting him?`,
    action: {
      label: "View Projects Showcase",
      appId: "projects"
    },
    secondaryAction: {
      label: "Chat on WhatsApp (+977-9742290123)",
      url: PORTFOLIO_DATA.personal.whatsappLink
    }
  };
};
