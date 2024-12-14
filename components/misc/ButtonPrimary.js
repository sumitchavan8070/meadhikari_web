// import React from "react";

// const ButtonPrimary = ({ children, addClass }) => {
//   return (
//     <button
//       className={
//         "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none " +
//         addClass
//       }
//     >
//       {children}
//     </button>
//   );
// };

// export default ButtonPrimary;

import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg hover:shadow-md transition-all outline-none " +
        addClass
      }
      style={{ backgroundColor: "#007BFF" }}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
