import React from "react";
import clsx from "clsx";
export default function ButtonComponent({
  type,
  size = "small",
  isOutline = false,
  clickHandler = (e) => {
    alert("함수를 설정하세요");
  },
  disabled = false,
  children,
}) {
  const baseClass = clsx("font-bold", "rounded-md", "px-2", "py-2", "border");
  const typeClass = {
    primary: isOutline
      ? clsx(
          "border-blue-500",
          "text-blue-500",
          "hover:bg-blue-500",
          "hover:text-white",
          "active:text-white",
        )
      : clsx(
          "bg-blue-500",
          "text-white",
          "hover:bg-blue-600",
          "active:bg-blue-900",
        ),
    secondary: clsx(
      "bg-green-500",
      "text-white",
      "hover:bg-green-600",
      "active:bg-green-900",
    ),
    warn: clsx(
      "bg-yellow-500",
      "text-white",
      "hover:bg-yellow-600",
      "active:bg-yellow-900",
    ),
    danger: clsx(
      "bg-red-500",
      "text-white",
      "hover:bg-red-600",
      "active:bg-red-900",
    ),
    muted: clsx(
      "bg-gray-500",
      "text-white",
      "hover:bg-gray-600",
      "active:bg-gray-900",
    ),
  };
  const sizeClass = {
    small: clsx("px-1", "py-1", "text-sm"),
    medium: clsx("px-4", "py-2"),
    large: clsx("px-6", "py-2", "text-lg"),
  };
  return (
    <button
      className={`${baseClass} ${typeClass[disabled ? "muted" : type]} ${sizeClass[size]}`}
      onClick={clickHandler}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
