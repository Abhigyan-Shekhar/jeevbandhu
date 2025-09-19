import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Farm from './pages/Farm';
import Community from './pages/Community';
import Diseases from './pages/Diseases';
import Compliance from './pages/Compliance';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/farm" element={<Farm />} />
            <Route path="/community" element={<Community />} />
            <Route path="/diseases" element={<Diseases />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;