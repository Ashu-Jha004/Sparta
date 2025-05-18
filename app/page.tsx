// pages/index.js
"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactSection from "../components/Contact";
import {
  FaUsers,
  FaTrophy,
  FaEye,
  FaCoins,
  FaVideo,
  FaStore,
  FaLinkedin,
  FaTwitter,
  FaMailBulk,
  FaConnectdevelop,
  FaDollarSign,
  FaShare,
  FaRunning,
} from "react-icons/fa";
import { PiLadderBold } from "react-icons/pi";
import { FaRankingStar } from "react-icons/fa6";
import { MdHealthAndSafety, MdOutlineSportsKabaddi } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { CgGym } from "react-icons/cg";

const testimonials = [
  {
    quote:
      "Sparta helped me find the right team and showcase my skills. The ranking system is fair and transparent!",
    name: "Amit Sharma",
    image: "/profile1.png", // Replace with your image path or leave as placeholder
  },
  {
    quote:
      "I love how easy it is to connect with other athletes and join tournaments. The community is amazing.",
    name: "Priya Singh",
    image: "/profile3.png",
  },
  {
    quote:
      "The platform gave me opportunities I never thought possible. I finally feel seen as an athlete.",
    name: "Rahul Verma",
    image: "/profile2.png",
  },
];
export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  // Smooth scroll handler for anchor links
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setNavOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#start"
            className="text-2xl font-bold text-indigo-600 tracking-wider"
            onClick={(e) => handleNavClick(e, "start")}
          >
            Sparta
          </a>
          {/* Centered Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <a
              href="#aboutus"
              onClick={(e) => handleNavClick(e, "aboutus")}
              className="hover:text-green-200 transition"
            >
              About
            </a>
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="hover:text-green-200 transition"
            >
              Features
            </a>
            <a
              href="#works"
              onClick={(e) => handleNavClick(e, "works")}
              className="hover:text-green-200 transition"
            >
              How it Works
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, "faq")}
              className="hover:text-green-200 transition"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="hover:text-green-200 transition"
            >
              Contact
            </a>
          </div>
          {/* Join Now Button */}
          <div className="hidden md:flex">
            <a
              href="#join"
              onClick={(e) => handleNavClick(e, "join")}
              className="bg-indigo-400 text-white px-4 py-2 rounded-full font-semibold hover:bg-indigo-900 transition"
            >
              Join Now
            </a>
          </div>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-200 focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={navOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {navOpen && (
          <div className="md:hidden bg-gray-900/90 backdrop-blur-md px-4 pb-4 pt-2 space-y-2">
            <a
              href="#aboutus"
              onClick={(e) => handleNavClick(e, "aboutus")}
              className="block hover:text-red-400 transition"
            >
              About
            </a>
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="block hover:text-red-400 transition"
            >
              Features
            </a>
            <a
              href="#works"
              onClick={(e) => handleNavClick(e, "works")}
              className="block hover:text-red-400 transition"
            >
              How it Works
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, "faq")}
              className="block hover:text-red-400 transition"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="block hover:text-red-400 transition"
            >
              Contact
            </a>
            <a
              href="#join"
              onClick={(e) => handleNavClick(e, "join")}
              className="block bg-red-400 text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-red-500 transition text-center"
            >
              Join Now
            </a>
          </div>
        )}
      </nav>
      {/* Add padding to push content below navbar */}

      <main className="bg-gray-900 text-white min-h-screen relative font-inter">
        {/* Hero Section */}
        <section
          id="start"
          className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-cover bg-center h-screen overflow-hidden"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
            autoPlay
            muted
            loop
          >
            <source src="/background-video.mp4" type="video/mp4" />
          </video>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl text-indigo-300 font-extrabold mb-6 leading-tight animate__animated animate__fadeInDown">
              The Athlete's Network. The Athlete's Arena.
            </h1>
            <p className="text-xl mb-4 text-indigo-100 font-serif font-medium max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
              Connect with your peers, find your team, and compete to rise to
              the top..
            </p>
            <p className="text-sm font-thin text-gray-200 mb-8 animate__animated animate__fadeInUp animate__delay-1s">
              &quot;Note: Sparta is currently in development and will take some
              time before it&apos;s officially launched. Be among the first to
              join Sparta and get 1,000 points for free!&quot;
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate__animated animate__fadeInUp animate__delay-2s">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="bg-transparent border border-white text-white hover:bg-white hover:text-indigo-600 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                <a href="#works" onClick={(e) => handleNavClick(e, "works")}>
                  {" "}
                  Watch Demo
                </a>
              </button>
            </div>
          </motion.div>
        </section>

        {/* About us */}
        <section
          id="aboutus"
          className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, rgba(99,102,241,0.10) 0, transparent 70%), radial-gradient(circle at 80% 70%, rgba(239,68,68,0.08) 0, transparent 70%)",
          }}
        >
          {/* Decorative Gradient Blobs */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-700 opacity-20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-red-400 opacity-10 rounded-full blur-3xl z-0"></div>
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="absolute inset-0">
            {/* Top Left Gradient */}
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-indigo-500 to-transparent opacity-10 rounded-full blur-3xl"></div>
            {/* Bottom Right Gradient */}
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-500 to-transparent opacity-10 rounded-full blur-3xl"></div>
            {/* Center Texture */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          </div>
          {/* Decorative Background Elements */}

          <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Text Content */}

            <div>
              <motion.h1
                className="text-5xl md:text-7xl leading-tight animate__animated animate__fadeInDown font-extrabold text-white mb-8 tracking-wide"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                What is <span className="text-indigo-500">Sparta?</span>
              </motion.h1>

              <motion.p
                className="text-xl max-w-2xl animate__animated animate__fadeInUp animate__delay-1s text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Sparta is an online platform creating a fair and transparent
                ecosystem for aspiring athletes to connect with teams, compete,
                and grow their careers based on their skills, regardless of
                background.
              </motion.p>

              <motion.div
                className="grid grid-cols-1 gap-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-gray-800 shadow-lg rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-300">
                    The mission of Sparta is to create a fair and transparent
                    ecosystem for aspiring athletes to connect with
                    opportunities, compete based on their skills, and build
                    their athletic careers.
                  </p>
                </div>

                <div className="bg-gray-800 shadow-lg rounded-lg p-6">
                  <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-300">
                    Sparta&apos;s vision is to become the leading global
                    platform that democratizes athlete development, eliminating
                    barriers and empowering every aspiring athlete to reach
                    their full potential through fair opportunities and
                    transparent pathways.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="text-lg text-gray-300">
                  Join us in our journey to redefine sports engagement and
                  excellence!
                </p>
              </motion.div>
            </div>

            {/* Right Column: Image */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                width={300}
                loading="lazy"
                height={300}
                src="/profile.png" // Replace with the actual path to your image
                alt="Sparta"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Problem Statement */}
        <section
          className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, rgba(99,102,241,0.10) 0, transparent 70%), radial-gradient(circle at 80% 70%, rgba(239,68,68,0.08) 0, transparent 70%)",
          }}
        >
          {/* Decorative Gradient Blobs */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-700 opacity-20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-red-400 opacity-10 rounded-full blur-3xl z-0"></div>
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-indigo-300">
              The Problem <span className="text-red-400">We Solve ?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Problem 1 */}
              <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
                <FaEye className="text-5xl text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  Solving{" "}
                  <span className="text-yellow-400">Unfair Evaluations</span>
                </h3>
                <p className="text-gray-300 text-base">
                  Many athletes{" "}
                  <span className="font-bold">face biased evaluations</span>.
                  Talent is often overlooked. We provide objective assessments
                  through certified moderators.
                </p>
              </div>
              {/* Problem 2 */}
              <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
                <FaConnectdevelop className="text-5xl text-teal-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  Finding the{" "}
                  <span className="text-teal-400">Right Opportunity</span>
                </h3>
                <p className="text-gray-300 text-base">
                  Connecting with the right teams is challenging. Athletes often
                  miss key opportunities. Sparta bridges this gap by creating a
                  centralized hub for athletes and teams to connect.
                </p>
              </div>
              {/* Problem 3 */}
              <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
                <PiLadderBold className="text-5xl text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  The Need for{" "}
                  <span className="text-green-400">Transparency</span>
                </h3>
                <p className="text-gray-300 text-base">
                  The path to advancement is often unclear. Athletes are
                  uncertain how to reach the next level. We offer a transparent
                  system of ranking and progression.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, rgba(99,102,241,0.10) 0, transparent 70%), radial-gradient(circle at 80% 70%, rgba(239,68,68,0.08) 0, transparent 70%)",
          }}
        >
          {/* Decorative Gradient Blobs */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-700 opacity-20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-red-400 opacity-10 rounded-full blur-3xl z-0"></div>
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center animate__animated animate__fadeInDown">
              What{" "}
              <span className=" bg-lime-300 rounded-md text-gray-900  px-2 py-1 ">
                {" "}
                Sparta
              </span>{" "}
              Offers ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Feature
                title="Teams Hub"
                description="Create or join local sports teams, compete in matches, manage team resources, track performance, schedule games, and share achievements. Build your sports community and elevate your game with Sparta."
                icon={<FaUsers className="text-4xl text-indigo-500" />}
              />

              <Feature
                title="Ranked Arena"
                description="Challenge other teams in ranked tournaments and rise through the ranks. Win points and become the best sports team in your area."
                icon={<FaTrophy className="text-4xl text-yellow-500" />}
              />

              <Feature
                title="Points System"
                description="Win matches and tournaments to earn points. Use points to rent or purchase sports facilities and equipment and elevate your team to new heights."
                icon={<FaCoins className="text-4xl text-green-500" />}
              />
              <Feature
                title="Match Cast"
                description="Allows teams to seamlessly upload, record and live stream their matches, enabling fans and followers to watch and engage in real time or access recorded footage later."
                icon={<FaVideo className="text-4xl text-red-400" />}
              />
              <Feature
                title="Market place"
                description="Find coaches,Gyms and other sports facilities and equipment nearby to rent or purchase using points for your team."
                icon={<FaStore className="text-4xl text-violet-400" />}
              />
              <Feature
                title="Recruitment and Networking"
                description="Recruit new players and network with other teams and Athletes nearby using our geolocation feature to grow your team and your career."
                icon={<FaConnectdevelop className="text-4xl text-teal-400" />}
              />

              {/* ... Add the remaining Feature components ... */}
            </div>
          </div>
        </section>

        {/* Why Choose Sparta Section */}
        <section
          className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, rgba(99,102,241,0.10) 0, transparent 70%), radial-gradient(circle at 80% 70%, rgba(239,68,68,0.08) 0, transparent 70%)",
          }}
        >
          {/* Decorative Gradient Blobs */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-700 opacity-20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-red-400 opacity-10 rounded-full blur-3xl z-0"></div>
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center animate__animated animate__fadeInDown">
              Why{" "}
              <span className=" bg-indigo-300 rounded-md text-gray-900  px-2 py-1">
                Choose
              </span>{" "}
              Sparta?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ReasonCard
                icon={
                  <MdOutlineSportsKabaddi className="text-4xl text-lime-300" />
                }
                description="Participate in organized competitions at various levels (local, national, international), based on your rank and class."
                title="Structured Tournaments"
                gradientFrom="lime-300"
                gradientTo="green-500"
              />
              <ReasonCard
                icon={<FaRankingStar className="text-4xl text-lime-300" />}
                description="Advance your team to higher ranks and classes by winning matches against other teams and showcase your skills to the world."
                title="Team and Player Ranking"
                gradientFrom="indigo-300"
                gradientTo="indigo-500"
              />
              <ReasonCard
                title="Monetization"
                icon={<FaDollarSign className="text-4xl text-green-500" />}
                description="Earn points by winning matches, sponsor your content and get paid by brands or fans, redeem them for real-world sports facilities or convert them into cash."
                gradientFrom="indigo-300"
                gradientTo="indigo-500"
              />
              <ReasonCard
                title="Facility Access"
                icon={<CgGym className="text-4xl text-green-500" />}
                description="Just on click of button, you can get access to the nearest sports facility to your location and book it for your practice in exchange of points."
                gradientFrom="indigo-300"
                gradientTo="indigo-500"
              />
              <ReasonCard
                title="Community Building"
                icon={<FaVideo className="text-4xl text-green-500" />}
                description="Build your own community of fans and followers by posting or livestreaming your matches and highlights to showcase your talents and ability to the world."
                gradientFrom="indigo-300"
                gradientTo="indigo-500"
              />
              <ReasonCard
                title="Promote Your Business"
                icon={<FaShare className="text-4xl text-green-500" />}
                description="List your sports facility or equipment for sale or rent for teams and athletes to use and get paid in points."
                gradientFrom="indigo-300"
                gradientTo="indigo-500"
              />
              <ReasonCard
                title="Build your own Career"
                icon={<FaRunning className="text-4xl text-green-500" />}
                description="Build your own career as an Athlete, coach, trainer, or sports analyst by showcasing your skills and knowledge to the world and get paid for your expertise."
                gradientFrom="indigo-300"
                gradientTo="indigo-500"
              />
              <ReasonCard
                title="Health & Wellbeing"
                icon={<MdHealthAndSafety className="text-4xl text-green-500" />}
                description="Improve your physical and mental health by competing in sports and socializing with other athletes and teams."
                gradientFrom="indigo-300"
                gradientTo="indigo-500"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="relative py-20 px-6 bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800 overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 30%, rgba(34,211,238,0.13) 0, transparent 70%), radial-gradient(circle at 90% 80%, rgba(59,130,246,0.10) 0, transparent 70%)",
          }}
        >
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.10) 1.5px, transparent 1.5px)",
              backgroundSize: "28px 28px",
              opacity: 0.25,
            }}
          ></div>
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-400 opacity-10 rounded-full blur-3xl z-0"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold mb-10 text-cyan-300 bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
              What Athletes Say
            </h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="works"
          className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, rgba(99,102,241,0.12) 0, transparent 70%), radial-gradient(circle at 80% 70%, rgba(239,68,68,0.10) 0, transparent 70%)",
          }}
        >
          {/* Decorative Gradient Blobs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-700 opacity-20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-400 opacity-10 rounded-full blur-3xl z-0"></div>
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center animate__animated animate__fadeInDown">
              How{" "}
              <span className=" bg-red-400 underline rounded-md text-gray-900  px-2 py-1">
                Sparta
              </span>{" "}
              Works ?
            </h2>
            <div className=" gap-7 rounded-lg shadow-lg p-6 bg-gray-900">
              <iframe
                width="100%"
                height="100%"
                className="aspect-video rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                src="https://www.youtube.com/embed/0vFAw4vX6SI?si=191XSmUAwPBFAnxr"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
        {/* Matches powered by Sparta */}
        <section
          className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, rgba(99,102,241,0.12) 0, transparent 70%), radial-gradient(circle at 80% 70%, rgba(239,68,68,0.10) 0, transparent 70%)",
          }}
        >
          {/* Decorative Gradient Blobs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-700 opacity-20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-400 opacity-10 rounded-full blur-3xl z-0"></div>
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="max-w-5xl mx-auto">
            {/* Statistic */}
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-indigo-300 mb-2">
                Matches Powered by <span className="text-red-400">Sparta</span>
              </h2>
              <p className="text-5xl font-extrabold text-indigo-400 dark:text-indigo-300 mt-4 mb-2">
                Over <span className="text-red-400">100+</span> Matches Played
              </p>
              <p className="text-gray-300 text-lg">
                Real athletes. Real moments. Real competition.
              </p>
            </div>
            {/* Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Video 1 */}
              <div className="relative group rounded-lg overflow-hidden shadow-lg bg-gray-800">
                <video
                  src="/video1.mp4"
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  loop
                  poster="/vid1_1.png"
                  muted
                  playsInline
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => e.currentTarget.pause()}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-2">
                  <span className="text-white font-semibold text-lg">
                    kabaddi
                  </span>
                </div>
              </div>
              {/* Video 2 */}
              <div className="relative group rounded-lg overflow-hidden shadow-lg bg-gray-800">
                <video
                  src="/vid2.mp4"
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  loop
                  poster="/vid2_2.png"
                  muted
                  playsInline
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => e.currentTarget.pause()}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-2">
                  <span className="text-white font-semibold text-lg">
                    Soccer / Football
                  </span>
                </div>
              </div>
              {/* Video 3 */}
              <div className="relative group rounded-lg overflow-hidden shadow-lg bg-gray-800">
                <video
                  src="/vid3.mp4"
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  loop
                  poster="/vid3_3.png"
                  muted
                  playsInline
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => e.currentTarget.pause()}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-2">
                  <span className="text-white font-semibold text-lg">
                    Football
                  </span>
                </div>
              </div>
              <div className="relative group rounded-lg overflow-hidden shadow-lg bg-gray-800">
                <video
                  src="/vid4.mp4"
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  loop
                  poster="/vid4_4.png"
                  muted
                  playsInline
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => e.currentTarget.pause()}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-2">
                  <span className="text-white font-semibold text-lg">
                    Track and Field
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section
          className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, rgba(99,102,241,0.12) 0, transparent 70%), radial-gradient(circle at 80% 70%, rgba(239,68,68,0.10) 0, transparent 70%)",
          }}
        >
          {/* Decorative Gradient Blobs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-700 opacity-20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-400 opacity-10 rounded-full blur-3xl z-0"></div>
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center text-indigo-300">
              Our <span className="text-red-400">Partnered Institutions</span>
            </h2>
            <PartneredInstitutions />
          </div>
        </section>

        {/* FAQ section */}
        <section
          id="faq"
          className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, rgba(99,102,241,0.10) 0, transparent 70%), radial-gradient(circle at 80% 70%, rgba(239,68,68,0.08) 0, transparent 70%)",
          }}
        >
          {/* Decorative Gradient Blobs */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-700 opacity-20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-red-400 opacity-10 rounded-full blur-3xl z-0"></div>
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-indigo-300 via-indigo-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
              Frequently Asked <span className="text-red-400">Questions</span>
            </h2>
            <FAQAccordion />
          </div>
        </section>
        {/* Founder section */}
        <section
          className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, rgba(99,102,241,0.12) 0, transparent 70%), radial-gradient(circle at 80% 70%, rgba(239,68,68,0.10) 0, transparent 70%)",
          }}
        >
          {/* Decorative Gradient Blobs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-700 opacity-20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-400 opacity-10 rounded-full blur-3xl z-0"></div>
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-shrink-0 bg-gradient-to-br from-indigo-500/40 via-indigo-400/10 to-red-400/10 p-2 rounded-full shadow-2xl"
            >
              <Image
                src="/AshuJha.jpg"
                width={200}
                height={200}
                loading="lazy"
                alt="Founder"
                className="w-40 h-40 rounded-full object-cover border-4 border-indigo-400 shadow-xl bg-white"
              />
            </motion.div>
            {/* Founder Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-300 via-indigo-400 to-red-400 bg-clip-text text-transparent mb-2 drop-shadow-lg">
                Meet the Founder
              </h2>
              <p className="text-2xl font-bold text-white mb-2 tracking-wide drop-shadow">
                Ashu Jha
              </p>
              <p className="text-lg text-indigo-100 font-serif mb-4 leading-relaxed">
                Ashu Jha is passionate about empowering athletes and building
                communities. With a vision to make sports accessible and fair
                for all, he founded{" "}
                <span className="text-indigo-300 font-semibold">Sparta</span> to
                connect, inspire, and elevate the next generation of champions.
              </p>
              <div className="flex flex-col items-center md:items-start gap-2 mt-4">
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/ashu-jha-2bb17325b/" // Replace with real link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-200 transition"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a
                    href="mailto:ashujha009322@gmail.com"
                    className="text-red-400 hover:text-red-300 transition flex items-center gap-1"
                  >
                    <FaMailBulk className="text-2xl" />
                    <span className="text-base">ashujha009322@gmail.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          id="join"
          className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, rgba(99,102,241,0.10) 0, transparent 70%), radial-gradient(circle at 80% 70%, rgba(239,68,68,0.08) 0, transparent 70%)",
          }}
        >
          {/* Decorative Gradient Blobs */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-700 opacity-20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-red-400 opacity-10 rounded-full blur-3xl z-0"></div>
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 animate__animated animate__fadeInDown">
              Ready to Join the Action?
            </h2>
            <p className=" text-xl mb-2 animate__animated animate__fadeInUp animate__delay-1s">
              Create or join a team today and start competing today!
            </p>
            <p className="text-sm font-thin text-gray-200 mb-8 animate__animated animate__fadeInUp animate__delay-1s">
              &quot;Note: Sparta is currently in development and will take some
              time before it&apos;s officially launched. Be among the first to
              join Sparta and get 1,000 points for free!&quot;
            </p>
            <ContactSection />
          </motion.div>
        </section>

        {/* Footer */}
        <footer
          className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, rgba(99,102,241,0.10) 0, transparent 70%), radial-gradient(circle at 80% 70%, rgba(239,68,68,0.08) 0, transparent 70%)",
          }}
        >
          {/* Decorative Gradient Blobs */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-700 opacity-20 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-red-400 opacity-10 rounded-full blur-3xl z-0"></div>
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="container mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-4">Sparta</h2>
                <p className="text-gray-400">
                  Empowering athletes and teams to connect, compete, and train
                  together.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mb-6 md:mb-0">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                  <ul>
                    <li>
                      <a
                        href="#start"
                        onClick={(e) => handleNavClick(e, "start")}
                        className="text-gray-400 hover:text-indigo-500 transition duration-300"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#features"
                        onClick={(e) => handleNavClick(e, "features")}
                        className="text-gray-400 hover:text-indigo-500 transition duration-300"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="#aboutus"
                        onClick={(e) => handleNavClick(e, "aboutus")}
                        className="text-gray-400 hover:text-indigo-500 transition duration-300"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, "contact")}
                        className="text-gray-400 hover:text-indigo-500 transition duration-300"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                  <ul className="flex space-x-4">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/ashu-jha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-indigo-500 transition duration-300"
                      >
                        <FaLinkedin className="text-4xl text-indigo-500" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/sparta_sports"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-indigo-500 transition duration-300"
                      >
                        <FaTwitter className="text-4xl text-indigo-500" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:ashujha009322@gmail.com"
                        className="text-gray-400 hover:text-indigo-500 transition duration-300 flex items-center gap-1"
                      >
                        <FaMailBulk className="text-4xl text-indigo-500" />
                        <span className="text-base">
                          ashujha009322@gmail.com
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6 mt-10">
              <p className="text-center text-gray-500">
                &copy; {new Date().getFullYear()} Sparta. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

// Feature Component
function Feature({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <div className="mr-4 text-indigo-500 transition-all duration-300 transform group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-sans font-semibold">{title}</h3>
      </div>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}

// ReasonCard Component
function ReasonCard({
  icon,
  title,
  description,
  gradientFrom,
  gradientTo,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}) {
  return (
    <div className="bg-gray-600 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl ease-in-out">
      <div
        className={`text-4xl mb-4 text-red-300  bg-clip-text transition-all duration-300 transform group-hover:scale-110`}
      >
        {icon}
      </div>
      <h3 className="text-xl  font-semibold mb-2">{title}</h3>
      <p className="text-gray-200 line-clamp-3  text-sm">{description}</p>
    </div>
  );
}

// TestimonialCarousel Component
function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="bg-gray-900 rounded-xl shadow-xl px-8 py-10 flex flex-col items-center transition-all duration-500 min-h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center w-full"
          >
            <Image
              width={80}
              height={80}
              loading="lazy"
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-indigo-400 shadow"
            />
            <p className="text-xl italic text-gray-200 mb-4">
              “{testimonials[current].quote}”
            </p>
            <span className="font-bold text-indigo-300 text-lg">
              {testimonials[current].name}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-indigo-400" : "bg-gray-500"
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// PartneredInstitutions Component with smooth scrolling and lazy loading
function PartneredInstitutions() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const institutions = [
    { name: "V.P.S", logo: "/school1.png" },
    { name: "K.E.C", logo: "/school2.png" },
    { name: "IPEC", logo: "/school3.png" },
    { name: "D.P.S", logo: "/school4.png" },
    { name: "M.P.S", logo: "/school5.png" },
    { name: "S.V.P.S", logo: "/school6.png" },
    { name: "The Hale X", logo: "/gym1.png" },
    { name: "Fitness Headquarters", logo: "/gym2.png" },
    { name: "Anytime Fitness", logo: "/gym3.png" },
    { name: "Fitness Freak", logo: "/gym3.png" },
  ];
  const logos = [...institutions, ...institutions];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let isPaused = false;
    let animationId: number;

    const scroll = () => {
      if (!isPaused) {
        el.scrollLeft += 0.5;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);

    const pause = () => (isPaused = true);
    const resume = () => (isPaused = false);

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <div className="overflow-x-hidden border-2 border-indigo-800 rounded-lg bg-gray-800 py-6">
      <div
        ref={scrollRef}
        className="flex min-w-full items-center space-x-8"
        style={{
          scrollBehavior: "smooth",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {logos.map((inst, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center mx-8 min-w-[160px]"
          >
            <Image
              width={80}
              height={80}
              src={inst.logo}
              alt={inst.name}
              className="w-20 h-20 object-contain rounded-full bg-white mb-2 shadow-lg border-2 border-indigo-400"
              loading="lazy"
            />
            <span className="text-indigo-200 font-semibold text-base text-center">
              {inst.name}
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

// FAQAccordion Component (unchanged, already correct and efficient)
function FAQAccordion() {
  const faqs = [
    {
      question: "How does Sparta ensure fair and unbiased athlete evaluations?",
      answer:
        "At Sparta, fairness is paramount. All new athletes undergo a physical evaluation conducted by our certified moderators. These are experienced, high-ranking athletes and coaches who adhere to strict, standardized evaluation criteria. This ensures that your skills and physical attributes are assessed objectively, based on measurable data, not personal biases or connections. We're committed to providing every athlete with a fair starting point.",
    },
    {
      question: "How does Sparta help me find the right team or club?",
      answer:
        "Sparta offers a comprehensive platform to explore nearby sports clubs and teams relevant to your sport. Once registered, you can easily browse profiles, learn about team philosophies, and see their rank and class within the Sparta system. With a simple click, you can send a join request directly to the club founder, opening a direct line of communication and increasing your chances of finding the perfect fit for your ambitions.",
    },
    {
      question:
        "How are match schedules and locations determined in the Arena?",
      answer:
        "The Arena streamlines match organization. Sparta's system considers athlete and club rankings, geographical proximity, and venue availability to create balanced and convenient schedules. Our platform provides clear information on match times, locations, and participating teams, ensuring a smooth and organized competitive experience.",
    },
    {
      question:
        "What opportunities does Sparta offer for athlete development and growth?",
      answer:
        "Sparta is committed to your growth. Beyond competition, the platform provides resources like training tips, performance tracking, and access to a network of experienced coaches. The rank and class system also offers a structured path for improvement, motivating athletes to continuously develop their skills and reach their full potential.",
    },
    {
      question:
        "How does Sparta support athletes in showcasing their achievements?",
      answer:
        "Your Sparta Athletic Profile is a dynamic portfolio of your athletic journey. It highlights your verified stats, competitive history, achievements, and any highlights you choose to share. This comprehensive profile provides teams, coaches, and recruiters with a data-backed overview of your abilities, making it easier for them to identify and connect with you.",
    },
    {
      question:
        "What role do certified moderators play in ensuring a positive experience on Sparta?",
      answer:
        "Certified moderators are crucial to the Sparta experience. These experienced athletes and coaches ensure fair evaluations, oversee matches in the Arena, and provide guidance and support to athletes. They are committed to upholding the platform's standards of integrity and sportsmanship, creating a positive and respectful environment for all users.",
    },
    {
      question: "How can athletes build their personal brand on Sparta?",
      answer:
        "Sparta empowers athletes to cultivate their brand. Your profile serves as a central hub where you can showcase your skills, achievements, and personality. Share match highlights, training videos, and engage with the community to build a following and attract attention from teams, sponsors, and fans.",
    },
    {
      question:
        "How can athletes find deals on venues and gear through Sparta?",
      answer:
        "Sparta's Marketplace connects athletes with vendors and venues offering exclusive deals. You can browse discounted training equipment, find affordable venue rentals for practice or events, and access other resources to support your athletic journey, all within the Sparta platform.",
    },
    {
      question:
        "How does the Sparta points system work, and what are the benefits?",
      answer:
        "Sparta uses a point-based system to reward participation and achievement. Earn points by competing in matches, winning, and contributing to the community. These points can be redeemed for various benefits, such as discounted services, premium features, or exclusive access to events, adding value to your Sparta experience.",
    },
    {
      question:
        "How does Sparta support athletes in their overall athletic journey?",
      answer:
        "Sparta provides a holistic support system for athletes. From connecting you with the right teams and coaches to offering resources for skill development and personal branding, we're invested in your success both on and off the field. Our platform is designed to empower you at every stage of your athletic career.",
    },
    {
      question: "How does Sparta ensure the safety of athletes?",
      answer:
        "Sparta prioritizes athlete safety.  Certified moderators are present at all matches within the Arena to enforce rules, ensure fair play, and address any safety concerns.  We also provide clear guidelines for safe training practices and venue standards.  Additionally, our platform facilitates communication between athletes, teams, and moderators to proactively manage and mitigate potential risks.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="bg-gray-800 rounded-lg shadow-lg transition-all duration-300"
        >
          <button
            className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
            onClick={() => toggle(idx)}
            aria-expanded={openIndex === idx}
          >
            <span className="text-lg font-semibold text-indigo-200">
              {faq.question}
            </span>
            <span
              className={`ml-4 transform transition-transform duration-300 ${
                openIndex === idx
                  ? "rotate-180 text-red-400"
                  : "text-indigo-400"
              }`}
            >
              ▼
            </span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden px-6 pb-5"
              >
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
