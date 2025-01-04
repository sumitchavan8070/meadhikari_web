// import React, { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import QuizCard from "./components/QuizCard";
// import { useQuestions } from "@/Context/QuestionsContext";
// import { useAuth } from "@/Context/AuthContext";
// import axios from "axios";
// import LoginPopup from "@/components/LoginPopup";
// import { BASE_URL } from "@/utils/globalStrings";
// import SubscriptionPopup from "./components/SubscriptionPopup";

// const PaperLanding = ({ categoriesData }) => {
//   const { user } = useAuth();
//   const { setQuestions } = useQuestions();

//   const [currentIndexes, setCurrentIndexes] = useState(
//     categoriesData.reduce((acc, _, index) => {
//       acc[index] = 0;
//       return acc;
//     }, {})
//   );
//   const scrollRefs = useRef(categoriesData.map(() => React.createRef()));
//   const [visibleCount, setVisibleCount] = useState(2);
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [loadingCard, setLoadingCard] = useState(null);
//   const [isSubscriptionPopupOpen, setIsSubscriptionPopupOpen] = useState(false); // State for subscription popup
//   const router = useRouter();

//   useEffect(() => {
//     const getVisibleCount = () => {
//       if (window.innerWidth >= 1024) return 5;
//       if (window.innerWidth >= 768) return 3;
//       return 2;
//     };

//     const handleResize = () => {
//       setVisibleCount(getVisibleCount());
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const smoothScroll = (categoryIndex, direction) => {
//     const container = scrollRefs.current[categoryIndex].current;
//     const scrollAmount = container.offsetWidth / visibleCount;

//     if (direction === "next") {
//       container.scrollBy({
//         left: scrollAmount,
//         behavior: "smooth",
//       });
//     } else {
//       container.scrollBy({
//         left: -scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   const handleStartTest = async (questionsData, cardIndex) => {
//     if (!user) {
//       setIsLoginOpen(true);
//       return;
//     }

//     setLoadingCard(cardIndex);

//     try {
//       const response = await axios.get(`${BASE_URL}/${user._id}`);
//       const { isSubscriptionActive } = response.data.user;

//       if (isSubscriptionActive) {
//         setQuestions(questionsData);
//         router.push(`/test`);
//       } else {
//         setIsSubscriptionPopupOpen(true); // Open the subscription popup if no active subscription
//       }
//     } catch (error) {
//       console.error("Error checking subscription:", error);
//       alert("Failed to check subscription. Please try again later.");
//     } finally {
//       setLoadingCard(null);
//     }
//   };

//   const closeLoginPopup = () => {
//     setIsLoginOpen(false);
//   };

//   const closeSubscriptionPopup = () => {
//     setIsSubscriptionPopupOpen(false); // Close subscription popup
//   };

//   const redirectToPricing = () => {
//     setIsSubscriptionPopupOpen(false); // Close the popup
//     router.push("/pricing"); // Redirect to the pricing page
//   };

//   return (
//     <div className="container mx-auto p-6">
//       {categoriesData.map((category, categoryIndex) => (
//         <div key={categoryIndex} className="mb-8">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-2xl font-bold">{category.name}</h2>
//           </div>

//           {category.questionsData.length > 0 ? (
//             <div
//               ref={scrollRefs.current[categoryIndex]}
//               className="flex overflow-x-auto scrollbar-hide space-x-4 transition-all duration-500"
//             >
//               {category.questionsData.map((quiz, qIndex) => (
//                 <div
//                   key={qIndex}
//                   className="flex-shrink-0 w-60 md:w-72 lg:w-80 px-2"
//                 >
//                   <QuizCard
//                     title={quiz.title}
//                     time={`${quiz.time} min`}
//                     questions={`${quiz.questions} Questions`}
//                     marks={`${quiz.marks} Marks`}
//                     languages={quiz.languages.join(", ")}
//                     attempted={quiz.attempted}
//                     buttonText={
//                       loadingCard === qIndex ? "Loading..." : "Start Test"
//                     }
//                     free={quiz.free}
//                     live={quiz.live}
//                     onButtonClick={() =>
//                       handleStartTest(quiz.paper.questions, qIndex)
//                     }
//                   />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="flex flex-col justify-center items-center bg-gray-100 text-gray-600 w-full h-[25vh] md:h-[30vh] lg:h-[35vh] rounded-lg shadow-md">
//               <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center px-4">
//                 No question papers found for this category.
//               </p>
//             </div>
//           )}
//         </div>
//       ))}

//       {/* Login Popup */}
//       <LoginPopup isOpen={isLoginOpen} closePopup={closeLoginPopup} />

//       {/* Subscription Popup */}
//       {isSubscriptionPopupOpen && (
//         <SubscriptionPopup
//           onClose={closeSubscriptionPopup}
//           onRedirect={redirectToPricing}
//         />
//       )}
//     </div>
//   );
// };

// export default PaperLanding;

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizCard from "./components/QuizCard";
import { useQuestions } from "@/Context/QuestionsContext";
import { useAuth } from "@/Context/AuthContext";
import axios from "axios";
import LoginPopup from "@/components/LoginPopup";
import { BASE_URL } from "@/utils/globalStrings";
import SubscriptionPopup from "./components/SubscriptionPopup";

const PaperLanding = ({ categoriesData: initialCategoriesData }) => {
  const { user } = useAuth();
  const { setQuestions } = useQuestions();

  // Add random attempted counts
  const categoriesData = initialCategoriesData.map((category) => ({
    ...category,
    questionsData: category.questionsData.map((quiz) => ({
      ...quiz,
      attempted: `${(Math.random() * 4 + 1).toFixed(1)}k`, // Generate random numbers between 1.0k and 10.0k
    })),
  }));

  const [currentIndexes, setCurrentIndexes] = useState(
    categoriesData.reduce((acc, _, index) => {
      acc[index] = 0;
      return acc;
    }, {})
  );
  const scrollRefs = useRef(categoriesData.map(() => React.createRef()));
  const [visibleCount, setVisibleCount] = useState(2);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loadingCard, setLoadingCard] = useState(null);
  const [isSubscriptionPopupOpen, setIsSubscriptionPopupOpen] = useState(false); // State for subscription popup
  const router = useRouter();

  useEffect(() => {
    const getVisibleCount = () => {
      if (window.innerWidth >= 1024) return 5;
      if (window.innerWidth >= 768) return 3;
      return 2;
    };

    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const smoothScroll = (categoryIndex, direction) => {
    const container = scrollRefs.current[categoryIndex].current;
    const scrollAmount = container.offsetWidth / visibleCount;

    if (direction === "next") {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleStartTest = async (questionsData, cardIndex) => {
    if (!user) {
      setIsLoginOpen(true);
      return;
    }

    setLoadingCard(cardIndex);

    try {
      const response = await axios.get(`${BASE_URL}/${user._id}`);
      const { isSubscriptionActive } = response.data.user;

      if (isSubscriptionActive) {
        setQuestions(questionsData);
        router.push(`/test`);
      } else {
        setIsSubscriptionPopupOpen(true); // Open the subscription popup if no active subscription
      }
    } catch (error) {
      console.error("Error checking subscription:", error);
      alert("Failed to check subscription. Please try again later.");
    } finally {
      setLoadingCard(null);
    }
  };

  const closeLoginPopup = () => {
    setIsLoginOpen(false);
  };

  const closeSubscriptionPopup = () => {
    setIsSubscriptionPopupOpen(false); // Close subscription popup
  };

  const redirectToPricing = () => {
    setIsSubscriptionPopupOpen(false); // Close the popup
    router.push("/pricing"); // Redirect to the pricing page
  };

  return (
    <div className="container mx-auto p-6">
      {categoriesData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{category.name}</h2>
          </div>

          {category.questionsData.length > 0 ? (
            <div
              ref={scrollRefs.current[categoryIndex]}
              className="flex overflow-x-auto scrollbar-hide space-x-4 transition-all duration-500"
            >
              {category.questionsData.map((quiz, qIndex) => (
                <div
                  key={qIndex}
                  className="flex-shrink-0 w-60 md:w-72 lg:w-80 px-2"
                >
                  <QuizCard
                    title={quiz.title}
                    time={`${quiz.time} min`}
                    questions={`${quiz.questions} Questions`}
                    marks={`${quiz.marks} Marks`}
                    languages={quiz.languages.join(", ")}
                    attempted={quiz.attempted}
                    buttonText={
                      loadingCard === qIndex ? "Loading..." : "Start Test"
                    }
                    free={quiz.free}
                    live={quiz.live}
                    onButtonClick={() =>
                      handleStartTest(quiz.paper.questions, qIndex)
                    }
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center bg-gray-100 text-gray-600 w-full h-[25vh] md:h-[30vh] lg:h-[35vh] rounded-lg shadow-md">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center px-4">
                No question papers found for this category.
              </p>
            </div>
          )}
        </div>
      ))}

      {/* Login Popup */}
      <LoginPopup isOpen={isLoginOpen} closePopup={closeLoginPopup} />

      {/* Subscription Popup */}
      {isSubscriptionPopupOpen && (
        <SubscriptionPopup
          onClose={closeSubscriptionPopup}
          onRedirect={redirectToPricing}
        />
      )}
    </div>
  );
};

export default PaperLanding;
