import React from "react";

interface ApiConfigProps {
  apiEnabled: boolean;
  onToggleApi: () => void;
  budget: number;
  onBudgetChange: (value: number) => void;
}

const ApiConfig: React.FC<ApiConfigProps> = ({ apiEnabled, onToggleApi, budget, onBudgetChange }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow mb-4 flex flex-col md:flex-row items-center justify-between">
      <div>
        <h2 className="text-xl font-bold text-white mb-2">API & Budget Configuration</h2>
        <label className="flex items-center gap-2 text-gray-300">
          <input type="checkbox" checked={apiEnabled} onChange={onToggleApi} className="form-checkbox h-5 w-5 text-blue-600" />
          Enable API Key
        </label>
      </div>
      <div className="mt-4 md:mt-0 flex items-center gap-2">
        <label className="text-gray-300 font-semibold">Budget:</label>
        <input type="number" value={budget} onChange={e => onBudgetChange(Number(e.target.value))} className="bg-gray-700 text-white px-2 py-1 rounded w-24" min={0} />
      </div>
    </div>
  );
};

export default ApiConfig;
