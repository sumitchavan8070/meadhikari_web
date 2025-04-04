"use client";

import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/utils/globalStrings";

const AccountDeletionRequest = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();

    // Clear previous messages
    setError("");
    setSuccess("");

    // Validate fields
    if (!email || !phone) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/deleteaccount/request-deletion`,
        {
          email,
          phone,
        }
      );

      setSuccess(
        "Your request has been received. We will review and remove your account soon."
      );
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Error:", error);
      setError("There was an error with your request. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center py-12">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md sm:max-w-lg">
        <div className="text-center mb-6 text-gray-600">
          <p className="text-sm mt-2 sm:text-base">
            Deleting your account will permanently remove all your data and
            subscription.
          </p>
        </div>

        <h1 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          Account Deletion Request
        </h1>

        <form onSubmit={submitForm}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email ID:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="\d{10}"
              title="Please enter a valid 10-digit mobile number"
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-md shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            Submit Request
          </button>

          {error && (
            <div className="mt-4 text-red-600 text-sm font-medium">{error}</div>
          )}
          {success && (
            <div className="mt-4 text-green-600 text-sm font-medium">
              {success}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AccountDeletionRequest;
