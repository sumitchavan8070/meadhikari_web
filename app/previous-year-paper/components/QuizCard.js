const QuizCard = ({
  title,
  time,
  questions,
  marks,
  languages,
  attempted,
  buttonText,
  free,
  live,
  demo,
  onButtonClick,
  paper,
  cardIndex = 0,
  isSubscriptionActive = false,
  FREE_QUIZ_NUMBER = 3,
  user = null,
  onUnlockClick = null,
}) => {
  const isPremium = cardIndex >= FREE_QUIZ_NUMBER && !isSubscriptionActive;
  const isLocked = isPremium && !isSubscriptionActive;

  const handleUnlock = (e) => {
    e.stopPropagation();
    if (onUnlockClick) {
      onUnlockClick();
    } else if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div
      className={`relative bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col justify-between h-full border-2 transition-all duration-300 overflow-hidden group ${
        isPremium
          ? "border-[#FFD700] shadow-[0_8px_30px_rgba(255,215,0,0.3)] hover:shadow-[0_12px_40px_rgba(255,215,0,0.4)]"
          : "border-[rgba(5,90,171,0.15)] hover:shadow-[0_8px_25px_rgba(5,90,171,0.2)]"
      }`}
    >
      {/* Premium Badge Overlay */}
      {isPremium && (
        <div className="absolute top-0 right-0 bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-white px-2 sm:px-4 py-1 rounded-bl-xl sm:rounded-bl-2xl rounded-tr-xl sm:rounded-tr-2xl z-20 shadow-lg">
          <div className="flex items-center gap-1 text-[10px] sm:text-xs font-bold">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="hidden sm:inline">PREMIUM</span>
            <span className="sm:hidden">★</span>
          </div>
        </div>
      )}

      {/* Gradient Background Overlay for Premium */}
      {isPremium && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9E6] via-[#FFF4CC] to-[#FFE699] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}

      {/* Free Badge - Don't show if premium */}
      <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1.5 sm:gap-2 z-10">
        {free && !isPremium && (
          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] text-white text-[10px] sm:text-xs font-bold rounded-full shadow-md">
            FREE
          </span>
        )}
        
        {live && (
          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-[#FF4D4D] to-[#F91313] text-white text-[10px] sm:text-xs font-bold rounded-full shadow-md animate-pulse">
            <span className="hidden sm:inline">🔴 </span>LIVE
          </span>
        )}
        {demo && (
          <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-[#FF8D4D] to-[#F95713] text-white text-[10px] sm:text-xs font-bold rounded-full shadow-md">
            DEMO
          </span>
        )}
      </div>

      {/* Lock Icon for Premium - Clickable Overlay (only covers details and button area) */}
      {isLocked && (
        <div
          onClick={handleUnlock}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-br from-yellow-50/95 via-yellow-100/90 to-yellow-50/95 backdrop-blur-[2px] z-30 flex items-center justify-center rounded-b-xl sm:rounded-b-2xl cursor-pointer hover:from-yellow-100/98 hover:via-yellow-200/95 hover:to-yellow-100/98 transition-all duration-300 pt-8 pb-4 sm:pt-12 sm:pb-6"
        >
          <div className="text-center px-2 sm:px-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center shadow-2xl">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <p className="text-sm sm:text-base font-bold text-gray-800 mb-1">
              Premium Content
            </p>
            <p className="text-[10px] sm:text-xs text-gray-600 mb-3 sm:mb-4">
              {user ? "Unlock with subscription" : "Login to unlock"}
            </p>
            <button
              onClick={handleUnlock}
              className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white font-bold text-xs sm:text-sm rounded-lg hover:from-[#FFA500] hover:to-[#FF8C00] transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95"
            >
              {user ? "Unlock Premium" : "Login / Sign Up"}
            </button>
          </div>
        </div>
      )}

      {/* Content - Always visible, even for premium */}
      <div className={`relative z-10 pt-10 sm:pt-12 ${isPremium ? 'pr-16 sm:pr-20' : ''} ${isLocked ? 'pb-32 sm:pb-40' : ''}`}>
        <h3
          className={`text-base sm:text-lg md:text-xl font-extrabold mb-2 sm:mb-4 text-left line-clamp-2 ${
            isPremium
              ? "bg-gradient-to-r from-[#FF8C00] to-[#FFD700] bg-clip-text text-transparent"
              : "text-gray-800"
          }`}
        >
          {title}
        </h3>

        {/* Tags - Always visible */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {paper?.QPYear && (
            <span
              className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full border ${
                isPremium
                  ? "bg-[#FFF9E6] text-[#FF8C00] border-[#FFD700]"
                  : "bg-[rgba(5,90,171,0.1)] text-[#055AAB] border-[rgba(5,90,171,0.2)]"
              }`}
            >
              {paper.QPYear}
            </span>
          )}
          {paper?.subCatName && (
            <span
              className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full border ${
                isPremium
                  ? "bg-[#FFF9E6] text-[#FF8C00] border-[#FFD700]"
                  : "bg-[rgba(5,90,171,0.1)] text-[#055AAB] border-[rgba(5,90,171,0.2)]"
              }`}
            >
              {paper.subCatName}
            </span>
          )}
        </div>

        {/* Details - Hidden when locked */}
        {!isLocked && (
        <div className="space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm mb-4">
          <div className="flex items-center">
            <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-1.5 sm:mr-2 text-[#055AAB] text-sm sm:text-base">
              ⏰
            </span>
            <span className="font-medium">Duration:</span>
            <span className="ml-1">{time}</span>
          </div>
          <div className="flex items-center">
            <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-1.5 sm:mr-2 text-[#055AAB] text-sm sm:text-base">
              📚
            </span>
            <span className="font-medium">Questions:</span>
            <span className="ml-1">{questions}</span>
          </div>
          <div className="flex items-center">
            <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-1.5 sm:mr-2 text-[#055AAB] text-sm sm:text-base">
              📊
            </span>
            <span className="font-medium">Marks:</span>
            <span className="ml-1">{marks}</span>
          </div>
          <div className="flex items-center">
            <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-1.5 sm:mr-2 text-[#055AAB] text-sm sm:text-base">
              🔥
            </span>
            <span className="font-medium">Active Students:</span>
            <span className="ml-1">{attempted}</span>
          </div>
        </div>
        )}
      </div>

      {/* Button - Hidden when locked (overlay handles it) */}
      {!isLocked && (
        <button
          onClick={onButtonClick}
          className={`mt-4 sm:mt-6 relative z-10 w-full py-2.5 sm:py-3 px-4 sm:px-5 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg ${
            isPremium
              ? "bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white hover:from-[#FFA500] hover:to-[#FF8C00] transform hover:scale-105"
              : "bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] text-white hover:opacity-90 transform hover:scale-105"
          }`}
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <span>{buttonText}</span>
            <svg
              width="14"
              height="14"
              className="sm:w-4 sm:h-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
};

export default QuizCard;
