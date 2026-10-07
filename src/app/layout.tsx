import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Recruitment Portal",
  description: "Join us. Claim your spot on the grid.",
  openGraph: {
    title: "Recruitment Portal",
    description: "Join us. Claim your spot on the grid.",
    url: "https://teamrec.vercel.app",
    siteName: "Recruitment Portal",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruitment Portal",
    description: "Join us. Claim your spot on the grid.",
    images: ["/hero.jpg"],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
