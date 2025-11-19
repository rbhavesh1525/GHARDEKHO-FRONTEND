import React, { useState } from "react";
import { User, ShieldCheck, Phone, Mail, CheckCircle, Pencil } from "lucide-react";
import AdminNavbar from "./AdminNavbar";

export default function AdminProfile() {
  const [user, setUser] = useState({
    name: "Bhavesh Rathod",
    email: "bhavesh@example.com",
    phone: "9876543210",
    role: "Administrator",
  });

  const [editing, setEditing] = useState(false);
  const [updated, setUpdated] = useState(false);

  const handleUpdate = () => {
    setEditing(false);
    setUpdated(true);

    setTimeout(() => setUpdated(false), 2000);
  };

  return (
    <>
      <AdminNavbar />

      <div className="min-h-screen bg-[#ffffff]  px-6 flex justify-center">

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-orange-200 w-full max-w-xl animate-fadeIn">

          {/* PROFILE ICON */}
          <div className="text-center mb-8">
            <div className="w-28 h-28 mx-auto bg-blue-100 flex items-center justify-center 
                rounded-full shadow-xl border-4 border-white relative
                animate-scaleIn"
            >
              <User className="w-14 h-14 text-blue-900" />

              {/* ADMIN BADGE */}
              <span className="absolute bottom-1 right-1 bg-orange-500 text-white text-xs px-2 py-1 rounded-full shadow">
                {user.role}
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-blue-900 tracking-wide">
              Admin Profile
            </h2>
            <p className="text-gray-500 text-sm">
              Manage and update your admin information
            </p>
          </div>

          {/* FORM FIELDS */}
          <div className="space-y-5">

            {/* NAME */}
            <div className="group">
              <label className="block text-slate-700 font-semibold mb-1">
                Full Name
              </label>

              <div className="flex items-center gap-3 border rounded-lg px-4 py-2 bg-white 
                transition-all group-focus-within:border-blue-700 group-focus-within:ring-2 group-focus-within:ring-blue-200"
              >
                <User className="w-5 h-5 text-orange-500" />
                <input
                  disabled={!editing}
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className={`w-full outline-none text-slate-800 bg-transparent ${
                    !editing ? "cursor-not-allowed text-gray-500" : ""
                  }`}
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="group">
              <label className="block text-slate-700 font-semibold mb-1">
                Email Address
              </label>

              <div className="flex items-center gap-3 border rounded-lg px-4 py-2 bg-slate-100 cursor-not-allowed">
                <Mail className="w-5 h-5 text-blue-700" />
                <input
                  disabled
                  value={user.email}
                  className="w-full outline-none bg-transparent text-gray-600"
                />
              </div>
            </div>

            {/* PHONE */}
            <div className="group">
              <label className="block text-slate-700 font-semibold mb-1">
                Phone Number
              </label>

              <div className="flex items-center gap-3 border rounded-lg px-4 py-2 bg-white 
                transition-all group-focus-within:border-blue-700 group-focus-within:ring-2 group-focus-within:ring-blue-200"
              >
                <Phone className="w-5 h-5 text-orange-500" />
                <input
                  disabled={!editing}
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  className={`w-full outline-none text-slate-800 bg-transparent ${
                    !editing ? "cursor-not-allowed text-gray-500" : ""
                  }`}
                />
              </div>
            </div>

          </div>

          {/* BUTTONS */}
          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="mt-8 w-full bg-blue-900 text-white py-3 rounded-lg font-semibold 
                shadow hover:bg-blue-800 transition flex items-center justify-center gap-2"
            >
              <Pencil className="w-5 h-5" />
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleUpdate}
              className="mt-8 w-full bg-orange-500 text-white py-3 rounded-lg font-semibold 
                shadow hover:bg-orange-600 transition flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              Save Changes
            </button>
          )}

          {/* SUCCESS ANIMATION */}
          {updated && (
            <div className="mt-4 text-green-600 font-semibold flex items-center gap-2 animate-slideDown">
              <CheckCircle className="w-5 h-5" />
              Profile Updated Successfully!
            </div>
          )}

        </div>
      </div>
    </>
  );
}
