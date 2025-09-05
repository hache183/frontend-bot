import React from "react";

export interface HistoryItem {
  pair: string;
  invested: number;
  qty: number;
  stopLoss: number;
  takeProfit: number;
  result: "Win" | "Loss" | "Closed";
  pnl: number;
  date: string;
}

interface HistoryTableProps {
  history: HistoryItem[];
  filter: string;
  onFilterChange: (value: string) => void;
}

const HistoryTable: React.FC<HistoryTableProps> = ({ history, filter, onFilterChange }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow mb-4 overflow-x-auto">
      <h2 className="text-xl font-bold text-white mb-2">Order History</h2>
      <div className="mb-2 flex gap-2 items-center">
        <label className="text-gray-300">Filter:</label>
        <input type="text" value={filter} onChange={e => onFilterChange(e.target.value)} className="bg-gray-700 text-white px-2 py-1 rounded w-32" placeholder="Pair or Result" />
      </div>
      <table className="min-w-full text-gray-300">
        <thead>
          <tr className="bg-gray-700">
            <th className="px-4 py-2">Pair</th>
            <th className="px-4 py-2">Invested</th>
            <th className="px-4 py-2">Qty</th>
            <th className="px-4 py-2">Stop Loss</th>
            <th className="px-4 py-2">Take Profit</th>
            <th className="px-4 py-2">Result</th>
            <th className="px-4 py-2">P&L</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {history.filter(h => h.pair.includes(filter) || h.result.includes(filter)).map((item, idx) => (
            <tr key={idx} className="border-b border-gray-700">
              <td className="px-4 py-2">{item.pair}</td>
              <td className="px-4 py-2">{item.invested}</td>
              <td className="px-4 py-2">{item.qty}</td>
              <td className="px-4 py-2">{item.stopLoss}</td>
              <td className="px-4 py-2">{item.takeProfit}</td>
              <td className="px-4 py-2">{item.result}</td>
              <td className="px-4 py-2">{item.pnl}</td>
              <td className="px-4 py-2">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
