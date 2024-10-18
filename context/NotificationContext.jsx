"use client";
import React, { createContext, useState, useContext } from "react";

// Create a context to store notifications
const NotificationContext = createContext();

// Create a provider to wrap your app
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Add a new notification to the list
  const addNotification = (type, message) => {
    const id = Date.now(); // Unique ID for each notification
    setNotifications([...notifications, { id, type, message }]);

    // Auto-remove the notification after a few seconds (e.g., 5 seconds)
    setTimeout(() => {
      removeNotification(id);
    }, 5000); // 5 seconds timeout
  };

  // Remove a notification by its ID
  const removeNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

// Custom hook to use the notification context
export const useNotification = () => {
  return useContext(NotificationContext);
};
