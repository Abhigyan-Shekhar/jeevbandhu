import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Building2, Users, Bug, CheckSquare, BarChart3, User, Settings, Bell } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { notifications as mockNotifications } from '../data/mockData';

const Layout = ({ children }) => {
  const { t } = useApp();
  const location = useLocation();
  const unreadCount = mockNotifications.filter(n => !n.read).length;

  const navItems = [
    { path: '/', icon: Home, label: t('home') },
    { path: '/farm', icon: Building2, label: t('myFarm') },
    { path: '/community', icon: Users, label: t('community') },
    { path: '/diseases', icon: Bug, label: t('diseases') },
    { path: '/compliance', icon: CheckSquare, label: t('compliance') },
    { path: '/analytics', icon: BarChart3, label: t('analytics') },
    { path: '/profile', icon: User, label: t('profile') },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-green-600">{t('appName')}</h1>
        </div>
        <nav className="mt-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                  isActive ? 'bg-green-50 border-r-4 border-green-600' : ''
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            {navItems.find(item => item.path === location.pathname)?.label || 'Jeevbandhu'}
          </h2>
          <div className="flex items-center space-x-4">
            <Link to="/notifications" className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              {unreadCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {unreadCount}
                </span>
              )}
            </Link>
            <Link to="/settings">
              <Settings className="w-6 h-6 text-gray-600" />
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;