// src/components/Forms/LeadFormModal.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLead, updateLead, setCurrentLeadToEdit } from '../../redux/leadsSlice';
import { closeLeadFormModal } from '../../redux/uiSlice';

const LeadFormModal = () => {
  const dispatch = useDispatch();
  const { currentLeadToEdit } = useSelector((state) => state.leads);
  
  const initialFormState = { name: '', company: '', value: '', status: 'new', color: '#667eea' };
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (currentLeadToEdit) {
      setFormState(currentLeadToEdit);
    } else {
      setFormState(initialFormState);
    }
  }, [currentLeadToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentLeadToEdit) {
      dispatch(updateLead(formState)); // formState already includes id from currentLeadToEdit
    } else {
      dispatch(addLead(formState));
    }
    handleClose();
  };

  const handleClose = () => {
    dispatch(closeLeadFormModal());
    dispatch(setCurrentLeadToEdit(null)); // Clear the lead being edited
    setFormState(initialFormState); // Reset form
  };
// Add this to LeadsView.jsx before the main component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      marginTop: '20px',
      gap: '8px'
    }}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            padding: '6px 12px',
            border: currentPage === page ? '1px solid #4f46e5' : '1px solid #ddd',
            background: currentPage === page ? '#4f46e5' : 'white',
            color: currentPage === page ? 'white' : '#4b5563',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{currentLeadToEdit ? 'Edit Lead' : 'Add New Lead'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formState.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Company</label>
            <input type="text" name="company" value={formState.company} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Value ($)</label>
            <input type="text" name="value" value={formState.value} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select name="status" value={formState.status} onChange={handleChange}>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="proposal">Proposal</option>
              <option value="won">Won</option>
            </select>
          </div>
          <div className="form-group">
            <label>Color</label>
            <input type="color" name="color" value={formState.color} onChange={handleChange} />
          </div>
          <div className="form-actions">
            <button type="button" onClick={handleClose}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default LeadFormModal;
