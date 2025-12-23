"use client";
import Image from "next/image";

const Footer = () => {
  // Define color variables
  const backgroundColor = "#F9FAFC"; // Background color
  const textColorPrimary = "text-gray-800"; // Primary text color
  const textColorSecondary = "text-gray-600"; // Secondary text color
  const textColorAccent = "text-gray-900"; // Accent text color
  const hoverColor = "hover:text-deep-purple-accent-400"; // Hover color

  return (
    <footer className={`bg-[${backgroundColor}] px-4 sm:px-6 md:px-8 lg:px-12 pt-6 sm:pt-8 md:pt-10`}>
      {/* Footer content grid */}
      <div className="grid gap-8 sm:gap-10 mb-6 sm:mb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo and description */}
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#" className="inline-flex items-center space-x-2 sm:space-x-3">
            <Image
              src="/images/example.png"
              alt="logo"
              width={200}
              height={200}
              className="object-contain w-32 sm:w-40 md:w-48 lg:w-52 h-auto"
            />
          </a>
          <div className="mt-4 sm:mt-6 max-w-xl">
            <p className={`text-xs sm:text-sm ${textColorPrimary} leading-relaxed`}>
              Meadhikari is your ultimate test preparation companion, designed
              to help you succeed in various Maharashtra government exams with
              confidence. Our app provides access to a vast collection of
              previous year question papers (PYQ) and test preparation resources
              for exams like MPSC, Talathi, Gramsevak, Vanvibhag, and more.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-2 sm:gap-3 text-sm">
          <p className={`text-base sm:text-lg font-semibold ${textColorAccent} mb-1`}>Services</p>
          <a
            href="/previous-year-paper"
            className={`text-sm ${textColorSecondary} hover:${hoverColor}`}
          >
            Previous Year Question Papers
          </a>
          <a
            href="/pricing"
            className={`text-sm ${textColorSecondary} hover:${hoverColor}`}
          >
            Pricing
          </a>
          <p className={`text-base sm:text-lg font-semibold ${textColorAccent} mt-2 sm:mt-3 mb-1`}>
            Who are we
          </p>
          <a
            href="/about"
            className={`text-sm ${textColorSecondary} hover:${hoverColor}`}
          >
            About us
          </a>
          <a
            href="/contact"
            className={`text-sm ${textColorSecondary} hover:${hoverColor}`}
          >
            Contact us
          </a>
        </div>

        {/* Contact and social media links */}
        <div>
          <p className={`text-base sm:text-lg font-semibold ${textColorAccent} mb-2 sm:mb-3`}>
            WE ARE ALSO AVAILABLE ON
          </p>
          <div className="flex items-center gap-2 sm:gap-3 mt-2 flex-wrap">
            <a
              href="https://play.google.com/store/apps/details?id=com.sc.meadhikari"
              className="flex-shrink-0"
            >
              <Image
                src="https://mcqmate.com/public/images/icons/playstore.svg"
                alt="Playstore Button"
                width={135}
                height={70}
                className="w-24 sm:w-28 md:w-32 lg:w-[135px] h-auto"
              />
            </a>
            <a
              href="https://youtube.com/@meadhikariacademy?si=ymG9R9eYMtouoOe7"
              className="flex-shrink-0"
            >
              <Image
                src="https://mcqmate.com/public/images/icons/youtube.svg"
                alt="Youtube Button"
                width={135}
                height={70}
                className="w-24 sm:w-28 md:w-32 lg:w-[135px] h-auto"
              />
            </a>
          </div>
          <p className={`text-base sm:text-lg font-semibold ${textColorAccent} mt-4 sm:mt-5 mb-2`}>Contacts</p>
          <div className="flex items-center flex-wrap">
            <p className={`mr-1 text-xs sm:text-sm ${textColorPrimary}`}>Email:</p>
            <a
              href="mailto:contact@meadhikari.com"
              className={`text-sm ${textColorSecondary}`}
            >
              contact@meadhikari.com
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="flex flex-col-reverse justify-between pt-4 sm:pt-5 pb-6 sm:pb-8 md:pb-10 border-t border-gray-300 lg:flex-row gap-4 lg:gap-0">
        <p className={`text-xs sm:text-sm ${textColorSecondary} text-center lg:text-left`}>
          © 2025 Meadhikari. All rights reserved.
        </p>
        <ul className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-4 lg:space-x-5 lg:space-x-8">
          <li>
            <a
              href="/privacy-policy"
              className={`text-sm ${textColorSecondary} transition-colors duration-300 ${hoverColor}`}
            >
              Privacy &amp; Cookies Policy
            </a>
          </li>
          <li>
            <a
              href="/terms-condtions"
              className={`text-sm ${textColorSecondary} transition-colors duration-300 ${hoverColor}`}
            >
              Terms & Condtions
            </a>
          </li>

          <li>
            <a
              href="/return-and-refund"
              className={`text-sm ${textColorSecondary} transition-colors duration-300 ${hoverColor}`}
            >
              Return and Refund
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`text-sm ${textColorSecondary} transition-colors duration-300 ${hoverColor}`}
            >
              Disclaimer
            </a>
          </li>
          <li>
            <a
              href="/delete-account"
              className={`text-sm ${textColorSecondary} transition-colors duration-300 ${hoverColor}`}
            >
              Delete Account
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
