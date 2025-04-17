"use client";

import React, { useState, useEffect } from "react";

const SignupPage = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
    // Add your sign-up logic here
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side image */}
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

      {/* Right side form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#fafafa] px-6">
        <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign up</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full py-2 rounded-md bg-[#1E1E2F] text-white hover:bg-black transition"
            >
              Sign up
            </button>
          </form>

          {/* Divider */}
          <div className="text-center my-4 text-sm text-gray-400">
            Or continue with
          </div>

          {/* Social Login */}
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
            Already a member?{" "}
            <span className="font-semibold text-black cursor-pointer hover:underline">
              Log in now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
