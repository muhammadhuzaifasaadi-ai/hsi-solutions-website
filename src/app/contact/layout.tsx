import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | HSI Solutions",
  description:
    "Get in touch with HSI Solutions. Contact our healthcare operations, medical collections, and supply chain specialists.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
