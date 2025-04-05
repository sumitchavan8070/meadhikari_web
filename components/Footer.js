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
    <footer className={`bg-[${backgroundColor}] px-6 pt-8 lg:px-12`}>
      {/* Footer content grid */}
      <div className="grid gap-10 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo and description */}
        <div className="sm:col-span-2">
          <a href="#" className="inline-flex items-center space-x-3">
            <Image
              src="/images/example.png"
              alt="logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </a>
          <div className="mt-6 max-w-xl">
            <p className={`text-sm ${textColorPrimary}`}>
              Meadhikari is your ultimate test preparation companion, designed
              to help you succeed in various Maharashtra government exams with
              confidence. Our app provides access to a vast collection of
              previous year question papers (PYQ) and test preparation resources
              for exams like MPSC, Talathi, Gramsevak, Vanvibhag, and more.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-3 text-sm">
          <p className={`text-lg font-semibold ${textColorAccent}`}>Services</p>
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
          <p className={`text-lg font-semibold ${textColorAccent}`}>
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
          <p className={`text-lg font-semibold ${textColorAccent}`}>
            WE ARE ALSO AVAILABLE ON
          </p>
          <div className="flex items-center gap-2 mt-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.sc.meadhikari"
              className="w-full"
            >
              <Image
                src="https://mcqmate.com/public/images/icons/playstore.svg"
                alt="Playstore Button"
                width={135}
                height={70}
              />
            </a>
            <a
              href="https://youtube.com/@meadhikariacademy?si=ymG9R9eYMtouoOe7"
              className="w-full"
            >
              <Image
                src="https://mcqmate.com/public/images/icons/youtube.svg"
                alt="Youtube Button"
                width={135}
                height={70}
              />
            </a>
          </div>
          <p className={`text-lg font-semibold ${textColorAccent}`}>Contacts</p>
          <div className="flex items-center">
            <p className={`mr-1 ${textColorPrimary}`}>Email:</p>
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
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-300 lg:flex-row">
        <p className={`text-sm ${textColorSecondary}`}>
          © 2025 Meadhikari. All rights reserved.
        </p>
        <ul className="flex space-x-5 sm:space-x-8">
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
