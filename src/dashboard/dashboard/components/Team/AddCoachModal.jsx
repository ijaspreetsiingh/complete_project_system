// src/components/Team/AddCoachModal.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCoach } from '../../../../redux/teamSlice'; // Adjust path as needed

// Add a default empty function for onModalClose
function AddCoachModal({ parentId, onModalClose = () => {} }) { // <--- Added default prop
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { darkMode } = useSelector(state => state.ui);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert('Name and Email are required.');
      return;
    }
    dispatch(addCoach({ name, email, parentId, canCreateSubCoaches: true }));
    
    // You can also add an explicit check (though default prop is often cleaner)
    if (typeof onModalClose === 'function') {
      onModalClose();
    } else {
      console.error("AddCoachModal: onModalClose prop is not a function!", onModalClose);
    }
  };

  const handleCancel = () => {
    if (typeof onModalClose === 'function') {
      onModalClose();
    } else {
      console.error("AddCoachModal: onModalClose prop is not a function (on cancel)!", onModalClose);
    }
  };

  const handleOverlayClick = () => {
    if (typeof onModalClose === 'function') {
      onModalClose();
    } else {
      console.error("AddCoachModal: onModalClose prop is not a function (on overlay click)!", onModalClose);
    }
  };


  // Basic modal styling (enhance as needed)
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  };

  const modalContentStyle = {
    backgroundColor: darkMode ? '#2D3748' : 'white',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    width: '90%',
    maxWidth: '400px',
    color: darkMode ? 'white' : 'black',
  };

  const inputStyle = {
    display: 'block',
    width: 'calc(100% - 22px)',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: `1px solid ${darkMode ? '#4A5568' : '#CBD5E0'}`,
    backgroundColor: darkMode ? '#1A202C' : 'white',
    color: darkMode ? 'white' : 'black',
    fontSize: '1rem',
  };

  const buttonStyle = {
    padding: '10px 15px',
    marginRight: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  };

  return (
    <div style={modalOverlayStyle} onClick={handleOverlayClick}> {/* Use specific handler */}
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Add New Sub-Coach</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="coachName" style={{ marginBottom: '5px', display: 'block' }}>Name:</label>
            <input
              type="text"
              id="coachName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              required
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="coachEmail" style={{ marginBottom: '5px', display: 'block' }}>Email:</label>
            <input
              type="email"
              id="coachEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={{ marginTop: '20px', textAlign: 'right' }}>
            <button 
              type="button" 
              onClick={handleCancel} // Use specific handler
              style={{ ...buttonStyle, backgroundColor: darkMode ? '#A0AEC0' : '#E2E8F0', color: darkMode ? 'white' : 'black' }}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              style={{ ...buttonStyle, backgroundColor: darkMode ? '#38A169' : '#48BB78', color: 'white' }}
            >
              Add Coach
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCoachModal;
