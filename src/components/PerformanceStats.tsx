import React from "react";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

interface PerformanceStatsProps {
  pnlData: number[];
  winRate: number;
  roi: number;
}

const PerformanceStats: React.FC<PerformanceStatsProps> = ({ pnlData, winRate, roi }) => {
  const data = {
    labels: pnlData.map((_, i) => `Trade ${i + 1}`),
    datasets: [
      {
        label: "P&L",
        data: pnlData,
        borderColor: "#10b981",
        backgroundColor: "rgba(16,185,129,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow mb-4">
      <h2 className="text-xl font-bold text-white mb-2">Performance Statistics</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="bg-gray-700 p-4 rounded text-white flex-1">
          <div className="font-semibold">Win Rate</div>
          <div className="text-2xl">{winRate}%</div>
        </div>
        <div className="bg-gray-700 p-4 rounded text-white flex-1">
          <div className="font-semibold">ROI</div>
          <div className="text-2xl">{roi}%</div>
        </div>
      </div>
      <Line data={data} />
    </div>
  );
};

export default PerformanceStats;
