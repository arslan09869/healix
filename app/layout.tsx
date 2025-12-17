import type { Metadata } from "next";
import { Sniglet } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/main-layout";
import { ConditionalLayout } from "@/components/conditional-layout";

const sniglet = Sniglet({
  weight: ["400"],
  subsets: ["latin-ext"]
});

export const metadata: Metadata = {
  title: "Vivo Health - Lab Report Analysis & Health Platform",
  description: "AI-powered lab report analysis, health chatbot, and secure notes for better health literacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sniglet.className} antialiased`}
      >
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
