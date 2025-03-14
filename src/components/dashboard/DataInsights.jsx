/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react';
import ChartContainer from '../common/ChartContainer';
import { useDashboardContext } from '../../context/DashboardContext';
import { Sidebar } from '../layout/Sidebar';
import './DataInsights.css'; 
import Loader from '../common/Loader';
import PivotTable from '../common/DataTable';
import ErrorMessage from '../common/Error';

const DataInsights = () => {
  const defaultFilters = {
    dateRange: ['2023-01-01', '2023-01-30'],
    region: 'All',
    supplier: 'All',
    amountRange: { min: '', max: '' },
    dimension: 'region'
  };

  const [filters, setFilters] = useState(defaultFilters);
  const { state, dispatch } = useDashboardContext();
  const [show, setShow] = useState(0);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  useEffect(() => {
    if(show === 1) {
      setShow(2)
    }
  }, [state])

  const onChange = (isStart, value) => {
    let temp = Array.from(filters.dateRange);
    if(isStart) {
      temp[0] = value;
    } else {
      temp[1] = value;
    }
    setFilters(prev => ({ ...prev, dateRange: temp }))
  }

  useEffect(() => {
    dispatch({ type: "FETCH_DATA", payload: filters });
    if(show === 0)
      setShow(1);
  }, [filters, dispatch]);

  // Prepare data for the bar chart (aggregated insights)
  const barChartData = useMemo(() => {
    const dimensionTotals = state.data.reduce((acc, item) => {
      const key = item[filters.dimension];
      acc[key] = (acc[key] || 0) + item.amount;
      return acc;
    }, {});

    return {
      labels: Object.keys(dimensionTotals),
      datasets: [
        {
          label: `Total Procurement by ${filters.dimension.charAt(0).toUpperCase() + filters.dimension.slice(1)}`,
          data: Object.values(dimensionTotals),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        },
      ],
    };
  }, [state.data, filters.dimension]);

  return (
    <>
      {state.isLoading || show !== 2 ? <Loader /> : state.error ? <ErrorMessage message={'Service Unavailable!'} /> : 
      <div className="data-insights-page">
        <Sidebar
          AnomaliesFilters={null}
          dataInsightsFilters={{onChange, startDate: filters.dateRange[0], endDate: filters.dateRange[1], region: filters.region, setSelectedRegion: (region) => updateFilters({ region }), amountRange: filters.amountRange, setAmountRange: (range) => updateFilters({ amountRange: range }), selectedDimension: filters.dimension, setSelectedDimension: (dimension) => updateFilters({ dimension })}}
          DashboardHomeFilters={null}
        />
        <div className="data-insights-content">
          <h2>Data Insights</h2>
          <div className="chart-container">
            <ChartContainer
              type="bar"
              data={barChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false
              }}
            />
          </div>
          <h3>Detailed Overview</h3>
          <PivotTable />
        </div>
      </div>}
    </>
  );
};

export default DataInsights;