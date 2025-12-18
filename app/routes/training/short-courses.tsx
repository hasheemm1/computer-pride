import { Link } from "react-router";
import type { Route } from "./+types/short-courses";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Short Courses | Computer Pride - Launch Your Tech Career" },
    { name: "description", content: "Intensive short courses designed for beginners and career changers. Learn full-stack development, data analytics, cybersecurity, and more in 8-16 weeks." },
  ];
}

const courses = [
  {
    id: 1,
    slug: "full-stack-web-development",
    title: "Full-Stack Web Development",
    description: "Master modern web development from frontend to backend. Build real-world applications using React, Node.js, and databases.",
    duration: "12 Weeks",
    schedule: "Full-time or Part-time",
    price: "KES 85,000",
    level: "Beginner",
    image: "🌐",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB", "Git"],
    outcomes: ["Build complete web applications", "Deploy to cloud platforms", "Work in agile teams"],
    nextIntake: "Jan 15, 2025",
    spotsLeft: 12,
    popular: true,
  },
  {
    id: 2,
    slug: "data-analytics",
    title: "Data Analytics & Visualization",
    description: "Learn to analyze data and create compelling visualizations. Master Excel, Python, SQL, and business intelligence tools.",
    duration: "10 Weeks",
    schedule: "Full-time or Part-time",
    price: "KES 65,000",
    level: "Beginner",
    image: "📊",
    skills: ["Excel Advanced", "Python", "SQL", "Power BI", "Tableau", "Statistics"],
    outcomes: ["Analyze complex datasets", "Create executive dashboards", "Data-driven decisions"],
    nextIntake: "Jan 20, 2025",
    spotsLeft: 15,
    popular: true,
  },
  {
    id: 3,
    slug: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    description: "Enter the high-demand field of cybersecurity. Learn network security, ethical hacking basics, and security operations.",
    duration: "10 Weeks",
    schedule: "Full-time or Part-time",
    price: "KES 75,000",
    level: "Beginner",
    image: "🔐",
    skills: ["Network Security", "Linux", "Security Tools", "Incident Response", "Risk Assessment"],
    outcomes: ["Identify security threats", "Implement security measures", "Security+ exam ready"],
    nextIntake: "Feb 1, 2025",
    spotsLeft: 18,
  },
  {
    id: 4,
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Design beautiful, user-centered digital experiences. Master Figma, user research, prototyping, and design systems.",
    duration: "8 Weeks",
    schedule: "Part-time",
    price: "KES 55,000",
    level: "Beginner",
    image: "🎨",
    skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems", "Accessibility"],
    outcomes: ["Design mobile & web apps", "Conduct user research", "Build design portfolios"],
    nextIntake: "Jan 22, 2025",
    spotsLeft: 20,
  },
  {
    id: 5,
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    description: "Master digital marketing strategies including SEO, social media, content marketing, and paid advertising.",
    duration: "8 Weeks",
    schedule: "Part-time",
    price: "KES 45,000",
    level: "Beginner",
    image: "📱",
    skills: ["SEO", "Google Ads", "Social Media", "Content Strategy", "Analytics", "Email Marketing"],
    outcomes: ["Create marketing campaigns", "Optimize for search engines", "Measure ROI"],
    nextIntake: "Feb 5, 2025",
    spotsLeft: 25,
  },
  {
    id: 6,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "Build cross-platform mobile apps for iOS and Android using React Native. Create real apps from day one.",
    duration: "12 Weeks",
    schedule: "Full-time",
    price: "KES 90,000",
    level: "Beginner",
    image: "📲",
    skills: ["React Native", "JavaScript", "Mobile UI", "APIs", "App Store Deployment"],
    outcomes: ["Build iOS & Android apps", "Publish to app stores", "Mobile-first thinking"],
    nextIntake: "Feb 10, 2025",
    spotsLeft: 14,
  },
  {
    id: 7,
    slug: "cloud-computing",
    title: "Cloud Computing Essentials",
    description: "Get started with cloud computing. Learn AWS or Azure fundamentals, cloud architecture, and deployment.",
    duration: "8 Weeks",
    schedule: "Part-time",
    price: "KES 70,000",
    level: "Beginner",
    image: "☁️",
    skills: ["AWS/Azure Basics", "Cloud Architecture", "Serverless", "Containers", "CI/CD"],
    outcomes: ["Deploy cloud applications", "Manage cloud resources", "Cloud certification ready"],
    nextIntake: "Feb 15, 2025",
    spotsLeft: 16,
  },
  {
    id: 8,
    slug: "it-support",
    title: "IT Support & Help Desk",
    description: "Start your IT career with essential support skills. Hardware, software, networking, and customer service.",
    duration: "6 Weeks",
    schedule: "Full-time",
    price: "KES 35,000",
    level: "Beginner",
    image: "🛠️",
    skills: ["Hardware Troubleshooting", "Windows/Linux", "Networking Basics", "Help Desk Tools"],
    outcomes: ["Resolve technical issues", "Support end users", "CompTIA A+ ready"],
    nextIntake: "Jan 8, 2025",
    spotsLeft: 22,
  },
];

const features = [
  {
    icon: "🎯",
    title: "Project-Based Learning",
    description: "Build real projects that showcase your skills to employers. Graduate with a professional portfolio.",
  },
  {
    icon: "👥",
    title: "Small Class Sizes",
    description: "Maximum 20 students per cohort ensures personalized attention and meaningful interactions.",
  },
  {
    icon: "💼",
    title: "Career Support",
    description: "Resume reviews, interview prep, and employer connections. We're invested in your success.",
  },
  {
    icon: "⏰",
    title: "Flexible Schedules",
    description: "Full-time, part-time, and evening options to fit your life. Weekend sessions available.",
  },
  {
    icon: "🏆",
    title: "Industry Mentors",
    description: "Learn from professionals working at top tech companies. Get real-world insights.",
  },
  {
    icon: "💰",
    title: "Payment Plans",
    description: "Flexible payment options including installments. Quality education shouldn't break the bank.",
  },
];

const successStories = [
  {
    name: "Faith Wanjiku",
    role: "Frontend Developer at Safaricom",
    course: "Full-Stack Web Development",
    quote: "I went from zero coding experience to landing my dream job in 6 months. The bootcamp was intense but the support was incredible.",
    image: "👩🏾‍💻",
  },
  {
    name: "Kevin Omondi",
    role: "Data Analyst at Equity Bank",
    course: "Data Analytics",
    quote: "The practical approach made all the difference. I was solving real business problems by week 4.",
    image: "👨🏾‍💼",
  },
  {
    name: "Aisha Mohamed",
    role: "UX Designer at Andela",
    course: "UI/UX Design",
    quote: "My instructor's industry experience was invaluable. The portfolio I built during the course got me hired.",
    image: "👩🏾‍🎨",
  },
];

export default function ShortCourses() {
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
            <span className="badge-primary animate-slide-up">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
              Career-Ready Skills
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-6 animate-slide-up delay-100">
              Short Courses
              <span className="text-gradient block">For New Tech Talent</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 animate-slide-up delay-200 max-w-2xl">
              No experience? No problem. Our intensive bootcamp-style courses are designed to take you 
              from beginner to job-ready in 8-16 weeks. Join Kenya's most successful tech graduates.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up delay-300">
              <a href="#courses" className="btn-primary">
                View All Courses
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <Link to="/enroll" className="btn-secondary">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-surface-900 border-y border-primary-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="font-heading font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-accent mb-4">Start Your Journey</span>
            <h2 className="section-title mb-4">
              Choose Your <span className="text-gradient">Course</span>
            </h2>
            <p className="section-subtitle mx-auto">
              All courses include hands-on projects, career support, and certification upon completion.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="group relative bg-surface-900/50 backdrop-blur-sm border border-primary-500/10 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-300"
              >
                {course.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="badge-accent">🔥 Popular</span>
                  </div>
                )}
                
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{course.image}</div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                        {course.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="badge-primary text-xs">{course.duration}</span>
                        <span className="badge text-xs bg-surface-800 text-gray-300">{course.level}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Skills You'll Learn</p>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, i) => (
                        <span key={i} className="text-xs bg-surface-800 text-gray-300 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">What You'll Achieve</p>
                    <ul className="space-y-1">
                      {course.outcomes.map((outcome, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                          <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-primary-500/10">
                    <div>
                      <p className="font-heading text-2xl font-bold text-white">{course.price}</p>
                      <p className="text-sm text-gray-400">{course.schedule}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Next intake: <span className="text-white">{course.nextIntake}</span></p>
                      <p className={`text-sm font-medium ${course.spotsLeft < 15 ? "text-accent-400" : "text-emerald-400"}`}>
                        {course.spotsLeft} spots left
                      </p>
                    </div>
                  </div>

                  <Link 
                    to={`/enroll?course=${course.slug}`}
                    className="mt-6 w-full btn-primary justify-center"
                  >
                    Enroll Now
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-success mb-4">Success Stories</span>
            <h2 className="section-title mb-4">
              From Learner to <span className="text-gradient">Leader</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Our graduates are working at Kenya's top companies. Read their stories.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="card-featured">
                <div className="flex items-center gap-1 text-accent-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{story.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-800 flex items-center justify-center text-2xl">
                    {story.image}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-white">{story.name}</p>
                    <p className="text-sm text-gray-400">{story.role}</p>
                    <p className="text-xs text-primary-400">{story.course} Graduate</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 p-8 md:p-16 text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Tech Journey?
              </h2>
              <p className="text-lg text-emerald-100 max-w-2xl mx-auto mb-8">
                Applications are now open for our January 2025 cohorts. Limited spots available.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/enroll" className="btn-accent">
                  Apply Now - Start Your Journey
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <p className="text-sm text-emerald-200 mt-4">
                💰 Flexible payment plans available • No experience required
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

