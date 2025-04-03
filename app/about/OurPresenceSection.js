// import {
//   FaInstagram,
//   FaYoutube,
//   FaGlobe,
//   FaGooglePlay,
//   FaTelegram,
// } from "react-icons/fa";

// const OurPresenceSection = () => {
//   return (
//     <div className="bg-gradient-to-b from-gray-100 to-gray-300 py-16 px-6">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Presence</h2>
//         <p className="text-lg text-gray-600 mb-12 leading-relaxed">
//           Stay connected with us across platforms for updates, resources, and
//           more.
//         </p>
//         <div className="flex flex-wrap justify-center gap-10">
//           {/* Telegram */}
//           <a
//             href="https://t.me/meadhikariacademy"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group relative flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md w-40 h-40 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg"
//           >
//             <FaTelegram className="text-5xl mb-2 transition-transform group-hover:scale-110" />
//             <span className="text-lg font-medium">Telegram</span>
//           </a>

//           {/* Play Store */}
//           <a
//             href="https://play.google.com/store/apps/details?id=com.sc.meadhikari"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group relative flex flex-col items-center justify-center bg-gradient-to-r from-yellow-500 to-red-600 text-white shadow-md w-40 h-40 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg"
//           >
//             <FaGooglePlay className="text-5xl mb-2 transition-transform group-hover:scale-110" />
//             <span className="text-lg font-medium">Play Store</span>
//           </a>
//           {/* YouTube */}
//           <a
//             href="https://youtube.com/@meadhikariacademy?si=ymG9R9eYMtouoOe7"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group relative flex flex-col items-center justify-center bg-gradient-to-r from-red-500 to-red-700 text-white shadow-md w-40 h-40 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg"
//           >
//             <FaYoutube className="text-5xl mb-2 transition-transform group-hover:scale-110" />
//             <span className="text-lg font-medium">YouTube</span>
//           </a>

//           {/* Instagram */}
//           <a
//             href="https://instagram.com/meadhikariacademy"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group relative flex flex-col items-center justify-center bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md w-40 h-40 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg"
//           >
//             <FaInstagram className="text-5xl mb-2 transition-transform group-hover:scale-110" />
//             <span className="text-lg font-medium">Instagram</span>
//           </a>

//           {/* Website */}
//           <a
//             href="https://www.meadhikari.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group relative flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md w-40 h-40 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg"
//           >
//             <FaGlobe className="text-5xl mb-2 transition-transform group-hover:scale-110" />
//             <span className="text-lg font-medium">Website</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurPresenceSection;
import {
  FaInstagram,
  FaYoutube,
  FaGlobe,
  FaGooglePlay,
  FaTelegram,
} from "react-icons/fa";

const OurPresenceSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#F5F9FF] to-[#E6F0FF] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header with HeroBanner-style gradient */}
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-[linear-gradient(92.91deg,rgba(27,169,188,0.15)_-0.48%,rgba(41,102,193,0.15)_98.9%)]">
          <span className="text-sm font-semibold bg-clip-text text-transparent bg-[linear-gradient(92.91deg,#1BA9BC_-0.48%,#2966C1_98.9%)]">
            CONNECT WITH US
          </span>
        </div>
        <h2 className="text-4xl font-bold text-[#055AAB] mb-8">Our Presence</h2>
        <p className="text-lg text-[#2966C1] mb-12 leading-relaxed">
          Stay connected with us across platforms for updates, resources, and
          more.
        </p>

        {/* Platform Cards - Maintained original responsive behavior */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* Telegram */}
          <a
            href="https://t.me/meadhikariacademy"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] text-white shadow-md w-40 h-40 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <FaTelegram className="text-5xl mb-2 transition-transform group-hover:scale-110" />
            <span className="text-lg font-medium">Telegram</span>
          </a>

          {/* Play Store */}
          <a
            href="https://play.google.com/store/apps/details?id=com.sc.meadhikari"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center bg-gradient-to-r from-[#FFA726] to-[#FB8C00] text-white shadow-md w-40 h-40 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <FaGooglePlay className="text-5xl mb-2 transition-transform group-hover:scale-110" />
            <span className="text-lg font-medium">Play Store</span>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@meadhikariacademy?si=ymG9R9eYMtouoOe7"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center bg-gradient-to-r from-[#FF5252] to-[#D32F2F] text-white shadow-md w-40 h-40 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <FaYoutube className="text-5xl mb-2 transition-transform group-hover:scale-110" />
            <span className="text-lg font-medium">YouTube</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/meadhikariacademy"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center bg-gradient-to-r from-[#FF4081] to-[#C2185B] text-white shadow-md w-40 h-40 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <FaInstagram className="text-5xl mb-2 transition-transform group-hover:scale-110" />
            <span className="text-lg font-medium">Instagram</span>
          </a>

          {/* Website */}
          <a
            href="https://www.meadhikari.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center bg-gradient-to-r from-[#055AAB] to-[#1BA9BC] text-white shadow-md w-40 h-40 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <FaGlobe className="text-5xl mb-2 transition-transform group-hover:scale-110" />
            <span className="text-lg font-medium">Website</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurPresenceSection;
