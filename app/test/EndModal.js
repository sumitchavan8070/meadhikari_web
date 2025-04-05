// "use client";
// import React from "react";

// const EndModal = ({ showEndModal, setShowEndModal, onSubmitTest }) =>
//   showEndModal && (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded shadow-md w-[90%] sm:w-auto">
//         <h2 className="text-lg font-bold mb-2">Confirm Submission</h2>
//         <p className="mb-4">Are you sure you want to submit the test?</p>
//         <div className="mt-4 flex justify-end space-x-4">
//           <button
//             onClick={() => setShowEndModal(false)}
//             className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={() => {
//               setShowEndModal(false);
//               onSubmitTest();
//             }}
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );

// export default EndModal;
"use client";
import React from "react";

const EndModal = ({
  showEndModal,
  setShowEndModal,
  onSubmitTest,
  isDarkMode,
}) =>
  showEndModal && (
    <div
      className={`fixed inset-0 flex justify-center items-center ${
        isDarkMode ? "bg-gray-900 bg-opacity-80" : "bg-black bg-opacity-50"
      }`}
    >
      <div
        className={`${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        } p-6 rounded shadow-md w-[90%] sm:w-auto`}
      >
        <h2 className="text-lg font-bold mb-2">Confirm Submission</h2>
        <p className="mb-4">Are you sure you want to submit the test?</p>
        <div className="mt-4 flex justify-end space-x-4">
          <button
            onClick={() => setShowEndModal(false)}
            className={`px-4 py-2 rounded hover:opacity-90 ${
              isDarkMode ? "bg-gray-600 text-white" : "bg-gray-300 text-black"
            }`}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setShowEndModal(false);
              onSubmitTest();
            }}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );

export default EndModal;
