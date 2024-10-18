import {
  FaUsers,
  FaTrophy,
  FaMapMarkedAlt,
  FaCoins,
  FaVideo,
} from "react-icons/fa";

export default function Features() {
  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          What Sparta Offers
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Feature 1: Team Creation & Joining */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <FaUsers className="text-indigo-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Team Creation & Joining
            </h3>
            <p className="text-center text-gray-700">
              Create a sports team in minutes or join one near you. Build your
              squad and rise through the ranks.
            </p>
          </div>

          {/* Feature 2: Ranked Tournaments */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <FaTrophy className="text-purple-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ranked Tournaments</h3>
            <p className="text-center text-gray-700">
              Compete in ranked tournaments based on skill level. Progress
              through divisions, from local to global rankings.
            </p>
          </div>

          {/* Feature 3: Points System */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <FaCoins className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Points System</h3>
            <p className="text-center text-gray-700">
              Earn points by winning tournaments and matches. Redeem them for
              sports facilities or convert them to cash.
            </p>
          </div>

          {/* Feature 4: Geolocation for Teams & Facilities */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <FaMapMarkedAlt className="text-green-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Geolocation for Teams & Facilities
            </h3>
            <p className="text-center text-gray-700">
              Discover nearby teams and sports venues on an interactive map.
              Easily connect with players and coaches.
            </p>
          </div>

          {/* Feature 5: Live Streaming & Content */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <FaVideo className="text-red-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Live Streaming & Content
            </h3>
            <p className="text-center text-gray-700">
              Stream matches live or watch past games. Share your team’s
              highlights and moments with the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
