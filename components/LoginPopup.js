import React, { useState } from "react";
import { useAuth } from "@/Context/AuthContext"; // Import useAuth hook

const LoginPopup = ({ isOpen, closePopup }) => {
  const { login, register, loading, error } = useAuth(); // Get login, register, loading, and error from context
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  if (!isOpen) return null;

  const handleToggleForm = () => {
    setIsRegistering((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email.toLowerCase(), password); // Call login function from AuthContext
    if (!loading) closePopup(); // Close popup if login is successful
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await register(name, username, email.toLowerCase(), password); // Call register function from AuthContext
    if (!loading) closePopup(); // Close popup after successful registration
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative z-60">
        {/* Close Icon */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          {isRegistering ? "Create an Account" : "Sign In"}
        </h2>

        {isRegistering ? (
          <form onSubmit={handleRegister} className="space-y-6">
            {/* Name */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Your Name
              </label>
              <input
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* Username */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Username
              </label>
              <input
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter your username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {/* Email */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Email Id
              </label>
              <input
                type="email"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Password */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <input
                type="password"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Terms & Conditions */}
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <label
                htmlFor="terms"
                className="text-gray-800 ml-3 block text-sm"
              >
                I accept the{" "}
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
            {/* Submit Button */}
            <div className="!mt-12">
              <button
                type="submit"
                className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create an account"}
              </button>
            </div>
            <p className="text-gray-800 text-sm mt-6 text-center">
              Already have an account?{" "}
              <a
                href="#"
                onClick={handleToggleForm}
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Login here
              </a>
            </p>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                type="email"
                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Password */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <input
                type="password"
                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Remember Me */}
            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input type="checkbox" name="remember" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Sign In"}
              </button>
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              Dont have an account?{" "}
              <a
                href="#"
                onClick={handleToggleForm}
                className="text-blue-600 hover:underline"
              >
                Register here
              </a>
            </p>
          </form>
        )}
        {/* Error Message */}
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      </div>
    </div>
  );
};

export default LoginPopup;
