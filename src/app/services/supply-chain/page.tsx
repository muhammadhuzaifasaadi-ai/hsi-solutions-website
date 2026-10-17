import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supply Chain Optimization | HSI Healthcare Solutions",
  description:
    "Comprehensive healthcare supply chain optimization, GPO support, purchasing spend analysis, and supplier contract reviews to enhance operational efficiency.",
};

export default function SupplyChainPage() {
  const keyServices = [
    {
      title: "Group Purchasing Organization (GPO) Support",
      description:
        "Assisting healthcare organizations in maximizing value from their GPO relationships. We help review contract tier qualifications, improve catalog compliance, identify cross-referenced alternatives, and capture available rebates.",
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
      title: "Purchasing Analysis and Optimization",
      description:
        "Detailed review of departmental purchasing habits and supply utilization patterns. We help clean item masters, identify off-contract spend, consolidate duplicative vendors, and streamline recurring order workflows.",
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
    {
      title: "Contract Review and Optimization",
      description:
        "Thorough scrutiny of vendor agreements, service-level commitments, price indexing, escalation clauses, and auto-renewal terms. We equip facility leadership with data to negotiate favorable contract modifications.",
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
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      ),
    },
    {
      title: "Cost-Efficiency Analysis",
      description:
        "Objective, data-driven assessments of non-labor spend across medical-surgical supplies, clinical equipment, facilities, and external service providers to identify savings opportunities without affecting patient care standards.",
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
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "Spend Categorization",
      description:
        "Consolidating invoices, purchase orders, and item master listings into structured spend categories.",
    },
    {
      step: "02",
      title: "Contract & Tier Analysis",
      description:
        "Evaluating current supplier agreements and GPO tier eligibility against actual volume and market terms.",
    },
    {
      step: "03",
      title: "Strategic Recommendations",
      description:
        "Presenting actionable, prioritized initiatives for vendor consolidation, renegotiation, or standardizations.",
    },
    {
      step: "04",
      title: "Implementation Support",
      description:
        "Working alongside materials management and administrative teams to coordinate supplier transitions smoothly.",
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
              Supply Chain Optimization
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-[#0D9488]/20 border border-[#0D9488]/40 text-[#5eead4] text-xs font-semibold tracking-wider uppercase mb-3">
              Procurement & Expense Management
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Supply Chain Optimization
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Strategic purchasing oversight, contract evaluations, and group purchasing
              realization. We help healthcare organizations improve procurement controls
              and operational efficiency without sacrificing clinical care quality.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D] tracking-tight mb-4">
                Aligning Non-Labor Spend with Clinical & Operational Goals
              </h2>
              <p className="text-base text-[#1E293B] leading-relaxed mb-4">
                Hospital and clinic supply chains are among the most intricate operational
                areas in healthcare. Rapid price shifts, scattered departmental purchasing,
                complex distributor contracts, and underutilized group purchasing
                agreements often create unintended financial strain.
              </p>
              <p className="text-base text-[#1E293B] leading-relaxed mb-6">
                HSI provides experienced, objective purchasing advisory. We work with
                your materials management, procurement, and clinical teams to bring clarity
                to non-labor spend, eliminate redundancies, and strengthen supplier
                accountability.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#1B365D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span>
                  GPO Alignment
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#1B365D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span>
                  Vendor Contract Reviews
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#1B365D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span>
                  Spend Visibility
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-[#1B365D] mb-4">
                  Key Focus Areas
                </h3>
                <ul className="space-y-4 text-sm text-[#1E293B]">
                  <li className="flex items-start">
                    <span className="text-[#0D9488] font-bold mr-3 mt-0.5">•</span>
                    <span>
                      <strong>Clinical Supply Standardization:</strong> Coordinating
                      with clinical leaders to identify functionally equivalent alternatives
                      that simplify inventory.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0D9488] font-bold mr-3 mt-0.5">•</span>
                    <span>
                      <strong>Contract Terms & Evergreen Audits:</strong> Uncovering
                      unnoticed price increases, missed rebate thresholds, or unfavorable
                      renewal triggers.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0D9488] font-bold mr-3 mt-0.5">•</span>
                    <span>
                      <strong>Supplier Relationship Health:</strong> Fostering reliable,
                      transparent partnerships with distributors and manufacturers.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D9488]">
              Targeted Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D] mt-1">
              Core Supply Chain Capabilities
            </h2>
            <p className="mt-3 text-[#64748B] text-base">
              Tailored support designed to help hospital administrators manage budgets
              and optimize procurement processes.
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

      {/* Methodology Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
              Our Optimization Process
            </h2>
            <p className="mt-3 text-[#64748B] text-base">
              A structured, analytical roadmap to evaluate and refine your healthcare
              procurement operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6"
              >
                <div className="text-xs font-bold text-[#0D9488] tracking-widest uppercase mb-2">
                  Phase {step.step}
                </div>
                <h3 className="text-base font-bold text-[#1B365D] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed">
                  {step.description}
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
            Strengthen Your Healthcare Supply Chain
          </h2>
          <p className="text-base sm:text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with our procurement and supply chain advisors to review your current
            contracts, evaluate GPO alignment, and explore sustainable cost efficiencies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-150 shadow-sm text-base"
            >
              Contact Our Supply Chain Team
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
