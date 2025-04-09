"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/Context/AuthContext";
import {
  FaTrash,
  FaSpinner,
  FaArrowRight,
  FaHistory,
  FaEye,
} from "react-icons/fa";
import { BASE_URL } from "@/utils/globalStrings";
import Result from "./Result";

const HistoryPage = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [testHistory, setTestHistory] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    if (!user?._id) return;

    const fetchHistory = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/history/user/${user._id}/all`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            response.status === 404
              ? "No history found"
              : "Failed to fetch history"
          );
        }

        const { data } = await response.json();
        setTestHistory(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [user]);

  // Delete a history record
  const handleDelete = async () => {
    if (!deleteConfirm) return;

    try {
      setDeletingId(deleteConfirm);
      const response = await fetch(`${BASE_URL}/history/${deleteConfirm}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete history");
      }

      setTestHistory((prev) =>
        prev.filter((item) => item._id !== deleteConfirm)
      );
    } catch (err) {
      console.error(err.message);
    } finally {
      setDeletingId(null);
      setDeleteConfirm(null);
    }
  };

  // Function to format time taken
  const formatTime = (minutes) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-blue-600" />
      </div>
    );
  }

  const handleNavigation = () => {
    setIsNavigating(true);
    router.push("/previous-year-paper");
  };
  if (error || !user) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-md text-center">
          <div className="w-fit mx-auto py-1 px-3.5 rounded-2xl bg-gradient-to-r from-blue-100 to-blue-200 mb-6">
            <p className="text-sm font-semibold text-blue-600">
              {error === "No history found"
                ? "No History Found"
                : "Error Loading History"}
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            {error === "No history found"
              ? "Your Test History is Empty"
              : "Error Loading History"}
          </h2>
          <p className="mb-6 text-gray-600">
            {error === "No history found"
              ? "You haven't attempted any test papers yet."
              : "We couldn't load your test history. Please try again."}
          </p>
          <button
            onClick={handleNavigation}
            disabled={isNavigating}
            className={`group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium py-3 px-8 transition-all duration-300 shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-500 ${
              isNavigating ? "opacity-75" : ""
            }`}
          >
            {isNavigating ? (
              <span className="flex items-center gap-2">
                <FaSpinner className="animate-spin" />
                Redirecting...
              </span>
            ) : (
              <span className="relative z-10 flex items-center gap-2">
                Start Practicing{" "}
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </span>
            )}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-12 md:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="w-fit mx-auto py-1 px-3.5 rounded-2xl bg-gradient-to-r from-blue-100 to-blue-200 mb-6">
            <p className="text-sm font-semibold text-blue-600">
              Performance Tracking
            </p>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            Your Test History
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-blue-500 max-w-2xl mx-auto mb-8">
            Track your progress across all attempted question papers
          </p>

          {/* Stats Cards */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-sm border border-blue-100 min-w-[140px]">
              <p className="text-sm text-gray-600">Total Attempts</p>
              <p className="text-2xl font-bold text-blue-600">
                {testHistory.length}
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-sm border border-blue-100 min-w-[140px]">
              <p className="text-sm text-gray-600">Best Accuracy</p>
              <p className="text-2xl font-bold text-green-600">
                {testHistory.length > 0
                  ? Math.max(
                      ...testHistory.map((test) => test.results.accuracy)
                    ).toFixed(1) + "%"
                  : "0%"}
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-sm border border-blue-100 min-w-[140px]">
              <p className="text-sm text-gray-600">Average Time</p>
              <p className="text-2xl font-bold text-purple-600">
                {testHistory.length > 0
                  ? formatTime(
                      Math.round(
                        testHistory.reduce(
                          (sum, test) => sum + test.results.timeTaken,
                          0
                        ) / testHistory.length
                      )
                    )
                  : "0m"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History Table Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-7xl mx-auto">
        <div className="bg-white/80  rounded-xl shadow-sm overflow-hidden border border-blue-100">
          {/* Responsive Table Container */}
          <div className="overflow-x-auto">
            {/* Desktop/Tablet Table */}
            <table className="min-w-full divide-y divide-blue-100 hidden sm:table">
              <thead className="bg-blue-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider"
                  >
                    Paper Details
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider"
                  >
                    Score
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-blue-50">
                {testHistory.map((test, index) => (
                  <tr
                    key={test._id}
                    className="hover:bg-blue-50/50 transition duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {test.paperMeta.logo && (
                          <div className="flex-shrink-0 h-10 w-10 mr-3 bg-blue-100 rounded-lg flex items-center justify-center overflow-hidden">
                            <img
                              className="h-8 w-8 object-contain"
                              src={test.paperMeta.logo}
                              alt=""
                              width={32}
                              height={32}
                            />
                          </div>
                        )}
                        <div>
                          <div className="text-sm font-medium text-blue-900 line-clamp-1">
                            {test.paperMeta.name}
                          </div>
                          <div className="text-xs text-blue-500 flex items-center gap-1">
                            <FaHistory className="opacity-60" />
                            {test.paperMeta.year} •{" "}
                            {new Date(test.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-green-600">
                          {test.results.correctAnswers}/
                          {test.results.totalQuestions}
                        </span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                          {test.results.percentage.toFixed(1)}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700">
                      {formatTime(test.results.timeTaken)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => setSelectedResult(test)}
                          className="text-blue-600 hover:text-blue-800 hover:underline text-sm flex items-center gap-1"
                        >
                          <FaEye className="text-sm" />
                          <span>View</span>
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(test._id)}
                          className="text-red-600 hover:text-red-800 hover:underline text-sm flex items-center gap-1"
                        >
                          <FaTrash className="text-xs" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile Cards */}
            <div className="space-y-4 sm:hidden p-4">
              {testHistory.map((test, index) => (
                <div
                  key={test._id}
                  className="bg-white p-4 rounded-lg shadow border border-blue-100"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      {test.paperMeta.logo && (
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center overflow-hidden">
                          <img
                            className="h-8 w-8 object-contain"
                            src={test.paperMeta.logo}
                            alt=""
                            width={32}
                            height={32}
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-sm font-medium text-blue-900">
                          {test.paperMeta.name}
                        </h3>
                        <p className="text-xs text-blue-500 flex items-center gap-1">
                          <FaHistory className="opacity-60" />
                          {test.paperMeta.year} •{" "}
                          {new Date(test.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-blue-900">
                      #{index + 1}
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-gray-500">Score</p>
                      <p className="text-sm font-semibold text-green-600">
                        {test.results.correctAnswers}/
                        {test.results.totalQuestions}
                        <span className="ml-1 text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full">
                          {test.results.percentage.toFixed(1)}%
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Time Taken</p>
                      <p className="text-sm font-semibold text-blue-700">
                        {formatTime(test.results.timeTaken)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-end space-x-3">
                    <button
                      onClick={() => setSelectedResult(test)}
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 px-3 py-1 rounded border border-blue-200"
                    >
                      <FaEye className="text-sm" />
                      <span>View</span>
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(test._id)}
                      className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1 px-3 py-1 rounded border border-red-200"
                    >
                      <FaTrash className="text-xs" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Result Modal */}
      {selectedResult && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-blue-100">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                  Test Result Details
                </h2>
                <button
                  onClick={() => setSelectedResult(null)}
                  className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-4">
                  {selectedResult.paperMeta.logo && (
                    <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        className="h-10 w-10 object-contain"
                        src={selectedResult.paperMeta.logo}
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-blue-900">
                      {selectedResult.paperMeta.name}
                    </h3>
                    <p className="text-sm text-blue-600">
                      {selectedResult.paperMeta.year} • Attempted on{" "}
                      {new Date(selectedResult.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
              <Result
                results={selectedResult.results}
                formatTime={formatTime}
                questions={selectedResult.questions}
                onClose={() => setSelectedResult(null)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full border border-red-100">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-red-600">
                  Confirm Deletion
                </h2>
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <p className="text-gray-700">
                  Are you sure you want to delete this test record? This action
                  cannot be undone.
                </p>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  disabled={deletingId === deleteConfirm}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition flex items-center gap-2"
                >
                  {deletingId === deleteConfirm ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    <FaTrash />
                  )}
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
