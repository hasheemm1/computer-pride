import { Link } from "react-router";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us | Computer Pride - Kenya's Premier IT Training Center" },
    { name: "description", content: "Over 35 years of excellence in IT training and solutions. Learn about our mission, values, and commitment to empowering Kenya's tech workforce." },
  ];
}

const milestones = [
  { year: "1988", title: "Founded", description: "Computer Pride established as Kenya's first dedicated IT training center" },
  { year: "1995", title: "Microsoft Partnership", description: "Became an authorized Microsoft training center" },
  { year: "2002", title: "Cisco Academy", description: "Launched as a Cisco Networking Academy" },
  { year: "2010", title: "Enterprise Solutions", description: "Expanded into business solutions and consulting" },
  { year: "2015", title: "Cloud Services", description: "Added AWS and Azure training and services" },
  { year: "2020", title: "Digital Transformation", description: "Launched online learning and hybrid delivery" },
  { year: "2024", title: "AI & Innovation", description: "Introduced AI/ML courses and modern tech stack training" },
];

const values = [
  {
    icon: "🎯",
    title: "Excellence",
    description: "We maintain the highest standards in training quality and service delivery",
  },
  {
    icon: "🤝",
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical practices",
  },
  {
    icon: "💡",
    title: "Innovation",
    description: "We continuously evolve our offerings to meet industry demands",
  },
  {
    icon: "🌍",
    title: "Impact",
    description: "We're committed to developing Kenya's tech talent and economy",
  },
];

const leadership = [
  {
    name: "John Kamau",
    role: "Chief Executive Officer",
    bio: "30+ years in IT industry, former CIO at Kenya Power",
    image: "👨🏾‍💼",
  },
  {
    name: "Mary Wanjiku",
    role: "Director of Training",
    bio: "Microsoft Certified Trainer, 20+ years in education",
    image: "👩🏾‍💼",
  },
  {
    name: "Peter Ochieng",
    role: "Head of Business Solutions",
    bio: "Former consultant at Deloitte, ERP specialist",
    image: "👨🏾‍💻",
  },
  {
    name: "Grace Muthoni",
    role: "Director of Operations",
    bio: "MBA, 15+ years in operations management",
    image: "👩🏾‍💼",
  },
];

const certifications = [
  { name: "Microsoft Learning Partner", logo: "🏢" },
  { name: "Cisco Learning Partner", logo: "🌐" },
  { name: "AWS Training Partner", logo: "☁️" },
  { name: "CompTIA Partner", logo: "💻" },
  { name: "Pearson VUE Testing", logo: "📋" },
  { name: "ISO 9001:2015", logo: "✅" },
];

const stats = [
  { number: "35+", label: "Years of Excellence" },
  { number: "50,000+", label: "Graduates" },
  { number: "200+", label: "Corporate Clients" },
  { number: "100+", label: "Courses Offered" },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-hero grid-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-primary animate-slide-up">
                <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
                Since 1988
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-6 animate-slide-up delay-100">
                Building Kenya's
                <span className="text-gradient block">Tech Talent</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8 animate-slide-up delay-200">
                For over 35 years, Computer Pride has been at the forefront of IT training and enterprise 
                solutions in Kenya. We've trained over 50,000 professionals and partnered with 200+ 
                organizations on their digital journey.
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-up delay-300">
                <Link to="/enroll" className="btn-primary">
                  Join Us Today
                </Link>
                <Link to="/training" className="btn-secondary">
                  Explore Training
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-surface-900/50 backdrop-blur-sm border border-primary-500/20 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    {stats.map((stat, index) => (
                      <div key={index} className="p-4">
                        <p className="font-heading text-3xl font-bold text-gradient">{stat.number}</p>
                        <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-featured">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="font-heading text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To empower individuals and organizations with world-class IT skills and solutions, 
                enabling them to thrive in the digital economy. We are committed to delivering 
                practical, industry-relevant training and innovative technology solutions that 
                drive success.
              </p>
            </div>
            <div className="card-featured">
              <div className="text-4xl mb-4">🔭</div>
              <h2 className="font-heading text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To be East Africa's leading IT training and solutions provider, recognized for 
                excellence in education, innovation in technology solutions, and impact on the 
                region's digital transformation and workforce development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-accent mb-4">What Drives Us</span>
            <h2 className="section-title mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-surface-800 border border-primary-500/20 flex items-center justify-center mx-auto mb-4 text-3xl">
                  {value.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-primary mb-4">Our Journey</span>
            <h2 className="section-title mb-4">
              35+ Years of <span className="text-gradient">Excellence</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="card">
                      <span className="badge-primary mb-2">{milestone.year}</span>
                      <h3 className="font-heading text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-surface-950"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-success mb-4">Our Team</span>
            <h2 className="section-title mb-4">
              Leadership <span className="text-gradient">Team</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Experienced professionals committed to your success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <div key={index} className="card text-center group">
                <div className="w-20 h-20 rounded-full bg-surface-800 flex items-center justify-center mx-auto mb-4 text-4xl group-hover:scale-110 transition-transform">
                  {leader.image}
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-1">{leader.name}</h3>
                <p className="text-primary-400 text-sm font-medium mb-2">{leader.role}</p>
                <p className="text-gray-400 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-primary mb-4">Accreditations</span>
            <h2 className="section-title mb-4">
              Authorized <span className="text-gradient">Partner</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-surface-900/50 border border-primary-500/10 rounded-xl p-6 text-center hover:border-primary-500/30 transition-all">
                <div className="text-4xl mb-3">{cert.logo}</div>
                <p className="font-heading font-semibold text-white text-sm">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-accent mb-4">Find Us</span>
            <h2 className="section-title mb-4">
              Our <span className="text-gradient">Locations</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Nairobi */}
            <div className="card text-center group">
              <div className="text-4xl mb-4">🇰🇪</div>
              <div className="inline-block mb-3">
                <span className="badge-primary text-xs">Head Office</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Nairobi</h3>
              <p className="text-gray-400 text-sm mb-4">
                1st Floor, JKUAT Tower<br />
                Kenyatta Avenue
              </p>
              <div className="space-y-1 text-sm">
                <p className="text-primary-400 font-medium">+254 705 900 900</p>
                <p className="text-gray-500">info@computer-pride.co.ke</p>
              </div>
            </div>

            {/* Mombasa */}
            <div className="card text-center group">
              <div className="text-4xl mb-4">🌴</div>
              <div className="inline-block mb-3">
                <span className="badge-accent text-xs">Coastal</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Mombasa</h3>
              <p className="text-gray-400 text-sm mb-4">
                1st Floor, Mombasa Trade Centre<br />
                Nkurumah Road
              </p>
              <div className="space-y-1 text-sm">
                <p className="text-primary-400 font-medium">+254 708 414 141</p>
                <p className="text-gray-500">mombasa@computer-pride.co.ke</p>
              </div>
            </div>

            {/* Kampala */}
            <div className="card text-center group">
              <div className="text-4xl mb-4">🇺🇬</div>
              <div className="inline-block mb-3">
                <span className="badge-success text-xs">East Africa</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Kampala, Uganda</h3>
              <p className="text-gray-400 text-sm mb-4">
                4th Floor, The Acacia Mall<br />
                Off Acacia Avenue, Kisementi
              </p>
              <div className="space-y-1 text-sm">
                <p className="text-primary-400 font-medium">+256 741 494 145</p>
                <p className="text-gray-500">uganda@computer-pride.co.ug</p>
              </div>
            </div>
          </div>

          {/* Hours Info */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-4 bg-surface-800/50 rounded-2xl px-6 py-4">
              <div className="text-2xl">🕐</div>
              <div className="text-left">
                <p className="text-white font-medium">Monday - Friday: 9:00 AM - 5:30 PM</p>
                <p className="text-gray-400 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-purple-700 p-8 md:p-16 text-center">
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Join Our Community
              </h2>
              <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
                Whether you're an individual looking to advance your career or an organization seeking IT solutions, 
                we're here to help you succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/training" className="btn-accent">
                  Explore Training
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

