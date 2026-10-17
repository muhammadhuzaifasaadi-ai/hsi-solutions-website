"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceLinks = [
  {
    name: "Medical Collections",
    href: "/services/medical-collections",
    description: "Compliant, ethical revenue recovery solutions.",
  },
  {
    name: "Supply Chain Optimization",
    href: "/services/supply-chain",
    description: "Data-driven procurement and inventory control.",
  },
  {
    name: "Peer Review Network",
    href: "/services/peer-review",
    description: "Independent clinical evaluations and quality assurance.",
  },
  {
    name: "Strategic Partner Program",
    href: "/services/strategic-partner",
    description: "Vetted operational partnerships for health systems.",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu and dropdowns when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1B365D] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-md py-1"
            aria-label="HSI Solutions Home"
          >
            <div className="w-10 h-10 rounded-lg bg-teal flex items-center justify-center font-bold text-white shadow-inner">
              <span className="text-xl tracking-tighter">HSI</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none">
                HSI Solutions
              </span>
              <span className="text-xs text-slate-300 font-medium tracking-wider uppercase mt-1">
                Healthcare Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-teal font-semibold"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/about"
                  ? "text-teal font-semibold"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="flex items-center">
                <Link
                  href="/services"
                  className={`pl-3 pr-1 py-2 rounded-l-md text-sm font-medium transition-colors ${
                    isActive("/services")
                      ? "text-teal font-semibold"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  className="p-2 rounded-r-md text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
                  aria-expanded={isServicesOpen}
                  aria-label="Toggle services menu"
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div
                  className="absolute left-0 mt-1 w-80 rounded-xl bg-[#1B365D] border border-slate-700/80 shadow-2xl py-2 z-50"
                  role="menu"
                >
                  <div className="px-4 py-2 border-b border-slate-700/60 mb-1">
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-teal-400 hover:text-teal-300 uppercase tracking-wider block"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      All Services Overview &rarr;
                    </Link>
                  </div>
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      role="menuitem"
                      onClick={() => setIsServicesOpen(false)}
                      className={`block px-4 py-2.5 hover:bg-[#234578] transition-colors ${
                        pathname === service.href ? "bg-[#234578]/70" : ""
                      }`}
                    >
                      <div className="text-sm font-medium text-white">
                        {service.name}
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                        {service.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/articles"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname.startsWith("/articles")
                  ? "text-teal font-semibold"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              }`}
            >
              Articles
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/contact"
                  ? "text-teal font-semibold"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              }`}
            >
              Contact
            </Link>

            {/* CTA button */}
            <div className="pl-2">
              <Link
                href="/contact"
                className="bg-teal hover:bg-[#0F766E] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors duration-150 inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
              >
                Get Started
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-teal-400"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#1B365D] border-t border-slate-700/80 px-4 pt-2 pb-6 space-y-1 shadow-2xl"
        >
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              pathname === "/"
                ? "bg-[#234578] text-teal font-semibold"
                : "text-slate-200 hover:bg-white/10 hover:text-white"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              pathname === "/about"
                ? "bg-[#234578] text-teal font-semibold"
                : "text-slate-200 hover:bg-white/10 hover:text-white"
            }`}
          >
            About
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <div className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/10">
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex-grow ${
                  pathname === "/services" ? "text-teal font-semibold" : ""
                }`}
              >
                Services
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="p-1 text-slate-300 hover:text-white"
                aria-label="Toggle services list"
                aria-expanded={isMobileServicesOpen}
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {isMobileServicesOpen && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-[#152B4A]/60 rounded-lg mt-1 border-l-2 border-teal">
                <Link
                  href="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-teal-400 font-medium hover:text-teal-300"
                >
                  All Services Overview
                </Link>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-sm ${
                      pathname === service.href
                        ? "text-teal font-semibold bg-[#234578]"
                        : "text-slate-200 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/articles"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              pathname.startsWith("/articles")
                ? "bg-[#234578] text-teal font-semibold"
                : "text-slate-200 hover:bg-white/10 hover:text-white"
            }`}
          >
            Articles
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              pathname === "/contact"
                ? "bg-[#234578] text-teal font-semibold"
                : "text-slate-200 hover:bg-white/10 hover:text-white"
            }`}
          >
            Contact
          </Link>

          <div className="pt-3 px-3">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-teal hover:bg-[#0F766E] text-white py-2.5 rounded-lg text-base font-medium shadow-sm transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
