import React from "react";

interface BackupExportProps {
  onBackup: () => void;
  onExport: () => void;
}

const BackupExport: React.FC<BackupExportProps> = ({ onBackup, onExport }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow mb-4 flex gap-4 items-center justify-between">
      <h2 className="text-xl font-bold text-white">Backup & Export</h2>
      <div className="flex gap-2">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded" onClick={onBackup}>Backup Data</button>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded" onClick={onExport}>Export Data</button>
      </div>
    </div>
  );
};

export default BackupExport;
