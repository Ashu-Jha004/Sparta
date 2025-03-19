import type { Metadata } from "next";
import { NotificationProvider } from "../context/NotificationContext";
import NotificationDisplay from "../components/Notification";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AKTU Result One View | Check Your AKTU University Results Online",
  description: "Get instant access to AKTU results with one click. Check your Dr. A.P.J. Abdul Kalam Technical University results for all semesters, regular & backlog exams. Fast, accurate, and mobile-friendly results portal.",
  keywords: [
    "AKTU results",
    "AKTU university results",
    "check aktu result online",
    "aktu one view result",
    "aktu result portal",
    "aktu latest results",
    "aktu marksheet",
    "aktu semester results",
    "aktu student portal",
    "AKTU exam results"
  ],
  openGraph: {
    title: "AKTU Result One View | Check Your AKTU University Results Online",
    description: "Instant access to AKTU results for all semesters. View your marks, SGPA, and academic status in one click. Official results portal for AKTU students.",
    url: "https://www.akturesultoneview.com",
    siteName: "AKTU Result One View",
    images: [
      {
        url: "https://www.akturesultoneview.com/og-image.jpg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "AKTU Result One View Dashboard",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AKTU Result One View | Check Results Online",
    description: "Official AKTU results portal - Check your semester exams, backlog results, and academic status instantly",
    images: ["https://www.akturesultoneview.com/twitter-image.jpg"], // Replace with your Twitter image URL
  },
  alternates: {
    canonical: "https://www.akturesultoneview.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: "#1a237e",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "education",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NotificationProvider>
          <NotificationDisplay />

          {children}
        </NotificationProvider>
      </body>
    </html>
  );
}
