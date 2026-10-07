import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Team Aeolus | Engineering & Innovation",
  description: "Join Team Aeolus. Engineering & Innovation for the future of high-speed levitation.",
  openGraph: {
    title: "Team Aeolus | Engineering & Innovation",
    description: "Join Team Aeolus. Engineering & Innovation for the future of high-speed levitation.",
    url: "https://www.teamaeolus.in",
    siteName: "Team Aeolus",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Team Aeolus",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Aeolus | Engineering & Innovation",
    description: "Join Team Aeolus. Engineering & Innovation for the future of high-speed levitation.",
    images: ["/logo.png"],
  },
  verification: {
    google: "zGQ1jLySAH0Go7vxnXx_eGm5w1YWMciAlxy4HEqcqxs",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
