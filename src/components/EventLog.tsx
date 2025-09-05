import React from "react";

interface EventLogProps {
  logs: { type: string; message: string; date: string }[];
}

const EventLog: React.FC<EventLogProps> = ({ logs }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow mb-4 overflow-x-auto">
      <h2 className="text-xl font-bold text-white mb-2">Event & Error Log</h2>
      <table className="min-w-full text-gray-300">
        <thead>
          <tr className="bg-gray-700">
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Message</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, idx) => (
            <tr key={idx} className="border-b border-gray-700">
              <td className="px-4 py-2">{log.type}</td>
              <td className="px-4 py-2">{log.message}</td>
              <td className="px-4 py-2">{log.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventLog;
