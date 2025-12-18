import { Link } from "react-router";
import { useState } from "react";
import type { Route } from "./+types/infrastructure";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "IT Infrastructure | Computer Pride - Hardware & Networking Solutions" },
    { name: "description", content: "Complete IT infrastructure solutions. Servers, networking equipment, workstations, storage, security systems, and professional installation services." },
  ];
}

const categories = [
  { id: "all", name: "All Products" },
  { id: "servers", name: "Servers" },
  { id: "networking", name: "Networking" },
  { id: "workstations", name: "Workstations" },
  { id: "storage", name: "Storage" },
  { id: "security", name: "Security" },
];

const products = [
  {
    id: 1,
    category: "servers",
    name: "Dell PowerEdge R750",
    description: "2U rack server with Intel Xeon Scalable processors, ideal for demanding workloads",
    price: "From KES 450,000",
    image: "🖥️",
    specs: ["Intel Xeon 3rd Gen", "Up to 2TB RAM", "24 NVMe drives", "Redundant PSU"],
    tag: "Best Seller",
  },
  {
    id: 2,
    category: "servers",
    name: "HPE ProLiant DL380 Gen10",
    description: "Industry-leading 2P 2U server with world-class performance and security",
    price: "From KES 380,000",
    image: "🖥️",
    specs: ["Intel Xeon Scalable", "Up to 3TB RAM", "30 SFF drives", "HPE iLO 5"],
  },
  {
    id: 3,
    category: "servers",
    name: "Lenovo ThinkSystem SR650",
    description: "Versatile 2U server optimized for performance and flexibility",
    price: "From KES 350,000",
    image: "🖥️",
    specs: ["Intel Xeon Platinum", "Up to 1.5TB RAM", "20 drive bays", "XClarity"],
  },
  {
    id: 4,
    category: "networking",
    name: "Cisco Catalyst 9300",
    description: "Stackable enterprise switching platform with full PoE+",
    price: "From KES 180,000",
    image: "🌐",
    specs: ["24/48 Port options", "PoE+/mGig", "480Gbps stacking", "DNA Ready"],
    tag: "Popular",
  },
  {
    id: 5,
    category: "networking",
    name: "Ubiquiti UniFi Dream Machine Pro",
    description: "All-in-one network appliance with advanced security gateway",
    price: "KES 85,000",
    image: "🌐",
    specs: ["10G SFP+ WAN", "8-port switch", "UniFi Controller", "IDS/IPS"],
  },
  {
    id: 6,
    category: "networking",
    name: "Cisco Meraki MX250",
    description: "Cloud-managed security & SD-WAN appliance",
    price: "From KES 650,000",
    image: "🔒",
    specs: ["4 Gbps throughput", "SD-WAN", "Auto VPN", "Cloud managed"],
  },
  {
    id: 7,
    category: "workstations",
    name: "Dell Precision 5860 Tower",
    description: "Professional workstation for AI, rendering, and engineering",
    price: "From KES 280,000",
    image: "💻",
    specs: ["Intel Xeon W", "Up to 128GB RAM", "NVIDIA RTX", "ISV certified"],
    tag: "New",
  },
  {
    id: 8,
    category: "workstations",
    name: "HP Z4 G5 Workstation",
    description: "High-performance workstation for demanding professionals",
    price: "From KES 250,000",
    image: "💻",
    specs: ["Intel Xeon W", "Up to 512GB RAM", "Dual GPU support", "Tool-less"],
  },
  {
    id: 9,
    category: "workstations",
    name: "Lenovo ThinkPad P16",
    description: "16-inch mobile workstation for power users on the go",
    price: "From KES 320,000",
    image: "💼",
    specs: ["Intel Core i9/Xeon", "Up to 128GB", "NVIDIA RTX 5000", "16\" 4K display"],
  },
  {
    id: 10,
    category: "storage",
    name: "Synology RS3621xs+",
    description: "High-performance rackmount NAS for large-scale deployments",
    price: "From KES 420,000",
    image: "💾",
    specs: ["12 drive bays", "64GB RAM max", "10GbE built-in", "Expandable"],
    tag: "Enterprise",
  },
  {
    id: 11,
    category: "storage",
    name: "Dell EMC PowerStore 500",
    description: "Intelligent, adaptable storage with built-in ML",
    price: "From KES 1,200,000",
    image: "💾",
    specs: ["NVMe architecture", "Up to 1PB", "AppsON capability", "Anytime upgrade"],
  },
  {
    id: 12,
    category: "storage",
    name: "QNAP TS-873A",
    description: "High-performance 8-bay NAS with AMD Ryzen processor",
    price: "KES 180,000",
    image: "💾",
    specs: ["AMD Ryzen V1500B", "Up to 64GB RAM", "2.5GbE x 2", "PCIe slots"],
  },
  {
    id: 13,
    category: "security",
    name: "Fortinet FortiGate 100F",
    description: "Next-gen firewall with advanced threat protection",
    price: "From KES 280,000",
    image: "🛡️",
    specs: ["20 Gbps throughput", "SSL inspection", "SD-WAN", "Zero Trust"],
    tag: "Recommended",
  },
  {
    id: 14,
    category: "security",
    name: "Palo Alto PA-440",
    description: "ML-powered next-generation firewall",
    price: "From KES 350,000",
    image: "🛡️",
    specs: ["2.4 Gbps throughput", "Inline ML", "Cloud-delivered", "IoT security"],
  },
  {
    id: 15,
    category: "security",
    name: "Hikvision DS-9664NI-I8",
    description: "64-channel 4K NVR for enterprise surveillance",
    price: "KES 145,000",
    image: "📹",
    specs: ["64 channels", "Up to 12MP", "8 SATA", "RAID support"],
  },
];

const services = [
  {
    icon: "🔧",
    title: "Installation & Setup",
    description: "Professional installation and configuration of all equipment",
  },
  {
    icon: "🛠️",
    title: "Maintenance & Support",
    description: "Ongoing maintenance contracts and technical support",
  },
  {
    icon: "📋",
    title: "Infrastructure Design",
    description: "Custom infrastructure design and consulting",
  },
  {
    icon: "🚚",
    title: "Procurement Services",
    description: "End-to-end procurement and logistics management",
  },
];

const brands = [
  "Dell", "HP Enterprise", "Cisco", "Lenovo", "Fortinet", "Synology", "Ubiquiti", "QNAP", "Palo Alto", "VMware"
];

export default function Infrastructure() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="gradient-hero grid-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <span className="badge-accent animate-slide-up">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span>
              Enterprise Hardware
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-6 animate-slide-up delay-100">
              IT Infrastructure
              <span className="text-gradient block">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 animate-slide-up delay-200">
              Complete IT infrastructure solutions from servers to security systems. 
              Quality hardware, competitive pricing, and professional installation services.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-300">
              <a href="#products" className="btn-primary">
                Browse Products
              </a>
              <Link to="/contact" className="btn-secondary">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bar */}
      <section className="bg-surface-900 border-y border-primary-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="text-2xl">{service.icon}</div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-sm">{service.title}</h3>
                  <p className="text-xs text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="badge-primary mb-4">Our Catalog</span>
              <h2 className="section-title">
                IT <span className="text-gradient">Products</span>
              </h2>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-sm font-heading font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary-500 text-white"
                    : "bg-surface-800 text-gray-400 hover:text-white hover:bg-surface-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group bg-surface-900/50 backdrop-blur-sm border border-primary-500/10 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-300"
              >
                {product.tag && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`badge text-xs ${
                      product.tag === "Best Seller" ? "badge-accent" :
                      product.tag === "New" ? "badge-success" :
                      product.tag === "Popular" ? "badge-primary" :
                      "badge-primary"
                    }`}>
                      {product.tag}
                    </span>
                  </div>
                )}
                
                <div className="relative h-40 bg-gradient-to-br from-surface-800 to-surface-900 flex items-center justify-center">
                  <span className="text-7xl opacity-80">{product.image}</span>
                </div>
                
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-primary-400 mb-2">
                    {categories.find(c => c.id === product.category)?.name}
                  </p>
                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{product.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specs.slice(0, 3).map((spec, i) => (
                      <span key={i} className="text-xs bg-surface-800 text-gray-400 px-2 py-1 rounded">
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-primary-500/10">
                    <p className="font-heading text-xl font-bold text-white">{product.price}</p>
                    <Link 
                      to="/contact" 
                      className="text-primary-400 hover:text-primary-300 font-medium text-sm"
                    >
                      Get Quote →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Don't see what you need? We can source any IT equipment.</p>
            <Link to="/contact" className="btn-secondary">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 bg-surface-900/50 border-y border-primary-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-6">Authorized partner for leading brands</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {brands.map((brand, index) => (
              <span key={index} className="font-heading font-semibold text-gray-500 hover:text-gray-300 transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent-600 to-orange-600 p-8 md:p-16">
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                  Need Help Choosing?
                </h2>
                <p className="text-lg text-accent-100 mb-6">
                  Our infrastructure specialists can help you design the perfect solution for your needs and budget.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-accent-100">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Free infrastructure assessment
                  </li>
                  <li className="flex items-center gap-3 text-accent-100">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom quotes within 24 hours
                  </li>
                  <li className="flex items-center gap-3 text-accent-100">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Professional installation included
                  </li>
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 font-heading font-semibold text-accent-600 bg-white rounded-xl transition-all hover:bg-accent-50">
                  Get Free Assessment
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-6xl mb-4">📞</div>
                  <p className="font-heading font-bold text-xl text-white mb-2">Talk to an Expert</p>
                  <p className="text-accent-200 mb-4">Mon-Fri: 8AM - 6PM</p>
                  <a href="tel:+254700000000" className="font-heading font-bold text-2xl text-white hover:text-accent-200 transition-colors">
                    +254 700 000 000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

