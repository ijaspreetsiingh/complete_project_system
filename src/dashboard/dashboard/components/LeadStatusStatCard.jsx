// src/components/LeadStatusStatCard.js (New File)
import React from 'react';
import CircularProgressBar from './CircularProgressBar'; // Assuming it's in the same components folder

const LeadStatusStatCard = ({ title, count, total, color }) => {
  const percentage = total > 0 ? (count / total) * 100 : 0;

  return (
    <div className="lead-stat-card" style={{
      background: 'white',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      textAlign: 'center',
      borderTop: `4px solid ${color}`,
      minWidth: '150px', // Ensure cards have some width
    }}>
      <h4 style={{
        margin: '0 0 8px 0',
        color: '#374151',
        fontSize: '14px',
        textTransform: 'capitalize',
      }}>{title}</h4>
      <CircularProgressBar percentage={percentage} color={color} />
      <p style={{
        margin: '8px 0 0 0',
        color: '#4b5563',
        fontSize: '16px',
        fontWeight: '600'
      }}>{count}</p>
      <p style={{
        margin: '4px 0 0 0',
        color: '#6b7280',
        fontSize: '12px'
      }}>out of {total}</p>
    </div>
  );
};

export default LeadStatusStatCard;
