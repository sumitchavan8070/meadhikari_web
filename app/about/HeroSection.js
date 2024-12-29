import Link from "next/link";

const HeroSection = () => (
  <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
    <img
      src="https://readymadeui.com/cardImg.webp"
      alt="Banner Image"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
      <h2 className="text-white md:text-5xl text-3xl font-extrabold mb-6 leading-tight">
        Solve Unlimited Previous Year{" "}
        <span className="text-yellow-500">Question Papers</span>
      </h2>
      <p className="text-lg text-center text-gray-200">
        Access a vast collection of previous year question papers, complete with
        solutions, to enhance your exam preparation. Practice at your own pace
        and solve as many papers as you need to excel.
      </p>
      <Link href="/paper-landing">
        <button className="mt-12 text-base font-semibold py-2.5 px-6 border-2 border-yellow-600 hover:border-yellow-400 bg-transparent text-yellow-500 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </button>
      </Link>
    </div>
  </div>
);

export default HeroSection;
