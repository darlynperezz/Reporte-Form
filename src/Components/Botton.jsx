import React from "react";

export const Botton = ({ children, ...props }) => {
  return (
    <button
      className="mx-auto flex justify-center left-38.5 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-altice-light transition"
      {...props}
    >
      {children}
    </button>
  );
};
