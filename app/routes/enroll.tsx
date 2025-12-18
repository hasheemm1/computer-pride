import { Link, useSearchParams } from "react-router";
import { useState, useEffect } from "react";
import type { Route } from "./+types/enroll";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Enroll Now | Computer Pride - Start Your Tech Journey" },
    { name: "description", content: "Register for IT training courses at Computer Pride. Simple enrollment process, flexible payment options, and immediate access to learning resources." },
  ];
}

// Course catalog with details
const courses: Record<string, { name: string; category: string; duration: string; price: string; icon: string }> = {
  "full-stack-web-development": { name: "Full-Stack Web Development", category: "Short Course", duration: "12 Weeks", price: "KES 85,000", icon: "🌐" },
  "data-analytics": { name: "Data Analytics & Visualization", category: "Short Course", duration: "10 Weeks", price: "KES 65,000", icon: "📊" },
  "cybersecurity-fundamentals": { name: "Cybersecurity Fundamentals", category: "Short Course", duration: "10 Weeks", price: "KES 75,000", icon: "🔐" },
  "ui-ux-design": { name: "UI/UX Design", category: "Short Course", duration: "8 Weeks", price: "KES 55,000", icon: "🎨" },
  "digital-marketing": { name: "Digital Marketing & SEO", category: "Short Course", duration: "8 Weeks", price: "KES 45,000", icon: "📱" },
  "mobile-app-development": { name: "Mobile App Development", category: "Short Course", duration: "12 Weeks", price: "KES 90,000", icon: "📲" },
  "cloud-computing": { name: "Cloud Computing Essentials", category: "Short Course", duration: "8 Weeks", price: "KES 70,000", icon: "☁️" },
  "it-support": { name: "IT Support & Help Desk", category: "Short Course", duration: "6 Weeks", price: "KES 35,000", icon: "🛠️" },
  "pmp": { name: "Project Management Professional (PMP)", category: "Professional", duration: "8 Weeks", price: "KES 95,000", icon: "📋" },
  "data-engineering": { name: "Advanced Data Engineering", category: "Professional", duration: "12 Weeks", price: "KES 120,000", icon: "🔧" },
  "devops": { name: "DevOps & Site Reliability Engineering", category: "Professional", duration: "10 Weeks", price: "KES 110,000", icon: "⚙️" },
  "enterprise-architecture": { name: "Enterprise Architecture", category: "Professional", duration: "10 Weeks", price: "KES 130,000", icon: "🏗️" },
  "ml-engineering": { name: "Machine Learning Engineering", category: "Professional", duration: "12 Weeks", price: "KES 140,000", icon: "🤖" },
  "cybersecurity-management": { name: "Cybersecurity Management", category: "Professional", duration: "10 Weeks", price: "KES 115,000", icon: "🛡️" },
  "product-management": { name: "Product Management for Tech", category: "Professional", duration: "8 Weeks", price: "KES 85,000", icon: "🎯" },
  "business-intelligence": { name: "Business Intelligence & Analytics", category: "Professional", duration: "8 Weeks", price: "KES 80,000", icon: "📈" },
  "azure-administrator": { name: "Microsoft Azure Administrator (AZ-104)", category: "Vendor Training", duration: "4 Days", price: "KES 120,000", icon: "☁️" },
  "azure-solutions-architect": { name: "Azure Solutions Architect (AZ-305)", category: "Vendor Training", duration: "4 Days", price: "KES 140,000", icon: "☁️" },
  "aws-solutions-architect": { name: "AWS Solutions Architect", category: "Vendor Training", duration: "4 Days", price: "KES 130,000", icon: "☁️" },
  "ccna": { name: "Cisco CCNA", category: "Vendor Training", duration: "5 Days", price: "KES 140,000", icon: "🌐" },
  "comptia-a-plus": { name: "CompTIA A+", category: "Vendor Training", duration: "5 Days", price: "KES 85,000", icon: "💻" },
  "comptia-security-plus": { name: "CompTIA Security+", category: "Vendor Training", duration: "5 Days", price: "KES 100,000", icon: "🔐" },
  "comptia-network-plus": { name: "CompTIA Network+", category: "Vendor Training", duration: "5 Days", price: "KES 95,000", icon: "🌐" },
};

const courseInterests = [
  { value: "web-dev", label: "Web Development" },
  { value: "data-analytics", label: "Data Analytics" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "cloud", label: "Cloud Computing (AWS/Azure)" },
  { value: "networking", label: "Networking (Cisco/CompTIA)" },
  { value: "mobile", label: "Mobile App Development" },
  { value: "ui-ux", label: "UI/UX Design" },
  { value: "project-mgmt", label: "Project Management" },
  { value: "microsoft", label: "Microsoft Certifications" },
  { value: "other", label: "Other" },
];

const schedulePreferences = [
  { value: "fulltime", label: "Full-time (Weekdays)" },
  { value: "parttime", label: "Part-time (Evenings)" },
  { value: "weekend", label: "Weekends Only" },
  { value: "flexible", label: "Flexible / Online" },
];

const steps = [
  { number: 1, title: "Fill the Form", description: "Tell us about yourself and your goals" },
  { number: 2, title: "Get a Call", description: "Our advisor will contact you within 24 hours" },
  { number: 3, title: "Choose Your Course", description: "Select the perfect program for you" },
  { number: 4, title: "Start Learning", description: "Begin your journey to a tech career" },
];

export default function Enroll() {
  const [searchParams] = useSearchParams();
  const courseSlug = searchParams.get("course");
  const selectedCourse = courseSlug ? courses[courseSlug] : null;

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    courseInterest: "",
    schedule: "",
    message: "",
    agreeTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);

  // Pre-fill course interest based on URL parameter
  useEffect(() => {
    if (selectedCourse) {
      // Map course category to interest
      const categoryMap: Record<string, string> = {
        "Short Course": courseSlug?.includes("web") ? "web-dev" : 
                        courseSlug?.includes("data") ? "data-analytics" :
                        courseSlug?.includes("cyber") || courseSlug?.includes("security") ? "cybersecurity" :
                        courseSlug?.includes("cloud") || courseSlug?.includes("aws") || courseSlug?.includes("azure") ? "cloud" :
                        courseSlug?.includes("mobile") ? "mobile" :
                        courseSlug?.includes("ui-ux") || courseSlug?.includes("design") ? "ui-ux" : "other",
        "Professional": courseSlug?.includes("pmp") || courseSlug?.includes("project") ? "project-mgmt" :
                        courseSlug?.includes("data") ? "data-analytics" :
                        courseSlug?.includes("devops") || courseSlug?.includes("cloud") ? "cloud" :
                        courseSlug?.includes("cyber") || courseSlug?.includes("security") ? "cybersecurity" :
                        courseSlug?.includes("ml") || courseSlug?.includes("machine") ? "data-analytics" : "other",
        "Vendor Training": courseSlug?.includes("azure") || courseSlug?.includes("microsoft") ? "microsoft" :
                          courseSlug?.includes("aws") ? "cloud" :
                          courseSlug?.includes("cisco") || courseSlug?.includes("ccna") || courseSlug?.includes("network") ? "networking" :
                          courseSlug?.includes("comptia") ? "networking" : "other",
      };
      const interest = categoryMap[selectedCourse.category] || "other";
      setFormState(prev => ({ ...prev, courseInterest: interest }));
    }
  }, [selectedCourse, courseSlug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-hero grid-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="badge-success animate-slide-up">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {selectedCourse ? "You're Enrolling In" : "Start Your Journey"}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-6 animate-slide-up delay-100">
              {selectedCourse ? (
                <>
                  <span className="text-gradient">{selectedCourse.name}</span>
                </>
              ) : (
                <>
                  Enroll Today &
                  <span className="text-gradient block">Transform Your Future</span>
                </>
              )}
            </h1>
            {selectedCourse ? (
              <div className="animate-slide-up delay-200">
                <div className="inline-flex items-center gap-4 bg-surface-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl px-6 py-4 mb-6">
                  <span className="text-4xl">{selectedCourse.icon}</span>
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="badge-primary text-xs">{selectedCourse.category}</span>
                      <span className="text-sm text-gray-400">{selectedCourse.duration}</span>
                    </div>
                    <p className="font-heading text-xl font-bold text-white">{selectedCourse.price}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-400">
                  Complete the form below to secure your spot. Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <p className="text-lg md:text-xl text-gray-400 mb-8 animate-slide-up delay-200">
                Join 50,000+ successful graduates. Fill out the form below and our team will 
                guide you to the perfect course for your career goals.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-surface-900 border-y border-primary-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 border border-primary-500/30 flex items-center justify-center mx-auto mb-3">
                  <span className="font-heading font-bold text-primary-400">{step.number}</span>
                </div>
                <h3 className="font-heading font-semibold text-white text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-gray-400">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary-500/30 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-surface-900/50 border border-emerald-500/30 rounded-3xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-heading text-3xl font-bold text-white mb-4">
                You're All Set! 🎉
              </h2>
              <p className="text-lg text-gray-400 mb-6 max-w-md mx-auto">
                Thank you for your interest in Computer Pride. Our admissions team will contact you 
                within 24 hours to discuss your learning goals.
              </p>
              <div className="bg-surface-800/50 rounded-2xl p-6 mb-8 max-w-sm mx-auto">
                <p className="text-sm text-gray-400 mb-2">What happens next?</p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2 text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Check your email for confirmation
                  </li>
                  <li className="flex items-center gap-2 text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advisor call within 24 hours
                  </li>
                  <li className="flex items-center gap-2 text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Download our learning app
                  </li>
                </ul>
              </div>
              
              {/* App Download CTA */}
              <div className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-2xl p-6 mb-6">
                <p className="font-heading font-semibold text-white mb-3">📱 Get a Head Start!</p>
                <p className="text-sm text-gray-400 mb-4">Download the Computer Pride app and start exploring free content while you wait.</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-surface-800 rounded-lg hover:bg-surface-700 transition-colors">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <span className="text-sm font-medium text-white">App Store</span>
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-surface-800 rounded-lg hover:bg-surface-700 transition-colors">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                    </svg>
                    <span className="text-sm font-medium text-white">Play Store</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/training" className="btn-primary">
                  Browse All Courses
                </Link>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      education: "",
                      experience: "",
                      courseInterest: "",
                      schedule: "",
                      message: "",
                      agreeTerms: false,
                    });
                  }}
                  className="btn-secondary"
                >
                  Submit Another
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-surface-900/50 border border-primary-500/10 rounded-3xl p-6 md:p-10">
              <div className="text-center mb-8">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                  Student Registration Form
                </h2>
                <p className="text-gray-400">
                  Fill in your details and we'll help you find the perfect course
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="font-heading font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-xs text-primary-400">1</span>
                    Personal Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={formState.firstName}
                        onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                        className="input"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        value={formState.lastName}
                        onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                        className="input"
                        placeholder="Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="input"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="input"
                        placeholder="+254 700 000 000"
                      />
                    </div>
                  </div>
                </div>

                {/* Background */}
                <div>
                  <h3 className="font-heading font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-xs text-primary-400">2</span>
                    Your Background
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="education" className="block text-sm font-medium text-gray-300 mb-2">
                        Highest Education Level
                      </label>
                      <select
                        id="education"
                        value={formState.education}
                        onChange={(e) => setFormState({ ...formState, education: e.target.value })}
                        className="input"
                      >
                        <option value="">Select level</option>
                        <option value="secondary">Secondary School (KCSE)</option>
                        <option value="certificate">Certificate</option>
                        <option value="diploma">Diploma</option>
                        <option value="degree">Bachelor's Degree</option>
                        <option value="masters">Master's Degree</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                        IT Experience Level
                      </label>
                      <select
                        id="experience"
                        value={formState.experience}
                        onChange={(e) => setFormState({ ...formState, experience: e.target.value })}
                        className="input"
                      >
                        <option value="">Select level</option>
                        <option value="none">No Experience (Complete Beginner)</option>
                        <option value="basic">Basic (Self-taught/Hobbyist)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="advanced">Advanced (3+ years)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Course Interest */}
                <div>
                  <h3 className="font-heading font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-xs text-primary-400">3</span>
                    Course Interest
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="courseInterest" className="block text-sm font-medium text-gray-300 mb-2">
                        What would you like to learn? *
                      </label>
                      <select
                        id="courseInterest"
                        required
                        value={formState.courseInterest}
                        onChange={(e) => setFormState({ ...formState, courseInterest: e.target.value })}
                        className="input"
                      >
                        <option value="">Select area of interest</option>
                        {courseInterests.map((course) => (
                          <option key={course.value} value={course.value}>
                            {course.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="schedule" className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Schedule *
                      </label>
                      <select
                        id="schedule"
                        required
                        value={formState.schedule}
                        onChange={(e) => setFormState({ ...formState, schedule: e.target.value })}
                        className="input"
                      >
                        <option value="">Select preference</option>
                        {schedulePreferences.map((pref) => (
                          <option key={pref.value} value={pref.value}>
                            {pref.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Anything else you'd like us to know?
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="input resize-none"
                    placeholder="Tell us about your goals, questions, or specific requirements..."
                  />
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    required
                    checked={formState.agreeTerms}
                    onChange={(e) => setFormState({ ...formState, agreeTerms: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-primary-500/30 bg-surface-800 text-primary-500 focus:ring-primary-500/20"
                  />
                  <label htmlFor="agreeTerms" className="text-sm text-gray-400">
                    I agree to receive communications from Computer Pride about courses, events, and promotions. 
                    I understand I can unsubscribe at any time. *
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Submit Application
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our{" "}
                  <Link to="/privacy" className="text-primary-400 hover:underline">Privacy Policy</Link>
                  {" "}and{" "}
                  <Link to="/terms" className="text-primary-400 hover:underline">Terms of Service</Link>.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* App Promo Section */}
      <section className="section gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 p-8 md:p-12">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm text-white mb-4">
                  📱 Now Available
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                  Learn Anywhere with Our Mobile App
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  Access your courses, track progress, and learn on-the-go with the Computer Pride mobile app. 
                  Available on iOS and Android.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-white/90">
                    <svg className="w-5 h-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Watch video lessons offline
                  </li>
                  <li className="flex items-center gap-3 text-white/90">
                    <svg className="w-5 h-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Practice with interactive quizzes
                  </li>
                  <li className="flex items-center gap-3 text-white/90">
                    <svg className="w-5 h-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Get push notifications for live sessions
                  </li>
                  <li className="flex items-center gap-3 text-white/90">
                    <svg className="w-5 h-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Connect with instructors & peers
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="inline-flex items-center gap-3 px-5 py-3 bg-black rounded-xl hover:bg-gray-900 transition-colors">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs text-gray-400">Download on the</p>
                      <p className="text-sm font-semibold text-white">App Store</p>
                    </div>
                  </a>
                  <a href="#" className="inline-flex items-center gap-3 px-5 py-3 bg-black rounded-xl hover:bg-gray-900 transition-colors">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs text-gray-400">Get it on</p>
                      <p className="text-sm font-semibold text-white">Google Play</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="relative">
                  {/* Phone mockup */}
                  <div className="w-64 h-[500px] bg-surface-950 rounded-[3rem] border-4 border-gray-700 p-2 shadow-2xl">
                    <div className="w-full h-full bg-surface-900 rounded-[2.5rem] overflow-hidden relative">
                      {/* Screen content */}
                      <div className="absolute inset-0 p-4">
                        <div className="flex items-center justify-between mb-6 pt-6">
                          <p className="font-heading font-bold text-white text-lg">Computer Pride</p>
                          <div className="w-8 h-8 rounded-full bg-primary-500/20"></div>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">Welcome back! 👋</p>
                        <div className="space-y-3">
                          <div className="bg-surface-800 rounded-xl p-3">
                            <p className="text-xs text-gray-400 mb-1">Continue Learning</p>
                            <p className="text-sm font-medium text-white">Web Development</p>
                            <div className="mt-2 h-1.5 bg-surface-700 rounded-full">
                              <div className="h-full w-3/4 bg-primary-500 rounded-full"></div>
                            </div>
                          </div>
                          <div className="bg-surface-800 rounded-xl p-3">
                            <p className="text-xs text-gray-400 mb-1">Next Class</p>
                            <p className="text-sm font-medium text-white">React Fundamentals</p>
                            <p className="text-xs text-accent-400 mt-1">Today, 2:00 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 bg-accent-500 text-surface-900 font-bold text-sm px-3 py-1 rounded-full">
                    FREE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Enroll */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-primary mb-4">Why Choose Us</span>
            <h2 className="section-title">
              Your Success is Our <span className="text-gradient">Priority</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-heading font-semibold text-white mb-2">Expert Instructors</h3>
              <p className="text-sm text-gray-400">Learn from industry professionals with real-world experience</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="font-heading font-semibold text-white mb-2">Career Support</h3>
              <p className="text-sm text-gray-400">Resume help, interview prep, and job placement assistance</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-heading font-semibold text-white mb-2">Flexible Payment</h3>
              <p className="text-sm text-gray-400">Pay in installments with our flexible payment plans</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-heading font-semibold text-white mb-2">Learn Anywhere</h3>
              <p className="text-sm text-gray-400">Access courses on our mobile app, anytime, anywhere</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

