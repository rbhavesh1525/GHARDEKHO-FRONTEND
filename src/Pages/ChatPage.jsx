import React, { useState } from "react";
import { Search, MessageCircle } from "lucide-react";

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const conversations = [
    {
      id: 1,
      name: "Aman Rathod",
      message: "Affordable 2BHK for Small Families. Can I schedule a visit?",
      time: "Nov 6, 5:42 PM",
      unread: 1,
    },
    {
      id: 2,
      name: "Property Owner",
      message: "Luxurious 3BHK Apartment with City View. What's the fixed rent?",
      time: "Nov 6, 5:25 PM",
      unread: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-blue-900/5 flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-6xl h-[80vh] bg-white rounded-2xl shadow-xl flex overflow-hidden border border-blue-900/20">

        {/* LEFT PANEL */}
        <div className="w-1/3 border-r border-blue-900/20 flex flex-col bg-white">

          {/* Header */}
          <div className="p-5 border-b border-blue-900/20">
            <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
              <MessageCircle className="text-orange-500 w-6 h-6" />
              Messages
            </h2>
          </div>

          {/* Search Bar */}
          <div className="p-4 border-b border-blue-900/20">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-blue-900/40" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-blue-900/30 
                           focus:outline-none focus:ring-2 focus:ring-orange-500 text-blue-900"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className={`flex items-start gap-3 p-4 cursor-pointer transition-all duration-200 
                  ${
                    selectedChat?.id === chat.id
                      ? "bg-blue-900/10"
                      : "hover:bg-orange-500/10"
                  }`}
              >
                {/* Avatar */}
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-semibold text-sm">
                  {chat.name.charAt(0)}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-blue-900 font-semibold truncate">
                    {chat.name}
                  </h3>
                  <p className="text-gray-600 text-sm truncate">
                    {chat.message}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{chat.time}</p>
                </div>

                {/* Unread Badge */}
                {chat.unread > 0 && (
                  <div className="h-5 w-5 bg-orange-500 text-white text-xs font-semibold flex items-center justify-center rounded-full">
                    {chat.unread}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-600">

          {selectedChat ? (
            <div className="flex flex-col h-full w-full">

              {/* Chat Header */}
              <div className="p-5 border-b border-blue-900/20 flex items-center justify-between bg-blue-900/5">
                <h3 className="font-semibold text-lg text-blue-900">
                  {selectedChat.name}
                </h3>
                <span className="text-sm text-gray-500">{selectedChat.time}</span>
              </div>

              {/* Chat Body */}
              <div className="flex-1 flex items-center justify-center text-gray-400">
                <p>Chat messages will appear here...</p>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-blue-900/20 bg-white">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full px-4 py-2 border border-blue-900/30 rounded-lg 
                             focus:ring-2 focus:ring-orange-500 outline-none text-blue-900"
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="bg-orange-100 text-orange-500 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-10 h-10" />
              </div>
              <h2 className="text-xl font-semibold text-blue-900">Select a conversation</h2>
              <p className="text-gray-500 mt-2">Choose a conversation from the left to start messaging</p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default ChatPage;
