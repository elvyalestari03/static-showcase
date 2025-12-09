export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: string;
  content: string;
  features: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Digital Strategy",
    slug: "digital-strategy",
    description: "Transform your business with data-driven digital strategies that deliver measurable results.",
    icon: "Target",
    content: `Our Digital Strategy service helps organizations navigate the complexities of digital transformation. We analyze your current digital presence, identify opportunities for growth, and develop comprehensive roadmaps that align technology investments with business objectives.

Our team of strategists works closely with your leadership to understand your unique challenges and aspirations. We leverage industry best practices and cutting-edge methodologies to create strategies that are both innovative and pragmatic.

From market analysis to competitive positioning, we provide the insights and frameworks needed to make informed decisions about your digital future.`,
    features: [
      "Comprehensive digital maturity assessment",
      "Competitive landscape analysis",
      "Technology roadmap development",
      "KPI framework and measurement",
      "Change management planning"
    ],
    benefits: [
      "Clear vision for digital transformation",
      "Aligned technology investments",
      "Improved operational efficiency",
      "Enhanced customer experience",
      "Sustainable competitive advantage"
    ]
  },
  {
    id: 2,
    title: "Brand Development",
    slug: "brand-development",
    description: "Build a distinctive brand identity that resonates with your audience and stands the test of time.",
    icon: "Palette",
    content: `Our Brand Development service creates compelling brand identities that capture the essence of your organization. We go beyond logos and color palettes to develop comprehensive brand systems that communicate your values and differentiate you in the marketplace.

We believe great brands are built on authentic stories and meaningful connections. Our process begins with deep discovery—understanding your history, culture, and aspirations. From there, we craft visual and verbal identities that feel both fresh and timeless.

Whether you're launching a new venture or refreshing an established brand, we provide the strategic foundation and creative execution to make your brand memorable.`,
    features: [
      "Brand strategy and positioning",
      "Visual identity design",
      "Brand voice and messaging",
      "Brand guidelines development",
      "Brand architecture planning"
    ],
    benefits: [
      "Stronger market differentiation",
      "Increased brand recognition",
      "Consistent customer experience",
      "Higher perceived value",
      "Improved customer loyalty"
    ]
  },
  {
    id: 3,
    title: "Web Development",
    slug: "web-development",
    description: "Create powerful, scalable web solutions that drive engagement and business growth.",
    icon: "Globe",
    content: `Our Web Development service delivers exceptional digital experiences that combine stunning design with robust functionality. We build websites and web applications that not only look beautiful but perform flawlessly across all devices and platforms.

Using modern technologies and development practices, we create solutions that are fast, secure, and easy to maintain. Our development process emphasizes clean code, thorough testing, and comprehensive documentation.

From corporate websites to complex web applications, we have the expertise to bring your digital vision to life while ensuring scalability and long-term maintainability.`,
    features: [
      "Responsive design implementation",
      "Custom CMS development",
      "E-commerce solutions",
      "API integration and development",
      "Performance optimization"
    ],
    benefits: [
      "Enhanced user engagement",
      "Improved conversion rates",
      "Reduced maintenance costs",
      "Better search visibility",
      "Scalable architecture"
    ]
  },
  {
    id: 4,
    title: "Content Marketing",
    slug: "content-marketing",
    description: "Engage your audience with strategic content that educates, inspires, and converts.",
    icon: "FileText",
    content: `Our Content Marketing service helps you build meaningful connections with your audience through valuable, relevant content. We develop comprehensive content strategies that align with your business goals and resonate with your target audience.

From blog posts and whitepapers to video content and social media campaigns, we create content that establishes thought leadership and drives engagement. Our approach is data-driven, ensuring that every piece of content serves a strategic purpose.

We believe in quality over quantity—creating fewer, more impactful pieces that truly move the needle for your business.`,
    features: [
      "Content strategy development",
      "Editorial calendar planning",
      "SEO-optimized content creation",
      "Multi-channel distribution",
      "Performance analytics and reporting"
    ],
    benefits: [
      "Increased organic traffic",
      "Established thought leadership",
      "Higher engagement rates",
      "Improved lead generation",
      "Stronger brand authority"
    ]
  },
  {
    id: 5,
    title: "Analytics & Insights",
    slug: "analytics-insights",
    description: "Turn data into actionable insights that drive smarter business decisions.",
    icon: "BarChart3",
    content: `Our Analytics & Insights service transforms raw data into strategic intelligence. We help organizations understand their customers, optimize their operations, and identify new opportunities through advanced analytics and data visualization.

We implement robust measurement frameworks and create custom dashboards that provide real-time visibility into key performance indicators. Our analysts go beyond reporting to provide actionable recommendations that drive business improvement.

Whether you need help with web analytics, customer analytics, or business intelligence, we provide the expertise and tools to unlock the value of your data.`,
    features: [
      "Analytics implementation and audit",
      "Custom dashboard development",
      "Customer journey analysis",
      "Conversion optimization",
      "Predictive analytics modeling"
    ],
    benefits: [
      "Data-driven decision making",
      "Improved ROI visibility",
      "Optimized marketing spend",
      "Enhanced customer understanding",
      "Identified growth opportunities"
    ]
  },
  {
    id: 6,
    title: "UX/UI Design",
    slug: "ux-ui-design",
    description: "Design intuitive, beautiful interfaces that delight users and achieve business goals.",
    icon: "Layers",
    content: `Our UX/UI Design service creates digital experiences that are both beautiful and functional. We combine user research, interaction design, and visual design to craft interfaces that feel intuitive and engaging.

Our design process is deeply collaborative and user-centered. We conduct thorough research to understand user needs and behaviors, then translate those insights into wireframes, prototypes, and polished designs that solve real problems.

From mobile apps to enterprise software, we design interfaces that users love and businesses depend on.`,
    features: [
      "User research and personas",
      "Information architecture",
      "Wireframing and prototyping",
      "Visual design and UI kits",
      "Usability testing"
    ],
    benefits: [
      "Improved user satisfaction",
      "Reduced support costs",
      "Higher conversion rates",
      "Faster user onboarding",
      "Consistent design language"
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}
