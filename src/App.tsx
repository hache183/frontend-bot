
import React, { useState } from "react";
import BotStatus from "./components/BotStatus";
import ApiConfig from "./components/ApiConfig";
import ActiveOrdersTable, { Order } from "./components/ActiveOrdersTable";
import SignalsSection, { Signal } from "./components/SignalsSection";
import HistoryTable, { HistoryItem } from "./components/HistoryTable";
import PerformanceStats from "./components/PerformanceStats";
import EventLog from "./components/EventLog";
import BackupExport from "./components/BackupExport";
import Notification from "./components/Notification";
import { useBotStatus } from "./hooks/useBotStatus";
import { useApiConfig } from "./hooks/useApiConfig";
import { useNotification } from "./hooks/useNotification";
import "./App.css";

function App() {
  // Demo states, replace with API/WebSocket integration
  const {
    botStatus,
    setBotStatus,
    mode,
    setMode,
    handleStart,
    handleStop,
    handleRefresh,
  } = useBotStatus();
  const {
    apiEnabled,
    setApiEnabled,
    budget,
    setBudget,
    handleToggleApi,
    handleBudgetChange,
  } = useApiConfig();
  const {
    notification,
    showNotification,
    closeNotification,
  } = useNotification();

  const [orders, setOrders] = useState<Order[]>([]);
  const [signals, setSignals] = useState<Signal[]>([]);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [filter, setFilter] = useState("");
  const [pnlData, setPnlData] = useState<number[]>([10, -5, 15, 20, -3]);
  const [winRate, setWinRate] = useState(60);
  const [roi, setRoi] = useState(26.08);
  const [logs, setLogs] = useState<{ type: string; message: string; date: string }[]>([]);

  // Demo handlers using custom hooks
  const handleApproveOrder = (order: Order) => showNotification(`Order for ${order.pair} approved`, "success");
  const handleBackup = () => showNotification("Backup completed", "success");
  const handleExport = () => showNotification("Export completed", "success");

  return (
    <div className="min-h-screen bg-gray-900 text-white p-2 md:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Trading Bot Dashboard</h1>
        <BotStatus status={botStatus} mode={mode} onStart={handleStart} onStop={handleStop} onRefresh={handleRefresh} />
        <ApiConfig apiEnabled={apiEnabled} onToggleApi={handleToggleApi} budget={budget} onBudgetChange={handleBudgetChange} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ActiveOrdersTable orders={orders} onApprove={handleApproveOrder} />
          <SignalsSection signals={signals} />
        </div>
        <HistoryTable history={history} filter={filter} onFilterChange={setFilter} />
        <PerformanceStats pnlData={pnlData} winRate={winRate} roi={roi} />
        <EventLog logs={logs} />
        <BackupExport onBackup={handleBackup} onExport={handleExport} />
        {notification && (
          <Notification message={notification.message} type={notification.type} onClose={closeNotification} />
        )}
      </div>
    </div>
  );
}

export default App;
