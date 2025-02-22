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
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Add New Procurement Activity</h2>
        <form onSubmit={handleSubmit} aria-label="Add new procurement activity">
          <label>
            Supplier
            <select
              required
              value={formData.supplier ?? ''}
              onChange={(e) => setFormData({ ...formData, supplier: e.target.value })}
            >
              <option value="Supplier A">Supplier A</option>
              <option value="Supplier B">Supplier B</option>
              <option value="Supplier C">Supplier C</option>
              <option value="Supplier D">Supplier D</option>
            </select>
          </label>
          <label>
            Region
            <select
              required
              value={formData.region ?? ''}
              onChange={(e) => setFormData({ ...formData, region: e.target.value })}
            >
              <option value="North America">North America</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
            </select>
          </label>
          <label>
            Amount
            <input
              type="number"
              required
              value={formData.amount ?? ''}
              onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
            />
          </label>
          <label>
            Date
            <input
              type="date"
              required
              value={formData.date ?? ''}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </label>
          <label>
            Status
            <select
              required
              value={formData.region ?? ''}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            >
              <option value="normal">normal</option>
              <option value="anomaly">anomaly</option>
            </select>
          </label>
          <div className="modal-buttons">
            <button type="submit">Add Activity</button>
            <button type="button" onClick={onClose} className="close-button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddActivityForm;
