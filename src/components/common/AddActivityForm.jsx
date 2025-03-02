import React, { useState } from 'react';
import { useDashboardContext } from '../../context/DashboardContext';
import './AddActivityForm.css';

const AddActivityForm = ({ isOpen, onClose }) => {
  const { dispatch } = useDashboardContext();
  const [formData, setFormData] = useState({
    supplier: 'Supplier A',
    region: 'North America'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: Date.now(),
      ...formData,
    };
    dispatch({ type: 'UPDATE_DATA', payload: newData });
    setFormData({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-title" 
      tabIndex="-1"
    >
      <div className="modal-container">
        <h2 id="modal-title">Add New Procurement Activity</h2>
        <form onSubmit={handleSubmit} aria-label="Add new procurement activity">
          
          <label htmlFor="supplier">Supplier</label>
          <select
            id="supplier"
            required
            value={formData.supplier ?? ''}
            onChange={(e) => setFormData({ ...formData, supplier: e.target.value })}
          >
            <option value="">Select a supplier</option>
            <option value="Supplier A">Supplier A</option>
            <option value="Supplier B">Supplier B</option>
            <option value="Supplier C">Supplier C</option>
            <option value="Supplier D">Supplier D</option>
          </select>

          <label htmlFor="region">Region</label>
          <select
            id="region"
            required
            value={formData.region ?? ''}
            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
          >
            <option value="">Select a region</option>
            <option value="North America">North America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
          </select>

          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            required
            value={formData.amount ?? ''}
            onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
            aria-describedby="amount-help"
          />
          <small id="amount-help">Enter the amount in USD.</small>

          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            required
            value={formData.date ?? ''}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />

          <label htmlFor="status">Status</label>
          <select
            id="status"
            required
            value={formData.status ?? ''}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option value="">Select a status</option>
            <option value="normal">Normal</option>
            <option value="anomaly">Anomaly</option>
          </select>

          <div className="modal-buttons">
            <button type="submit">Add Activity</button>
            <button type="button" onClick={onClose} className="close-button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default AddActivityForm;
