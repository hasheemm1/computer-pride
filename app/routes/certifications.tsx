import { Link } from "react-router";
import type { Route } from "./+types/certifications";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "IT Certifications | Computer Pride - Authorized Testing Center" },
    { name: "description", content: "Get certified with globally recognized IT credentials. Computer Pride is an authorized testing center for Pearson VUE, PSI, and Certiport exams." },
  ];
}

const examBodies = [
  {
    name: "Pearson VUE",
    logo: "📋",
    description: "World's leading computer-based testing company",
    certifications: ["Microsoft", "Cisco", "AWS", "VMware", "Oracle", "CompTIA"],
    features: ["Proctored exams", "Immediate results", "Digital badges"],
  },
  {
    name: "PSI Services",
    logo: "🎯",
    description: "Global testing and assessment provider",
    certifications: ["Google Cloud", "ServiceNow", "Salesforce", "Red Hat"],
    features: ["Flexible scheduling", "Multiple languages", "Accessibility options"],
  },
  {
    name: "Certiport",
    logo: "🏅",
    description: "Leading provider of certification exam development",
    certifications: ["Microsoft Office", "Adobe", "Autodesk", "Unity"],
    features: ["Academic programs", "Practice tests", "Student pricing"],
  },
];

const certificationPaths = [
  {
    category: "Cloud Computing",
    icon: "☁️",
    color: "primary",
    certs: [
      { name: "AWS Solutions Architect", level: "Associate/Professional", vendor: "Amazon" },
      { name: "Azure Administrator", level: "Associate", vendor: "Microsoft" },
      { name: "Google Cloud Professional", level: "Professional", vendor: "Google" },
      { name: "Oracle Cloud Infrastructure", level: "Associate/Professional", vendor: "Oracle" },
    ],
  },
  {
    category: "Networking",
    icon: "🌐",
    color: "accent",
    certs: [
      { name: "CCNA", level: "Associate", vendor: "Cisco" },
      { name: "CCNP Enterprise", level: "Professional", vendor: "Cisco" },
      { name: "Network+", level: "Entry", vendor: "CompTIA" },
      { name: "JNCIA-Junos", level: "Associate", vendor: "Juniper" },
    ],
  },
  {
    category: "Security",
    icon: "🔐",
    color: "success",
    certs: [
      { name: "Security+", level: "Entry", vendor: "CompTIA" },
      { name: "CISSP", level: "Expert", vendor: "(ISC)²" },
      { name: "CEH", level: "Professional", vendor: "EC-Council" },
      { name: "CyberOps Associate", level: "Associate", vendor: "Cisco" },
    ],
  },
  {
    category: "IT Fundamentals",
    icon: "💻",
    color: "primary",
    certs: [
      { name: "CompTIA A+", level: "Entry", vendor: "CompTIA" },
      { name: "CompTIA IT Fundamentals", level: "Entry", vendor: "CompTIA" },
      { name: "MTA", level: "Entry", vendor: "Microsoft" },
      { name: "ITIL Foundation", level: "Foundation", vendor: "Axelos" },
    ],
  },
  {
    category: "Data & Analytics",
    icon: "📊",
    color: "accent",
    certs: [
      { name: "Azure Data Engineer", level: "Associate", vendor: "Microsoft" },
      { name: "AWS Data Analytics", level: "Specialty", vendor: "Amazon" },
      { name: "Databricks Certified", level: "Associate/Professional", vendor: "Databricks" },
      { name: "Snowflake SnowPro", level: "Core/Advanced", vendor: "Snowflake" },
    ],
  },
  {
    category: "Development",
    icon: "🛠️",
    color: "success",
    certs: [
      { name: "AWS Developer", level: "Associate", vendor: "Amazon" },
      { name: "Azure Developer", level: "Associate", vendor: "Microsoft" },
      { name: "Java SE Programmer", level: "Associate/Professional", vendor: "Oracle" },
      { name: "Kubernetes (CKA/CKAD)", level: "Professional", vendor: "CNCF" },
    ],
  },
];

const examInfo = {
  process: [
    { step: 1, title: "Register", description: "Book your exam through our portal or contact our team" },
    { step: 2, title: "Prepare", description: "Access study materials and take practice tests" },
    { step: 3, title: "Arrive", description: "Come 30 minutes early with valid ID" },
    { step: 4, title: "Take Exam", description: "Complete your proctored exam in our testing center" },
    { step: 5, title: "Results", description: "Receive results immediately for most exams" },
  ],
  requirements: [
    "Valid government-issued photo ID",
    "Exam voucher or payment confirmation",
    "Arrive 30 minutes before scheduled time",
    "No electronic devices in testing room",
  ],
};

const stats = [
  { number: "10,000+", label: "Exams Delivered" },
  { number: "50+", label: "Certifications Available" },
  { number: "95%", label: "Pass Rate" },
  { number: "Same Day", label: "Scheduling Available" },
];

export default function Certifications() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-hero grid-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <span className="badge-success animate-slide-up">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Authorized Testing Center
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-6 animate-slide-up delay-100">
              IT Certifications &
              <span className="text-gradient block">Testing Center</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 animate-slide-up delay-200">
              Validate your skills with globally recognized certifications. As an authorized testing center, 
              we offer a professional environment for all major certification exams.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-300">
              <a href="#certifications" className="btn-primary">
                View Certifications
              </a>
              <Link to="/enroll" className="btn-secondary">
                Schedule Exam
              </Link>
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

      {/* Exam Bodies */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-primary mb-4">Our Partners</span>
            <h2 className="section-title mb-4">
              Authorized <span className="text-gradient">Exam Delivery</span>
            </h2>
            <p className="section-subtitle mx-auto">
              We're partnered with the world's leading certification bodies to deliver exams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {examBodies.map((body, index) => (
              <div key={index} className="card group">
                <div className="text-5xl mb-4">{body.logo}</div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">{body.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{body.description}</p>
                
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {body.certifications.map((cert, i) => (
                      <span key={i} className="text-xs bg-surface-800 text-gray-300 px-2 py-1 rounded">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Features</p>
                  <ul className="space-y-1">
                    {body.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Paths */}
      <section id="certifications" className="section gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-accent mb-4">Career Paths</span>
            <h2 className="section-title mb-4">
              Popular <span className="text-gradient">Certifications</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Browse certifications by technology area and find the right credential for your career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationPaths.map((path, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{path.icon}</div>
                  <h3 className="font-heading text-xl font-bold text-white">{path.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {path.certs.map((cert, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-primary-500/10 last:border-0">
                      <div>
                        <p className="font-medium text-white text-sm">{cert.name}</p>
                        <p className="text-xs text-gray-500">{cert.vendor}</p>
                      </div>
                      <span className={`badge text-xs ${
                        cert.level.includes("Entry") ? "badge-primary" :
                        cert.level.includes("Associate") ? "badge-accent" :
                        cert.level.includes("Professional") ? "badge-success" :
                        "bg-purple-500/20 text-purple-400 border-purple-500/30"
                      }`}>
                        {cert.level}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to="/enroll" className="mt-4 block text-center text-primary-400 hover:text-primary-300 text-sm font-medium">
                  Book Training + Exam →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Process */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-primary mb-4">How It Works</span>
            <h2 className="section-title mb-4">
              Exam <span className="text-gradient">Process</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 mb-12">
            {examInfo.process.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-primary-400">{step.step}</span>
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
                {index < examInfo.process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary-500/30 to-transparent"></div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-surface-900/50 border border-primary-500/10 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="font-heading text-xl font-bold text-white mb-4 text-center">Exam Day Requirements</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {examInfo.requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 p-8 md:p-16 text-center">
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Certified?
              </h2>
              <p className="text-lg text-emerald-100 max-w-2xl mx-auto mb-8">
                Schedule your certification exam today. Walk-in appointments available for select exams.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/enroll" className="btn-accent">
                  Schedule Exam
                </Link>
                <Link to="/training/vendor-based" className="inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-colors">
                  View Training Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

