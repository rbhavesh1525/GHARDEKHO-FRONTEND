import React from "react";
import { X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChatModal({ open, onClose, property, onSend }) {
  if (!open) return null;

  const presetMessages = [
    "What is the fixed rent?",
    "Can I schedule a visit?",
    "Is the price negotiable?",
    "Is this property still available?"
  ];

  const [message, setMessage] = React.useState("");

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      
      <div className="bg-white w-[90%] max-w-md rounded-2xl shadow-xl p-6 relative">

        {/* Close Button */}
        <button 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <h2 className="text-xl font-bold mb-2">Contact Owner</h2>
        <p className="text-gray-500 text-sm mb-4">
          Property: <span className="font-semibold">{property.title}</span>
        </p>

        {/* Preset Options */}
        <div className="space-y-2 mb-4">
          {presetMessages.map((text, i) => (
            <button
              key={i}
              onClick={() => setMessage(text)}
              className="w-full text-left px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
            >
              {text}
            </button>
          ))}
        </div>

        {/* Input Box */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="Type your message..."
          className="w-full border rounded-lg p-3 focus:outline-blue-600"
        />

        {/* Send Button */}
        <Button
          onClick={() => {
            onSend(message);
            setMessage("");
            onClose();
          }}
          className="w-full mt-4 bg-blue-900 hover:bg-blue-800 text-white rounded-xl flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Send Message
        </Button>
      </div>
    </div>
  );
}
