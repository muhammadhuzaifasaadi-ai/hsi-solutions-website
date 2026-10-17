import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles & Insights | HSI Solutions",
  description:
    "Explore operational insights, healthcare revenue cycle guidance, and supply chain strategies from HSI Solutions.",
};

interface ArticleCard {
  id: string;
  category: string;
  title: string;
  excerpt: string;
}

const placeholderArticles: ArticleCard[] = [
  {
    id: "revenue-cycle-management",
    category: "Revenue Cycle",
    title: "Understanding Healthcare Revenue Cycles & Ethical Recovery",
    excerpt:
      "[PLACEHOLDER - An in-depth overview exploring sustainable revenue recovery models, compliant patient billing approaches, and cash flow stabilization for community and regional health systems.]",
  },
  {
    id: "supply-chain-best-practices",
    category: "Supply Chain",
    title: "Supply Chain Best Practices for Rural and Community Hospitals",
    excerpt:
      "[PLACEHOLDER - Practical procurement strategies for managing supplier contracts, controlling clinical inventory variance, and mitigating supply disruptions in regional healthcare facilities.]",
  },
  {
    id: "hospital-operations",
    category: "Healthcare Operations",
    title: "Streamlining Departmental Workflows and Hospital Administration",
    excerpt:
      "[PLACEHOLDER - Frameworks for diagnosing operational bottlenecks, aligning cross-functional hospital staff, and improving patient intake, registration, and throughput efficiency.]",
  },
  {
    id: "clinical-peer-review",
    category: "Clinical Quality",
    title: "Strengthening Clinical Governance Through Peer Review Networks",
    excerpt:
      "[PLACEHOLDER - A guide on integrating independent medical peer review, maintaining credentialing standards, and reinforcing patient safety protocols across provider teams.]",
  },
  {
    id: "strategic-partner-programs",
    category: "Strategic Partnerships",
    title: "Structuring High-Impact Vendor and Strategic Partner Programs",
    excerpt:
      "[PLACEHOLDER - Criteria and considerations for vetting specialized healthcare partners, structuring performance-backed service level agreements, and achieving shared operational goals.]",
  },
  {
    id: "compliance-and-reimbursement",
    category: "Regulatory Compliance",
    title: "Navigating Healthcare Billing Compliance and Payer Standards",
    excerpt:
      "[PLACEHOLDER - Key considerations for addressing reimbursement complexity, navigating state and federal compliance mandates, and maintaining transparent patient collection standards.]",
  },
];

export default function ArticlesPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Page Header */}
      <header className="bg-[#1B365D] text-white py-14 sm:py-16 lg:py-20 border-b border-slate-700/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal/20 text-teal-300 border border-teal-500/30 mb-4 tracking-wide uppercase">
              <span>Knowledge Center</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Articles & Insights
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Practical perspectives, operational frameworks, and industry analysis to support healthcare leaders in optimizing hospital revenue, supply chain, and administrative performance.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Notice: Section Under Development */}
        <section
          aria-label="Development status announcement"
          className="mb-10 rounded-xl bg-amber-50/80 border border-amber-200/80 p-4 sm:p-5 flex items-start gap-3.5 shadow-sm"
        >
          <div className="text-amber-600 mt-0.5 shrink-0">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-amber-900 mb-1">
              Articles Section Under Development
            </h2>
            <p className="text-sm text-amber-800 leading-relaxed">
              Our editorial and clinical operations teams are currently authoring detailed white papers, operational benchmarks, and case studies. The entries displayed below represent editorial placeholders and will be updated with published articles soon.
            </p>
          </div>
        </section>

        {/* Section Heading & Filter Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1B365D]">
              Featured Insights
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Explore recent guidance across our core healthcare service disciplines.
            </p>
          </div>
          <span className="self-start sm:self-auto text-xs font-medium px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-600 shadow-2xs">
            Showing 6 placeholder articles
          </span>
        </div>

        {/* Articles Grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <section
          aria-label="Articles list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {placeholderArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between p-6 sm:p-7 relative group"
            >
              {/* Category & Status */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-teal/10 text-teal-800 border border-teal-600/10">
                    {article.category}
                  </span>
                  <span className="text-[11px] font-medium text-slate-600 uppercase tracking-wider">
                    [PLACEHOLDER]
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#1B365D] group-hover:text-teal-700 transition-colors leading-snug">
                  <Link
                    href="#"
                    className="focus:outline-hidden focus:underline"
                    aria-label={`Read article: ${article.title}`}
                  >
                    {article.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                  {article.excerpt}
                </p>
              </div>

              {/* Card Footer with Link */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D9488] hover:text-[#0F766E] transition-colors focus:outline-hidden focus:underline group/link"
                  aria-label={`Read more about ${article.title}`}
                >
                  <span>Read More</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
                <span className="text-xs text-slate-600 italic">Coming Soon</span>
              </div>
            </article>
          ))}
        </section>

        {/* Contact/Support Callout */}
        <section className="mt-14 sm:mt-18 rounded-2xl bg-[#1B365D] text-white p-8 sm:p-10 lg:p-12 shadow-sm">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
              Need Operational Solutions for Your Facility?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Our specialists partner with hospitals and healthcare systems to improve medical collections, streamline procurement, and implement quality clinical peer reviews.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="bg-teal hover:bg-[#0F766E] text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-sm transition-colors duration-150 inline-flex items-center gap-2 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
              >
                <span>Contact Our Team</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
              <Link
                href="/services"
                className="border border-slate-400/50 hover:bg-white/10 text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors duration-150 inline-block focus:outline-hidden focus:ring-2 focus:ring-white"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
