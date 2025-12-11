import Link from "next/link";
import { Mail, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-sparta-black-200 bg-sparta-black-50">
      <div className="section-container section-padding-sm">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & basics */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-sparta-blue-500 flex items-center justify-center text-white font-display font-semibold text-sm">
                S
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-sparta-black-900">
                  Sparta
                </h3>
                <p className="text-xs text-sparta-black-500">
                  School sports, clubs & streaming
                </p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-sparta-black-700 mb-3 uppercase tracking-wide">
              Product
            </h4>
            <ul className="space-y-1 text-sm text-sparta-black-500">
              <li>
                <Link
                  href="#how-it-works"
                  className="hover:text-sparta-blue-600"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#product" className="hover:text-sparta-blue-600">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#traction" className="hover:text-sparta-blue-600">
                  Results
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-sparta-black-700 mb-3 uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-1 text-sm text-sparta-black-500">
              <li>
                <Link href="/investors" className="hover:text-sparta-blue-600">
                  For investors
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sparta-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-sparta-blue-600">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-sparta-black-700 mb-3 uppercase tracking-wide">
              Get in touch
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:ashujha009322@gmail.com"
                className="flex items-center gap-2 text-sm text-sparta-black-600 hover:text-sparta-blue-600"
              >
                <Mail className="w-4 h-4" />
                ashujha009322@gmail.com
              </a>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-sparta-black-100 flex items-center justify-center hover:bg-sparta-blue-100"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-sparta-black-100 flex items-center justify-center hover:bg-sparta-blue-100"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sparta-black-200 mt-12 pt-6 text-xs text-sparta-black-400 text-center">
          <p>
            &copy; 2025 Sparta. All rights reserved. Made for Indian school
            sports.
          </p>
        </div>
      </div>
    </footer>
  );
}
