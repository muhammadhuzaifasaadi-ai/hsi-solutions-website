import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1B365D] text-slate-300 mt-auto border-t border-slate-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-md"
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
            <p className="text-sm text-slate-300 leading-relaxed">
              Simple Systems for Stronger Care. HSI Solutions helps healthcare
              providers strengthen business and operational systems behind
              patient care.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center text-xs text-teal-300 bg-[#234578]/80 px-3 py-1 rounded-full font-medium border border-teal-500/30">
                Healthcare Solutions & Operations
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="hover:text-white transition-colors"
                >
                  Articles & Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialized Services Column */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/medical-collections"
                  className="hover:text-white transition-colors"
                >
                  Medical Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/services/supply-chain"
                  className="hover:text-white transition-colors"
                >
                  Supply Chain Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/peer-review"
                  className="hover:text-white transition-colors"
                >
                  Peer Review Network
                </Link>
              </li>
              <li>
                <Link
                  href="/services/strategic-partner"
                  className="hover:text-white transition-colors"
                >
                  Strategic Partner Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Column */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-teal shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>[PLACEHOLDER] 100 Healthcare Parkway, Suite 400, City, State ZIP</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-teal shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>[PLACEHOLDER] (800) 555-0199</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-teal shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>[PLACEHOLDER] info@hsisolutions.com</span>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-teal shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-xs text-slate-400">
                  [PLACEHOLDER] Monday &ndash; Friday: 8:00 AM &ndash; 5:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; 2026 HSI Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/contact"
              className="hover:text-slate-200 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="hover:text-slate-200 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-slate-200 transition-colors"
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
