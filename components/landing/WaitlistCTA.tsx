"use client";

import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import {
  slideUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
  buttonAnimation,
} from "@/lib/animations";
import Link from "next/link";
import { ArrowRight, Check, Mail } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  school?: string;
  role: string;
}

export function WaitlistCTA() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    school: "",
    role: "student",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = useCallback(() => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (formData.role === "school" && !formData.school?.trim()) {
      newErrors.school = "School name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) return;

      setLoading(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Log form data for now (replace with your backend later)
      console.log("🚀 Sparta waitlist submission:", {
        ...formData,
        timestamp: new Date().toISOString(),
        type:
          formData.role === "school" ? "School demo request" : "Student signup",
      });

      setSubmitted(true);
      setLoading(false);
    },
    [formData, validateForm]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormData]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors]
  );

  if (submitted) {
    return (
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="section-container section-padding bg-gradient-to-r from-sparta-blue-50 to-sparta-blue-100"
      >
        <motion.div
          variants={slideUp}
          className="max-w-md mx-auto text-center p-12"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-white shadow-lg flex items-center justify-center">
            <Check className="w-10 h-10 text-sparta-green-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-sparta-black-900 mb-4">
            You&apos;re in!
          </h2>
          <p className="text-body-lg text-sparta-black-600 mb-6">
            We&apos;ll be in touch soon with next steps for your school/club.
          </p>
          <Link href="#hero" className="btn-primary">
            Back to top
          </Link>
        </motion.div>
      </motion.section>
    );
  }

  return (
    <motion.section
      id="waitlist"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="section-container section-padding"
    >
      <motion.div variants={staggerContainer} className="max-w-4xl mx-auto">
        <motion.div variants={staggerItem} className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sparta-blue-600">
            Join Sparta
          </p>
          <h2 className="mt-3 text-heading-xl md:text-display-md font-display font-semibold text-sparta-black-900">
            Ready to build real school sports?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* School form */}
          <motion.div
            variants={staggerItem}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="text-xl font-semibold text-sparta-black-900 mb-2">
              For schools
            </h3>
            <p className="text-sparta-black-600 mb-6">
              Book a demo for your school
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Principal's name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-sparta-blue-500 focus:border-transparent ${
                    errors.name
                      ? "border-red-300 bg-red-50"
                      : "border-sparta-black-200"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="School email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-sparta-blue-500 focus:border-transparent ${
                    errors.email
                      ? "border-red-300 bg-red-50"
                      : "border-sparta-black-200"
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="school"
                  placeholder="School name"
                  value={formData.school}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-sparta-blue-500 focus:border-transparent ${
                    errors.school
                      ? "border-red-300 bg-red-50"
                      : "border-sparta-black-200"
                  }`}
                />
                {errors.school && (
                  <p className="text-xs text-red-500 mt-1">{errors.school}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={buttonAnimation.hover}
                whileTap={buttonAnimation.tap}
                className={`w-full btn-primary ${
                  loading ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Book demo <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Student form */}
          <motion.div
            variants={staggerItem}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="text-xl font-semibold text-sparta-black-900 mb-2">
              For students & athletes
            </h3>
            <p className="text-sparta-black-600 mb-6">Join your school club</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-sparta-blue-500 focus:border-transparent ${
                    errors.name
                      ? "border-red-300 bg-red-50"
                      : "border-sparta-black-200"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-sparta-blue-500 focus:border-transparent ${
                    errors.email
                      ? "border-red-300 bg-red-50"
                      : "border-sparta-black-200"
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={buttonAnimation.hover}
                whileTap={buttonAnimation.tap}
                className={`w-full btn-primary ${
                  loading ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join waitlist <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
