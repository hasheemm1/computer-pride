import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Computer Pride | IT Training, Certifications & Enterprise Solutions" },
    { name: "description", content: "Kenya's premier IT training and certification center. Over 35 years of excellence in professional training, vendor certifications, and enterprise solutions." },
  ];
}

// Stats data
const stats = [
  { number: "35+", label: "Years Experience" },
  { number: "50K+", label: "Students Trained" },
  { number: "100+", label: "Courses Offered" },
  { number: "95%", label: "Success Rate" },
];

// Services data
const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "IT Training",
    description: "Comprehensive courses from beginner to advanced levels, including short courses, professional training, and vendor-certified programs.",
    link: "/training",
    color: "primary",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Certifications",
    description: "Get certified with globally recognized credentials. We're partnered with leading exam bodies including Microsoft, Cisco, CompTIA, and more.",
    link: "/certifications",
    color: "accent",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Business Solutions",
    description: "Enterprise software solutions including ERP, CRM, custom development, and system integration tailored for your business needs.",
    link: "/solutions",
    color: "primary",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: "Infrastructure",
    description: "Complete IT infrastructure solutions including hardware, networking equipment, servers, and professional installation services.",
    link: "/infrastructure",
    color: "accent",
  },
];

// Featured courses
const featuredCourses = [
  {
    title: "Full-Stack Web Development",
    category: "Short Course",
    duration: "12 Weeks",
    level: "Beginner",
    image: "🌐",
  },
  {
    title: "Microsoft Azure Administrator",
    category: "Vendor Training",
    duration: "5 Days",
    level: "Intermediate",
    image: "☁️",
  },
  {
    title: "Cybersecurity Fundamentals",
    category: "Professional",
    duration: "8 Weeks",
    level: "Beginner",
    image: "🔐",
  },
  {
    title: "Data Science & Analytics",
    category: "Short Course",
    duration: "16 Weeks",
    level: "Intermediate",
    image: "📊",
  },
];

// Partners
const partners = [
  { name: "Microsoft", logo: "🏢" },
  { name: "Cisco", logo: "🌐" },
  { name: "CompTIA", logo: "💻" },
  { name: "AWS", logo: "☁️" },
  { name: "Oracle", logo: "🔶" },
  { name: "VMware", logo: "💎" },
];

// Testimonials
const testimonials = [
  {
    quote: "Computer Pride transformed my career. The CCNA certification I earned here opened doors I never thought possible. The instructors are truly world-class.",
    author: "James Mwangi",
    role: "Network Engineer, Safaricom",
    image: "👨🏾‍💼",
  },
  {
    quote: "The ERP implementation by Computer Pride streamlined our entire operation. Their team understood our unique challenges and delivered beyond expectations.",
    author: "Sarah Ochieng",
    role: "Operations Director, Kenya Breweries",
    image: "👩🏾‍💼",
  },
  {
    quote: "From zero coding experience to a full-stack developer in 6 months. The bootcamp was intense but the support was incredible. Best investment I ever made.",
    author: "David Kimani",
    role: "Software Developer, Andela",
    image: "👨🏾‍💻",
  },
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-hero grid-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="badge-primary animate-slide-up">
                  <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
                  Kenya's Premier IT Training Center
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-slide-up delay-100">
                  Unlock Your
                  <span className="text-gradient block">Tech Potential</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-xl animate-slide-up delay-200">
                  Over 35 years of excellence in IT training, certifications, and enterprise solutions. 
                  Join thousands of professionals who've advanced their careers with us.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 animate-slide-up delay-300">
                <Link to="/training" className="btn-primary">
                  Explore Courses
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/solutions" className="btn-secondary">
                  Business Solutions
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4 animate-slide-up delay-400">
                <div className="flex -space-x-3">
                  {["👨🏾", "👩🏽", "👨🏻", "👩🏾", "👨🏽"].map((emoji, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-surface-800 border-2 border-surface-950 flex items-center justify-center text-lg">
                      {emoji}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-heading font-semibold text-white">50,000+ Students</p>
                  <p className="text-sm text-gray-400">have trained with us</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-surface-900/50 backdrop-blur-sm border border-primary-500/20 rounded-3xl p-8 space-y-6">
                {/* Code animation mockup */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-sm text-gray-500 font-mono">career.tsx</span>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">career</span> = <span className="text-yellow-400">{"{"}</span></p>
                    <p className="pl-4"><span className="text-gray-400">skills:</span> <span className="text-green-400">["Python", "Cloud", "AI"]</span>,</p>
                    <p className="pl-4"><span className="text-gray-400">certifications:</span> <span className="text-green-400">["AWS", "Azure"]</span>,</p>
                    <p className="pl-4"><span className="text-gray-400">salary:</span> <span className="text-accent-400">increasedBy(200%)</span>,</p>
                    <p className="pl-4"><span className="text-gray-400">confidence:</span> <span className="text-primary-400">"unlimited"</span></p>
                    <p><span className="text-yellow-400">{"}"}</span>;</p>
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="flex flex-wrap gap-3">
                  <span className="badge-success">✓ Microsoft Certified</span>
                  <span className="badge-primary">🎯 Career Ready</span>
                  <span className="badge-accent">⚡ Industry Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-900 border-y border-primary-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <p className="stat-number">{stat.number}</p>
                <p className="stat-label mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-primary mb-4">What We Offer</span>
            <h2 className="section-title mb-4">
              Comprehensive IT <span className="text-gradient">Solutions</span>
            </h2>
            <p className="section-subtitle mx-auto">
              From beginner training to enterprise solutions, we've got everything you need to succeed in tech.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.link}
                className="card group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  service.color === "accent" 
                    ? "bg-accent-500/20 text-accent-400" 
                    : "bg-primary-500/20 text-primary-400"
                }`}>
                  {service.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-primary-400 font-medium text-sm">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="badge-accent mb-4">Featured Programs</span>
              <h2 className="section-title">
                Popular <span className="text-gradient">Courses</span>
              </h2>
            </div>
            <Link to="/training" className="btn-secondary self-start md:self-auto">
              View All Courses
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course, index) => (
              <div key={course.title} className="card group">
                <div className="text-5xl mb-4">{course.image}</div>
                <span className="badge-primary text-xs mb-3">{course.category}</span>
                <h3 className="font-heading text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {course.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {course.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-surface-900/50 border-y border-primary-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 mb-8 font-heading">Authorized Training Partner</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center gap-3 text-gray-500 hover:text-gray-300 transition-colors">
                <span className="text-3xl">{partner.logo}</span>
                <span className="font-heading font-semibold text-lg">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-success mb-4">Success Stories</span>
            <h2 className="section-title mb-4">
              What Our <span className="text-gradient">Students Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.author} className="card-featured">
                <div className="flex items-center gap-1 text-accent-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-800 flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="section gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-accent mb-4">
                📱 Available Now
              </span>
              <h2 className="section-title mb-6">
                Learn On-The-Go with Our <span className="text-gradient">Mobile App</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Take your learning anywhere with the Computer Pride app. Access courses, track progress, 
                and connect with instructors from your pocket.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Download lessons for offline learning
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Interactive quizzes and assessments
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Live class notifications & reminders
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Chat with instructors & classmates
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center gap-3 px-5 py-3 bg-surface-800 border border-primary-500/20 rounded-xl hover:bg-surface-700 transition-colors">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Download on the</p>
                    <p className="text-sm font-heading font-semibold text-white">App Store</p>
                  </div>
                </a>
                <a href="#" className="inline-flex items-center gap-3 px-5 py-3 bg-surface-800 border border-primary-500/20 rounded-xl hover:bg-surface-700 transition-colors">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Get it on</p>
                    <p className="text-sm font-heading font-semibold text-white">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                {/* Phone mockup */}
                <div className="w-72 h-[560px] bg-surface-950 rounded-[3rem] border-4 border-gray-700 p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-b from-surface-800 to-surface-900 rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-surface-950 rounded-b-2xl"></div>
                    {/* Screen content */}
                    <div className="absolute inset-0 p-5 pt-10">
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <p className="text-gray-400 text-sm">Welcome back 👋</p>
                          <p className="font-heading font-bold text-white text-xl">John</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary-500/30"></div>
                      </div>
                      
                      <div className="bg-surface-800/80 rounded-2xl p-4 mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-sm text-gray-400">Continue Learning</p>
                          <span className="text-xs text-primary-400">75%</span>
                        </div>
                        <p className="font-heading font-semibold text-white mb-2">Full-Stack Development</p>
                        <div className="h-2 bg-surface-700 rounded-full">
                          <div className="h-full w-3/4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"></div>
                        </div>
                      </div>

                      <div className="bg-surface-800/80 rounded-2xl p-4 mb-4">
                        <p className="text-sm text-gray-400 mb-2">Up Next</p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center text-xl">⚛️</div>
                          <div>
                            <p className="font-medium text-white text-sm">React Hooks Deep Dive</p>
                            <p className="text-xs text-gray-400">45 min • Video Lesson</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-2xl p-4 border border-primary-500/30">
                        <p className="text-sm text-white mb-1">🔴 Live Class Today</p>
                        <p className="text-xs text-gray-400">API Development - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-500/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-primary-800 p-8 md:p-16">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
            <div className="relative z-10 text-center">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
                Join thousands of professionals who've accelerated their careers with Computer Pride. 
                Start your journey today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/enroll" className="btn-accent">
                  Enroll Now
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/training" className="inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-colors">
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
