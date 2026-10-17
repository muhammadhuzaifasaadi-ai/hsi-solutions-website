"use client";

import { useState } from "react";
import Link from "next/link";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  serviceInterest: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    serviceInterest: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Demonstration alert as instructed
    alert(
      "Thank you for reaching out to HSI Solutions. Your inquiry has been received.\n\n[PLACEHOLDER - Form submission functionality is currently in demonstration mode. No backend API is configured.]"
    );

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      serviceInterest: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Page Header */}
      <header className="bg-[#1B365D] text-white py-14 sm:py-16 lg:py-20 border-b border-slate-700/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal/20 text-teal-300 border border-teal-500/30 mb-4 tracking-wide uppercase">
              <span>Get In Touch</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Have questions about healthcare operations, ethical revenue recovery, or supply chain optimization? Connect with our dedicated advisory team today.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content: Two-Column Form & General Contact */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact Form */}
          <section
            aria-labelledby="contact-form-heading"
            className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 lg:p-10"
          >
            <div className="mb-6">
              <h2
                id="contact-form-heading"
                className="text-2xl font-bold text-[#1B365D] tracking-tight"
              >
                Send Us a Message
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Please provide your contact information and details regarding your hospital or system inquiry.
              </p>
            </div>

            {submitted && (
              <div
                role="status"
                className="mb-6 rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-800 flex items-start gap-3"
              >
                <svg
                  className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-emerald-900">
                    Inquiry Received [PLACEHOLDER]
                  </p>
                  <p className="mt-0.5 text-emerald-700">
                    Thank you for your message. An HSI representative will review your request shortly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name (required) */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-slate-800 mb-1.5"
                >
                  Full Name <span className="text-rose-500" aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Jane Doe"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal focus:border-teal transition-colors placeholder:text-slate-400 bg-white"
                />
              </div>

              {/* Email (required) & Phone (optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-800 mb-1.5"
                  >
                    Work Email <span className="text-rose-500" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jdoe@hospital.org"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal focus:border-teal transition-colors placeholder:text-slate-400 bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-slate-800 mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal focus:border-teal transition-colors placeholder:text-slate-400 bg-white"
                  />
                </div>
              </div>

              {/* Organization / Hospital Name */}
              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-semibold text-slate-800 mb-1.5"
                >
                  Organization / Hospital Name
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="e.g. Memorial Regional Medical Center"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal focus:border-teal transition-colors placeholder:text-slate-400 bg-white"
                />
              </div>

              {/* Service of Interest */}
              <div>
                <label
                  htmlFor="serviceInterest"
                  className="block text-sm font-semibold text-slate-800 mb-1.5"
                >
                  Service of Interest
                </label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal focus:border-teal transition-colors bg-white"
                >
                  <option value="">Please select a service (optional)</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Medical Collections">Medical Collections</option>
                  <option value="Supply Chain Optimization">
                    Supply Chain Optimization
                  </option>
                  <option value="Peer Review Network">Peer Review Network</option>
                  <option value="Strategic Partner Program">
                    Strategic Partner Program
                  </option>
                </select>
              </div>

              {/* Message (textarea, required) */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-800 mb-1.5"
                >
                  Message <span className="text-rose-500" aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your facility's operational challenges or the nature of your inquiry..."
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal focus:border-teal transition-colors placeholder:text-slate-400 bg-white resize-y"
                />
              </div>

              {/* Submit button (teal) */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal hover:bg-[#0F766E] active:bg-[#0c5e58] text-white font-semibold px-8 py-3.5 rounded-lg text-sm shadow-xs transition-colors duration-150 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-teal cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>Submit Inquiry</span>
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
                </button>
              </div>
            </form>
          </section>

          {/* Right Column: Contact Information */}
          <aside
            aria-labelledby="contact-info-heading"
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
              <h2
                id="contact-info-heading"
                className="text-xl font-bold text-[#1B365D] tracking-tight mb-6 pb-4 border-b border-slate-100"
              >
                Contact Information
              </h2>

              <ul className="space-y-6">
                {/* Address */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0 mt-0.5">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                      Office Location
                    </h3>
                    <p className="text-sm font-medium text-slate-800">
                      [PLACEHOLDER - Address to be added]
                    </p>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0 mt-0.5">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                      Direct Telephone
                    </h3>
                    <p className="text-sm font-medium text-slate-800">
                      <a
                        href="tel:PLACEHOLDER"
                        className="text-teal hover:text-[#0F766E] hover:underline transition-colors"
                      >
                        [PLACEHOLDER - Phone to be added]
                      </a>
                    </p>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0 mt-0.5">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                      Electronic Mail
                    </h3>
                    <p className="text-sm font-medium text-slate-800">
                      <a
                        href="mailto:PLACEHOLDER"
                        className="text-teal hover:text-[#0F766E] hover:underline transition-colors"
                      >
                        [PLACEHOLDER - Email to be added]
                      </a>
                    </p>
                  </div>
                </li>

                {/* Business Hours */}
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0 mt-0.5">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-sm font-medium text-slate-800">
                      Monday-Friday, 8:00 AM - 5:00 PM CT
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Assurance Notice */}
            <div className="rounded-xl bg-slate-100/80 border border-slate-200 p-5 text-xs text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-800 block mb-1">
                Confidentiality & Regulatory Adherence
              </span>
              All communications are handled with strict operational privacy and compliant data governance protocols tailored for healthcare providers and clinical partners.
            </div>
          </aside>
        </div>

        {/* Service-Specific Contacts Section Below */}
        <section
          aria-labelledby="specialized-contacts-heading"
          className="mt-16 pt-12 border-t border-slate-200"
        >
          <div className="max-w-2xl mb-8">
            <h2
              id="specialized-contacts-heading"
              className="text-2xl font-bold text-[#1B365D]"
            >
              Service-Specific Inquiries
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Connect directly with our specialized departments for focused advisory and operational support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Medical Collections Inquiries */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-2xs hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#1B365D]/10 text-[#1B365D] flex items-center justify-center font-bold">
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
                      d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1B365D]">
                    Medical Collections Inquiries
                  </h3>
                  <span className="text-xs text-slate-600">
                    Revenue Recovery & Patient Billing
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                For health systems seeking compliant, patient-centric bad debt recovery, accounts receivable reduction, and revenue cycle optimization.
              </p>
              <dl className="space-y-2.5 text-sm border-t border-slate-100 pt-4">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <dt className="text-xs uppercase tracking-wider text-slate-600 font-semibold">
                    Department Direct:
                  </dt>
                  <dd className="text-slate-800 font-medium">
                    <a
                      href="tel:PLACEHOLDER"
                      className="text-teal hover:underline text-xs sm:text-sm"
                    >
                      [PLACEHOLDER - Phone to be added]
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <dt className="text-xs uppercase tracking-wider text-slate-600 font-semibold">
                    Department Email:
                  </dt>
                  <dd className="text-slate-800 font-medium">
                    <a
                      href="mailto:PLACEHOLDER"
                      className="text-teal hover:underline text-xs sm:text-sm"
                    >
                      [PLACEHOLDER - Email to be added]
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <dt className="text-xs uppercase tracking-wider text-slate-600 font-semibold">
                    Specialist Lead:
                  </dt>
                  <dd className="text-slate-800 text-xs sm:text-sm">
                    [PLACEHOLDER - Lead to be added]
                  </dd>
                </div>
              </dl>
              <div className="mt-5 pt-3">
                <Link
                  href="/services/medical-collections"
                  className="text-xs font-semibold text-[#1B365D] hover:text-teal inline-flex items-center gap-1"
                >
                  <span>Learn about Medical Collections</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Supply Chain Inquiries */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-2xs hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-teal/15 text-teal flex items-center justify-center font-bold">
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
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1B365D]">
                    Supply Chain Inquiries
                  </h3>
                  <span className="text-xs text-slate-600">
                    Procurement & Inventory Analytics
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                For healthcare administrators looking to reduce supply spend, evaluate vendor contracts, and improve clinical materials management.
              </p>
              <dl className="space-y-2.5 text-sm border-t border-slate-100 pt-4">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <dt className="text-xs uppercase tracking-wider text-slate-600 font-semibold">
                    Department Direct:
                  </dt>
                  <dd className="text-slate-800 font-medium">
                    <a
                      href="tel:PLACEHOLDER"
                      className="text-teal hover:underline text-xs sm:text-sm"
                    >
                      [PLACEHOLDER - Phone to be added]
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <dt className="text-xs uppercase tracking-wider text-slate-600 font-semibold">
                    Department Email:
                  </dt>
                  <dd className="text-slate-800 font-medium">
                    <a
                      href="mailto:PLACEHOLDER"
                      className="text-teal hover:underline text-xs sm:text-sm"
                    >
                      [PLACEHOLDER - Email to be added]
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <dt className="text-xs uppercase tracking-wider text-slate-600 font-semibold">
                    Specialist Lead:
                  </dt>
                  <dd className="text-slate-800 text-xs sm:text-sm">
                    [PLACEHOLDER - Lead to be added]
                  </dd>
                </div>
              </dl>
              <div className="mt-5 pt-3">
                <Link
                  href="/services/supply-chain"
                  className="text-xs font-semibold text-[#1B365D] hover:text-teal inline-flex items-center gap-1"
                >
                  <span>Learn about Supply Chain Optimization</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
