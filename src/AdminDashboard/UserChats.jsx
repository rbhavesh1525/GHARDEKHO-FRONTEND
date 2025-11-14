import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export default function UserChats({ data = [], loading = false }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">All User Chats</h2>
        <span className="text-sm text-slate-500">Total: {data.length}</span>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1,2,3].map(n => <Skeleton key={n} className="h-24 w-full" />)}
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((chat, i) => (
            <div key={i} className="p-4 border rounded-xl hover:bg-slate-50 transition">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">{chat.property_title}</h3>
                <Badge>{chat.messages.length} messages</Badge>
              </div>

              <div className="text-sm text-slate-600">
                Between:  
                <span className="font-medium"> {chat.sender_email}</span>
                <span className="text-slate-400">  ↔  </span>
                <span className="font-medium">{chat.receiver_email}</span>
              </div>

              <div className="mt-3 space-y-2 pl-4 border-l">
                {chat.messages.slice(0, 2).map((m, index) => (
                  <p key={index} className="text-sm text-slate-700">{m.message}</p>
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
