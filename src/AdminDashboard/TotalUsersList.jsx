import React, { useState } from "react";
import { Trash2, Ban, CheckCircle, Mail, User2 } from "lucide-react";
import { adminUsers } from "@/DummyData/adminUsers";

export default function TotalUsersList() {

  // ✅ Load Dummy Users Into State
  const [users, setUsers] = useState(adminUsers);

  // DELETE USER
  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  // BLOCK / UNBLOCK USER
  const toggleBlock = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, blocked: !u.blocked } : u
      )
    );
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-200">

      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Users List
      </h2>

      {/* LIST */}
      <div className="space-y-4">
        {users.map((u) => (
          <div
            key={u.id}
            className="flex items-center justify-between bg-white border border-blue-900/10 rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            {/* LEFT: AVATAR + DETAILS */}
            <div className="flex items-center gap-4">
              <img
                src={u.avatar}
                alt={u.name}
                className="w-16 h-16 rounded-full object-cover border border-blue-900/20"
              />

              <div>
                <p className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  <User2 className="w-4 h-4 text-orange-500" />
                  {u.name}
                </p>

                <p className="text-sm text-slate-500 flex items-center gap-1">
                  <Mail className="w-4 h-4 text-blue-700" />
                  {u.email}
                </p>

                <p className="text-orange-600 font-semibold mt-1">
                  {u.role}
                </p>
              </div>
            </div>

            {/* RIGHT: ACTION BUTTONS */}
            <div className="flex items-center gap-3">
              {/* BLOCK / UNBLOCK */}
              <button
                onClick={() => toggleBlock(u.id)}
                className={`px-3 py-2 rounded-lg border flex items-center gap-2 transition cursor-pointer
                  ${
                    u.blocked
                      ? "border-green-600 text-green-600 hover:bg-green-50"
                      : "border-orange-500 text-orange-600 hover:bg-orange-50"
                  }
                `}
              >
                {u.blocked ? <CheckCircle className="w-4 h-4" /> : <Ban className="w-4 h-4" />}
                <span className="text-sm">
                  {u.blocked ? "Unblock" : "Block"}
                </span>
              </button>

              {/* DELETE USER */}
              <button
                onClick={() => deleteUser(u.id)}
                className="px-3 py-2 rounded-lg border border-red-600 text-red-600 hover:bg-red-50 flex items-center gap-2 transition cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                <span className="text-sm">Delete</span>
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
