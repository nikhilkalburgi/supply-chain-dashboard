/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from 'react';
import { useDashboardContext } from '../../context/DashboardContext';
import './DataTable.css'; // Import CSS for styling

const PivotTable = () => {
  const { state } = useDashboardContext();
  const [rowField, setRowField] = useState(null);
  const [valueField, setValueField] = useState(null);

  const allFields = ['date', 'supplier', 'region', 'amount'];

  // Automatically adjust value field based on row field selection
  useEffect(() => {
    if (!rowField) {
      setValueField(null);
    } else if (!valueField) {
      setValueField(allFields.find(field => field !== rowField));
    }
  }, [rowField, valueField, allFields]);

  // Determine column fields based on selections
  const columnFields = useMemo(() => {
    return allFields.filter(field => field !== rowField && field !== valueField);
  }, [rowField, valueField]);

  // Create pivot table data
  const pivotData = useMemo(() => {
    if (!rowField || !valueField) {
      return state.data;
    }

    const pivot = {};

    state.data.forEach(item => {
      const rowKey = item[rowField];
      const colKey = columnFields.map(field => item[field]).join(' | ');

      if (!pivot[rowKey]) {
        pivot[rowKey] = {};
      }

      if (!pivot[rowKey][colKey]) {
        pivot[rowKey][colKey] = "";
      }

      pivot[rowKey][colKey] += item[valueField];
    });

    return pivot;
  }, [state.data, rowField, valueField, columnFields]);

  // Get unique row and column headers
  const rowHeaders = rowField ? Object.keys(pivotData) : [];
  const columnHeaders = rowField ? Array.from(new Set(state.data.map(item => columnFields.map(field => item[field]).join(' | ')))) : columnFields;

  return (
    <div className="pivot-table-container">
      <div className="pivot-controls">
        <label>
          Row
          <select value={rowField || ''} onChange={(e) => setRowField(e.target.value || null)}>
            <option value="">None</option>
            {allFields.map(field => (
              <option key={field} value={field}>{field}</option>
            ))}
          </select>
        </label>
        <label>
          Value
          <select value={valueField || ''} onChange={(e) => setValueField(e.target.value || null)} style={{pointerEvents: !rowField ? 'none' : 'all'}}>
            <option value="">None</option>
            {allFields.map(field => (
              <option key={field} value={field}>{field}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="pivot-table-wrapper">
        <table className="pivot-table">
          <thead>
            <tr>
              {rowField && <th>{rowField}</th>}
              {columnHeaders.map(col => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowField ? (
              rowHeaders.map(row => (
                <tr key={row}>
                  <td>{row}</td>
                  {columnHeaders.map(col => (
                    <td key={col}>{pivotData[row][col]}</td>
                  ))}
                </tr>
              ))
            ) : (
              state.data.map((item, index) => (
                <tr key={index}>
                  {columnFields.map(field => (
                    <td key={field}>{item[field]}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PivotTable;