"use client";
import React from "react";
import { useNotification } from "../context/NotificationContext";

const NotificationDisplay = () => {
  const { notifications } = useNotification();

  return (
    <div className="notification-wrapper">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className={`notification notification-${notif.type}`}
        >
          {notif.message}
        </div>
      ))}
    </div>
  );
};

export default NotificationDisplay;
