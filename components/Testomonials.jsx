import { useState } from "react"; // Make sure this is at the top

// ...existing code...

// Testimonial data
const testimonials = [
  {
    quote:
      "Sparta helped me find the right team and showcase my skills. The ranking system is fair and transparent!",
    name: "Amit Sharma",
    image: "/athlete1.jpg", // Replace with your image path or leave as placeholder
  },
  {
    quote:
      "I love how easy it is to connect with other athletes and join tournaments. The community is amazing.",
    name: "Priya Singh",
    image: "/athlete2.jpg",
  },
  {
    quote:
      "The platform gave me opportunities I never thought possible. I finally feel seen as an athlete.",
    name: "Rahul Verma",
    image: "/athlete3.jpg",
  },
];

// ...inside your Home component, after the Why Choose Sparta section...

<section className="py-20 px-6 bg-gray-800">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-10 text-indigo-300">
      What Athletes Say
    </h2>
    <TestimonialCarousel />
  </div>
</section>;

// ...add this TestimonialCarousel component at the bottom of your file...

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="bg-gray-900 rounded-xl shadow-xl px-8 py-10 flex flex-col items-center transition-all duration-500 min-h-[320px]">
        <img
          src={testimonials[current].image}
          alt={testimonials[current].name}
          className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-indigo-400 shadow"
          onError={(e) => (e.currentTarget.src = "/profile.png")}
        />
        <p className="text-xl italic text-gray-200 mb-4">
          “{testimonials[current].quote}”
        </p>
        <span className="font-bold text-indigo-300 text-lg">
          {testimonials[current].name}
        </span>
      </div>
      {/* Carousel Controls */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-indigo-400 hover:bg-indigo-600 text-white rounded-full p-2 shadow transition"
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-400 hover:bg-indigo-600 text-white rounded-full p-2 shadow transition"
        aria-label="Next"
      >
        &#8594;
      </button>
      {/* Dots */}
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
