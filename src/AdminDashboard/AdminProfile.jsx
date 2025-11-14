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
    <AdminNavbar/>
    <div className="min-h-screen bg-gray-50 pt-24 px-6 flex justify-center">
      <div className="bg-white shadow-lg border p-8 rounded-xl w-full max-w-xl">

        <div className="text-center mb-6">
          <User className="w-20 h-20 mx-auto bg-blue-100 text-blue-600 p-4 rounded-full" />
          <h2 className="mt-3 text-2xl font-bold text-gray-800">My Profile</h2>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              disabled={!editing}
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full border px-4 py-2 rounded-md focus:ring-2 ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              disabled
              value={user.email}
              className="w-full border px-4 py-2 rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone</label>
            <input
              disabled={!editing}
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              className="w-full border px-4 py-2 rounded-md focus:ring-2 ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Buttons */}
        {!editing ? (
          <button
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            onClick={() => setEditing(true)}
          >
            Edit Profile
          </button>
        ) : (
          <button
            className="mt-6 w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
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
