// src/components/Team/CoachCard.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import AddCoachModal from './AddCoachModal';

// Memoized selectors
const selectSubCoachesMemoized = createSelector(
  [(state) => state.team.coaches, (_, parentId) => parentId],
  (coaches, parentId) => coaches.filter(coach => coach.parentId === parentId)
);

const selectLeadCountsByStatusMemoized = createSelector(
  [(state) => state.leads.items, (_, coachId) => coachId],
  (leads, coachId) => {
    const coachLeads = leads.filter(lead => lead.coachId === coachId);
    return coachLeads.reduce((acc, lead) => {
      acc[lead.status] = (acc[lead.status] || 0) + 1;
      return acc;
    }, {});
  }
);

function CoachCard({ coach, depth = 0 }) {
  const darkMode = useSelector(state => state.ui.darkMode);
  const subCoaches = useSelector(state => selectSubCoachesMemoized(state, coach.id));
  const leadMetrics = useSelector(state => selectLeadCountsByStatusMemoized(state, coach.id));

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [areSubCoachesVisible, setAreSubCoachesVisible] = useState(true);

  // Card styling
  const cardStyle = {
    border: `1px solid ${darkMode ? '#4A5568' : '#E2E8F0'}`,
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: darkMode ? '#2D3748' : 'white',
    marginLeft: `${depth * 25}px`,
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    color: darkMode ? 'white' : 'black',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const buttonStyle = {
    padding: '8px 12px',
    backgroundColor: darkMode ? '#3182CE' : '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.85rem',
    marginLeft: '10px',
  };

  const toggleSubCoachesVisibility = () => {
    setAreSubCoachesVisible(!areSubCoachesVisible);
  };

  const monitoringSection = (
    <div style={{ 
      fontSize: '0.9em', 
      marginTop: '10px', 
      padding: '10px',
      backgroundColor: darkMode ? '#1A202C' : '#F7FAFC',
      borderRadius: '6px',
      color: darkMode ? 'white' : 'black'
    }}>
      <h5 style={{ margin: '0 0 8px 0', fontSize: '0.95em' }}>Lead Metrics</h5>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
        <div>
          <span style={{ fontWeight: 'bold' }}>New Leads:</span> {leadMetrics?.new || 0}
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>Contacted:</span> {leadMetrics?.contacted || 0}
        </div>
      </div>
    </div>
  );

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <div>
          <h4 style={{ margin: '0 0 5px 0' }}>{coach.name} <span style={{fontSize: '0.8em', color: darkMode ? '#A0AEC0' : '#718096'}}>({coach.role})</span></h4>
          <p style={{ fontSize: '0.9em', color: darkMode ? '#A0AEC0' : '#718096', margin: 0 }}>{coach.email}</p>
        </div>
        <div>
          {coach.canCreateSubCoaches && (
            <button onClick={() => setIsAddModalOpen(true)} style={buttonStyle}>
              Add Sub-Coach
            </button>
          )}
          {subCoaches && subCoaches.length > 0 && (
             <button onClick={toggleSubCoachesVisibility} style={{...buttonStyle, backgroundColor: darkMode ? '#4A5568' : '#6C757D' }}>
              {areSubCoachesVisible ? 'Hide' : 'Show'} Sub-Coaches ({subCoaches.length})
            </button>
          )}
        </div>
      </div>

      {monitoringSection}

      {isAddModalOpen && (
        <AddCoachModal
          parentId={coach.id}
          onModalClose={() => setIsAddModalOpen(false)}
        />
      )}

      {areSubCoachesVisible && subCoaches && subCoaches.length > 0 && (
        <div className="sub-coaches-list" style={{ marginTop: '15px', borderLeft: `3px solid ${darkMode ? '#4A5568' : '#CBD5E0'}`, paddingLeft: '15px'}}>
          <h5 style={{ marginTop: 0, marginBottom: '10px', fontSize: '0.95em' }}>Sub-Coaches of {coach.name}:</h5>
          {subCoaches.map(subCoach => (
            <CoachCard key={subCoach.id} coach={subCoach} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CoachCard;