import React from "react";

export interface Signal {
  pair: string;
  status: "Active" | "Pending" | "Missed" | "Refused" | "Closed";
  takeProfitStatus: "Closed" | "Stop Loss";
  orderStatus: "Active" | "Pending" | "Closed";
  targets: number[];
  stopLoss: number;
  riskReward: string;
  roi: string;
  riskPercent: string;
  duration: string;
  confidence: string;
}

interface SignalsSectionProps {
  signals: Signal[];
}

const SignalsSection: React.FC<SignalsSectionProps> = ({ signals }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow mb-4 overflow-x-auto">
      <h2 className="text-xl font-bold text-white mb-2">Signals</h2>
      <table className="min-w-full text-gray-300">
        <thead>
          <tr className="bg-gray-700">
            <th className="px-4 py-2">Pair</th>
            <th className="px-4 py-2">Signal Status</th>
            <th className="px-4 py-2">Take Profit Status</th>
            <th className="px-4 py-2">Order Status</th>
            <th className="px-4 py-2">Targets</th>
            <th className="px-4 py-2">Stop Loss</th>
            <th className="px-4 py-2">Risk/Reward</th>
            <th className="px-4 py-2">ROI</th>
            <th className="px-4 py-2">Risk %</th>
            <th className="px-4 py-2">Duration</th>
            <th className="px-4 py-2">Confidence</th>
          </tr>
        </thead>
        <tbody>
          {signals.map((signal, idx) => (
            <tr key={idx} className="border-b border-gray-700">
              <td className="px-4 py-2">{signal.pair}</td>
              <td className="px-4 py-2">{signal.status}</td>
              <td className="px-4 py-2">{signal.takeProfitStatus}</td>
              <td className="px-4 py-2">{signal.orderStatus}</td>
              <td className="px-4 py-2">{signal.targets.join(", ")}</td>
              <td className="px-4 py-2">{signal.stopLoss}</td>
              <td className="px-4 py-2">{signal.riskReward}</td>
              <td className="px-4 py-2">{signal.roi}</td>
              <td className="px-4 py-2">{signal.riskPercent}</td>
              <td className="px-4 py-2">{signal.duration}</td>
              <td className="px-4 py-2">{signal.confidence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SignalsSection;
