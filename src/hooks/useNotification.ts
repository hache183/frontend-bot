import { useState, useCallback } from "react";

export type NotificationType = "success" | "error" | "info";
export interface NotificationState {
  message: string;
  type?: NotificationType;
}

export function useNotification() {
  const [notification, setNotification] = useState<NotificationState | null>(null);

  const showNotification = useCallback((message: string, type?: NotificationType) => {
    setNotification({ message, type });
  }, []);

  const closeNotification = useCallback(() => setNotification(null), []);

  return {
    notification,
    showNotification,
    closeNotification,
  };
}
