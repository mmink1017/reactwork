import clsx from "clsx";


export const cardContainerStyle = (extraClass = "") =>
  clsx(
    "p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4",
    extraClass
  );

export const subCardStyle = (extraClass = "") =>
  clsx(
    "p-4 bg-slate-50 rounded-lg border border-slate-200",
    extraClass
  );

export const stepBadgeStyle = (color = "indigo") => {
  const colorMap = {
    indigo: "bg-indigo-100 text-indigo-800",
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
    emerald: "bg-emerald-100 text-emerald-800",
    rose: "bg-rose-100 text-rose-800",
    amber: "bg-amber-100 text-amber-800",
    teal: "bg-teal-100 text-teal-800",
  };

  return clsx(
    "px-2 py-0.5 text-xs font-bold rounded",
    colorMap[color] || colorMap.indigo
  );
};

export const sectionTitleStyle = "text-xl font-bold text-slate-800";

export const sectionDescStyle = "text-sm text-slate-600 mt-1";

export const buttonStyle = ({
  variant = "primary",
  active = false,
  extraClass = "",
} = {}) => {
  const base =
    "px-3.5 py-2 text-xs font-semibold rounded-lg shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary: active
      ? "bg-slate-800 text-white"
      : "bg-indigo-600 hover:bg-indigo-700 text-white disabled:bg-indigo-300",

    teal: active
      ? "bg-slate-800 text-white"
      : "bg-teal-600 hover:bg-teal-700 text-white disabled:bg-teal-300",

    emerald: active
      ? "bg-slate-800 text-white"
      : "bg-emerald-600 hover:bg-emerald-700 text-white",

    amber: active
      ? "bg-slate-800 text-white"
      : "bg-amber-600 hover:bg-amber-700 text-white",

    rose: active
      ? "bg-rose-900 text-white"
      : "bg-rose-600 hover:bg-rose-700 text-white",

    neutral: "bg-slate-100 hover:bg-slate-200 text-slate-700",

    dark: "bg-slate-700 hover:bg-slate-800 text-white",
  };

  return clsx(base, variants[variant] || variants.primary, extraClass);
};

export const infoBoxStyle = (extraClass = "") =>
  clsx(
    "p-3.5 bg-indigo-50/70 rounded-lg border border-indigo-100 text-xs text-indigo-950",
    extraClass
  );

export const consoleBoxStyle = (extraClass = "") =>
  clsx(
    "p-3 bg-slate-900 text-slate-200 rounded-lg text-xs font-mono space-y-1",
    extraClass
  );

export const alertErrorBoxStyle = (extraClass = "") =>
  clsx(
    "p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 space-y-3",
    extraClass
  );

export const inputStyle = (extraClass = "") =>
  clsx(
    "p-2 text-xs bg-white border border-slate-300 rounded focus:outline-hidden focus:ring-2 focus:ring-indigo-500",
    extraClass
  );

export const skeletonBoxStyle = (extraClass = "") =>
  clsx(
    "p-6 bg-slate-100/80 border border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center gap-3 animate-pulse",
    extraClass
  );

export const tabButtonStyle = (isActive) =>
  clsx(
    "px-3 py-1.5 rounded-lg transition text-xs font-medium cursor-pointer",
    isActive
      ? "bg-white text-indigo-900 font-bold shadow-xs"
      : "bg-white/10 hover:bg-white/20 text-white"
  );
