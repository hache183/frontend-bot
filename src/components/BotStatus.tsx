import React from "react";

interface BotStatusProps {
  status: "OK" | "KO" | "Active" | "Paused";
  mode: "Auto" | "Manual";
  onStart: () => void;
  onStop: () => void;
  onRefresh: () => void;
}

const BotStatus: React.FC<BotStatusProps> = ({ status, mode, onStart, onStop, onRefresh }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow flex flex-col md:flex-row items-center justify-between mb-4">
      <div>
        <h2 className="text-xl font-bold text-white mb-2">Bot Status</h2>
        <p className="text-gray-300">Status: <span className={`font-semibold ${status === "OK" || status === "Active" ? "text-green-400" : "text-red-400"}`}>{status}</span></p>
        <p className="text-gray-300">Mode: <span className="font-semibold text-blue-400">{mode}</span></p>
      </div>
      <div className="flex gap-2 mt-4 md:mt-0">
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded" onClick={onStart}>START</button>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded" onClick={onStop}>STOP</button>
        <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded" onClick={onRefresh}>REFRESH</button>
      </div>
    </div>
  );
};

export default BotStatus;
