import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Peer Review Network | HSI Healthcare Solutions",
  description:
    "Independent external clinical peer review, quality assurance support, and clinical compliance services for healthcare facilities, medical executives, and credentialing committees.",
};

export default function PeerReviewPage() {
  const keyServices = [
    {
      title: "External Peer Review Coordination",
      description:
        "Seamless case coordination with board-certified specialty physicians. We connect healthcare organizations with experienced, practicing clinicians who have the relevant subspecialty expertise required for objective evaluations.",
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
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      ),
    },
    {
      title: "Quality Assurance Support",
      description:
        "Providing clinical leadership and Medical Executive Committees (MEC) with structured documentation, longitudinal insights, and consultative support to enhance hospital-wide clinical quality initiatives and patient safety.",
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
      title: "Clinical Review Processes",
      description:
        "Standardized, evidence-based review methodologies that thoroughly evaluate medical necessity, clinical decision-making, procedural skill, documentation standards, and overall adherence to accepted standard of care.",
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
      title: "Compliance Support",
      description:
        "Ensuring external reviews align strictly with hospital medical staff bylaws, state peer review confidentiality statutes, healthcare regulatory requirements, and accreditation standards.",
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
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253"
          />
        </svg>
      ),
    },
  ];

  const reviewScenarios = [
    {
      title: "Single-Specialty Scarcity",
      description:
        "When a healthcare facility has only one or two practitioners in a specialized field, internal peer review cannot be conducted without inherent professional conflicts.",
    },
    {
      title: "Complex or High-Risk Cases",
      description:
        "Unusual clinical outcomes or complex multi-disciplinary cases often require independent, objective review from external specialty peers.",
    },
    {
      title: "Credentialing & Recredentialing",
      description:
        "Periodic specialty evaluations to support initial privilege determinations, focused professional practice evaluations (FPPE), and ongoing reviews (OPPE).",
    },
    {
      title: "Confidential Bylaw Investigations",
      description:
        "Formal case assessments requiring uncompromised impartiality, rigorous confidentiality, and statutory peer review protection.",
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
              Peer Review Network
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-[#0D9488]/20 border border-[#0D9488]/40 text-[#5eead4] text-xs font-semibold tracking-wider uppercase mb-3">
              Clinical Quality & Oversight
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Peer Review Network
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Objective, specialty-matched external clinical peer review and quality
              assurance services. Supporting medical executive committees, hospital
              leadership, and credentialing bodies with impartial clinical evaluations.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Governance Overview */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D] tracking-tight mb-4">
                Independent, Specialty-Matched Clinical Oversight
              </h2>
              <p className="text-base text-[#1E293B] leading-relaxed mb-4">
                Maintaining clinical excellence requires unbiased, evidence-based peer
                evaluation. Yet in many community hospitals and specialized medical
                staffs, internal reviews can be complicated by collegial relationships,
                local competition, or limited subspecialty representation.
              </p>
              <p className="text-base text-[#1E293B] leading-relaxed mb-6">
                HSI's Peer Review Network connects medical staffs with independent,
                actively practicing, board-certified physician reviewers across a wide
                spectrum of medical and surgical specialties. Our structured process
                protects confidentiality, eliminates bias, and delivers clear, actionable
                findings to support your quality assurance mandates.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#1B365D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span>
                  Active Board-Certified Reviewers
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#1B365D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span>
                  Conflict-Free Evaluation
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#1B365D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span>
                  Statutory Peer Review Protections
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-[#1B365D] mb-4">
                  Benefits to Healthcare Facilities
                </h3>
                <ul className="space-y-4 text-sm text-[#1E293B]">
                  <li className="flex items-start">
                    <span className="text-[#0D9488] font-bold mr-3 mt-0.5">•</span>
                    <span>
                      <strong>Unbiased Credibility:</strong> Objective external reviews
                      remove personal friction among local staff members and withstand
                      independent scrutiny.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0D9488] font-bold mr-3 mt-0.5">•</span>
                    <span>
                      <strong>Accreditation Readiness:</strong> Comprehensive review
                      documentation satisfies credentialing bodies and hospital oversight
                      guidelines.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0D9488] font-bold mr-3 mt-0.5">•</span>
                    <span>
                      <strong>Clinical Quality Improvement:</strong> Identifies systems-level
                      learning opportunities, protocol refinements, and continuing
                      medical education needs.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D9488]">
              Peer Review Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D] mt-1">
              Core Network Capabilities
            </h2>
            <p className="mt-3 text-[#64748B] text-base">
              Providing medical leaders with dependable, timely, and confidential
              clinical review services.
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

      {/* Common Applications */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
              When External Peer Review is Needed
            </h2>
            <p className="mt-3 text-[#64748B] text-base">
              Common scenarios where healthcare facilities rely on HSI's independent
              clinical network.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviewScenarios.map((scenario, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6"
              >
                <div className="w-8 h-8 rounded-full bg-[#1B365D] text-white flex items-center justify-center font-bold text-xs mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#1B365D] mb-2">
                  {scenario.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed">
                  {scenario.description}
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
            Strengthen Your Clinical Quality and Oversight
          </h2>
          <p className="text-base sm:text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Speak confidentially with our peer review coordinators to discuss how our
            independent network can support your medical staff, quality committee, or
            case review requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-150 shadow-sm text-base"
            >
              Request Peer Review Information
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
