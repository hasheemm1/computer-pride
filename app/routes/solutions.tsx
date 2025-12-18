import { Link } from "react-router";
import type { Route } from "./+types/solutions";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Business Solutions | Computer Pride - Enterprise IT Services" },
    { name: "description", content: "Transform your business with enterprise solutions. ERP implementation, CRM integration, custom development, cloud migration, and IT consulting services." },
  ];
}

const services = [
  {
    id: "erp",
    icon: "🏢",
    title: "ERP Solutions",
    tagline: "Streamline Your Operations",
    description: "End-to-end ERP implementation, customization, and support. We work with leading platforms to digitize and optimize your business processes.",
    features: [
      "Requirements analysis & process mapping",
      "System configuration & customization",
      "Data migration & integration",
      "User training & change management",
      "Ongoing support & optimization",
    ],
    platforms: ["SAP Business One", "Microsoft Dynamics 365", "Sage X3", "Odoo"],
    caseStudy: {
      client: "Manufacturing Company",
      result: "40% reduction in operational costs",
    },
  },
  {
    id: "crm",
    icon: "🤝",
    title: "CRM Integration",
    tagline: "Strengthen Customer Relationships",
    description: "Implement and integrate CRM systems that give you a 360° view of your customers. Drive sales, improve service, and build lasting relationships.",
    features: [
      "CRM platform selection & setup",
      "Sales pipeline automation",
      "Marketing automation integration",
      "Customer service workflows",
      "Analytics & reporting dashboards",
    ],
    platforms: ["Salesforce", "Microsoft Dynamics CRM", "HubSpot", "Zoho CRM"],
    caseStudy: {
      client: "Financial Services Firm",
      result: "60% improvement in lead conversion",
    },
  },
  {
    id: "custom",
    icon: "⚡",
    title: "Custom Development",
    tagline: "Build What You Need",
    description: "When off-the-shelf solutions don't fit, we build custom applications tailored to your unique business requirements and workflows.",
    features: [
      "Business process automation",
      "Custom web & mobile applications",
      "API development & integration",
      "Legacy system modernization",
      "Database design & optimization",
    ],
    platforms: ["React/Node.js", ".NET", "Python", "Mobile (iOS/Android)"],
    caseStudy: {
      client: "Logistics Company",
      result: "Real-time tracking system serving 10K+ daily shipments",
    },
  },
  {
    id: "cloud",
    icon: "☁️",
    title: "Cloud Migration",
    tagline: "Modernize Your Infrastructure",
    description: "Move to the cloud with confidence. We plan, execute, and manage your cloud migration journey with minimal disruption.",
    features: [
      "Cloud readiness assessment",
      "Migration strategy & planning",
      "Application modernization",
      "Hybrid & multi-cloud setup",
      "Cloud cost optimization",
    ],
    platforms: ["Microsoft Azure", "Amazon Web Services", "Google Cloud", "Hybrid Solutions"],
    caseStudy: {
      client: "Healthcare Provider",
      result: "50% reduction in IT infrastructure costs",
    },
  },
  {
    id: "integration",
    icon: "🔗",
    title: "System Integration",
    tagline: "Connect Your Ecosystem",
    description: "Break down data silos by integrating your business systems. Enable seamless data flow and unified operations across platforms.",
    features: [
      "API strategy & development",
      "iPaaS implementation",
      "Real-time data synchronization",
      "Legacy system connectivity",
      "B2B partner integration",
    ],
    platforms: ["MuleSoft", "Microsoft Power Platform", "Zapier", "Custom APIs"],
    caseStudy: {
      client: "Retail Chain",
      result: "Unified inventory across 50+ locations",
    },
  },
  {
    id: "consulting",
    icon: "💡",
    title: "IT Consulting",
    tagline: "Strategic Technology Guidance",
    description: "Get expert advice on technology strategy, digital transformation, and IT governance. Make informed decisions that drive business value.",
    features: [
      "Digital transformation roadmap",
      "Technology stack assessment",
      "IT governance & compliance",
      "Vendor selection & negotiation",
      "Project management & PMO",
    ],
    platforms: ["Strategy", "Architecture", "Governance", "Program Management"],
    caseStudy: {
      client: "Banking Institution",
      result: "3-year digital transformation roadmap",
    },
  },
];

const process = [
  { step: 1, title: "Discovery", description: "Understand your business, challenges, and goals", icon: "🔍" },
  { step: 2, title: "Strategy", description: "Design a tailored solution and implementation plan", icon: "📋" },
  { step: 3, title: "Implementation", description: "Build and deploy with agile methodology", icon: "🛠️" },
  { step: 4, title: "Training", description: "Empower your team with knowledge transfer", icon: "🎓" },
  { step: 5, title: "Support", description: "Ongoing partnership for continuous improvement", icon: "🤝" },
];

const industries = [
  { name: "Financial Services", icon: "🏦" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Retail & Distribution", icon: "🏪" },
  { name: "Education", icon: "🎓" },
  { name: "Government", icon: "🏛️" },
];

const stats = [
  { number: "200+", label: "Projects Delivered" },
  { number: "50+", label: "Enterprise Clients" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" },
];

export default function Solutions() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-hero grid-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-primary animate-slide-up">
                <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
                Enterprise Solutions
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-6 animate-slide-up delay-100">
                Transform Your
                <span className="text-gradient block">Business with Tech</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8 animate-slide-up delay-200">
                From ERP implementation to custom development, we deliver end-to-end business solutions 
                that drive efficiency, growth, and competitive advantage.
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-up delay-300">
                <a href="#services" className="btn-primary">
                  Explore Solutions
                </a>
                <Link to="/contact" className="btn-secondary">
                  Request Consultation
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-surface-900/50 backdrop-blur-sm border border-primary-500/20 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {services.slice(0, 4).map((service, index) => (
                      <div key={index} className="bg-surface-800/50 rounded-xl p-4 text-center hover:bg-primary-500/10 transition-colors cursor-pointer">
                        <div className="text-3xl mb-2">{service.icon}</div>
                        <p className="text-sm font-heading font-semibold text-white">{service.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface-900 border-y border-primary-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="font-heading text-3xl font-bold text-gradient">{stat.number}</p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-accent mb-4">What We Do</span>
            <h2 className="section-title mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Comprehensive business technology solutions delivered by experienced professionals.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="group bg-surface-900/50 backdrop-blur-sm border border-primary-500/10 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-[1fr_350px]">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-primary-400 font-medium">{service.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">What We Deliver</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                              <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Technologies</p>
                        <div className="flex flex-wrap gap-2">
                          {service.platforms.map((platform, i) => (
                            <span key={i} className="text-xs bg-surface-800 text-gray-300 px-3 py-1.5 rounded-lg">
                              {platform}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary-500/10 to-transparent p-6 md:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-primary-500/10">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Success Story</p>
                      <p className="text-lg font-heading font-semibold text-white mb-2">{service.caseStudy.client}</p>
                      <p className="text-primary-400 font-medium">{service.caseStudy.result}</p>
                    </div>
                    <Link 
                      to="/contact" 
                      className="mt-6 inline-flex items-center justify-center gap-2 w-full px-6 py-3 font-heading font-semibold text-white bg-primary-600 rounded-xl transition-all hover:bg-primary-500"
                    >
                      Discuss Your Project
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-success mb-4">How We Work</span>
            <h2 className="section-title mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="section-subtitle mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 rounded-2xl bg-surface-800 border border-primary-500/20 flex items-center justify-center mx-auto mb-4 text-3xl">
                  {item.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-xs font-bold text-white">
                  {item.step}
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary-500/30 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-primary mb-4">Industry Expertise</span>
            <h2 className="section-title mb-4">
              Industries We <span className="text-gradient">Serve</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-surface-900/50 border border-primary-500/10 rounded-xl p-6 text-center hover:border-primary-500/30 transition-all">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <p className="font-heading font-semibold text-white text-sm">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-purple-700 p-8 md:p-16 text-center">
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
                Let's discuss how our solutions can help you achieve your business goals. 
                Get a free consultation with our experts.
              </p>
              <Link to="/contact" className="btn-accent">
                Schedule Free Consultation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

