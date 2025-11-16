import React from "react";
import { Skeleton } from "@/Components/ui/skeleton";
import { Badge } from "@/Components/ui/badge";

import { adminUsers } from "../DummyData/adminUsers";

export default function TotalUsers({ data = [], loading = false }) {

  // If no data is passed → use dummy data
  const users = data.length > 0 ? data : adminUsers;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-900/10 overflow-x-auto">

      <h2 className="text-3xl font-bold text-blue-900 mb-6">
        Manage Users
      </h2>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((n) => (
            <Skeleton key={n} className="h-16 w-full rounded-xl" />
          ))}
        </div>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr className="bg-blue-900/10 text-blue-900">
              <th className="px-4 py-3 font-semibold">User</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">Role</th>
              <th className="px-4 py-3 font-semibold">Joined</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr
                key={u.id}
                className="border-b border-gray-200 hover:bg-blue-900/5 transition"
              >
                {/* User + Avatar */}
                <td className="flex items-center gap-3 px-4 py-4">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold shadow">
                    {u.full_name[0]?.toUpperCase()}
                  </div>
                  <span className="font-medium text-slate-800">
                    {u.full_name}
                  </span>
                </td>

                {/* Email */}
                <td className="px-4 text-slate-700">{u.email}</td>

                {/* Role Badge */}
                <td className="px-4">
                  <Badge
                    className={`px-3 py-1 text-sm capitalize ${
                      u.role === "admin"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {u.role}
                  </Badge>
                </td>

                {/* Join Date */}
                <td className="px-4 text-slate-600">
                  {new Date(u.created_date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
