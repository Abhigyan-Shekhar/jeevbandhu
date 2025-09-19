import React, { useState } from 'react';
import { notifications as mockNotifications } from '../data/mockData';
import { Bell, AlertCircle, Syringe, Users, X } from 'lucide-react';

const Notifications = () => {
  const [notifications, setNotifications] = useState(mockNotifications);

  const getIcon = (type) => {
    switch (type) {
      case 'vaccination':
        return <Syringe className="w-5 h-5 text-blue-600" />;
      case 'alert':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'community':
        return <Users className="w-5 h-5 text-green-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Notifications</h2>
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
            {unreadCount} unread
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={`bg-white rounded-lg shadow p-4 flex items-start ${
              !notification.read ? 'border-l-4 border-blue-600' : ''
            }`}
          >
            <div className="mr-4">{getIcon(notification.type)}</div>
            <div className="flex-1">
              <p className={`${!notification.read ? 'font-semibold' : ''}`}>
                {notification.message}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(notification.timestamp).toLocaleString()}
              </p>
            </div>
            <div className="flex space-x-2">
              {!notification.read && (
                <button
                  onClick={() => markAsRead(notification.id)}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Mark read
                </button>
              )}
              <button
                onClick={() => deleteNotification(notification.id)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No notifications</p>
        </div>
      )}
    </div>
  );
};

export default Notifications;