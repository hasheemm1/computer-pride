import { Link } from "react-router";
import type { Route } from "./+types/professional";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Professional Courses | Computer Pride - Advance Your IT Career" },
    { name: "description", content: "Advanced professional IT courses for working professionals. Evening and weekend classes in project management, advanced development, architecture, and leadership." },
  ];
}

const courses = [
  {
    id: 1,
    slug: "pmp",
    title: "Project Management Professional (PMP)",
    description: "Prepare for the globally recognized PMP certification. Master project management frameworks, agile methodologies, and leadership skills.",
    duration: "8 Weeks",
    schedule: "Evenings & Weekends",
    price: "KES 95,000",
    level: "Intermediate",
    image: "📋",
    skills: ["Project Planning", "Risk Management", "Agile/Scrum", "Stakeholder Management", "PMI Framework"],
    prerequisites: ["3+ years work experience", "Basic project involvement"],
    certification: "PMP Certification Prep",
    nextIntake: "Feb 5, 2025",
    spotsLeft: 20,
  },
  {
    id: 2,
    slug: "data-engineering",
    title: "Advanced Data Engineering",
    description: "Build scalable data pipelines and infrastructure. Master ETL processes, data warehousing, and modern data stack tools.",
    duration: "12 Weeks",
    schedule: "Evenings",
    price: "KES 120,000",
    level: "Advanced",
    image: "🔧",
    skills: ["Apache Spark", "Airflow", "dbt", "Data Warehousing", "Python", "SQL"],
    prerequisites: ["Python proficiency", "SQL experience", "Basic cloud knowledge"],
    certification: "Data Engineering Certificate",
    nextIntake: "Jan 20, 2025",
    spotsLeft: 12,
    popular: true,
  },
  {
    id: 3,
    slug: "devops",
    title: "DevOps & Site Reliability Engineering",
    description: "Master the practices that keep modern systems running. CI/CD, infrastructure as code, monitoring, and incident management.",
    duration: "10 Weeks",
    schedule: "Evenings & Weekends",
    price: "KES 110,000",
    level: "Advanced",
    image: "⚙️",
    skills: ["Docker", "Kubernetes", "Terraform", "Jenkins/GitLab CI", "Monitoring", "Linux"],
    prerequisites: ["Linux experience", "Basic scripting", "Cloud fundamentals"],
    certification: "DevOps Professional Certificate",
    nextIntake: "Feb 10, 2025",
    spotsLeft: 15,
    popular: true,
  },
  {
    id: 4,
    slug: "enterprise-architecture",
    title: "Enterprise Architecture",
    description: "Design and implement enterprise-scale systems. Learn TOGAF framework, solution architecture, and technology strategy.",
    duration: "10 Weeks",
    schedule: "Weekends",
    price: "KES 130,000",
    level: "Advanced",
    image: "🏗️",
    skills: ["TOGAF", "Solution Design", "Integration Patterns", "Cloud Architecture", "Security Architecture"],
    prerequisites: ["5+ years IT experience", "Technical leadership role"],
    certification: "Enterprise Architecture Certificate",
    nextIntake: "Feb 15, 2025",
    spotsLeft: 10,
  },
  {
    id: 5,
    slug: "ml-engineering",
    title: "Machine Learning Engineering",
    description: "Deploy ML models to production. Bridge the gap between data science and engineering with MLOps practices.",
    duration: "12 Weeks",
    schedule: "Evenings",
    price: "KES 140,000",
    level: "Advanced",
    image: "🤖",
    skills: ["TensorFlow/PyTorch", "MLOps", "Feature Stores", "Model Serving", "ML Monitoring"],
    prerequisites: ["Python proficiency", "ML fundamentals", "Basic statistics"],
    certification: "ML Engineering Certificate",
    nextIntake: "Feb 20, 2025",
    spotsLeft: 14,
  },
  {
    id: 6,
    slug: "cybersecurity-management",
    title: "Cybersecurity Management",
    description: "Lead security initiatives in your organization. Risk management, compliance, security operations, and incident response.",
    duration: "10 Weeks",
    schedule: "Evenings & Weekends",
    price: "KES 115,000",
    level: "Advanced",
    image: "🛡️",
    skills: ["Risk Assessment", "SIEM", "Compliance (ISO 27001)", "Incident Response", "Security Strategy"],
    prerequisites: ["Security fundamentals", "3+ years IT experience"],
    certification: "CISSP Prep + Management Certificate",
    nextIntake: "Jan 25, 2025",
    spotsLeft: 18,
  },
  {
    id: 7,
    slug: "product-management",
    title: "Product Management for Tech",
    description: "Lead product development from idea to launch. Strategy, user research, roadmapping, and cross-functional leadership.",
    duration: "8 Weeks",
    schedule: "Weekends",
    price: "KES 85,000",
    level: "Intermediate",
    image: "🎯",
    skills: ["Product Strategy", "User Research", "Roadmapping", "Agile/Scrum", "Metrics & KPIs"],
    prerequisites: ["2+ years tech industry experience"],
    certification: "Product Management Certificate",
    nextIntake: "Feb 8, 2025",
    spotsLeft: 22,
  },
  {
    id: 8,
    slug: "business-intelligence",
    title: "Business Intelligence & Analytics",
    description: "Transform data into business insights. Advanced analytics, data visualization, and BI platform administration.",
    duration: "8 Weeks",
    schedule: "Evenings",
    price: "KES 80,000",
    level: "Intermediate",
    image: "📈",
    skills: ["Power BI Advanced", "DAX", "Data Modeling", "SQL Analytics", "Reporting Strategy"],
    prerequisites: ["Excel proficiency", "Basic SQL"],
    certification: "BI Professional Certificate",
    nextIntake: "Jan 22, 2025",
    spotsLeft: 16,
  },
];

const benefits = [
  {
    icon: "🌙",
    title: "Evening & Weekend Classes",
    description: "Continue working while you learn. Our schedules are designed for busy professionals.",
  },
  {
    icon: "🎓",
    title: "Industry Certifications",
    description: "Prepare for globally recognized certifications that boost your career and earning potential.",
  },
  {
    icon: "👔",
    title: "Corporate Training Options",
    description: "Custom programs for teams. We can train at your premises or provide dedicated cohorts.",
  },
  {
    icon: "🔗",
    title: "Alumni Network",
    description: "Join a community of 10,000+ professionals. Networking events and job opportunities.",
  },
];

const corporatePartners = [
  { name: "Safaricom", role: "Training Partner" },
  { name: "KCB Bank", role: "Upskilling Partner" },
  { name: "KPMG", role: "Corporate Client" },
  { name: "Equity Bank", role: "Training Partner" },
  { name: "Britam", role: "Corporate Client" },
  { name: "Nation Media", role: "Upskilling Partner" },
];

export default function ProfessionalCourses() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-hero grid-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl">
            <Link to="/training" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Training
            </Link>
            <span className="badge-accent animate-slide-up">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span>
              For Working Professionals
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-6 animate-slide-up delay-100">
              Professional Courses
              <span className="text-gradient block">Advance Your Career</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 animate-slide-up delay-200 max-w-2xl">
              Advanced training for IT professionals. Evening and weekend classes designed to fit your schedule. 
              Upskill, specialize, and accelerate your career without taking time off work.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up delay-300">
              <a href="#courses" className="btn-primary">
                Browse Courses
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <Link to="/contact" className="btn-secondary">
                Corporate Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-surface-900 border-y border-primary-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-heading font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partners */}
      <section className="py-8 border-b border-primary-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-6">Trusted by leading organizations for professional development</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {corporatePartners.map((partner, index) => (
              <div key={index} className="text-center">
                <p className="font-heading font-semibold text-gray-400">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-primary mb-4">Professional Development</span>
            <h2 className="section-title mb-4">
              Advanced <span className="text-gradient">Courses</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Deep-dive programs designed for experienced professionals seeking to advance their expertise.
            </p>
          </div>

          <div className="space-y-6">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="group relative bg-surface-900/50 backdrop-blur-sm border border-primary-500/10 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-300"
              >
                {course.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="badge-accent">🔥 High Demand</span>
                  </div>
                )}
                
                <div className="p-6 md:p-8">
                  <div className="grid lg:grid-cols-[1fr_auto] gap-6">
                    <div>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-4xl md:text-5xl">{course.image}</div>
                        <div className="flex-1">
                          <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                            {course.title}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            <span className="badge-primary text-xs">{course.duration}</span>
                            <span className="badge-accent text-xs">{course.level}</span>
                            <span className="badge text-xs bg-surface-800 text-gray-300">{course.schedule}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-4">{course.description}</p>
                      
                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Skills Covered</p>
                          <div className="flex flex-wrap gap-2">
                            {course.skills.slice(0, 4).map((skill, i) => (
                              <span key={i} className="text-xs bg-surface-800 text-gray-300 px-2 py-1 rounded">
                                {skill}
                              </span>
                            ))}
                            {course.skills.length > 4 && (
                              <span className="text-xs text-primary-400">+{course.skills.length - 4} more</span>
                            )}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prerequisites</p>
                          <ul className="space-y-1">
                            {course.prerequisites.map((prereq, i) => (
                              <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                                {prereq}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <span className="text-emerald-400">{course.certification}</span>
                      </div>
                    </div>

                    <div className="lg:border-l lg:border-primary-500/10 lg:pl-6 flex flex-col justify-between">
                      <div className="text-center lg:text-right mb-4">
                        <p className="font-heading text-3xl font-bold text-white">{course.price}</p>
                        <p className="text-sm text-gray-400 mt-1">Payment plans available</p>
                      </div>
                      
                      <div className="space-y-2 text-center lg:text-right mb-4">
                        <p className="text-sm text-gray-400">
                          Next intake: <span className="text-white font-medium">{course.nextIntake}</span>
                        </p>
                        <p className={`text-sm font-medium ${course.spotsLeft < 15 ? "text-accent-400" : "text-emerald-400"}`}>
                          {course.spotsLeft} spots available
                        </p>
                      </div>

                      <Link 
                        to={`/enroll?course=${course.slug}`}
                        className="btn-primary justify-center"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Training CTA */}
      <section className="section gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent-600 to-orange-600 p-8 md:p-16">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                  Corporate Training Solutions
                </h2>
                <p className="text-lg text-accent-100 mb-6">
                  Upskill your entire team with customized training programs. We offer on-site training, 
                  dedicated cohorts, and flexible scheduling to meet your organization's needs.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-accent-100">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Customized curriculum for your tech stack
                  </li>
                  <li className="flex items-center gap-3 text-accent-100">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    On-site or virtual delivery options
                  </li>
                  <li className="flex items-center gap-3 text-accent-100">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Volume discounts and flexible payment
                  </li>
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold text-accent-600 bg-white rounded-xl transition-all hover:bg-accent-50">
                  Request Corporate Quote
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-center mb-6">
                    <p className="text-5xl mb-2">🏢</p>
                    <p className="font-heading font-bold text-2xl text-white">50+</p>
                    <p className="text-accent-200">Corporate Partners</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="font-heading font-bold text-xl text-white">5000+</p>
                      <p className="text-sm text-accent-200">Staff Trained</p>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-xl text-white">98%</p>
                      <p className="text-sm text-accent-200">Satisfaction Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

