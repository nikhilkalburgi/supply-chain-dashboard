import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../components/common/Loader';

// Lazy loading components
const DashboardHome = lazy(() => import('../components/dashboard/DashboardHome'));
const Anomalies = lazy(() => import('../components/dashboard/Anomalies'));
const DataInsights = lazy(() => import('../components/dashboard/DataInsights'));

const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/supply-chain-dashboard" element={<DashboardHome />} />
      <Route path="/supply-chain-dashboard/anomalies" element={<Anomalies />} />
      <Route path="/supply-chain-dashboard/data-insights" element={<DataInsights />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
