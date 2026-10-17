import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | HSI Healthcare Solutions",
  description:
    "Explore HSI's specialized healthcare services, including patient-centered medical collections, supply chain optimization, peer review networks, and strategic partner programs.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "medical-collections",
      title: "Medical Collections",
      shortDescription:
        "Compassionate, patient-centered revenue recovery solutions that help healthcare facilities resolve outstanding accounts while protecting community trust and patient relationships.",
      href: "/services/medical-collections",
      highlights: [
        "Self-pay account follow-up",
        "Continuous account monitoring and management",
        "Patient-friendly, clear communication",
        "Revenue recovery conducted with dignity and respect",
      ],
      icon: (
        <svg
          className="w-7 h-7 text-[#0D9488]"
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
      id: "supply-chain",
      title: "Supply Chain Optimization",
      shortDescription:
        "Strategic purchasing analysis, contract evaluations, and group purchasing coordination to improve procurement efficiency and reduce operating costs without compromising clinical care.",
      href: "/services/supply-chain",
      highlights: [
        "Group purchasing organization (GPO) support",
        "Purchasing analysis and spend optimization",
        "Supplier contract review and term evaluation",
        "Cost-efficiency benchmarking and analysis",
      ],
      icon: (
        <svg
          className="w-7 h-7 text-[#0D9488]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      ),
    },
    {
      id: "peer-review",
      title: "Peer Review Network",
      shortDescription:
        "Independent external clinical peer review and quality assurance services to uphold clinical excellence, credentialing integrity, and objective standard-of-care evaluations.",
      href: "/services/peer-review",
      highlights: [
        "External peer review coordination across medical specialties",
        "Quality assurance and clinical governance support",
        "Standardized clinical review protocols and case evaluations",
        "Accreditation and regulatory compliance support",
      ],
      icon: (
        <svg
          className="w-7 h-7 text-[#0D9488]"
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
      id: "strategic-partner",
      title: "Strategic Partner Program",
      shortDescription:
        "Connecting healthcare facilities with vetted, high-performing specialty vendors and solutions tailored to address operational bottlenecks and strategic growth objectives.",
      href: "/services/strategic-partner",
      highlights: [
        "Rigorous vendor assessment and credential vetting",
        "Objective facility-vendor matching based on specific needs",
        "Structured partnership onboarding and coordination",
        "Ongoing relationship management and service accountability",
      ],
      icon: (
        <svg
          className="w-7 h-7 text-[#0D9488]"
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
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
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
            <span className="text-white font-medium" aria-current="page">
              Services
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-[#0D9488]/20 border border-[#0D9488]/40 text-[#5eead4] text-xs font-semibold tracking-wider uppercase mb-3">
              Comprehensive Healthcare Solutions
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Our Services
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              HSI delivers mission-critical administrative, operational, and clinical
              advisory services. We partner with healthcare institutions to build
              sustainable efficiency, safeguard revenue integrity, and uphold patient
              and provider trust.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D] tracking-tight">
              Specialized Support for Modern Healthcare Organizations
            </h2>
            <p className="mt-3 text-[#64748B] text-base leading-relaxed">
              Explore how our focused service offerings address key clinical and
              operational challenges while keeping patient dignity and compliance at the
              center.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-13 h-13 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 p-3">
                      {service.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1B365D]">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-[#1E293B] leading-relaxed mb-6 text-sm sm:text-base">
                    {service.shortDescription}
                  </p>

                  <div className="border-t border-[#E2E8F0] pt-5 mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">
                      Key Capabilities:
                    </h4>
                    <ul className="space-y-2.5">
                      {service.highlights.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start text-sm text-[#1E293B]"
                        >
                          <svg
                            className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5 mr-2.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0]">
                  <Link
                    href={service.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D9488] hover:bg-[#0F766E] text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors duration-150 shadow-sm"
                  >
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment & Value Props */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
              Our Collaborative Commitment
            </h2>
            <p className="mt-3 text-[#64748B] text-base">
              Every healthcare organization operates within distinct regulatory, clinical,
              and financial environments. Our programs are designed to align directly
              with your facility's operational priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-lg bg-[#1B365D] text-white flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-[#1B365D] mb-2">
                Patient & Community Centered
              </h3>
              <p className="text-sm text-[#1E293B] leading-relaxed">
                Whether managing accounts or facilitating vendor partnerships, we
                prioritize the dignity of patients and the reputation of the healthcare
                facility.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-lg bg-[#1B365D] text-white flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-[#1B365D] mb-2">
                Clinical & Regulatory Rigor
              </h3>
              <p className="text-sm text-[#1E293B] leading-relaxed">
                Our peer review and supply chain programs are grounded in structured
                compliance, objective assessment protocols, and confidential workflows.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-lg bg-[#1B365D] text-white flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-[#1B365D] mb-2">
                Transparent Collaboration
              </h3>
              <p className="text-sm text-[#1E293B] leading-relaxed">
                We function as an integrated extension of your administrative team,
                providing clear reporting, measurable insights, and dependable coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1B365D] text-white py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
            Ready to Discuss Your Organization's Needs?
          </h2>
          <p className="text-base sm:text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with our advisory team to learn how our tailored services can support
            your healthcare facility’s financial, clinical, and operational objectives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-150 shadow-sm text-base"
            >
              Contact Our Team
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors duration-150 text-base"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
