import { Link } from "react-router";
import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "IT Training Programs | Computer Pride" },
    { name: "description", content: "Transform your career with our comprehensive IT training programs. From beginner short courses to advanced professional certifications and vendor-based training." },
  ];
}

const trainingCategories = [
  {
    id: "short-courses",
    title: "Short Courses",
    subtitle: "For Beginners & Career Changers",
    description: "Intensive, hands-on programs designed for those starting their tech journey or looking to switch careers. Learn in-demand skills with our industry-aligned curriculum.",
    duration: "8-16 Weeks",
    format: "Full-time / Part-time",
    icon: "🚀",
    color: "primary",
    highlights: [
      "No prior experience required",
      "Project-based learning",
      "Career support included",
      "Flexible schedules available",
    ],
    link: "/training/short-courses",
    featured: true,
  },
  {
    id: "professional",
    title: "Professional Courses",
    subtitle: "For Working Professionals",
    description: "Advanced programs designed for IT professionals looking to upskill or specialize. Deepen your expertise with structured learning paths.",
    duration: "4-12 Weeks",
    format: "Evening / Weekend",
    icon: "💼",
    color: "accent",
    highlights: [
      "Industry expert instructors",
      "Real-world case studies",
      "Networking opportunities",
      "Corporate training options",
    ],
    link: "/training/professional",
    featured: true,
  },
  {
    id: "vendor-based",
    title: "Vendor-Based Training",
    subtitle: "Official Certification Prep",
    description: "Authorized training programs from world-leading technology vendors. Prepare for globally recognized certifications with official courseware.",
    duration: "3-5 Days",
    format: "Intensive / Boot Camp",
    icon: "🏆",
    color: "success",
    highlights: [
      "Official vendor curriculum",
      "Certified instructors",
      "Exam vouchers included",
      "Lab environments provided",
    ],
    link: "/training/vendor-based",
    featured: true,
  },
];

const upcomingCourses = [
  { title: "Full-Stack Web Development", category: "Short Course", startDate: "Jan 15, 2025", spots: 12, price: "KES 85,000" },
  { title: "Microsoft Azure Administrator", category: "Vendor Training", startDate: "Jan 8, 2025", spots: 8, price: "KES 120,000" },
  { title: "Data Analytics with Python", category: "Professional", startDate: "Jan 20, 2025", spots: 15, price: "KES 65,000" },
  { title: "AWS Solutions Architect", category: "Vendor Training", startDate: "Jan 22, 2025", spots: 10, price: "KES 150,000" },
  { title: "Cybersecurity Fundamentals", category: "Short Course", startDate: "Feb 1, 2025", spots: 18, price: "KES 75,000" },
  { title: "Project Management (PMP)", category: "Professional", startDate: "Feb 5, 2025", spots: 20, price: "KES 95,000" },
];

const learningPathways = [
  {
    title: "Cloud & DevOps",
    courses: ["Cloud Fundamentals", "AWS/Azure Certifications", "DevOps Engineering", "Kubernetes & Docker"],
    careers: ["Cloud Engineer", "DevOps Engineer", "Site Reliability Engineer"],
    icon: "☁️",
  },
  {
    title: "Software Development",
    courses: ["Programming Basics", "Full-Stack Development", "Mobile Development", "Software Architecture"],
    careers: ["Software Developer", "Mobile Developer", "Tech Lead"],
    icon: "💻",
  },
  {
    title: "Data & AI",
    courses: ["Data Analytics", "Machine Learning", "Data Engineering", "AI Applications"],
    careers: ["Data Analyst", "Data Scientist", "ML Engineer"],
    icon: "📊",
  },
  {
    title: "Cybersecurity",
    courses: ["Security Fundamentals", "Ethical Hacking", "Security Operations", "Forensics"],
    careers: ["Security Analyst", "Penetration Tester", "CISO"],
    icon: "🔐",
  },
];

export default function Training() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-hero grid-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <span className="badge-primary animate-slide-up">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
              Transform Your Career
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-6 animate-slide-up delay-100">
              World-Class
              <span className="text-gradient"> IT Training</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 animate-slide-up delay-200">
              Whether you're starting fresh, advancing your career, or pursuing certifications, 
              we have the perfect program for you. Join 50,000+ successful graduates.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-300">
              <a href="#programs" className="btn-primary">
                Explore Programs
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <Link to="/enroll" className="btn-secondary">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-surface-900 border-y border-primary-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-heading text-3xl font-bold text-gradient">100+</p>
              <p className="text-sm text-gray-400 mt-1">Courses Available</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-gradient">35+</p>
              <p className="text-sm text-gray-400 mt-1">Expert Instructors</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-gradient">95%</p>
              <p className="text-sm text-gray-400 mt-1">Success Rate</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-gradient">50K+</p>
              <p className="text-sm text-gray-400 mt-1">Graduates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section id="programs" className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-accent mb-4">Choose Your Path</span>
            <h2 className="section-title mb-4">
              Training <span className="text-gradient">Programs</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Three distinct pathways designed for different stages of your tech career journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {trainingCategories.map((category, index) => (
              <Link
                key={category.id}
                to={category.link}
                className="group relative bg-surface-900/50 backdrop-blur-sm border border-primary-500/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary-500/30 hover:-translate-y-2"
              >
                {/* Category Header */}
                <div className={`p-8 ${
                  category.color === "accent" 
                    ? "bg-gradient-to-br from-accent-500/20 to-transparent" 
                    : category.color === "success"
                    ? "bg-gradient-to-br from-emerald-500/20 to-transparent"
                    : "bg-gradient-to-br from-primary-500/20 to-transparent"
                }`}>
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className={`text-sm font-medium ${
                    category.color === "accent" ? "text-accent-400" : 
                    category.color === "success" ? "text-emerald-400" : "text-primary-400"
                  }`}>
                    {category.subtitle}
                  </p>
                </div>

                {/* Category Content */}
                <div className="p-8 pt-0">
                  <p className="text-gray-400 mb-6">{category.description}</p>
                  
                  <div className="flex gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {category.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {category.format}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {category.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center gap-2 text-primary-400 font-heading font-semibold group-hover:gap-3 transition-all">
                    View Courses
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Courses */}
      <section className="section gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="badge-success mb-4">Start Soon</span>
              <h2 className="section-title">
                Upcoming <span className="text-gradient">Classes</span>
              </h2>
            </div>
            <Link to="/contact" className="btn-secondary self-start md:self-auto">
              Request Schedule
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary-500/20">
                  <th className="text-left py-4 px-4 font-heading font-semibold text-gray-300">Course</th>
                  <th className="text-left py-4 px-4 font-heading font-semibold text-gray-300 hidden md:table-cell">Category</th>
                  <th className="text-left py-4 px-4 font-heading font-semibold text-gray-300">Start Date</th>
                  <th className="text-left py-4 px-4 font-heading font-semibold text-gray-300 hidden sm:table-cell">Spots Left</th>
                  <th className="text-left py-4 px-4 font-heading font-semibold text-gray-300">Price</th>
                  <th className="text-right py-4 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {upcomingCourses.map((course, index) => (
                  <tr key={index} className="border-b border-primary-500/10 hover:bg-primary-500/5 transition-colors">
                    <td className="py-4 px-4">
                      <p className="font-heading font-semibold text-white">{course.title}</p>
                      <p className="text-sm text-gray-400 md:hidden">{course.category}</p>
                    </td>
                    <td className="py-4 px-4 hidden md:table-cell">
                      <span className={`badge ${
                        course.category === "Vendor Training" ? "badge-success" :
                        course.category === "Professional" ? "badge-accent" : "badge-primary"
                      }`}>
                        {course.category}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-300">{course.startDate}</td>
                    <td className="py-4 px-4 hidden sm:table-cell">
                      <span className={`font-medium ${course.spots < 10 ? "text-accent-400" : "text-emerald-400"}`}>
                        {course.spots} left
                      </span>
                    </td>
                    <td className="py-4 px-4 font-heading font-semibold text-white">{course.price}</td>
                    <td className="py-4 px-4 text-right">
                      <Link to="/enroll" className="text-primary-400 hover:text-primary-300 font-medium text-sm">
                        Enroll →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Learning Pathways */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-primary mb-4">Career Pathways</span>
            <h2 className="section-title mb-4">
              Plan Your <span className="text-gradient">Journey</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Follow our structured learning paths to achieve your career goals in tech.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPathways.map((pathway, index) => (
              <div key={index} className="card group">
                <div className="text-4xl mb-4">{pathway.icon}</div>
                <h3 className="font-heading text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  {pathway.title}
                </h3>
                
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Courses</p>
                  <ul className="space-y-1">
                    {pathway.courses.map((course, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Careers</p>
                  <div className="flex flex-wrap gap-2">
                    {pathway.careers.map((career, i) => (
                      <span key={i} className="text-xs bg-surface-800 text-gray-300 px-2 py-1 rounded">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-purple-700 p-8 md:p-16">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                  Not Sure Where to Start?
                </h2>
                <p className="text-lg text-primary-100 mb-6">
                  Our career advisors will help you choose the right program based on your goals, 
                  experience, and schedule. Get personalized guidance for free.
                </p>
                <Link to="/enroll" className="btn-accent">
                  Start Your Application
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                      👨🏾‍💼
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-white">Career Advisory</p>
                      <p className="text-sm text-primary-200">Free 30-min session</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-primary-100">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Skills assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Career path planning
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Course recommendations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

