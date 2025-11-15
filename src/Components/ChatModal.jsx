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
      
      <div className="bg-white w-[90%] max-w-md rounded-2xl shadow-xl p-6 relative border border-blue-900/20">

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-blue-900 hover:text-orange-500 transition"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <h2 className="text-xl font-bold text-blue-900 mb-2">Contact Owner</h2>
        <p className="text-gray-600 text-sm mb-4">
          Property: <span className="font-semibold text-blue-900">{property.title}</span>
        </p>

        {/* Preset Options */}
        <div className="space-y-2 mb-4">
          {presetMessages.map((text, i) => (
            <button
              key={i}
              onClick={() => setMessage(text)}
              className="w-full text-left px-3 py-2 bg-blue-900/10 hover:bg-blue-900/20 rounded-lg text-sm text-blue-900 font-medium transition"
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
          className="w-full border border-blue-900/30 rounded-lg p-3 text-blue-900 focus:outline-orange-500"
        />

        {/* Send Button */}
        <Button
          onClick={() => {
            onSend(message);
            setMessage("");
            onClose();
          }}
          className="w-full mt-4 bg-blue-900 hover:bg-blue-800 text-white rounded-xl flex items-center justify-center gap-2 py-3 text-[16px]"
        >
          <MessageCircle className="w-5 h-5 text-orange-500" />
          Send Message
        </Button>

      </div>
    </div>
  );
}
