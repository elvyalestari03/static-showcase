export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
}

export interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  foundedYear: number;
  mission: string;
  vision: string;
  values: CompanyValue[];
  history: string;
  team: TeamMember[];
  contact: {
    address: string;
    city: string;
    country: string;
    phone: string;
    email: string;
    hours: string;
  };
  social: {
    linkedin: string;
    twitter: string;
    instagram: string;
  };
}

export const company: CompanyInfo = {
  name: "Nexus Consulting",
  tagline: "Transforming Ideas into Digital Reality",
  description: "We are a strategic consulting firm helping businesses navigate digital transformation with innovative solutions and data-driven strategies.",
  foundedYear: 2015,
  mission: "To empower organizations to thrive in the digital age by providing strategic guidance, innovative solutions, and measurable results that drive sustainable growth.",
  vision: "To be the most trusted partner for businesses seeking to harness the power of digital technology to transform their operations, engage their customers, and achieve their boldest ambitions.",
  values: [
    {
      title: "Innovation",
      description: "We constantly push boundaries and explore new possibilities to deliver cutting-edge solutions that keep our clients ahead of the curve.",
      icon: "Lightbulb"
    },
    {
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices in every interaction and engagement.",
      icon: "Shield"
    },
    {
      title: "Excellence",
      description: "We are committed to delivering exceptional quality in everything we do, exceeding expectations at every opportunity.",
      icon: "Award"
    },
    {
      title: "Collaboration",
      description: "We believe the best results come from working closely with our clients and each other, fostering partnerships that last.",
      icon: "Users"
    }
  ],
  history: `Nexus Consulting was founded in 2015 by a team of industry veterans who saw an opportunity to bridge the gap between business strategy and digital innovation. What started as a small team of five consultants has grown into a thriving organization of over 50 professionals serving clients across multiple industries.

Our journey began with a simple belief: that every organization, regardless of size or industry, deserves access to world-class strategic guidance. We built our reputation by delivering measurable results and treating every client's success as our own.

Over the years, we've had the privilege of working with startups, Fortune 500 companies, and everything in between. Each engagement has reinforced our commitment to excellence and deepened our expertise.

Today, Nexus Consulting stands as a leader in digital strategy and transformation, recognized for our innovative approaches and unwavering dedication to client success. As we look to the future, we remain committed to the principles that got us here: putting clients first, embracing change, and never settling for good enough.`,
  team: [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "With over 20 years of experience in digital transformation, Sarah leads our vision and strategic direction."
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Chief Strategy Officer",
      bio: "Marcus brings deep expertise in business strategy and has led transformations for Fortune 500 companies."
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Creative Director",
      bio: "Elena's award-winning design work has helped shape the visual identities of leading global brands."
    },
    {
      id: 4,
      name: "David Kim",
      role: "Head of Technology",
      bio: "David oversees our technical capabilities and ensures we stay at the forefront of emerging technologies."
    }
  ],
  contact: {
    address: "123 Innovation Drive, Suite 400",
    city: "San Francisco",
    country: "CA 94105, United States",
    phone: "+1 (555) 123-4567",
    email: "hello@nexusconsulting.com",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM PST"
  },
  social: {
    linkedin: "https://linkedin.com/company/nexusconsulting",
    twitter: "https://twitter.com/nexusconsulting",
    instagram: "https://instagram.com/nexusconsulting"
  }
};
