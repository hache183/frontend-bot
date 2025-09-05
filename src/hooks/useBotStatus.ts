import { useState, useCallback } from "react";

export function useBotStatus(initialStatus: "OK" | "KO" | "Active" | "Paused" = "Active") {
  const [botStatus, setBotStatus] = useState(initialStatus);
  const [mode, setMode] = useState<"Auto" | "Manual">("Auto");

  const handleStart = useCallback(() => setBotStatus("Active"), []);
  const handleStop = useCallback(() => setBotStatus("Paused"), []);
  const handleRefresh = useCallback(() => {}, []);

  return {
    botStatus,
    setBotStatus,
    mode,
    setMode,
    handleStart,
    handleStop,
    handleRefresh,
  };
}
