import React, { useState } from 'react';
import './Sidebar.css';

const AnomaliesFilters = ({onChange, startDate, endDate, region, setSelectedRegion, amountRange, setAmountRange, supplier, setSelectedSupplier}) => {
  const [min, setMin] = useState(amountRange.min);
  const [max, setMax] = useState(amountRange.max);

  return <div className="anomaliesFilters">
    <div>
      <p>
        Date Range Start
      </p>
      <input type='date' onChange={(e) => onChange(true, e.target.value)} value={startDate} />
      <p>
        Date Range End
      </p>
      <input type='date' onChange={(e) => onChange(false, e.target.value)} value={endDate} />
    </div>
    <div>
      <p>
        Region
      </p>
      <select onChange={(e) => setSelectedRegion(e.target.value)} value={region}>
        <option value="All">All</option>
        <option value="North America">North America</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
      </select>
    </div>
    <div>
      <p>
        Supplier
      </p>
      <select onChange={(e) => setSelectedSupplier(e.target.value)} value={supplier}>
        <option value="All">All</option>
        <option value="Supplier A">Supplier A</option>
        <option value="Supplier B">Supplier B</option>
        <option value="Supplier C">Supplier C</option>
        <option value="Supplier D">Supplier D</option>
      </select>
    </div>
    <div>
      <p>
        Amount Range
      </p>
      <input
        type="number"
        placeholder="Min"
        value={min}
        onChange={(e) => setMin(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setAmountRange({ ...amountRange, min: e.target.value ? parseFloat(e.target.value) : "" });
          }
        }}
      />
      <input
        type="number"
        placeholder="Max"
        value={max}
        onChange={(e) => setMax(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setAmountRange({ ...amountRange, max: e.target.value ? parseFloat(e.target.value) : "" })
          }
        }}
      />
    </div>
  </div>
};

// DataInsights-specific filters
const DataInsightsFilters = ({onChange, startDate, endDate, region, setSelectedRegion, amountRange, setAmountRange, selectedDimension, setSelectedDimension}) => {
  const [min, setMin] = useState(amountRange.min);
  const [max, setMax] = useState(amountRange.max);

  return <div className="dataInsightsFilters">
    <div>
      <p>
        Date Range Start
      </p>
      <input type='date' onChange={(e) => onChange(true, e.target.value)} value={startDate} />
      <p>
        Date Range End
      </p>
      <input type='date' onChange={(e) => onChange(false, e.target.value)} value={endDate} />
    </div>
    <div>
      <p>
        Region
      </p>
      <select onChange={(e) => setSelectedRegion(e.target.value)} value={region}>
        <option value="All">All</option>
        <option value="North America">North America</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
      </select>
    </div>
    <div>
      <p>
        Amount Range
      </p>
      <input
        type="number"
        placeholder="Min"
        value={min}
        onChange={(e) => setMin(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setAmountRange({ ...amountRange, min: e.target.value ? parseFloat(e.target.value) : "" });
          }
        }}
      />
      <input
        type="number"
        placeholder="Max"
        value={max}
        onChange={(e) => setMax(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setAmountRange({ ...amountRange, max: e.target.value ? parseFloat(e.target.value) : "" })
          }
        }}
      />
    </div>
    <div>
      <p>
        Select Dimension
      </p>
      <select
        id="dimension-select"
        value={selectedDimension}
        onChange={(e) => setSelectedDimension(e.target.value)}
      >
        <option value="region">Region</option>
        <option value="supplier">Supplier</option>
      </select>
    </div>
  </div>
};

export const Sidebar = ({ anomaliesFilters, dataInsightsFilters, DashboardHomeFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const renderFilters = () => {
    switch (window.location.pathname) {
      case '/supply-chain-dashboard/anomalies':
        return <AnomaliesFilters {...anomaliesFilters} />;
      case '/supply-chain-dashboard/data-insights':
        return <DataInsightsFilters {...dataInsightsFilters} />;
      case '/supply-chain-dashboard':
        return <DashboardHomeFilters />;
      default:
        return null;
    }
  };

  return (
    <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {!isOpen ? 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel-fill" viewBox="0 0 16 16">
          <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
        </svg>
        : 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
        }
      </button>
      <aside className="sidebar">
        <h3>Filters</h3>
        <div className="filter-group">
          {renderFilters()}
        </div>
        {/* Additional filters can be added here */}
      </aside>
    </div>
  );
};