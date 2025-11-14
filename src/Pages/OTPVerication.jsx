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
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999] p-4">

      {/* White Modal Card */}
      <div className="relative bg-white p-8 rounded-2xl w-[90%] max-w-sm border border-gray-200 shadow-xl">

        {/* Close Button INSIDE modal */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black cursor-pointer"
        >
          <X className="h-6 w-6" />
        </button>

        <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">
          OTP Verification
        </h1>

        <p className="text-center text-gray-600 mb-6 text-sm leading-relaxed">
          OTP has been sent to <strong>{mobile}</strong> <br />
          Please enter the 6-digit OTP to continue.
        </p>

        {/* OTP Inputs */}
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
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl font-semibold shadow-sm 
              focus:ring-2 focus:ring-blue-500 outline-none"
            />
          ))}
        </div>

        {/* Verify button */}
        <button
          onClick={handleVerify}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold cursor-pointer shadow-md"
        >
          Verify OTP
        </button>

        {/* Resend OTP */}
        <div className="text-center mt-4 text-sm">
          <span className="text-gray-600">
            Didn’t receive OTP?{" "}
            <span
              onClick={onResend}
              className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
            >
              Resend
            </span>
          </span>
        </div>

        {/* Change Number */}
        <div className="text-center mt-2 text-sm">
          <span className="text-gray-600">
            Entered wrong number?{" "}
            <span
              onClick={onChangeNumber}
              className="text-red-500 hover:text-red-600 font-medium cursor-pointer"
            >
              Change Number
            </span>
          </span>
        </div>

      </div>
    </div>
  );
}
