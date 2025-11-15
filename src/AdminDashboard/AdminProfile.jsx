import React, { useState } from "react";
import { User } from "lucide-react";
import AdminNavbar from "./AdminNavbar";

export default function AdminProfile() {
  const [user, setUser] = useState({
    name: "Bhavesh Rathod",
    email: "bhavesh@example.com",
    phone: "9876543210",
  });

  const [editing, setEditing] = useState(false);

  const handleUpdate = () => {
    setEditing(false);
    alert("Profile updated!");
  };

  return (
    <>
      <AdminNavbar />

      <div className="min-h-screen bg-gray-50 pt-28 px-6 flex justify-center animate-fadeIn">
        <div className="bg-white shadow-xl border border-blue-900/10 p-10 rounded-2xl w-full max-w-xl">

          {/* Profile Icon */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto bg-blue-100 flex items-center justify-center rounded-full shadow">
              <User className="w-12 h-12 text-blue-900" />
            </div>

            <h2 className="mt-4 text-3xl font-bold text-blue-900">
              Admin Profile
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Manage your admin account settings
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Full Name
              </label>
              <input
                disabled={!editing}
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className={`w-full border rounded-lg px-4 py-2 bg-white text-slate-800 transition
                  ${editing ? "focus:ring-2 ring-blue-700 border-blue-700" : "bg-slate-100 cursor-not-allowed"}
                `}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Email Address
              </label>
              <input
                disabled
                value={user.email}
                className="w-full border rounded-lg px-4 py-2 bg-slate-100 text-slate-700 cursor-not-allowed"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-slate-700 font-semibold mb-1">
                Phone Number
              </label>
              <input
                disabled={!editing}
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                className={`w-full border rounded-lg px-4 py-2 bg-white text-slate-800 transition
                  ${editing ? "focus:ring-2 ring-blue-700 border-blue-700" : "bg-slate-100 cursor-not-allowed"}
                `}
              />
            </div>
          </div>

          {/* Action Buttons */}
          {!editing ? (
            <button
              className="mt-8 w-full bg-blue-900 text-white py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition"
              onClick={() => setEditing(true)}
            >
              Edit Profile
            </button>
          ) : (
            <button
              className="mt-8 w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition"
              onClick={handleUpdate}
            >
              Save Changes
            </button>
          )}
        </div>
      </div>
    </>
  );
}
