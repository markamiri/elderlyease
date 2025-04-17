"use client";

import React, { useState } from "react";

type Role = "caregiver" | "carereceiver" | null;

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState<Role>(null);

  const handleSelect = (role: Role) => {
    setSelectedRole(role);
  };

  const handleNext = () => {
    if (selectedRole) {
      alert(`You selected: ${selectedRole}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-black">
      <div className="w-full bg-white px-6 md:px-3 py-1">
        {/* Logo */}
        <div className="flex items-center mb-10">
          <img src="/logo.svg" alt="Logo" className="h-8 mr-2" />
          <h1 className="text-xl font-semibold">ElderlyEase</h1>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Select Your Role
        </h2>

        {/* Role Options */}
        <div className="flex justify-center gap-8 mb-10 flex-wrap">
          {/* Care Receiver */}
          <div
            onClick={() => handleSelect("carereceiver")}
            className={`w-64 p-6 rounded-lg border cursor-pointer transition ${
              selectedRole === "carereceiver"
                ? "border-blue-500 shadow-md"
                : "border-gray-300"
            }`}
          >
            <img
              src="/care-receiver.png"
              alt="Care Receiver"
              className="mx-auto mb-4 h-32"
            />
            <h3 className="text-center font-bold mb-1">As a carereceiver</h3>
            <p className="text-center text-sm text-gray-500">
              If you want to receive services in this platform
            </p>
          </div>

          {/* Caregiver */}
          <div
            onClick={() => handleSelect("caregiver")}
            className={`w-64 p-6 rounded-lg border cursor-pointer transition ${
              selectedRole === "caregiver"
                ? "border-blue-500 shadow-md"
                : "border-gray-300"
            }`}
          >
            <img
              src="/caregiver.png"
              alt="Caregiver"
              className="mx-auto mb-4 h-32"
            />
            <h3 className="text-center font-bold mb-1">As a caregiver</h3>
            <p className="text-center text-sm text-gray-500">
              If you are hiring the worker for your work
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="max-w-md mx-auto space-y-3">
          <button
            onClick={handleNext}
            disabled={!selectedRole}
            className={`w-full py-2 rounded-full text-white font-medium transition ${
              selectedRole
                ? "bg-[#1E1E2F] hover:bg-[#111] shadow"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Next
          </button>
          <button className="w-full py-2 rounded-full border border-gray-300 text-black font-medium hover:bg-gray-100 transition">
            Cancel
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-9">
          © 2024 ElderlyEase All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default RoleSelection;
