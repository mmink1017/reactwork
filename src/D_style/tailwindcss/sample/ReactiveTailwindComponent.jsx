import React, { useState } from "react";

export default function ReactiveTailwindComponent() {
  //   const active = true;
  const [active, setActive] = useState(false);

  const colorMap = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
  };

  return (
    <>
      <h3 className="font-semibold">반응형 (grid-cols)</h3>
      <div className="my-2 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {["red", "blue", "green"].map((c) => (
          <div
            key={c}
            className={`${colorMap[c]} rounded p-3 text-center text-white`}
          >
            {c}
          </div>
        ))}
        <div className="rounded bg-gray-700 p-3 text-center text-white">
          sm:2열 lg:4열
        </div>
      </div>

      <h3 className="mt-4 font-semibold">조건부 클래스 — clsx</h3>
      <button
        onClick={() => {
          setActive((pre) => {
            return !pre;
          });
        }}
        className={clsx(
          "rounded px-4 py-2 text-sm font-semibold transition-colors", // 공통
          active ? "bg-blue-300 text-white" : "bg-gray-200 text-gray-700", // 조건부
        )}
      >
        {active ? "활성 상태" : "비활성 상태"} (클릭해서 토글)
      </button>

      <h3 className="mt-4 font-semibold">variant 패턴 — 재사용 Button</h3>
      <div className="flex flex-wrap items-center gap-2">
        <Button>기본(primary)</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="danger" size="sm">
          danger/sm
        </Button>
        <Button variant="primary" size="lg" onClick={() => alert("클릭!")}>
          primary/lg
        </Button>
        <Button variant="danger" size="lg" disabled={true}>
          primary/lg
        </Button>
      </div>
    </>
  );
}

const variantClass = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const sizeClass = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...rest
}) {
  return (
    <button
      className={clsx(
        "rounded-md font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        variantClass[variant],
        sizeClass[size],
        className, // 사용처에서 추가 클래스를 덧붙일 수 있게
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
