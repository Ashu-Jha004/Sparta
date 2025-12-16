// components/investors/TeamSection.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Award, Code2 } from "lucide-react";
import Image from "next/image";

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    {
      name: "Ashu Jha",
      role: "CEO & Founder",
      image: "/AshuJha.jpg", // Add your team photos
      bio: "Full-stack architect with expertise building scalable EdTech platforms. Previously architected sports analytics processing millions of data points daily.",
      skills: ["Next.js", "System Architecture", "Product Strategy"],
      linkedin: "https://www.linkedin.com/in/ashu-jha-121cx/",
    },
    {
      name: "Cherish Sachdeva",
      role: "CTO & Lead Engineer",
      image: "/cherish.png",
      bio: "Technical visionary driving platform architecture and real-time systems. Expert in production-ready applications with emphasis on performance.",
      skills: [
        "Cloud Infrastructure",
        "API Design",
        "Performance Optimization",
      ],
      linkedin: "#",
    },
  ];
  const coach = [
    {
      name: "Narendra",
      role: "Advisor & National Athlete",
      image: "/narendra.png",
      bio: "National-level athlete and certified coach with 12+ years experience. Ensures platform meets real-world needs of athletes and coaches.",
      skills: ["Sports Science", "Coaching", "Athlete Development"],
      linkedin: "#",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            World-Class Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technical excellence meets domain expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
            >
              {/* Profile Image */}
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600">
                {/* Replace with actual Image component when you have photos */}
                <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                  <Image
                    src={member.image}
                    alt="member"
                    width={150}
                    height={150}
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-1 text-center">
                {member.name}
              </h3>
              <div className="text-indigo-600 font-semibold mb-4 text-center">
                {member.role}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                className="flex items-center justify-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">Connect on LinkedIn</span>
              </a>
            </motion.div>
          ))}
          {coach.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
            >
              {/* Profile Image */}
              <div className="relative mx-auto mb-6 rounded-full w-50 h-50 overflow-hidden bg-gradient-to-br">
                {/* Replace with actual Image component when you have photos */}
                <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                  <Image
                    src={member.image}
                    alt="member"
                    width={180}
                    height={180}
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-1 text-center">
                {member.name}
              </h3>
              <div className="text-indigo-600 font-semibold mb-4 text-center">
                {member.role}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                className="flex items-center justify-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">Connect on LinkedIn</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
