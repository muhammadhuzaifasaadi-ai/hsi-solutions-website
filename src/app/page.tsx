import Link from "next/link";

interface ServiceItem {
  title: string;
  icon: string;
  description: string;
  href: string;
}

const services: ServiceItem[] = [
  {
    title: "Medical Collections",
    icon: "💰",
    description:
      "Ethical, patient-friendly revenue recovery solutions designed to restore financial health while preserving patient dignity and local community relationships.",
    href: "/services/medical-collections",
  },
  {
    title: "Supply Chain Optimization",
    icon: "📦",
    description:
      "Leverage aggregated group purchasing power and data-driven inventory management to lower procurement costs and streamline hospital operations.",
    href: "/services/supply-chain",
  },
  {
    title: "Peer Review Network",
    icon: "🔍",
    description:
      "Independent, objective external clinical peer review services connecting healthcare facilities with credentialed, board-certified physician specialists.",
    href: "/services/peer-review",
  },
  {
    title: "Strategic Partner Program",
    icon: "🤝",
    description:
      "Carefully vetted healthcare partner matching that connects providers with proven, specialized vendors for clinical, operational, and technical needs.",
    href: "/services/strategic-partners",
  },
];

interface WhyChooseItem {
  title: string;
  badge: string;
  description: string;
  icon: string;
}

const whyChooseItems: WhyChooseItem[] = [
  {
    badge: "Operational Focus",
    title: "Healthcare Focus",
    icon: "🏥",
    description:
      "Dedicated exclusively to healthcare operations. We understand the complex interplay between clinical quality, regulatory requirements, and administrative sustainability, ensuring specialized guidance without generic corporate solutions.",
  },
  {
    badge: "Community Knowledge",
    title: "Rural Expertise",
    icon: "📍",
    description:
      "Extensive experience working alongside rural, critical-access, and community healthcare facilities that face unique resource constraints, regional workforce dynamics, and distinct community health responsibilities.",
  },
  {
    badge: "Collaborative Model",
    title: "Trusted Partnership",
    icon: "🤝",
    description:
      "We work collaboratively alongside your existing leadership and administrative teams rather than replacing them. Our mission is to act as a supportive extension of your staff, fostering lasting stability and shared success.",
  },
];

interface ArticleItem {
  title: string;
  category: string;
  excerpt: string;
  href: string;
}

const placeholderArticles: ArticleItem[] = [
  {
    title: "Navigating Revenue Cycle Challenges in Community Healthcare",
    category: "Revenue Cycle",
    excerpt: "[PLACEHOLDER - Article content to be added]",
    href: "/articles",
  },
  {
    title: "Maximizing Purchasing Power for Rural Hospitals",
    category: "Supply Chain",
    excerpt: "[PLACEHOLDER - Article content to be added]",
    href: "/articles",
  },
  {
    title: "The Strategic Value of External Clinical Peer Review",
    category: "Clinical Quality",
    excerpt: "[PLACEHOLDER - Article content to be added]",
    href: "/articles",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC] to-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
          {/* Tagline / Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#0D9488]/10 text-[#0D9488] mb-8 border border-[#0D9488]/20 animate-hero-fade">
            <span>Healthcare Operational &amp; Business Systems</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1B365D] leading-[1.15] max-w-4xl mx-auto animate-hero-fade">
            Simple Systems for Stronger Care
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg sm:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed animate-hero-fade-delayed">
            HSI Solutions helps healthcare providers strengthen the business and
            operational systems behind patient care. From medical collections and
            purchasing support to peer review and strategic partnerships, HSI
            works alongside healthcare organizations to help them manage
            operational challenges with clarity and confidence.
          </p>

          {/* Call to action buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-hero-fade-delayed-2">
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-base font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] shadow-sm hover:shadow transition-all duration-200"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-base font-semibold text-[#0D9488] bg-white border-2 border-[#0D9488] hover:bg-[#0D9488]/5 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Services Highlights */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0D9488] mb-2">
              Our Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1B365D]">
              Specialized Operational Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#64748B]">
              Focused solutions designed to resolve administrative friction,
              improve fiscal health, and elevate care standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative flex flex-col justify-between p-6 sm:p-7 bg-white rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#0D9488]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-2xl mb-5 group-hover:bg-[#0D9488]/10 group-hover:border-[#0D9488]/20 transition-colors">
                    <span role="img" aria-label={service.title}>
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B365D] group-hover:text-[#0D9488] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="inline-flex items-center text-sm font-semibold text-[#0D9488] group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <svg
                    className="ml-1.5 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose HSI */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0D9488] mb-2">
              The HSI Advantage
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1B365D]">
              Why Choose HSI Solutions
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#64748B]">
              Built to serve the practical realities of independent, regional,
              and community-focused healthcare organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0D9488]/10 text-xl flex items-center justify-center mb-6">
                  <span role="img" aria-label={item.title}>
                    {item.icon}
                  </span>
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold text-[#0D9488] bg-[#0D9488]/10 mb-3 w-fit">
                  {item.badge}
                </div>
                <h3 className="text-xl font-bold text-[#1B365D] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Latest Articles Preview */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0D9488] mb-2">
                Knowledge &amp; Insights
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1B365D]">
                Latest Articles
              </h2>
              <p className="mt-3 text-base text-[#64748B] max-w-xl">
                Stay informed on operational trends, supply chain strategies,
                and revenue cycle best practices.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link
                href="/articles"
                className="inline-flex items-center text-sm font-semibold text-[#0D9488] hover:text-[#0F766E] group"
              >
                <span>View all articles</span>
                <svg
                  className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {placeholderArticles.map((article, idx) => (
              <article
                key={idx}
                className="flex flex-col justify-between p-6 sm:p-7 bg-white rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold text-[#0D9488] bg-[#0D9488]/10 mb-4">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#1B365D] mb-3 leading-snug">
                    <Link
                      href={article.href}
                      className="hover:text-[#0D9488] transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6 font-mono bg-[#F8FAFC] p-3 rounded border border-dashed border-[#E2E8F0]">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E2E8F0]">
                  <Link
                    href={article.href}
                    className="inline-flex items-center text-sm font-semibold text-[#0D9488] hover:text-[#0F766E] group"
                  >
                    <span>Read More</span>
                    <svg
                      className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="bg-[#0D9488] text-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Ready to Strengthen Your Healthcare Operations?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-teal-50 max-w-2xl mx-auto leading-relaxed opacity-95">
            Connect with our experienced team to discover how HSI Solutions can
            help your organization manage operational challenges with clarity and
            confidence.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base sm:text-lg font-bold text-[#0D9488] bg-white hover:bg-slate-50 shadow-md hover:shadow-lg transition-all duration-200"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
