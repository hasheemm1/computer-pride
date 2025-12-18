import { Link } from "react-router";
import type { Route } from "./+types/vendor-based";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vendor-Based Training | Computer Pride - Official Certification Courses" },
    { name: "description", content: "Official authorized training from Microsoft, Cisco, AWS, CompTIA, and more. Prepare for globally recognized certifications with expert instructors." },
  ];
}

const vendors = [
  {
    name: "Microsoft",
    logo: "🏢",
    description: "Official Microsoft Certified Training Partner",
    courses: [
      { slug: "azure-administrator", title: "AZ-104: Azure Administrator", duration: "4 Days", price: "KES 120,000", nextDate: "Jan 15, 2025" },
      { slug: "azure-solutions-architect", title: "AZ-305: Azure Solutions Architect", duration: "4 Days", price: "KES 140,000", nextDate: "Jan 22, 2025" },
      { slug: "azure-devops", title: "AZ-400: DevOps Engineer Expert", duration: "5 Days", price: "KES 150,000", nextDate: "Feb 5, 2025" },
      { slug: "ms-365-fundamentals", title: "MS-900: Microsoft 365 Fundamentals", duration: "2 Days", price: "KES 50,000", nextDate: "Jan 8, 2025" },
      { slug: "power-platform", title: "PL-900: Power Platform Fundamentals", duration: "2 Days", price: "KES 50,000", nextDate: "Jan 10, 2025" },
    ],
    color: "from-blue-500/20",
  },
  {
    name: "Amazon Web Services",
    logo: "☁️",
    description: "AWS Authorized Training Partner",
    courses: [
      { slug: "aws-solutions-architect", title: "AWS Solutions Architect Associate", duration: "4 Days", price: "KES 130,000", nextDate: "Jan 20, 2025" },
      { slug: "aws-developer", title: "AWS Developer Associate", duration: "3 Days", price: "KES 110,000", nextDate: "Feb 3, 2025" },
      { slug: "aws-sysops", title: "AWS SysOps Administrator", duration: "3 Days", price: "KES 110,000", nextDate: "Feb 10, 2025" },
      { slug: "aws-cloud-practitioner", title: "AWS Cloud Practitioner", duration: "2 Days", price: "KES 60,000", nextDate: "Jan 12, 2025" },
    ],
    color: "from-orange-500/20",
  },
  {
    name: "Cisco",
    logo: "🌐",
    description: "Cisco Learning Partner",
    courses: [
      { slug: "ccna", title: "CCNA: Cisco Certified Network Associate", duration: "5 Days", price: "KES 140,000", nextDate: "Jan 25, 2025" },
      { slug: "ccnp-enterprise", title: "CCNP Enterprise Core", duration: "5 Days", price: "KES 180,000", nextDate: "Feb 15, 2025" },
      { slug: "cyberops", title: "CyberOps Associate", duration: "5 Days", price: "KES 150,000", nextDate: "Feb 20, 2025" },
    ],
    color: "from-cyan-500/20",
  },
  {
    name: "CompTIA",
    logo: "💻",
    description: "CompTIA Authorized Academy",
    courses: [
      { slug: "comptia-a-plus", title: "CompTIA A+ Certification", duration: "5 Days", price: "KES 85,000", nextDate: "Jan 8, 2025" },
      { slug: "comptia-network-plus", title: "CompTIA Network+", duration: "5 Days", price: "KES 95,000", nextDate: "Jan 18, 2025" },
      { slug: "comptia-security-plus", title: "CompTIA Security+", duration: "5 Days", price: "KES 100,000", nextDate: "Jan 28, 2025" },
      { slug: "comptia-linux-plus", title: "CompTIA Linux+", duration: "5 Days", price: "KES 95,000", nextDate: "Feb 8, 2025" },
    ],
    color: "from-red-500/20",
  },
  {
    name: "VMware",
    logo: "💎",
    description: "VMware Authorized Training Center",
    courses: [
      { slug: "vmware-vsphere", title: "VMware vSphere: Install, Configure", duration: "5 Days", price: "KES 200,000", nextDate: "Feb 12, 2025" },
      { slug: "vmware-nsx", title: "VMware NSX: Install, Configure", duration: "5 Days", price: "KES 220,000", nextDate: "Feb 25, 2025" },
    ],
    color: "from-purple-500/20",
  },
  {
    name: "Oracle",
    logo: "🔶",
    description: "Oracle University Partner",
    courses: [
      { slug: "oracle-dba", title: "Oracle Database Administration", duration: "5 Days", price: "KES 180,000", nextDate: "Feb 18, 2025" },
      { slug: "oracle-cloud", title: "Oracle Cloud Infrastructure Foundations", duration: "2 Days", price: "KES 70,000", nextDate: "Jan 30, 2025" },
    ],
    color: "from-red-600/20",
  },
];

const benefits = [
  { icon: "📜", title: "Official Curriculum", description: "Learn from official vendor courseware, not third-party materials" },
  { icon: "👨‍🏫", title: "Certified Instructors", description: "All instructors hold active certifications and real-world experience" },
  { icon: "🎫", title: "Exam Vouchers", description: "Most courses include certification exam vouchers" },
  { icon: "🖥️", title: "Lab Environments", description: "Hands-on practice with official lab environments" },
  { icon: "📚", title: "Course Materials", description: "Official study guides and practice tests included" },
  { icon: "🔄", title: "Retake Policy", description: "Free course retake if you don't pass on first attempt" },
];

export default function VendorBasedTraining() {
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
            <span className="badge-success animate-slide-up">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Authorized Training Partner
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-6 animate-slide-up delay-100">
              Vendor-Based
              <span className="text-gradient block">Certification Training</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 animate-slide-up delay-200 max-w-2xl">
              Official authorized training from the world's leading technology vendors. Prepare for globally 
              recognized certifications with official courseware, certified instructors, and exam vouchers.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up delay-300">
              <a href="#vendors" className="btn-primary">
                View All Courses
              </a>
              <Link to="/contact" className="btn-secondary">
                Custom Training Request
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-surface-900 border-y border-primary-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h3 className="font-heading font-semibold text-white mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendors & Courses */}
      <section id="vendors" className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-primary mb-4">Official Partners</span>
            <h2 className="section-title mb-4">
              Certification <span className="text-gradient">Courses</span>
            </h2>
            <p className="section-subtitle mx-auto">
              As an authorized training partner, we deliver official curriculum with certified instructors.
            </p>
          </div>

          <div className="space-y-12">
            {vendors.map((vendor, vendorIndex) => (
              <div 
                key={vendor.name}
                className={`relative bg-surface-900/50 backdrop-blur-sm border border-primary-500/10 rounded-3xl overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${vendor.color} to-transparent opacity-50`}></div>
                <div className="relative p-6 md:p-8">
                  {/* Vendor Header */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-primary-500/10">
                    <div className="text-5xl">{vendor.logo}</div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-white">{vendor.name}</h3>
                      <p className="text-sm text-gray-400">{vendor.description}</p>
                    </div>
                  </div>

                  {/* Courses Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-primary-500/10">
                          <th className="text-left py-3 px-2 font-heading font-semibold text-gray-400 text-sm">Course</th>
                          <th className="text-left py-3 px-2 font-heading font-semibold text-gray-400 text-sm hidden sm:table-cell">Duration</th>
                          <th className="text-left py-3 px-2 font-heading font-semibold text-gray-400 text-sm">Next Date</th>
                          <th className="text-right py-3 px-2 font-heading font-semibold text-gray-400 text-sm">Price</th>
                          <th className="text-right py-3 px-2"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {vendor.courses.map((course, courseIndex) => (
                          <tr key={courseIndex} className="border-b border-primary-500/5 hover:bg-primary-500/5 transition-colors">
                            <td className="py-4 px-2">
                              <p className="font-heading font-semibold text-white">{course.title}</p>
                              <p className="text-xs text-gray-500 sm:hidden">{course.duration}</p>
                            </td>
                            <td className="py-4 px-2 text-gray-400 hidden sm:table-cell">{course.duration}</td>
                            <td className="py-4 px-2 text-gray-300">{course.nextDate}</td>
                            <td className="py-4 px-2 text-right font-heading font-semibold text-white">{course.price}</td>
                            <td className="py-4 px-2 text-right">
                              <Link to={`/enroll?course=${course.slug}`} className="text-primary-400 hover:text-primary-300 font-medium text-sm whitespace-nowrap">
                                Enroll →
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-purple-700 p-8 md:p-16 text-center">
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Need a Course Not Listed?
              </h2>
              <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
                We can arrange any vendor certification course on demand. Contact us with your requirements 
                and we'll set up a custom training session.
              </p>
              <Link to="/enroll" className="btn-accent">
                Start Your Application
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

