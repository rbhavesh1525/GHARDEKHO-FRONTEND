import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export default function TotalUsers({ data = [], loading = false }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg overflow-x-auto">
      <h2 className="text-2xl font-bold mb-6">Manage Users</h2>

      {loading ? (
        <div className="space-y-4">
          {[1,2,3].map(n => <Skeleton key={n} className="h-16 w-full" />)}
        </div>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            {data.map((u) => (
              <tr key={u.id} className="border-b">
                <td className="flex items-center gap-3 py-3">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold">
                    {u.full_name[0]?.toUpperCase()}
                  </div>
                  {u.full_name}
                </td>
                <td>{u.email}</td>
                <td>
                  <Badge className={u.role === "admin" ? "bg-purple-200 text-purple-800" : "bg-blue-200 text-blue-800"}>
                    {u.role}
                  </Badge>
                </td>
                <td>{new Date(u.created_date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
