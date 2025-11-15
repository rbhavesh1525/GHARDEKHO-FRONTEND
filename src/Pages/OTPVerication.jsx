import React, { useState, useRef } from "react";
import { X } from "lucide-react";

export default function OTPVerification({
  open,
  onClose,
  mobile,
  onVerify,
  onResend,
  onChangeNumber,
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  if (!open) return null;

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length === 6) {
      onVerify(code);
    } else {
      alert("Please enter complete 6-digit OTP");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">

      {/* Modal Card */}
      <div className="relative bg-white p-8 rounded-2xl w-[90%] max-w-sm border border-blue-900/20 shadow-2xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-blue-900 cursor-pointer"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Heading */}
        <h1 className="text-center text-2xl font-bold text-blue-900 mb-2">
          OTP Verification
        </h1>

        <p className="text-center text-gray-600 mb-6 text-sm leading-relaxed">
          OTP sent to <strong className="text-blue-900">{mobile}</strong> <br />
          Enter the 6-digit OTP below.
        </p>

        {/* OTP Boxes */}
        <div className="flex justify-between mb-8">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              type="text"
              maxLength="1"
              value={otp[i]}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-12 h-12 border border-blue-900/40 rounded-lg text-center text-xl font-bold 
              focus:ring-2 focus:ring-blue-900 outline-none shadow-sm"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-md text-[15px] font-semibold shadow-md cursor-pointer"
        >
          Verify OTP
        </button>

        {/* Resend OTP */}
        <div className="text-center mt-4 text-sm">
          <span className="text-gray-600">
            Didn’t receive OTP?{" "}
            <span
              onClick={onResend}
              className="text-orange-500 hover:text-orange-600 font-semibold cursor-pointer"
            >
              Resend
            </span>
          </span>
        </div>

        {/* Change Number */}
        <div className="text-center mt-2 text-sm">
          <span className="text-gray-600">
            Wrong number?{" "}
            <span
              onClick={onChangeNumber}
              className="text-red-600 hover:text-red-700 font-semibold cursor-pointer"
            >
              Change Number
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
