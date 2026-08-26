import React from "react";

export default function AvartaComponent({ src, alt, size = 50 }) {
  const sizeStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };
  const avartaStyle = "rounded-full object-cover";
  return (
    <>
      <img src={src} alt={alt} style={sizeStyle} className={avartaStyle} />
    </>
  );
}
