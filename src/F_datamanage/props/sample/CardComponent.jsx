import React from "react";
import clsx from "clsx";
export default function CardComponent({
  title,
  imgSrc,
  highlight = false,
  children,
}) {
  const baseStyle = clsx(
    "bg-white",
    "rounded-lg",
    "shadow-md",
    "overflow-hidden",
    "transition-all",
    "duration-300",
    "hover:shadow-xl",
  );
  const highlightStyle = "border-2 border-bule-500 shadow-blue-500/20";
  const cardCss = clsx(
    baseStyle,
    `${highlight ? highlightStyle : "border-black"}`,
  );
  return (
    <div className={cardCss}>
      {imgSrc && (
        <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <p className="text-xl font-bold mb-2">{title}</p>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
}
