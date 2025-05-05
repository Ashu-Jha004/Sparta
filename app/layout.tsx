import type { Metadata } from "next";
import { NotificationProvider } from "../context/NotificationContext";
import NotificationDisplay from "../components/Notification";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sparta | Empowering Athletes and Teams Through Sports Innovation",
  description:
    "Join Sparta, the ultimate platform for athletes and teams. Connect, collaborate, and compete with the sports community while accessing cutting-edge tools and resources.",
  keywords: [
    "sports platform",
    "athlete community",
    "team collaboration",
    "sports challenges",
    "sports innovation",
    "athlete resources",
    "sports networking",
    "sports technology",
    "team management",
    "Sparta sports platform",
  ],
  openGraph: {
    title: "Sparta | Empowering Athletes and Teams Through Sports Innovation",
    description:
      "Discover Sparta, a platform designed to connect athletes and teams. Collaborate, compete, and grow with access to innovative tools and resources.",
    url: "https://sparta009.vercel.app", // Replace with your actual website URL
    siteName: "Sparta",
    images: [
      {
        url: "https://sparta009.vercel.app/og-image.jpg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Sparta Platform Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparta | Empowering Athletes and Teams",
    description:
      "Join Sparta, the ultimate sports platform for athletes and teams. Collaborate, compete, and access innovative tools to thrive in the sports industry.",
    images: ["https://sparta009.vercel.app/twitter-image.jpg"], // Replace with your Twitter image URL
  },
  alternates: {
    canonical: "https://sparta009.vercel.app", // Replace with your actual website URL
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
  themeColor: "#1a237e", // Adjust this to match your brand's primary color
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <NotificationProvider>
          <NotificationDisplay />

          {children}
        </NotificationProvider>
      </body>
    </html>
  );
}
