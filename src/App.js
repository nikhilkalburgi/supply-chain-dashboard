/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DashboardProvider } from './context/DashboardContext';
import { useAuthContext } from './context/AuthContext';
import { Layout } from './components/layout/Layout';
import Login from './components/common/Auth';
import AppRoutes from './routes/appRoutes';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a Query Client
const queryClient = new QueryClient();

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useAuthContext(); 

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <DashboardProvider>
          {isAuthenticated ? 
            <Layout>
              <AppRoutes />
            </Layout>
          : 
            <Login />
          }
        </DashboardProvider>
      </Router>
    </QueryClientProvider>
  );
};

export default App;