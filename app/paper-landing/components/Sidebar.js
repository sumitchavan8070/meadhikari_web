// import React from "react";

// const Sidebar = () => {
//   const latestBlogs = [
//     { title: "5 Tips to Crack Competitive Exams", link: "#" },
//     { title: "How to Stay Motivated During Preparation", link: "#" },
//     { title: "Best Resources for Online Study", link: "#" },
//     { title: "Top Mistakes to Avoid in Exams", link: "#" },
//     { title: "Effective Time Management Strategies", link: "#" },
//   ];

//   return (
//     <div className="p-4 space-y-6">
//       {/* Join WhatsApp Group Section */}
//       <div className="bg-green-100 p-4 rounded-lg shadow-md">
//         <h3 className="text-lg font-semibold text-green-700 mb-2">
//           Join Our WhatsApp Group
//         </h3>
//         <p className="text-sm text-gray-600">
//           Stay updated with the latest exam news and updates. Join now!
//         </p>
//         <button className="mt-3 bg-green-600 text-white text-sm py-2 px-4 rounded-lg hover:bg-green-700 w-full">
//           Join Now
//         </button>
//       </div>

//       {/* Latest Blogs Section */}
//       <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">
//           Latest Blogs
//         </h3>
//         <ul className="space-y-2">
//           {latestBlogs.map((blog, index) => (
//             <li key={index}>
//               <a
//                 href={blog.link}
//                 className="text-blue-600 text-sm hover:underline"
//               >
//                 {blog.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Download App Banner */}
//       <div className="relative bg-blue-100 p-4 rounded-lg shadow-md">
//         <h3 className="text-lg font-semibold text-blue-700 mb-2">
//           Download Our App
//         </h3>
//         <p className="text-sm text-gray-600 mb-3">
//           Download now and get an exclusive 5% discount on your first test
//           purchase!
//         </p>
//         <button className="bg-blue-600 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-700 w-full">
//           Download App
//         </button>
//         <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
//           5% Off
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

const Sidebar = () => {
  const latestBlogs = [
    { title: "5 Tips to Crack Competitive Exams", link: "#" },
    { title: "How to Stay Motivated During Preparation", link: "#" },
    { title: "Best Resources for Online Study", link: "#" },
    { title: "Top Mistakes to Avoid in Exams", link: "#" },
    { title: "Effective Time Management Strategies", link: "#" },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Join WhatsApp Group Section */}
      <div className="bg-green-100 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-green-700 mb-2">
          Join Our WhatsApp Group
        </h3>
        <p className="text-sm text-gray-600">
          Stay updated with the latest exam news and updates. Join now!
        </p>
        <button className="mt-3 bg-green-600 text-white text-sm py-2 px-4 rounded-lg hover:bg-green-700 w-full">
          Join Now
        </button>
      </div>

      {/* Latest Blogs Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Latest Blogs
        </h3>
        <ul className="space-y-2">
          {latestBlogs.map((blog, index) => (
            <li key={index}>
              <a
                href={blog.link}
                className="text-blue-600 text-sm hover:underline"
              >
                {blog.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Download App Banner */}
      <div className="relative bg-blue-100 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">
          Download Our App
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          Download now and get an exclusive 5% discount on your first test
          purchase!
        </p>
        <button className="bg-blue-600 text-white text-sm py-2 px-4 rounded-lg hover:bg-blue-700 w-full">
          Download App
        </button>
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          5% Off
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
