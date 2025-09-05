import React from "react";

interface NotificationProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type = "info", onClose }) => {
  const bgColor = type === "success" ? "bg-green-600" : type === "error" ? "bg-red-600" : "bg-blue-600";
  return (
    <div className={`fixed top-4 right-4 z-50 ${bgColor} text-white px-4 py-2 rounded shadow-lg flex items-center gap-2`}>
      <span>{message}</span>
      <button className="ml-2 text-white font-bold" onClick={onClose}>×</button>
    </div>
  );
};

export default Notification;
