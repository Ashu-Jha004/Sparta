import type { Metadata } from "next";
import { NotificationProvider } from "../context/NotificationContext";
import NotificationDisplay from "../components/Notification";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sparta Social Network",
  description:
    "Sparta Social Network is a social network for users to find teams, and compete with them.",
};

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
