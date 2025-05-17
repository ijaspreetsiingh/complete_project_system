// src/components/Team/Team.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CoachCard from './components/Team/CoachCard';
import AddCoachModal from './components/Team/AddCoachModal';
import { selectCoachById, selectLoggedInCoachId, selectAggregatedLeadMetrics } from '../../redux/teamSlice';

function Team() {
  const { darkMode } = useSelector(state => state.ui);
  const loggedInCoachId = useSelector(selectLoggedInCoachId);
  const loggedInCoach = useSelector(state => selectCoachById(state, loggedInCoachId));
  const teamMetrics = useSelector(state => selectAggregatedLeadMetrics(state, loggedInCoachId));
  
  const [isAddDirectSubCoachModalOpen, setIsAddDirectSubCoachModalOpen] = useState(false);

  if (!loggedInCoach) {
    return <div>Loading...</div>;
  }

  return (
    <div className="team-view" style={{ padding: '20px', color: darkMode ? 'white' : 'black' }}>
      <div className="team-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2>Team Dashboard: {loggedInCoach.name}</h2>
          {teamMetrics && (
            <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
              <div>
                <span style={{ fontWeight: 'bold' }}>Total New Leads:</span> {teamMetrics.new}
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>Total Contacted:</span> {teamMetrics.contacted}
              </div>
            </div>
          )}
        </div>
        
        {loggedInCoach.canCreateSubCoaches && (
          <button onClick={() => setIsAddDirectSubCoachModalOpen(true)}>
            Add Direct Sub-Coach
          </button>
        )}
      </div>

      {isAddDirectSubCoachModalOpen && (
        <AddCoachModal
          parentId={loggedInCoachId}
          onModalClose={() => setIsAddDirectSubCoachModalOpen(false)}
        />
      )}

      <CoachCard coach={loggedInCoach} depth={0} />
    </div>
  );
}

export default Team;