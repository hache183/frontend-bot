import React, { useMemo, useCallback } from "react";

export interface Order {
  pair: string;
  invested: number;
  qty: number;
  stopLoss: number;
  takeProfit: number;
  exchangeOrders: number;
  estGain: number;
  manualApproval?: boolean;
}

interface ActiveOrdersTableProps {
  orders: Order[];
  onApprove: (order: Order) => void;
}


const ActiveOrdersTable: React.FC<ActiveOrdersTableProps> = React.memo(({ orders, onApprove }) => {
  const handleApprove = useCallback(
    (order: Order) => {
      onApprove(order);
    },
    [onApprove]
  );

  const rows = useMemo(() =>
    orders.map((order, idx) => (
      <tr key={idx} className="border-b border-gray-700">
        <td className="px-4 py-2">{order.pair}</td>
        <td className="px-4 py-2">{order.invested}</td>
        <td className="px-4 py-2">{order.qty}</td>
        <td className="px-4 py-2">{order.stopLoss}</td>
        <td className="px-4 py-2">{order.takeProfit}</td>
        <td className="px-4 py-2">{order.exchangeOrders}</td>
        <td className="px-4 py-2">{order.estGain}%</td>
        <td className="px-4 py-2">
          {order.manualApproval ? (
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded" onClick={() => handleApprove(order)}>
              Approve
            </button>
          ) : (
            <span className="text-green-400">Auto</span>
          )}
        </td>
      </tr>
    ))
  , [orders, handleApprove]);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow mb-4 overflow-x-auto">
      <h2 className="text-xl font-bold text-white mb-2">Active Orders</h2>
      <table className="min-w-full text-gray-300">
        <thead>
          <tr className="bg-gray-700">
            <th className="px-4 py-2">Pair</th>
            <th className="px-4 py-2">Invested</th>
            <th className="px-4 py-2">Qty</th>
            <th className="px-4 py-2">Stop Loss</th>
            <th className="px-4 py-2">Take Profit</th>
            <th className="px-4 py-2">#Exchange Orders</th>
            <th className="px-4 py-2">Est. Gain</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
});

export default ActiveOrdersTable;
