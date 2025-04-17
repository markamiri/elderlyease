"use client";

import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
    // 🔐 Replace with actual login logic
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Image & Text Section */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: `url('/login-photo.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative z-10 p-12 text-white flex flex-col justify-between h-full">
          <div className="text-2xl font-bold flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="h-8" />
            ElderlyEase
          </div>

          <div className="mt-auto">
            <h1 className="text-3xl font-semibold mb-4">
              Join hands for care that feels like home
            </h1>
            <p className="text-base text-gray-200">
              ElderlyEase connects compassionate caregivers with those in need
              of reliable, personalized support.
            </p>
          </div>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#fafafa] px-6">
        <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Log in</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-[#1E1E2F] text-white hover:bg-black transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="text-center my-4 text-sm text-gray-400">
            Or continue with
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4 mb-4">
            <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full">
              <img src="/google-icon.svg" alt="Google" className="h-5 w-5" />
              Google
            </button>
            <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full">
              <img
                src="/facebook-icon.svg"
                alt="Facebook"
                className="h-5 w-5"
              />
              Facebook
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Not a member?{" "}
            <span className="font-semibold text-black cursor-pointer hover:underline">
              Sign up now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
