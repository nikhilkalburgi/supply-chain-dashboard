/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState, useEffect } from 'react';
import ChartContainer from '../common/ChartContainer';
import { useDashboardContext } from '../../context/DashboardContext';
import './Anomalies.css';
import { Sidebar } from '../layout/Sidebar';
import Loader from '../common/Loader';
import PivotTable from '../common/DataTable';
import ErrorMessage from '../common/Error';

const Anomalies = () => {
  const defaultFilters = {
    dateRange: ['2023-01-01', '2023-01-30'],
    region: 'All',
    supplier: 'All',
    amountRange: { min: '', max: '' }
  };
  
  const [filters, setFilters] = useState(defaultFilters);
  const { state, dispatch } = useDashboardContext();
  const [show, setShow] = useState(0);

  useEffect(() => {
    if(show === 1) {
      setShow(2);
    }
  }, [state])

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const onChange = (isStart, value) => {
    let temp = Array.from(filters.dateRange);
    if(isStart) {
      temp[0] = value;
    } else {
      temp[1] = value;
    }
    setFilters(prev => ({ ...prev, dateRange: temp }))
  }

  // Fetch data based on filters
  useEffect(() => {
    dispatch({ type: "FETCH_DATA", payload: filters });
    if(show === 0)
      setShow(1);
  }, [filters, dispatch]);

  const filteredAnomalies = useMemo(() => {
    return state.data.filter(item => {
      return item.status === 'anomaly';
    });
  }, [state]);

  // Prepare data for the time series chart
  const timeSeriesData = useMemo(() => {
    const labels = filteredAnomalies.map(item => item.date);
    const data = filteredAnomalies.map(item => item.amount);

    return {
      labels,
      datasets: [
        {
          label: 'Anomalies Over Time',
          data,
          borderColor: 'var(--primary-color)',
          backgroundColor: 'var(--secondary-color)',
          fill: true,
        },
      ],
    };
  }, [filteredAnomalies]);

  return (
    <>
      {state.isLoading || show !== 2 ? <Loader /> : state.error ? <ErrorMessage message={'Service Unavailable!'} /> : 
       <div>
        <h2>Anomalies</h2>
        <Sidebar
          anomaliesFilters={{onChange, startDate: filters.dateRange[0], endDate: filters.dateRange[1], region:filters.region,  setSelectedRegion: (region) => updateFilters({ region }), amountRange: filters.amountRange, setAmountRange: (range) => updateFilters({ amountRange: range }), supplier: filters.supplier, setSelectedSupplier: (supplier) => updateFilters({ supplier })}}
          dataInsightsFilters={null}
          dashboardHomeFilters={null}
        />
        <div className="charts-container">
          <div className="chart-item">
            <ChartContainer type="line" data={timeSeriesData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
        <h3>Detailed Overview</h3>
        <PivotTable />
       </div>
      }
    </>
  );
};

export default Anomalies;