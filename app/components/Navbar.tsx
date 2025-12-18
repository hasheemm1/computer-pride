import { useState } from "react";
import { Link, useLocation } from "react-router";

const navItems = [
  { name: "Home", path: "/" },
  { 
    name: "Training", 
    path: "/training",
    children: [
      { name: "Short Courses", path: "/training/short-courses" },
      { name: "Professional Courses", path: "/training/professional" },
      { name: "Vendor-Based Training", path: "/training/vendor-based" },
    ]
  },
  { name: "Certifications", path: "/certifications" },
  { name: "Business Solutions", path: "/solutions" },
  { name: "Infrastructure", path: "/infrastructure" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-950/80 backdrop-blur-xl border-b border-primary-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/cpl-logo-1-2048x923.png" 
              alt="Computer Pride" 
              className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`nav-link px-4 py-2 text-sm ${isActive(item.path) ? "active" : ""}`}
                >
                  {item.name}
                  {item.children && (
                    <svg
                      className="inline-block ml-1 w-4 h-4 transition-transform"
                      style={{ transform: activeDropdown === item.name ? "rotate(180deg)" : "rotate(0)" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {/* Dropdown */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-surface-900/95 backdrop-blur-xl border border-primary-500/20 rounded-xl shadow-xl overflow-hidden animate-slide-up">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-primary-500/10 transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/enroll" className="btn-primary text-sm">
              Enroll Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-surface-900/95 backdrop-blur-xl border-t border-primary-500/10">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => !item.children && setIsOpen(false)}
                  className={`block px-4 py-3 font-heading font-medium rounded-xl transition-colors ${
                    isActive(item.path)
                      ? "text-white bg-primary-500/20"
                      : "text-gray-300 hover:text-white hover:bg-primary-500/10"
                  }`}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link to="/enroll" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

