import React from "react";

export default function TextComponent({ size, variant, children }) {
  const variantClass = {
    title: "text-black font-bold",
    content: "text-black",
    muted: "text-gray-300",
  };
  const sizeClass = {
    small: "text-sm",
    medium: "p-2 text-lg",
    large: "p-4 text-2xl",
  };
  return (
    <div>
      <h2 className={`${variantClass[variant]} ${sizeClass[size]}`}>
        {children}
      </h2>
    </div>
  );
}
