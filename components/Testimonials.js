import React, { useState } from "react";

const testimonialsData = [
  {
    image: "https://readymadeui.com/team-2.webp",
    name: "John Doe",
    position: "Founder of Rubik",
    message:
      "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    rating: 3,
  },
  {
    image: "https://readymadeui.com/team-5.webp",
    name: "Mark Adair",
    position: "Founder of Alpha",
    message:
      "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    rating: 4,
  },
  {
    image: "https://readymadeui.com/team-2.webp",
    name: "Jane Smith",
    position: "CEO of Beta",
    message:
      "Amazing experience! Friendly staff and great delivery service. Highly recommended.",
    rating: 5,
  },
  {
    image: "https://readymadeui.com/team-5.webp",
    name: "Paul Walker",
    position: "CTO of Gamma",
    message:
      "The food was delicious, and the delivery was incredibly fast. I will definitely order again.",
    rating: 4,
  },
  {
    image: "https://readymadeui.com/team-2.webp",
    name: "Emily Davis",
    position: "Manager of Delta",
    message:
      "Friendly service and prompt delivery! Totally satisfied with the experience.",
    rating: 5,
  },
  {
    image: "https://readymadeui.com/team-5.webp",
    name: "Mark Adair",
    position: "Founder of Alpha",
    message:
      "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    rating: 4,
  },
  {
    image: "https://readymadeui.com/team-5.webp",
    name: "Mark Adair",
    position: "Founder of Alpha",
    message:
      "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  // Ensure 4 cards are always shown, even when we're near the end of the list
  const visibleTestimonials = [
    ...testimonialsData.slice(currentIndex),
    ...testimonialsData.slice(0, 4 - (testimonialsData.length - currentIndex)),
  ].slice(0, 4);

  return (
    <div className="pl-10 font-[sans-serif] mt-4 mb-20">
      <div className="max-w-[80%] mx-auto">
        <h2 className="text-gray-800 text-3xl font-extrabold text-center">
          What our happy clients say
        </h2>
        <div className="grid lg:grid-cols-3 gap-6 max-lg:max-w-2xl">
          <div className="col-span-2">
            <p className="text-sm text-gray-800 mt-6 leading-relaxed">
              Veniam proident aute magna anim excepteur et ex consectetur velit
              ullamco veniam minim aute sit. Elit occaecat officia et laboris
              Lorem minim. Officia do aliqua adipisicing ullamco in.
            </p>
          </div>

          <div className="flex space-x-4 items-end justify-end">
            <button
              aria-label="Previous testimonial"
              className="bg-gray-200 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer transition-transform duration-300 transform hover:scale-110"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-gray-800 inline"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              aria-label="Next testimonial"
              className="bg-blue-600 w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer transition-transform duration-300 transform hover:scale-110"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-white inline"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 lg:gap-12 gap-6 mt-16">
          {visibleTestimonials.length > 0 ? (
            visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-2 rounded-3xl relative shadow-lg transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300"
                />

                <div>
                  <h4 className="text-gray-800 text-base font-bold">
                    {testimonial.name}
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    {testimonial.position}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {testimonial.message}
                  </p>
                </div>

                <div className="flex space-x-1 mt-4">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className={`w-4 ${
                        starIndex < testimonial.rating
                          ? "fill-blue-600"
                          : "fill-[#CED5D8]"
                      }`}
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-4 text-center text-gray-500">
              No testimonials available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
