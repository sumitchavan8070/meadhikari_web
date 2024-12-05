"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";
const Contact = () => {


  const [state, handleSubmit] = useForm("xpzvzdkk");

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  }, [state.succeeded]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleValidation = () => {
    const { firstName, lastName, email, message } = formData;
    // Check if fields are empty
    if (!firstName || !lastName || !email || !message) {
      setError("All fields are required.");
      return false;
    }

    // Check if email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    // Clear any existing error message
    setError("");
    return true;
  };

  const handleSendMessage = (e) => {
    // e.preventDefault();

    // Validate form data before proceeding
    if (!handleValidation()) {
      return;
    }

    const { firstName, lastName, email, message } = formData;

    // Construct the Gmail compose URL
    // const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=shreejiwc@gmail.com&su=Message from ${firstName} ${lastName}&body=Client Email: ${email}%0A%0AMessage : ${message}`;

    // Open Gmail compose page
    const phoneNumber = "+918003096082"; // Replace with your WhatsApp number
    // const message = encodeURIComponent("Hello! I would like to get in touch. for clothes");
    // const url = `https://wa.me/${phoneNumber}?text=${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Hi, my name is : ${firstName} ${lastName}. My email is : ${email}. ${message}`
    )}`;
    // window.open(url, "_blank"); 

    window.open(url, '_blank');

    // Clear the form after sending the email
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <section className="bg-white 00">
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="font-medium text-gray-500 -400">Contact us</p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl e">
              Chat to our friendly team
            </h1>

            <p className="mt-3 text-gray-500 -400">

              Welcome to Shreeji Wedding Clothes! We are delighted to be part of your special journey, helping you find the perfect attire for your wedding day. Whether you&apos;re looking for a stunning bridal lehenga, an elegant saree, a regal groom sherwani, or a sharp suit, our extensive collection promises to offer something that suits your unique style and traditions.

              Our expert team is here to assist you every step of the way, ensuring that your shopping experience is as seamless and personalized as possible. Let us help you make your wedding day truly unforgettable with the perfect attire.

              Feel free to ask if you need more details or want assistance with any specific outfits!



            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <span className="inline-block p-3 text-gray-500 rounded-full bg-gray-100/80 00">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800">
                  Email
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Our friendly team is here to help.
                </p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shreejiwc@gmail.com" class="mt-2 text-sm text-gray-500" target="_blank">
                  shreejiwc@gmail.com
                </a>

              </div>

              <div>
                <span className="inline-block p-3 text-gray-500 rounded-full bg-gray-100/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800">
                  Visit us
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Nearby kolukhedi bus stand, Kolukhedi kalan,Manohar Thana, j, jhalawar, Rajasthan, 326037
                </p>
                {/* <p className="mt-2 text-sm text-gray-500">New Delhi, India</p> */}
              </div>





              <div>
                <span className="inline-block p-3 text-gray-500 rounded-full bg-gray-100/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800">
                  Phone
                </h2>

                <p className="mt-2 text-sm text-gray-500">+91 8003096082</p>
              </div>



              <div className="inline-block p-0 text-gray-500 height">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.975163341833!2d76.696239!3d24.2168653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397b259a9ac417e7%3A0x47e66338035b1671!2sShreeji%20Wedding%20Clothes!5e0!3m2!1sen!2sin!4v1681066121731!5m2!1sen!2sin"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>




            </div>



            <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
              >
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      required

                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      required

                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="test@gmail.com"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                    name="message"
                    required

                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>


                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  {"Send Email"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
