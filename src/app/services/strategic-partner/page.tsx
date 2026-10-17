import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Strategic Partner Program | HSI Healthcare Solutions",
  description:
    "Connecting healthcare facilities with thoroughly vetted, specialist solution providers through objective evaluation, needs matching, and ongoing partnership management.",
};

export default function StrategicPartnerPage() {
  const keyServices = [
    {
      title: "Vendor Assessment and Vetting",
      description:
        "Comprehensive screening of prospective solution vendors. We examine corporate stability, regulatory compliance, data security protocols, client references, and operational readiness before any recommendation is made.",
      icon: (
        <svg
          className="w-6 h-6 text-[#0D9488]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
    },
    {
      title: "Facility-Vendor Matching",
      description:
        "Objective alignment between healthcare organizations and specialized partners. We assess your facility's operational priorities, technology environment, scale, and budget to connect you with proven specialists who fit.",
      icon: (
        <svg
          className="w-6 h-6 text-[#0D9488]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
      ),
    },
    {
      title: "Partnership Coordination",
      description:
        "Facilitating structured introductions, project scoping, and onboarding. We help define clear service expectations, key performance indicators (KPIs), and communication channels to launch initiatives smoothly.",
      icon: (
        <svg
          className="w-6 h-6 text-[#0D9488]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.999-3.199a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
    },
    {
      title: "Ongoing Relationship Management",
      description:
        "Continuous oversight and accountability throughout the partnership lifecycle. We conduct periodic performance reviews, manage feedback loops, and assist with service adjustments to ensure enduring mutual success.",
      icon: (
        <svg
          className="w-6 h-6 text-[#0D9488]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
    },
  ];

  const vettingStandards = [
    {
      title: "Healthcare Domain Credibility",
      description:
        "Partners must demonstrate a track record of supporting healthcare systems, understanding clinical workflows and hospital governance.",
    },
    {
      title: "Data Security & Compliance",
      description:
        "Verification of strict healthcare privacy safeguards, HIPAA readiness, robust cybersecurity protocols, and appropriate business associate procedures.",
    },
    {
      title: "Measurable Service Level Terms",
      description:
        "Clear contractual benchmarks, realistic implementation timelines, and transparent fee structures without hidden escalation clauses.",
    },
    {
      title: "Operational Reliability",
      description:
        "Evaluation of leadership continuity, technical support responsiveness, and proven capacity to deliver at enterprise healthcare scale.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-[#1B365D] text-white py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-b border-[#234578]">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center space-x-2 text-sm text-slate-300"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors duration-150"
            >
              Home
            </Link>
            <span className="text-slate-400" aria-hidden="true">
              /
            </span>
            <Link
              href="/services"
              className="hover:text-white transition-colors duration-150"
            >
              Services
            </Link>
            <span className="text-slate-400" aria-hidden="true">
              /
            </span>
            <span className="text-white font-medium" aria-current="page">
              Strategic Partner Program
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-[#0D9488]/20 border border-[#0D9488]/40 text-[#5eead4] text-xs font-semibold tracking-wider uppercase mb-3">
              Specialist Alliances & Solutions
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Strategic Partner Program
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Matching healthcare facilities with vetted specialist vendors and advisory
              partners. We reduce vendor evaluation friction and build dependable,
              accountable commercial relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D] tracking-tight mb-4">
                A Trusted Filter for Healthcare Vendor Partnerships
              </h2>
              <p className="text-base text-[#1E293B] leading-relaxed mb-4">
                Healthcare leaders face an overwhelming volume of software, staffing,
                and consulting vendor inquiries. Determining which external partners
                possess genuine healthcare expertise, secure infrastructure, and reliable
                delivery capabilities requires substantial time and administrative focus.
              </p>
              <p className="text-base text-[#1E293B] leading-relaxed mb-6">
                HSI's Strategic Partner Program serves as a trusted, objective intermediary.
                We independently assess vendor credentials, evaluate technical and
                compliance posture, and match your facility only with partners who meet
                rigorous performance criteria and share a commitment to healthcare
                excellence.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#1B365D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span>
                  Thorough Due Diligence
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#1B365D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span>
                  Targeted Facility Alignment
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#1B365D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span>
                  Ongoing Accountability
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-[#1B365D] mb-4">
                  How Hospitals Benefit
                </h3>
                <ul className="space-y-4 text-sm text-[#1E293B]">
                  <li className="flex items-start">
                    <span className="text-[#0D9488] font-bold mr-3 mt-0.5">•</span>
                    <span>
                      <strong>Reduced Procurement Cycle:</strong> Skip extensive preliminary
                      screening by engaging vendors that have already satisfied stringent
                      healthcare evaluation standards.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0D9488] font-bold mr-3 mt-0.5">•</span>
                    <span>
                      <strong>Minimized Operational Risk:</strong> Every partner undergoes
                      operational and security reviews to safeguard hospital data and
                      patient privacy.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0D9488] font-bold mr-3 mt-0.5">•</span>
                    <span>
                      <strong>Continuous Advocacy:</strong> HSI remains an active partner
                      after agreements are signed, supporting ongoing service review and
                      relationship health.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D9488]">
              Partnership Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D] mt-1">
              Program Services
            </h2>
            <p className="mt-3 text-[#64748B] text-base">
              End-to-end support throughout the partner selection and management lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8 shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1B365D] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#1E293B] text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting Standards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
              Our Vetting Standards
            </h2>
            <p className="mt-3 text-[#64748B] text-base">
              The core criteria applied during vendor assessment before any recommendation
              to healthcare facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vettingStandards.map((standard, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6"
              >
                <div className="w-8 h-8 rounded-full bg-[#1B365D] text-white flex items-center justify-center font-bold text-xs mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#1B365D] mb-2">
                  {standard.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#1B365D] text-white py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
            Connect with Vetted Healthcare Specialists
          </h2>
          <p className="text-base sm:text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether your facility is seeking specialized technical solutions, advisory
            expertise, or operational vendors, our Strategic Partner Program provides
            vetted, accountable connections.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-150 shadow-sm text-base"
            >
              Inquire About Partner Solutions
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors duration-150 text-base"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
