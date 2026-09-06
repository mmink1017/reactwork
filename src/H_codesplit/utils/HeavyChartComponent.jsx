import React, { useEffect, useRef } from "react";

import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  BarController,
} from "chart.js";

import { stepBadgeStyle, subCardStyle } from "./commonclass";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

export default function HeavyChartComponent() {
  const canvasRef = useRef(null);

  const chartInstance = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = canvasRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["1월", "2월", "3월", "4월", "5월", "6월"],
        datasets: [
          {
            label: "코드 분할 적용 전 (번들 용량 KB)",
            data: [1200, 1350, 1400, 1550, 1600, 1800],
            backgroundColor: "rgba(239, 68, 68, 0.7)",
            borderColor: "rgba(239, 68, 68, 1)",
            borderWidth: 1,
            borderRadius: 6,
          },
          {
            label: "코드 분할 적용 후 (초기 번들 용량 KB)",
            data: [350, 360, 380, 390, 410, 420],
            backgroundColor: "rgba(59, 130, 246, 0.7)",
            borderColor: "rgba(59, 130, 246, 1)",
            borderWidth: 1,
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              font: { size: 12, family: "sans-serif" },
            },
          },
          tooltip: {
            callbacks: {
              label: (context) =>
                ` ${context.dataset.label}: ${context.raw} KB`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "번들 크기 (KB)",
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="p-4 bg-white rounded-xl shadow-md border border-slate-200">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-emerald-500"></span>
            무거운 차트 컴포넌트 (Lazy Loaded)
          </h4>
        </div>
      </div>

      <div className="h-64 w-full relative">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}
