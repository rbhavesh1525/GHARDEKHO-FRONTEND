import React from "react";
import { Skeleton } from "@/Components/ui/skeleton";
import { Badge } from "@/Components/ui/badge";
import { adminChats } from "../DummyData/adminChats";

export default function UserChats({ data = [], loading = false }) {

  // Use dummy data if no data passed
  const chats = data.length > 0 ? data : adminChats;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-900/10">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-blue-900">All User Chats</h2>
        <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium shadow-sm">
          Total: {chats.length}
        </span>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((n) => (
            <Skeleton key={n} className="h-24 w-full rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="space-y-5">
          {chats.map((chat, i) => (
            <div
              key={i}
              className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-900/30 bg-white transition"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-slate-800">
                  {chat.property_title}
                </h3>

                <Badge className="bg-blue-900/10 text-blue-900 font-semibold rounded-md px-3">
                  {chat.messages.length} messages
                </Badge>
              </div>

              <div className="text-sm text-slate-600 mb-3">
                Between:
                <span className="font-medium text-blue-900"> {chat.sender_email}</span>
                <span className="text-slate-400">  ↔  </span>
                <span className="font-medium text-blue-900">{chat.receiver_email}</span>
              </div>

              <div className="mt-3 space-y-2 pl-4 border-l-4 border-blue-900/20">
                {chat.messages.slice(0, 2).map((m, index) => (
                  <p
                    key={index}
                    className="text-sm text-slate-700 leading-relaxed bg-blue-50/30 px-3 py-1.5 rounded-md"
                  >
                    {m.message}
                  </p>
                ))}

                {chat.messages.length > 3 && (
                  <p className="text-xs text-slate-500 italic">
                    +{chat.messages.length - 3} more...
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
