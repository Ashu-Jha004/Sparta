import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

import { Inter, Lexend, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
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
    "sports booking",
    "sports events",
    "sports tournaments",
    "sports ranking",
    "sports monetization",
    "sports facility",
    "sports health",
    "sports wellbeing",
    "sports India",
    "sports app",
    "sports startup",
  ],
  openGraph: {
    title: "Sparta | Empowering Athletes and Teams Through Sports Innovation",
    description:
      "Discover Sparta, a platform designed to connect athletes and teams. Collaborate, compete, and grow with access to innovative tools and resources.",
    url: "https://sparta009.vercel.app",
    siteName: "Sparta",
    images: [
      {
        url: "https://sparta009.vercel.app/og-image.jpg",
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
    images: ["https://sparta009.vercel.app/twitter-image.jpg"],
    site: "@sparta_sports", // Replace with your Twitter handle
    creator: "@sparta_sports", // Replace with your Twitter handle
  },
  alternates: {
    canonical: "https://sparta009.vercel.app",
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
        <meta
          name="google-site-verification"
          content="x0oUna10QYZysrvYQUBJ5HVbFbRTuFvVn6aVjRPUaCI"
        />
        <meta name="author" content="Ashu Jha" />
        <meta name="publisher" content="Sparta" />
        <meta name="copyright" content="Sparta" />
        <meta name="distribution" content="global" />
        <meta name="audience" content="all" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Sparta" />
        <meta property="og:url" content="https://sparta009.vercel.app" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sparta_sports" />
        <meta name="twitter:creator" content="@sparta_sports" />
        <meta
          name="twitter:image"
          content="https://sparta009.vercel.app/twitter-image.jpg"
        />
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5PYH0G222L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5PYH0G222L', { page_path: window.location.pathname });
          `}
        </Script>
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sparta",
              url: "https://sparta009.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://sparta009.vercel.app/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              description:
                "Join Sparta, the ultimate platform for athletes and teams. Connect, collaborate, and compete with the sports community while accessing cutting-edge tools and resources.",
              publisher: {
                "@type": "Organization",
                name: "Sparta",
                logo: {
                  "@type": "ImageObject",
                  url: "https://sparta009.vercel.app/favicon.png",
                },
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${lexend.variable} ${jetbrainsMono.variable} bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
