import { Link } from "react-router";
import { useState } from "react";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us | Computer Pride - Get in Touch" },
    { name: "description", content: "Contact Computer Pride for IT training, certifications, business solutions, or infrastructure needs. Visit our offices in Nairobi, Mombasa, and Kampala." },
  ];
}

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Phone",
    description: "Talk to our team",
    value: "(+254) 20 2221973",
    link: "tel:+254202221973",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    description: "Send us a message",
    value: "info@computer-pride.co.ke",
    link: "mailto:info@computer-pride.co.ke",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Hours",
    description: "We're available",
    value: "Mon-Fri 9am-5:30pm",
    link: "#locations",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "WhatsApp",
    description: "Quick chat",
    value: "+254 705 900 900",
    link: "https://wa.me/254705900900",
  },
];

const inquiryTypes = [
  { value: "training", label: "Training & Courses" },
  { value: "certification", label: "Certification Exams" },
  { value: "corporate", label: "Corporate Training" },
  { value: "solutions", label: "Business Solutions" },
  { value: "infrastructure", label: "IT Infrastructure" },
  { value: "other", label: "Other Inquiry" },
];

const faqs = [
  {
    question: "What are your training hours?",
    answer: "Our regular training hours are Monday to Friday, 8:00 AM to 6:00 PM. Weekend classes are available for select courses, typically 9:00 AM to 4:00 PM.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment plans for most courses. You can pay in 2-3 installments. Contact us to discuss options that work for your situation.",
  },
  {
    question: "How do I schedule a certification exam?",
    answer: "You can schedule exams by contacting us via phone, email, or this form. We offer same-day scheduling for many exams, subject to availability.",
  },
  {
    question: "Do you provide corporate training at our premises?",
    answer: "Yes, we offer on-site corporate training. We can customize programs for your team and deliver them at your location with all necessary equipment.",
  },
  {
    question: "What's included in course fees?",
    answer: "Course fees typically include training materials, hands-on labs, refreshments, and a certificate of completion. Certification exam vouchers are included for vendor courses.",
  },
  {
    question: "Can I get a refund if I can't attend?",
    answer: "We offer full refunds up to 7 days before the course start date. Within 7 days, you can reschedule to a future intake at no additional cost.",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a server
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-hero grid-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <span className="badge-primary animate-slide-up">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
              Get In Touch
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-6 animate-slide-up delay-100">
              Let's Start a
              <span className="text-gradient block">Conversation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 animate-slide-up delay-200">
              Have a question about our training programs, certifications, or business solutions? 
              We're here to help you find the perfect solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-surface-900 border-y border-primary-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="flex items-center gap-4 p-4 bg-surface-800/50 rounded-xl hover:bg-primary-500/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  {method.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400">{method.title}</p>
                  <p className="font-heading font-semibold text-white">{method.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <span className="badge-accent mb-4">Send a Message</span>
              <h2 className="section-title mb-6">
                How Can We <span className="text-gradient">Help?</span>
              </h2>

              {submitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", phone: "", company: "", inquiryType: "", message: "" });
                    }}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="input"
                        placeholder="John Doe"
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
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="input"
                        placeholder="+254 700 000 000"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="input"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-300 mb-2">
                      What can we help you with? *
                    </label>
                    <select
                      id="inquiryType"
                      required
                      value={formState.inquiryType}
                      onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                      className="input"
                    >
                      <option value="">Select an option</option>
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="input resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send Message
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Office Locations */}
            <div id="locations">
              <span className="badge-primary mb-4">Our Offices</span>
              <h2 className="section-title mb-6">
                Visit <span className="text-gradient">Us</span>
              </h2>

              <div className="space-y-6">
                {/* Nairobi Office */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                      🇰🇪
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-heading text-xl font-bold text-white">Nairobi</h3>
                        <span className="badge-primary text-xs">Head Office</span>
                      </div>
                      <p className="text-gray-400 mb-4">
                        1st Floor, JKUAT Tower<br />
                        Kenyatta Avenue<br />
                        Nairobi, Kenya
                      </p>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-400">
                          <span className="text-gray-500">Phone:</span>{" "}
                          <a href="tel:+254705900900" className="text-primary-400 hover:text-primary-300">
                            +254 705 900 900
                          </a>
                        </p>
                        <p className="text-gray-400">
                          <span className="text-gray-500">Email:</span>{" "}
                          <a href="mailto:info@computer-pride.co.ke" className="text-primary-400 hover:text-primary-300">
                            info@computer-pride.co.ke
                          </a>
                        </p>
                        <p className="text-gray-400">
                          <span className="text-gray-500">Hours:</span> Mon-Fri 9:00 AM - 5:30 PM
                        </p>
                        <p className="text-gray-400">
                          <span className="text-gray-500">Saturday:</span> 9:00 AM - 1:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mombasa Office */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                      🌴
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold text-white mb-2">Mombasa</h3>
                      <p className="text-gray-400 mb-4">
                        1st Floor, Mombasa Trade Centre<br />
                        Nkurumah Road<br />
                        Mombasa, Kenya
                      </p>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-400">
                          <span className="text-gray-500">Phone:</span>{" "}
                          <a href="tel:+254708414141" className="text-primary-400 hover:text-primary-300">
                            +254 708 414 141
                          </a>
                        </p>
                        <p className="text-gray-400">
                          <span className="text-gray-500">Email:</span>{" "}
                          <a href="mailto:mombasa@computer-pride.co.ke" className="text-primary-400 hover:text-primary-300">
                            mombasa@computer-pride.co.ke
                          </a>
                        </p>
                        <p className="text-gray-400">
                          <span className="text-gray-500">Hours:</span> Mon-Fri 9:00 AM - 5:30 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kampala Office */}
                <div className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                      🇺🇬
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-heading text-xl font-bold text-white">Kampala, Uganda</h3>
                        <span className="badge-success text-xs">East Africa</span>
                      </div>
                      <p className="text-gray-400 mb-4">
                        4th Floor, Room 304<br />
                        The Acacia Mall, 14-18 Cooper Road<br />
                        Off Acacia Avenue, Kisementi
                      </p>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-400">
                          <span className="text-gray-500">Phone:</span>{" "}
                          <a href="tel:+256741494145" className="text-primary-400 hover:text-primary-300">
                            +256 741 494 145
                          </a>
                        </p>
                        <p className="text-gray-400">
                          <span className="text-gray-500">Email:</span>{" "}
                          <a href="mailto:uganda@computer-pride.co.ug" className="text-primary-400 hover:text-primary-300">
                            uganda@computer-pride.co.ug
                          </a>
                        </p>
                        <p className="text-gray-400">
                          <span className="text-gray-500">Hours:</span> Mon-Fri 9:00 AM - 5:30 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-primary-500/10 to-purple-500/10 border border-primary-500/20 rounded-2xl p-6">
                  <h3 className="font-heading text-lg font-bold text-white mb-4">Need Immediate Assistance?</h3>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/254705900900"
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                    >
                      <span className="text-xl">💬</span>
                      <span>Chat on WhatsApp</span>
                    </a>
                    <a
                      href="tel:+254202221973"
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                    >
                      <span className="text-xl">📞</span>
                      <span>Call us: (+254) 20 2221973</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="section gradient-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-success mb-4">FAQs</span>
            <h2 className="section-title mb-4">
              Common <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-surface-900/50 border border-primary-500/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-heading font-semibold text-white pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-primary-400 flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">Can't find what you're looking for?</p>
            <a href="mailto:info@computer-pride.co.ke" className="text-primary-400 hover:text-primary-300 font-medium">
              Email us your question →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-purple-700 p-8 md:p-16 text-center">
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
                Whether you're looking to advance your career, train your team, or transform your business, 
                we're here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/training" className="btn-accent">
                  Explore Training
                </Link>
                <Link to="/solutions" className="inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-colors">
                  Business Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

