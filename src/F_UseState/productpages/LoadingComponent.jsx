import React from "react";

const LoadingComponent = ({
  color = "text-blue-500",
  text = "로딩 중입니다...",
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-white/80">
      {/* 회전하는 원 */}
      <div
        className={`w-12 h-12 border-4 border-gray-200 border-t-current rounded-full animate-spin ${color}`}
      />
      {/* 안내 문구 */}
      <p className={`mt-4 text-sm font-semibold ${color}`}>{text}</p>
    </div>
  );
};

export default LoadingComponent;
