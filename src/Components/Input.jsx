import React from "react";

export const Input = ({ label, id, className = '', ...props }) => {
  return (
    <div className="mb-6 w-full max-w-md mx-auto">
      <label 
        htmlFor={id} 
        className="block mb-2 text-gray-800 font-semibold text-lg"
      >
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-4 py-3 text-gray-700 font-semibold tracking-wide placeholder-gray-400 border border-gray-300 rounded-xl shadow-sm transition focus:outline-none focus:ring-3 focus:ring-blue-300 focus:border-blue-500
          ${className}
        `}
        {...props}
      />
    </div>
  );
};
