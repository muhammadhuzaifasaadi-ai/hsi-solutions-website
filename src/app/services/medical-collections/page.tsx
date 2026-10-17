import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Collections | HSI Healthcare Solutions",
  description:
    "Patient-centered, respectful medical collections and self-pay revenue recovery services designed to resolve healthcare accounts while preserving community trust.",
};

export default function MedicalCollectionsPage() {
  const keyServices = [
    {
      title: "Self-Pay Follow-Up",
      description:
        "Proactive, patient-focused outreach following insurance adjudication. Our dedicated team assists patients in understanding their statements, answering coverage questions, and resolving patient-responsibility balances efficiently.",
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
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
    },
    {
      title: "Account Monitoring and Management",
      description:
        "Comprehensive tracking and lifecycle management across all outstanding self-pay accounts. We ensure consistent touchpoints, active dispute reviews, and structured payment reconciliation so accounts do not languish unattended.",
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
      title: "Patient-Friendly Communication",
      description:
        "Clear, dignified, and jargon-free interactions through multiple channels. We demystify complex medical bills, clearly explain insurance adjudications, and offer realistic payment arrangements tailored to patient circumstances.",
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
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v5.249z"
          />
        </svg>
      ),
    },
    {
      title: "Revenue Recovery with Respect",
      description:
        "A compassionate recovery framework that safeguards the healthcare facility's local reputation. We prioritize respectful dialogue over pressure tactics, adhering strictly to fair billing practices and healthcare privacy standards.",
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
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      ),
    },
  ];

  const approachPillars = [
    {
      title: "Preserving Patient Dignity",
      description:
        "Medical expenses are rarely planned. We treat every patient with empathy, recognizing their dignity while helping them navigate their financial commitments.",
    },
    {
      title: "Clear, Educational Guidance",
      description:
        "Many balances go unpaid due to confusion rather than unwillingness. We break down itemized statements, explain co-insurance, and review payment avenues clearly.",
    },
    {
      title: "Protecting Provider Reputation",
      description:
        "A heavy-handed collection approach damages community standing. Our professional, courteous methodology maintains goodwill between patient and hospital.",
    },
    {
      title: "Full Regulatory Adherence",
      description:
        "All recovery workflows align with federal and state healthcare billing regulations, consumer protection standards, and patient confidentiality guidelines.",
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
              Medical Collections
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-[#0D9488]/20 border border-[#0D9488]/40 text-[#5eead4] text-xs font-semibold tracking-wider uppercase mb-3">
              Revenue Recovery with Dignity
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Medical Collections
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Ethical, respectful revenue recovery designed specifically for healthcare
              providers. We help hospitals and clinics resolve self-pay accounts while
              safeguarding patient trust and community reputation.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Overview */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D] tracking-tight mb-4">
                A Respectful, Patient-Centered Approach to Healthcare Receivables
              </h2>
              <p className="text-base text-[#1E293B] leading-relaxed mb-4">
                Healthcare is deeply personal, and medical billing requires a level of
                care and sensitivity distinct from any other industry. When patients
                face confusing insurance paperwork and unexpected out-of-pocket costs,
                adversarial collection tactics only generate friction, distrust, and
                unresolved balances.
              </p>
              <p className="text-base text-[#1E293B] leading-relaxed mb-6">
                HSI takes a fundamentally different path: we combine clear communication,
                empathy, and structured account management. By treating patients as
                valued partners in their financial resolution, we achieve sustainable
                recovery outcomes while upholding the integrity and community standing
                of your healthcare institution.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#1B365D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span>
                  Compassionate Outreach
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#1B365D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span>
                  Ethical Collections
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#1B365D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span>
                  Transparent Accounting
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-[#1B365D] mb-4">
                  Why Patient-Centered Recovery Matters
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#0D9488] font-bold mr-3 mt-0.5">•</span>
                    <span className="text-sm text-[#1E293B]">
                      <strong>Protects Care Relationships:</strong> Patients who feel
                      respected during billing are more likely to return for necessary
                      preventative and ongoing clinical care.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0D9488] font-bold mr-3 mt-0.5">•</span>
                    <span className="text-sm text-[#1E293B]">
                      <strong>Reduces Grievances:</strong> Clear, informative billing
                      consultations reduce patient complaints and administrative escalation
                      demands on hospital staff.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0D9488] font-bold mr-3 mt-0.5">•</span>
                    <span className="text-sm text-[#1E293B]">
                      <strong>Accelerates Cash Flow:</strong> Manageable, tailored payment
                      options yield steady, dependable remittances compared to write-offs
                      or delayed accounts.
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
              Comprehensive Recovery Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D] mt-1">
              Core Medical Collection Services
            </h2>
            <p className="mt-3 text-[#64748B] text-base">
              Each component of our service is built around patient respect, prompt
              communication, and organized account administration.
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

      {/* Guiding Principles */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D]">
              Our Guiding Principles
            </h2>
            <p className="mt-3 text-[#64748B] text-base">
              How our team conducts revenue recovery every day on behalf of client
              institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6"
              >
                <div className="w-8 h-8 rounded-full bg-[#1B365D] text-white flex items-center justify-center font-bold text-xs mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#1B365D] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed">
                  {pillar.description}
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
            Enhance Your Patient Financial Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Speak with an HSI revenue cycle advisor to explore how our respectful,
            dignified medical collections process can resolve self-pay accounts and
            protect patient relationships.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-150 shadow-sm text-base"
            >
              Contact Us About Collections
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
