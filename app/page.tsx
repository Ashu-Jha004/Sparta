// pages/index.js
"use client";
import { Link } from "react-scroll";
import { useEffect } from "react";
import ContactSection from "../components/Contact";
import {
  FaUsers,
  FaTrophy,
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
import { FaRankingStar } from "react-icons/fa6";
import { MdHealthAndSafety, MdOutlineSportsKabaddi } from "react-icons/md";
import { motion } from "framer-motion";
import { CgGym } from "react-icons/cg";

export default function Home() {
  useEffect(() => {
    // Add any JavaScript for extra animations (if needed)
  }, []);

  return (
    <>
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
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight animate__animated animate__fadeInDown">
              Join <span className="text-indigo-500">Sparta</span>, where
              Champions Rise
            </h1>
            <p className="text-xl mb-4 text-white font-medium max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
              Create or join sports teams, compete in ranked tournaments, and
              unlock facilities with earned points.
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
                Watch Demo
              </button>
            </div>
          </motion.div>
        </section>
        {/*About us */}
        <section id="aboutus" className="bg-gray-100 py-12 font-sans">
          <div className="container mx-auto px-6">
            <motion.h1
              className=" text-5xl md:text-7xl  leading-tight animate__animated animate__fadeInDown font-extrabold text-center text-gray-900 mb-8 tracking-wide"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              What is <span className="text-indigo-600">Sparta ?</span>
            </motion.h1>

            <motion.p
              className="text-xl max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s text-gray-700  text-center mb-6 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Sparta is a platform that empowers athletes and teams by
              connecting them through sports challenges, collaboration, and
              access to resources in the sports community.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To create a vibrant community for athletes, where they can
                  collaborate, compete, and thrive together, leveraging
                  technology to enhance their experience and growth.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To revolutionize the sports industry by making sports more
                  accessible and engaging through innovative tools and platforms
                  that cater to the needs of athletes and teams.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-lg text-gray-700">
                Join us in our journey to redefine sports engagement and
                excellence!
              </p>
            </motion.div>
          </div>
        </section>
        {/* Features Section */}
        <section id="features" className="py-20 px-6 bg-gray-800">
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
        <section className="py-20 px-6 bg-gray-900">
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
                title="Montization"
                icon={<FaDollarSign className="text-4xl text-green-500" />}
                description=" Earn points by winning matches or , sponser your content and get paid by brands or fans redeem them for real-world sports facilities or convert them into cash."
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
                description="Build your own community of fans and followers by posting or livestreaming your matches and highlights to showcase your talentsand ability to the world."
                gradientFrom="indigo-300"
                gradientTo="indigo-500"
              />
              <ReasonCard
                title="Promote Your Bussiness  "
                icon={<FaShare className="text-4xl text-green-500" />}
                description="List your sports facility or equipment for sale or rent for teams and athletes to use and get paid in points."
                gradientFrom="indigo-300"
                gradientTo="indigo-500"
              />
              <ReasonCard
                title="Build your own Career."
                icon={<FaRunning className="text-4xl text-green-500" />}
                description="Build your own career as an Athlete, coach, trainer, or sports analyst by showcasing your skills and knowledge to the world and get paid for your expertise."
                gradientFrom="indigo-300"
                gradientTo="indigo-500"
              />
              <ReasonCard
                title="Promote Your Bussiness  "
                icon={<MdHealthAndSafety className="text-4xl text-green-500" />}
                description="Improve your physical health and mental health by competing in sports and socializing with other athletes and teams."
                gradientFrom="indigo-300"
                gradientTo="indigo-500"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center animate__animated animate__fadeInDown">
              How{" "}
              <span className=" bg-red-400 underline rounded-md text-gray-900  px-2 py-1">
                Sparta
              </span>{" "}
              Works ?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ReasonCard
                icon="Step: 1"
                description="Users create accounts with basic information (name, location, sports preferences).
Profile Setup: Users set up their profiles by adding sports interests, skill levels, team affiliations, and personal achievements"
                title="Register your profile"
                gradientFrom="lime-300"
                gradientTo="green-500"
              />
              <ReasonCard
                icon="Step: 2"
                description="Create a Team: Users can form a team with friends or other athletes in their locality or field of interest.
Join Teams: Users can search for teams in their area based on rank, sport, or class and request to join them. Team captains can accept or decline these requests."
                title="Team Formation and Joining"
                gradientFrom="lime-300"
                gradientTo="green-500"
              />
              <ReasonCard
                icon="Step: 3"
                description=" Rank-Based Competitions: Teams participate in tournaments or matches based on their rank and class (local, district, national, etc.).
Matchmaking System: Sparta matches teams with similar ranks, ensuring fair competition and balanced matchups.
Class and Rank Progression: Winning matches improves a team’s and individual player’s rank, allowing them to move up in classes (e.g., Class F to Class E, etc.).."
                title="Challenge other teams"
                gradientFrom="lime-300"
                gradientTo="green-500"
              />
              <ReasonCard
                icon="Step: 4"
                description="Earn Points: Teams earn points for wins, and fan engagement.
Points Marketplace: Users can buy or rent sports facilities, equipment, and other resources using points.
Betting System: Users can bet on matches and tournaments, predicting the outcome and earning points based on the outcome.
Class and Rank Progression: Winning matches improves a team’s and individual player’s rank, allowing them to move up in classes (e.g., Class F to Class E, etc.).."
                title="Points and Bet System"
                gradientFrom="lime-300"
                gradientTo="green-500"
              />
              <ReasonCard
                icon="Step: 5"
                description="Facility Access: Users can access sports facilities, equipment, and other resources using points.
Renting Facilities: Users can rent sports facilities, equipment, and other resources using points.
Buying Resources: Users can buy sports facilities, equipment, and other resources using points."
                title="Facility Access"
                gradientFrom="lime-300"
                gradientTo="green-500"
              />
              <ReasonCard
                icon="Step: 6"
                description="Promote Your team: Users can promote their sports team, by showcasing their matches and highlights to the world using Sparta."
                title="Promote Your Bussiness"
                gradientFrom="lime-300"
                gradientTo="green-500"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 text-center">
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
        {/* contact section */}

        {/* Footer */}

        {/* ... Optimize and simplify the footer content ... */}
        <footer className="bg-gray-900 text-white">
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
                      <Link
                        to="start"
                        smooth={true}
                        duration={500}
                        className="text-gray-400 hover:text-indigo-500 transition duration-300"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="features"
                        smooth={true}
                        duration={500}
                        className="text-gray-400 hover:text-indigo-500 transition duration-300"
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="aboutus"
                        smooth={true}
                        duration={500}
                        className="text-gray-400 hover:text-indigo-500 transition duration-300"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        smooth={true}
                        duration={500}
                        className="text-gray-400 hover:text-indigo-500 transition duration-300"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                  <ul className="flex space-x-4">
                    <li>
                      <Link
                        to="start"
                        smooth={true}
                        duration={500}
                        className="text-gray-400 hover:text-indigo-500 transition duration-300"
                      >
                        <FaLinkedin className="text-4xl text-indigo-500" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="start"
                        smooth={true}
                        duration={500}
                        className="text-gray-400 hover:text-indigo-500 transition duration-300"
                      >
                        <FaTwitter className="text-4xl text-indigo-500" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="start"
                        smooth={true}
                        duration={500}
                        className="text-gray-400 hover:text-indigo-500 transition duration-300"
                      >
                        <FaMailBulk className="text-4xl text-indigo-500" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="start"
                        smooth={true}
                        duration={500}
                        className="text-gray-400 hover:text-indigo-500 transition duration-300"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
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

// Optimized Feature Component
function Feature({ title, description, icon }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <div className="mr-4 text-indigo-500 transition-all duration-300 transform group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-san font-semibold">{title}</h3>
      </div>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}

// Optimized ReasonCard Component
function ReasonCard({ icon, title, description, gradientFrom, gradientTo }) {
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

// Optimized Step Component
function Step({ number, title, description }) {
  return (
    <div className="bg-gray-700  w-64 p-6 rounded-lg shadow-lg text-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl">
      <div className="text-3xl font-bold text-lime-300 mb-2  transition-all duration-300 transform group-hover:scale-110">
        {number}
      </div>
      <h3 className="text-xl  font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}
