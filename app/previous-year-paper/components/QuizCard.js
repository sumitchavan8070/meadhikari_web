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
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between h-full relative border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="absolute top-3 left-3 flex space-x-2 z-10">
        {free && (
          <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full shadow-md">
            Free
          </span>
        )}
        {live && (
          <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full shadow-md">
            Live
          </span>
        )}
        {demo && (
          <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full shadow-md">
            Demo
          </span>
        )}
      </div>
      <h3 className="text-lg font-extrabold text-gray-800 mt-10 mb-3 text-left ">
        {title}
      </h3>
      <div className="space-y-3 text-gray-700 text-sm">
        <div className="flex space-x-4">
          {paper?.QPYear && (
            <span className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded-full">
              {paper.QPYear}
            </span>
          )}
          {paper?.subCatName && (
            <span className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded-full">
              {paper.subCatName}
            </span>
          )}
        </div>
        <p>
          ⏰ <span className="font-medium">Duration:</span> {time}
        </p>
        <p>
          📚 <span className="font-medium">Questions:</span> {questions}
        </p>
        <p>
          📊 <span className="font-medium">Marks:</span> {marks}
        </p>
        {/* <p>
          🌐 <span className="font-medium">Languages:</span> {languages}
        </p> */}
        {/* <p>
          🔥 <span className="font-medium">Active Students:</span> {attempted}{" "}
        </p> */}
      </div>
      <button
        onClick={onButtonClick}
        className="mt-5 bg-blue-600 text-white text-sm py-2 px-5 rounded-lg hover:bg-blue-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default QuizCard;
