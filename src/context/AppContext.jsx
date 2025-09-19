import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/mockData';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [farmType, setFarmType] = useState('pig');
  const [notifications, setNotifications] = useState([]);
  const [offlineData, setOfflineData] = useState([]);

  const t = (key) => translations[language][key] || key;

  // Simulate offline data storage
  useEffect(() => {
    const stored = localStorage.getItem('offlineData');
    if (stored) {
      setOfflineData(JSON.parse(stored));
    }
  }, []);

  const saveOfflineData = (data) => {
    const newData = [...offlineData, { ...data, timestamp: new Date().toISOString(), synced: false }];
    setOfflineData(newData);
    localStorage.setItem('offlineData', JSON.stringify(newData));
  };

  const syncOfflineData = () => {
    // Simulate syncing
    const synced = offlineData.map(item => ({ ...item, synced: true }));
    setOfflineData(synced);
    localStorage.setItem('offlineData', JSON.stringify(synced));
    return synced.length;
  };

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      farmType,
      setFarmType,
      t,
      notifications,
      setNotifications,
      offlineData,
      saveOfflineData,
      syncOfflineData
    }}>
      {children}
    </AppContext.Provider>
  );
};