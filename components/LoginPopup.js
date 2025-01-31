import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "@/Context/AuthContext";
import axios from "axios";
import { BASE_URL } from "@/utils/globalStrings";

const LoginPopup = ({ isOpen, closePopup }) => {
  const { setUser } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  if (!isOpen) return null;

  const resetErrors = () => {
    setError(null);
    setFieldErrors({});
  };

  const validateFields = () => {
    let errors = {};
    if (isRegistering) {
      if (!name.trim()) errors.name = "Name is required.";
      if (!username.trim()) errors.username = "Username is required.";
      if (!acceptTerms)
        errors.terms = "You must accept the terms and conditions.";
    }
    if (!email.trim()) errors.email = "Email is required.";
    if (!password.trim()) errors.password = "Password is required.";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleToggleForm = () => {
    setIsRegistering((prev) => !prev);
    setIsForgotPassword(false);
    resetErrors();
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;
    setLoading(true);
    resetErrors();
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      const { user, token } = response.data;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      setUser(user);
      closePopup();
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;
    setLoading(true);
    resetErrors();
    try {
      await axios.post(`${BASE_URL}/register`, {
        name,
        username,
        email,
        password,
      });
      await handleLogin(e);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setFieldErrors({ email: "Email is required." });
      return;
    }
    setLoading(true);
    resetErrors();
    try {
      await axios.post(`${BASE_URL}/forgot-password`, { email });
      alert("Password reset email sent.");
      setIsForgotPassword(false);
    } catch (err) {
      setError(err.response?.data?.message || "Password reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative z-60">
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          {isForgotPassword
            ? "Forgot Password"
            : isRegistering
            ? "Create an Account"
            : "Sign In"}
        </h2>

        {isForgotPassword ? (
          <form onSubmit={handleForgotPassword} className="space-y-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border px-4 py-2 rounded-md"
            />
            {fieldErrors.email && (
              <p className="text-red-500 text-sm">{fieldErrors.email}</p>
            )}
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md"
              disabled={loading}
            >
              {loading ? "Sending..." : "Reset Password"}
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              <a
                href="#"
                onClick={() => setIsForgotPassword(false)}
                className="text-blue-600 hover:underline"
              >
                Back to Login
              </a>
            </p>
          </form>
        ) : isRegistering ? (
          <form onSubmit={handleRegister} className="space-y-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />
            {fieldErrors.name && (
              <p className="text-red-500 text-sm">{fieldErrors.name}</p>
            )}

            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />
            {fieldErrors.username && (
              <p className="text-red-500 text-sm">{fieldErrors.username}</p>
            )}

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />
            {fieldErrors.email && (
              <p className="text-red-500 text-sm">{fieldErrors.email}</p>
            )}

            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border px-4 py-2 rounded-md"
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-gray-600"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {fieldErrors.password && (
              <p className="text-red-500 text-sm">{fieldErrors.password}</p>
            )}

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={() => setAcceptTerms(!acceptTerms)}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I accept the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  terms & conditions
                </a>
              </label>
            </div>
            {fieldErrors.terms && (
              <p className="text-red-500 text-sm">{fieldErrors.terms}</p>
            )}

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md"
              disabled={loading}
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <a
                href="#"
                onClick={handleToggleForm}
                className="text-blue-600 hover:underline"
              >
                Login here
              </a>
            </p>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />
            {fieldErrors.email && (
              <p className="text-red-500 text-sm">{fieldErrors.email}</p>
            )}

            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border px-4 py-2 rounded-md"
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-gray-600"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {fieldErrors.password && (
              <p className="text-red-500 text-sm">{fieldErrors.password}</p>
            )}

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Sign In"}
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Dont have an account?{" "}
              <a
                href="#"
                onClick={handleToggleForm}
                className="text-blue-600 hover:underline"
              >
                Register here
              </a>
            </p>
            <p className="text-center text-sm text-gray-600">
              <a
                href="#"
                onClick={() => setIsForgotPassword(true)}
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </a>
            </p>
          </form>
        )}

        {error && (
          <div className="text-red-500 text-sm mt-4 text-center">{error}</div>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
