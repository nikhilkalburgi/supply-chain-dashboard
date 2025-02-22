import React, { useMemo } from 'react';
import { useDashboardContext } from '../../context/DashboardContext';
import ChartContainer from '../common/ChartContainer';
import './DashboardHome.css'; 
import Loader from '../common/Loader';

const DashboardHome = () => {
  const { state } = useDashboardContext();

  // Calculate key metrics
  const keyMetrics = useMemo(() => {
    const totalAmount = state.data.reduce((sum, item) => sum + item.amount, 0);
    const transactionCount = state.data.length;
    const averageTransaction = totalAmount / transactionCount || 0;
    return { totalAmount, transactionCount, averageTransaction };
  }, [state.data]);

  // Prepare data for the trends chart
  const trendsChartData = useMemo(() => {
    const labels = state.data.map(item => item.date);
    const amounts = state.data.map(item => item.amount);

    return {
      labels,
      datasets: [
        {
          label: 'Procurement Amount Over Time',
          data: amounts,
          borderColor: 'var(--secondary-color)',
          backgroundColor: 'var(--primary-color)',
          fill: true,
        },
      ],
    };
  }, [state.data]);

  // Prepare data for top suppliers/regions
  const topSuppliers = useMemo(() => {
    const supplierTotals = state.data.reduce((acc, item) => {
      acc[item.supplier] = (acc[item.supplier] || 0) + item.amount;
      return acc;
    }, {});

    return Object.entries(supplierTotals)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  }, [state.data]);

  // Prepare data for recent transactions
  const recentTransactions = useMemo(() => {
    return state.data
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  }, [state.data]);

  return (
    <>
      {state.isLoading ? <Loader /> : state.error ? <>Error</> : 
      <div className="dashboard-home">
      <h2>Dashboard Overview</h2>
      <div className="metrics-container">
        <div className="metric-card">
          <p>Total Procurement</p>
          <h3>${keyMetrics.totalAmount.toFixed(2)}</h3>
        </div>
        <div className="metric-card">
          <p>Transactions</p>
          <h3>{keyMetrics.transactionCount}</h3>
        </div>
        <div className="metric-card">
          <p>Average Transaction</p>
          <h3>${keyMetrics.averageTransaction.toFixed(2)}</h3>
        </div>
      </div>
      <div className="charts-container">
        <h3>Trends</h3>
        <div className="chart-item">
          <ChartContainer type="line" data={trendsChartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>
      <div className='last-section'>
        <div className="supplier-item">
          <h3>Top Suppliers</h3>
            <div className="top-suppliers-container">
              {topSuppliers.map(([supplier, amount]) => (
                <div key={supplier} className="supplier-card">
                  <h4>{supplier}</h4>
                  <p>${amount.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        <div className="recent-transactions">
          <h3>Recent Transactions</h3>
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Supplier</th>
                <th>Region</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.supplier}</td>
                  <td>{item.region}</td>
                  <td>${item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div> }
    </>
  );
};

export default DashboardHome;