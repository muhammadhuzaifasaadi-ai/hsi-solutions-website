import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | HSI Solutions",
  description:
    "Learn about HSI Solutions, dedicated to supporting healthcare providers, rural facilities, and critical-access hospitals across North Dakota and the Upper Midwest with practical operational solutions.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1E293B]">
      {/* Page Header */}
      <section className="bg-[#1B365D] text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-slate-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li className="select-none text-slate-400">/</li>
              <li aria-current="page" className="text-teal-300 font-medium">
                About Us
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              About HSI Solutions
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-200 leading-relaxed">
              Dedicated to supporting healthcare providers with practical,
              effective operational solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Our Story Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold uppercase tracking-wider text-[#0D9488]">
                  Our Background
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D] tracking-tight">
                  Our Story
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
                  <p>
                    HSI Solutions was created to help healthcare providers —
                    especially rural and critical-access hospitals — manage the
                    complex business operations that support patient care. In
                    close-knit communities, local hospitals and clinics are the
                    backbone of health and wellness, yet they often face
                    disproportionate administrative, staffing, and operational
                    pressures.
                  </p>
                  <p>
                    Serving hospitals throughout North Dakota and the Upper
                    Midwest, we work to lift the burden of operational
                    complexities so that clinical teams can stay focused on what
                    matters most: caring for their patients. We understand that
                    no two facilities are identical, and we take pride in
                    delivering solutions tailored to the practical realities of
                    regional healthcare delivery.
                  </p>
                </div>
              </div>

              {/* Story Highlight Card */}
              <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2 rounded-lg bg-[#1B365D] text-white">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </span>
                  <h3 className="text-lg font-bold text-[#1B365D]">
                    Supporting Regional Healthcare
                  </h3>
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                  Rural healthcare providers are essential pillars of their
                  communities. HSI Solutions provides the operational
                  foundation needed to keep essential healthcare services local,
                  viable, and resilient.
                </p>
                <div className="border-t border-[#E2E8F0] pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                    Primary Region Served
                  </span>
                  <p className="mt-1 text-sm font-medium text-[#1B365D]">
                    North Dakota &amp; The Upper Midwest
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-y border-[#E2E8F0]">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-semibold uppercase tracking-wider text-[#0D9488] mb-4">
              Purpose &amp; Focus
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B365D] tracking-tight mb-6">
              Our Mission
            </h2>
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0D9488]" />
              <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-[#1B365D] leading-relaxed">
                &ldquo;Our mission is to provide healthcare organizations with
                reliable, straightforward support for the operational challenges
                that come with delivering quality care in underserved
                areas.&rdquo;
              </blockquote>
              <p className="mt-6 text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto leading-relaxed">
                By streamlining business systems and addressing day-to-day
                operational friction, we help healthcare leaders protect their
                resources, empower their teams, and maintain vital care for the
                patients who depend on them.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold uppercase tracking-wider text-[#0D9488] mb-4">
                How We Work
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B365D] tracking-tight">
                Our Approach
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
                A collaborative, grounded method designed specifically around
                the realities of healthcare operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Partnership */}
              <div className="flex flex-col bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0] hover:border-[#0D9488] transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1B365D] mb-2">
                  Partnership
                </h3>
                <p className="text-sm font-semibold text-[#0D9488] mb-3">
                  Working alongside healthcare organizations as an extension of
                  their team
                </p>
                <p className="text-sm text-[#64748B] leading-relaxed flex-1">
                  We don&apos;t apply one-size-fits-all fixes from a distance. We
                  immerse ourselves in your daily workflow, collaborating
                  directly with administrative and clinical personnel to provide
                  practical, ongoing assistance.
                </p>
              </div>

              {/* Card 2: Practical Solutions */}
              <div className="flex flex-col bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0] hover:border-[#0D9488] transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1B365D] mb-2">
                  Practical Solutions
                </h3>
                <p className="text-sm font-semibold text-[#0D9488] mb-3">
                  Focusing on systems and processes that produce real, measurable
                  results
                </p>
                <p className="text-sm text-[#64748B] leading-relaxed flex-1">
                  Every recommendation and process improvement is designed for
                  feasibility and sustained execution. We prioritize dependable,
                  actionable systems that resolve root causes rather than
                  temporary workarounds.
                </p>
              </div>

              {/* Card 3: Healthcare Focus */}
              <div className="flex flex-col bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0] hover:border-[#0D9488] transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-3-3v6m-9 1V7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1B365D] mb-2">
                  Healthcare Focus
                </h3>
                <p className="text-sm font-semibold text-[#0D9488] mb-3">
                  Deep understanding of the unique challenges healthcare
                  providers face
                </p>
                <p className="text-sm text-[#64748B] leading-relaxed flex-1">
                  Healthcare operations require specialized attention. We bring
                  thorough familiarity with the operational nuances, regulatory
                  environments, and resource constraints common to rural and
                  regional facilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#1B365D] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-teal-300">
              Our Core Values
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Our Commitment
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto">
              HSI Solutions is firmly dedicated to the vitality of rural
              healthcare. We stand shoulder-to-shoulder with healthcare
              providers, driven by an enduring respect for patients, deep
              appreciation for dedicated hospital teams, and an unwavering
              commitment to keeping high-quality care accessible across
              North Dakota and the Upper Midwest.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] text-white font-medium text-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-[#1B365D]"
              >
                Contact Our Team
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 text-white font-medium text-sm transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
