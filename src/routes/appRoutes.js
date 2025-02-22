import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardHome from '../components/dashboard/DashboardHome';
import Anomalies from '../components/dashboard/Anomalies';
import DataInsights from '../components/dashboard/DataInsights';

const AppRoutes = () => (
  <Routes>
    <Route path="/supply-chain-dashboard" element={<DashboardHome />} />
    <Route path="/supply-chain-dashboard/anomalies" element={<Anomalies />} />
    <Route path="/supply-chain-dashboard/data-insights" element={<DataInsights />} />
  </Routes>
);

export default AppRoutes;