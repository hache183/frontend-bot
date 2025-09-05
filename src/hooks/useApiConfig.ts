import { useState, useCallback } from "react";

export function useApiConfig(initialEnabled = true, initialBudget = 1000) {
  const [apiEnabled, setApiEnabled] = useState(initialEnabled);
  const [budget, setBudget] = useState(initialBudget);

  const handleToggleApi = useCallback(() => setApiEnabled((v) => !v), []);
  const handleBudgetChange = useCallback((value: number) => setBudget(value), []);

  return {
    apiEnabled,
    setApiEnabled,
    budget,
    setBudget,
    handleToggleApi,
    handleBudgetChange,
  };
}
