import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
    deleteLead as deleteLeadAction,
    setCurrentLeadToEdit,
    updateLeadStatus
} from '../../redux/leadsSlice';
import { openLeadFormModal } from '../../redux/uiSlice';

import CircularProgressBar from './components/CircularProgressBar'; 
import LeadStatusStatCard from './components/LeadStatusStatCard'; 

// --- Icons ---
const IconTableView = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm5 0v3h4V4h-4z"/>
  </svg>
);

const IconCardView = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
  </svg>
);

const IconPipelineView = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M12 1.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5zm-3 0a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5zm-3 0a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5zm-3 0a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5z"/>
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V12h2.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
  </svg>
);

const DeleteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg>
);

// --- Status Definitions with Colors ---
const LEAD_STATUSES = [
  { key: 'new', label: 'New', color: '#60a5fa' }, 
  { key: 'contacted', label: 'Contacted', color: '#f97316' },
  { key: 'working', label: 'Working', color: '#8b5cf6' }, 
  { key: 'qualified', label: 'Qualified', color: '#22c55e' },
  { key: 'closed', label: 'Closed', color: '#6b7280' } 
];
const ALL_STATUS_KEY = 'all';

// --- Pipeline Components ---
const PipelineLeadItem = ({ lead, currentLeadStatus }) => {
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'PIPELINE_LEAD',
    item: { id: lead.id, status: currentLeadStatus },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  const statusDetails = LEAD_STATUSES.find(s => s.key === lead.status) || {};
  const itemColor = lead.color || statusDetails.color || '#60a5fa';

  const handleEdit = () => {
    dispatch(setCurrentLeadToEdit(lead));
    dispatch(openLeadFormModal());
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete lead "${lead.name || 'this lead'}"?`)) {
      dispatch(deleteLeadAction(lead.id));
    }
  };

  return (
    <div 
      ref={drag} 
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '12px',
        margin: '8px 0',
        backgroundColor: 'white',
        borderRadius: '6px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.07)',
        borderLeft: `4px solid ${itemColor}`,
        cursor: 'grab',
      }}
      onMouseDownCapture={e => e.currentTarget.style.cursor = 'grabbing'}
      onMouseUpCapture={e => e.currentTarget.style.cursor = 'grab'}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: itemColor,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          marginRight: '10px',
          fontSize: '14px',
        }}>
          {lead.name ? lead.name.charAt(0).toUpperCase() : '?'}
        </div>
        <div style={{flex: 1, minWidth: 0}}>
            <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '600', color: '#374151', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}} title={lead.name}>
                {lead.name || 'N/A'}
            </h4>
            <p style={{ margin: '2px 0 0 0', fontSize: '13px', color: '#6b7280', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={lead.company}>
                {lead.company || 'N/A'}
            </p>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px'}}>
        <span style={{ fontSize: '14px', fontWeight: '500', color: itemColor }}>
            ${typeof lead.value === 'number' ? lead.value.toLocaleString() : (lead.value || '0')}
        </span>
        <div className="pipeline-lead-actions">
            <button onClick={handleEdit} title="Edit Lead" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', padding: '4px' }}><EditIcon /></button>
            <button onClick={handleDelete} title="Delete Lead" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', padding: '4px' }}><DeleteIcon /></button>
        </div>
      </div>
    </div>
  );
};

const PipelineStatusColumn = ({ statusInfo, leadsInColumn }) => {
  const dispatch = useDispatch();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'PIPELINE_LEAD',
    drop: (item) => {
      if (item.status !== statusInfo.key) {
        dispatch(updateLeadStatus({ id: item.id, toStatus: statusInfo.key, fromStatus: item.status }));
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }), [statusInfo.key, dispatch]);

  return (
    <div
      ref={drop}
      style={{
        flex: '1 1 280px',
        minWidth: '280px',
        maxWidth: '320px',
        margin: '0 8px',
        padding: '12px',
        borderRadius: '8px',
        backgroundColor: isOver ? '#f0f4ff' : '#f9fafb',
        borderTop: `4px solid ${statusInfo.color}`,
        transition: 'background-color 0.2s ease',
      }}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '12px',
        paddingBottom: '8px',
        borderBottom: `1px solid #e5e7eb`
       }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: statusInfo.color, textTransform: 'capitalize' }}>{statusInfo.label}</h3>
        <span style={{
            backgroundColor: `${statusInfo.color}2A`,
            color: statusInfo.color,
            padding: '3px 10px',
            borderRadius: '12px',
            fontSize: '13px',
            fontWeight: '600',
        }}>{leadsInColumn.length}</span>
      </div>
      <div style={{ minHeight: '200px', maxHeight: 'calc(100vh - 350px)', overflowY: 'auto', paddingRight: '5px' }}>
        {leadsInColumn.map((lead) =>
          lead ? <PipelineLeadItem key={lead.id} lead={lead} currentLeadStatus={statusInfo.key} /> : null
        )}
      </div>
    </div>
  );
};

// --- Other Components (StatusTabs, Pagination, LeadCardExpanded, LeadsTableView) ---
// ... (Keep these components exactly as they were in your original code)
const StatusTabs = ({ activeStatus, setActiveStatus, leads }) => {
  const [hoveredStatusKey, setHoveredStatusKey] = useState(null);
  const allStatusesForTabs = [
    { key: ALL_STATUS_KEY, label: 'All', color: '#4f46e5' }, 
    ...LEAD_STATUSES
  ];

  const getCountForStatus = (statusKey) => {
    if (statusKey === ALL_STATUS_KEY) return leads.length;
    return leads.filter(lead => lead && lead.status === statusKey).length; 
  };

  return (
    <div className="status-tabs" style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '20px',
      paddingBottom: '10px',
      borderBottom: '1px solid #e5e7eb'
    }}>
      {allStatusesForTabs.map(statusInfo => {
        const count = getCountForStatus(statusInfo.key);
        const isActive = activeStatus === statusInfo.key;
        const isHovered = hoveredStatusKey === statusInfo.key;
        const currentButtonColor = statusInfo.color || '#4f46e5'; 

        const buttonStyle = {
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          textTransform: 'capitalize',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'all 0.2s ease-in-out',
          border: `1px solid ${isActive || isHovered ? currentButtonColor : '#d1d5db'}`,
          background: isActive ? currentButtonColor : 'white',
          color: isActive ? 'white' : (isHovered ? currentButtonColor : '#374151'),
          fontWeight: isActive ? '600' : '500',
        };

        const countStyle = {
          background: isActive 
            ? 'rgba(255,255,255,0.2)' 
            : (isHovered ? `${currentButtonColor}2A` : `${currentButtonColor}1A`),
          color: isActive ? 'white' : currentButtonColor,
          padding: '2px 8px',
          borderRadius: '12px', 
          fontSize: '12px',
          fontWeight: '600',
          lineHeight: '1.2',
        };

        return (
          <button
            key={statusInfo.key}
            onClick={() => setActiveStatus(statusInfo.key)}
            style={buttonStyle}
            onMouseEnter={() => setHoveredStatusKey(statusInfo.key)}
            onMouseLeave={() => setHoveredStatusKey(null)}
          >
            {statusInfo.label}
            <span style={countStyle}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination" style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '24px',
      gap: '8px'
    }}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            padding: '8px 14px', 
            border: currentPage === page ? `2px solid #4f46e5` : '1px solid #d1d5db',
            background: currentPage === page ? '#4f46e5' : 'white',
            color: currentPage === page ? 'white' : '#4b5563',
            borderRadius: '6px', 
            cursor: 'pointer',
            fontWeight: currentPage === page ? '600': '500',
            minWidth: '40px', 
            textAlign: 'center'
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
const LeadCardExpanded = ({ lead }) => {
  const dispatch = useDispatch();
  
  const leadSpecificColor = lead.color; 
  const statusDetails = LEAD_STATUSES.find(s => s.key === lead.status) || {};
  const cardAccentColor = leadSpecificColor || statusDetails.color || '#60a5fa';

  const handleEdit = () => {
    dispatch(setCurrentLeadToEdit(lead));
    dispatch(openLeadFormModal());
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete lead "${lead.name || 'this lead'}"?`)) {
        dispatch(deleteLeadAction(lead.id));
    }
  };

  const handleStatusChange = (e) => {
    dispatch(updateLeadStatus({ id: lead.id, toStatus: e.target.value }));
  };

  return (
    <div className="lead-card-expanded" style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)', 
      padding: '20px',
      border: '1px solid #e5e7eb', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      minHeight: '240px', 
    }}
    onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
    }}
    onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
    }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
        <div className="lead-avatar" style={{
          background: cardAccentColor,
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '20px',
          flexShrink: 0,
        }}>
          {lead.name ? lead.name.charAt(0).toUpperCase() : '?'}
        </div>
        <div className="lead-details" style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{ 
              margin: '0 0 4px 0', 
              fontSize: '18px', 
              fontWeight: '600', 
              color: '#1f2937', 
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
          }} title={lead.name}>
              {lead.name || 'N/A'}
          </h3>
          <p style={{ 
              margin: '0 0 8px 0', 
              color: '#6b7280', 
              fontSize: '14px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
          }} title={lead.company}>
              {lead.company || 'N/A'}
          </p>
          <span className="lead-value" style={{
            display: 'inline-block',
            fontWeight: '600', 
            color: cardAccentColor, 
            fontSize: '16px',
            padding: '4px 12px',
            backgroundColor: `${cardAccentColor}20`, 
            borderRadius: '16px', 
          }}>${typeof lead.value === 'number' ? lead.value.toLocaleString() : (lead.value || '0')}</span>
        </div>
      </div>
      
      <div className="lead-controls" style={{
        marginTop: 'auto', 
        paddingTop: '16px',
        borderTop: '1px solid #f3f4f6', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
      }}>
        <select
          value={lead.status}
          onChange={handleStatusChange}
          style={{
            padding: '10px 14px',
            borderRadius: '8px', 
            border: '1px solid #d1d5db',
            background: 'white',
            color: '#374151',
            fontSize: '14px',
            cursor: 'pointer',
            flexGrow: 1,
            minWidth: '120px',
            textTransform: 'capitalize',
            boxShadow: '0 1px 2px rgba(0,0,0,0.03)', 
          }}
        >
          {LEAD_STATUSES.map(statusObj => (
            <option key={statusObj.key} value={statusObj.key} style={{textTransform: 'capitalize'}}>
              {statusObj.label}
            </option>
          ))}
        </select>
        
        <div className="lead-actions" style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
          <button
            title="Edit Lead"
            onClick={handleEdit}
            style={{
              padding: '10px',
              background: '#eef2ff', 
              color: '#4338ca', 
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#e0e7ff'}
            onMouseLeave={e => e.currentTarget.style.background = '#eef2ff'}
          >
            <EditIcon />
          </button>
          <button
            title="Delete Lead"
            onClick={handleDelete}
            style={{
              padding: '10px',
              background: '#fee2e2', 
              color: '#dc2626', 
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#fecaca'}
            onMouseLeave={e => e.currentTarget.style.background = '#fee2e2'}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
const LeadsTableView = ({ leads }) => { 
  const dispatch = useDispatch();

  const handleEdit = (lead) => {
    dispatch(setCurrentLeadToEdit(lead));
    dispatch(openLeadFormModal());
  };

  const handleDelete = (leadId, leadName) => {
     if (window.confirm(`Are you sure you want to delete lead "${leadName || 'this lead'}"?`)) {
        dispatch(deleteLeadAction(leadId));
    }
  };

  const handleStatusChange = (leadId, e) => {
    dispatch(updateLeadStatus({ id: leadId, toStatus: e.target.value }));
  };

  if (!leads || leads.length === 0) { 
    return (
        <div style={{ padding: '20px', textAlign: 'center', color: '#6b7280' }}>
            No leads to display in table view.
        </div>
    );
  }

  return (
    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.06)' }}>
      <table className="leads-table" style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '14px'
      }}>
        <thead>
          <tr style={{ background: '#f9fafb' }}>
            {['Name', 'Company', 'Value', 'Status', 'Actions'].map(header => (
                 <th key={header} style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '2px solid #e5e7eb', fontWeight: '600', color: '#4b5563', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.5px' }}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => {
            if (!lead || typeof lead !== 'object') return null; 
            const statusDetails = LEAD_STATUSES.find(s => s.key === lead.status) || {};
            return (
                <tr key={lead.id} style={{ borderBottom: '1px solid #f3f4f6' }} className="table-row-hover">
                <td style={{ padding: '14px 16px', color: '#1f2937', fontWeight:'500' }}>{lead.name || 'N/A'}</td>
                <td style={{ padding: '14px 16px', color: '#374151' }}>{lead.company || 'N/A'}</td>
                <td style={{ padding: '14px 16px', color: '#1f2937', fontWeight: '500' }}>${typeof lead.value === 'number' ? lead.value.toLocaleString() : (lead.value || '0')}</td>
                <td style={{ padding: '14px 16px' }}>
                    <select
                    value={lead.status}
                    onChange={(e) => handleStatusChange(lead.id, e)}
                    style={{
                        padding: '8px 12px', 
                        borderRadius: '6px',
                        border: '1px solid #d1d5db',
                        background: 'white',
                        color: '#374151',
                        fontSize: '13px',
                        cursor: 'pointer',
                        textTransform: 'capitalize',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                    }}
                    >
                    {LEAD_STATUSES.map(statusObj => (
                        <option key={statusObj.key} value={statusObj.key} style={{textTransform: 'capitalize'}}>
                        {statusObj.label}
                        </option>
                    ))}
                    </select>
                </td>
                <td style={{ padding: '14px 16px' }}>
                    <button
                    title="Edit Lead"
                    onClick={() => handleEdit(lead)}
                    style={{
                        padding: '8px', 
                        background: 'transparent',
                        color: '#4f46e5',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        marginRight: '8px',
                    }}
                    >
                    <EditIcon />
                    </button>
                    <button
                    title="Delete Lead"
                    onClick={() => handleDelete(lead.id, lead.name)}
                    style={{
                        padding: '8px',
                        background: 'transparent',
                        color: '#ef4444', 
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                    }}
                    >
                    <DeleteIcon />
                    </button>
                </td>
                </tr>
            );
          })}
        </tbody>
      </table>
      <style>{`
        .table-row-hover:hover { background-color: #f9fafb; }
      `}</style>
    </div>
  );
};


// --- Main LeadsView component ---
const LeadsView = () => {
  const rawLeads = useSelector((state) => state.leads.items) || []; 
  const allValidLeads = rawLeads.filter(lead => lead && typeof lead === 'object' && lead.id != null);

  const [viewMode, setViewMode] = useState('table'); // 'table', 'card', or 'pipeline'
  const [activeStatus, setActiveStatus] = useState(ALL_STATUS_KEY);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter leads for Card and Table views
  const filteredLeadsForListAndCard = activeStatus === ALL_STATUS_KEY
    ? allValidLeads
    : allValidLeads.filter(lead => lead.status === activeStatus);

  const totalPages = Math.ceil(filteredLeadsForListAndCard.length / itemsPerPage);
  const paginatedLeads = filteredLeadsForListAndCard.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Group leads by status for the pipeline view
  const leadsByStatusForPipeline = {};
  LEAD_STATUSES.forEach(statusInfo => {
    leadsByStatusForPipeline[statusInfo.key] = allValidLeads.filter(l => l.status === statusInfo.key);
  });

  const getLeadsCountByStatus = (statusKey) => {
    return allValidLeads.filter(lead => lead.status === statusKey).length;
  };

  return (
    <div className="leads-full-view" style={{ background: '#f3f4f6', minHeight: '100vh' }}>
      {/* Stats Cards - Always visible */}
      <div className="lead-stats-overview" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
        gap: '16px',
        marginBottom: '24px'
      }}>
        {LEAD_STATUSES.map(statusInfo => (
          <LeadStatusStatCard
            key={statusInfo.key}
            title={statusInfo.label}
            count={getLeadsCountByStatus(statusInfo.key)}
            total={allValidLeads.length} 
            color={statusInfo.color}
          />
        ))}
      </div>

      <div className="leads-view-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '16px 20px',
        background: 'white',
        borderRadius: '10px', 
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)' 
      }}>
        <h2 style={{ margin: 0, fontSize: '22px', fontWeight: '600', color: '#1f2937' }}>Leads Management</h2>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          {/* Toggle between table and card view */}
          <button
            onClick={() => setViewMode(viewMode === 'table' ? 'card' : 'table')}
            title={`Switch to ${viewMode === 'table' ? 'Card' : 'Table'} View`}
            style={{
              padding: '10px 16px',
              background: viewMode === 'pipeline' ? '#e5e7eb' : '#4f46e5',
              color: viewMode === 'pipeline' ? '#6b7280' : 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: '500',
              fontSize: '14px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = viewMode === 'pipeline' ? '#e5e7eb' : '#4338ca'}
            onMouseLeave={e => e.currentTarget.style.background = viewMode === 'pipeline' ? '#e5e7eb' : '#4f46e5'}
          >
            {viewMode === 'table' ? <IconCardView /> : <IconTableView />}
            {viewMode === 'table' ? 'Card View' : 'Table View'}
          </button>
          
          {/* Pipeline view button */}
          <button
            onClick={() => setViewMode('pipeline')}
            title="Switch to Pipeline View"
            style={{
              padding: '10px 16px',
              background: viewMode === 'pipeline' ? '#4f46e5' : '#e5e7eb',
              color: viewMode === 'pipeline' ? 'white' : '#6b7280',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: '500',
              fontSize: '14px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = viewMode === 'pipeline' ? '#4338ca' : '#d1d5db'}
            onMouseLeave={e => e.currentTarget.style.background = viewMode === 'pipeline' ? '#4f46e5' : '#e5e7eb'}
          >
            <IconPipelineView />
            Pipeline View
          </button>
        </div>
      </div>

      {/* Main Content Area based on viewMode */}
      {viewMode === 'pipeline' ? (
        <DndProvider backend={HTML5Backend}>
          <div className="pipeline-view-container" style={{
            display: 'flex',
            overflowX: 'auto',
            padding: '10px 0',
            gap: '0px',
            background: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            marginBottom: '24px'
          }}>
            {LEAD_STATUSES.map(statusInfo => (
              <PipelineStatusColumn
                key={statusInfo.key}
                statusInfo={statusInfo}
                leadsInColumn={leadsByStatusForPipeline[statusInfo.key] || []}
              />
            ))}
          </div>
        </DndProvider>
      ) : (
        <div style={{ 
          padding: '20px', 
          background: 'white', 
          borderRadius: '10px', 
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
          marginBottom: '24px'
        }}>
          <StatusTabs
            activeStatus={activeStatus}
            setActiveStatus={(status) => {
              setActiveStatus(status);
              setCurrentPage(1);
            }}
            leads={allValidLeads}
          />

          {filteredLeadsForListAndCard.length === 0 && activeStatus !== ALL_STATUS_KEY ? (
            <div style={{ padding: '40px', textAlign: 'center', background: '#f9fafb', borderRadius: '8px', color: '#6b7280', marginTop: '20px' }}>
              No leads found with status "{LEAD_STATUSES.find(s => s.key === activeStatus)?.label || activeStatus}".
              <button onClick={() => { setActiveStatus(ALL_STATUS_KEY); setCurrentPage(1); }} style={{ background: 'transparent', border: 'none', color: '#4f46e5', cursor: 'pointer', marginLeft: '8px', fontWeight: '500', textDecoration: 'underline', padding: '4px' }}>
                View all leads
              </button>
            </div>
          ) : filteredLeadsForListAndCard.length === 0 && activeStatus === ALL_STATUS_KEY ? (
             <div style={{ padding: '40px', textAlign: 'center', background: '#f9fafb', borderRadius: '8px', color: '#6b7280', marginTop: '20px' }}>
                You currently have no leads. Try adding some!
            </div>
          ) : viewMode === 'card' ? (
            <div className="leads-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '20px', marginTop: '20px' }}>
              {paginatedLeads.map(lead => (
                <LeadCardExpanded key={lead.id} lead={lead} />
              ))}
            </div>
          ) : ( // Table View
            <div style={{ marginTop: '20px' }}>
               {paginatedLeads.length > 0 && (
                  <div style={{ marginBottom: '12px', color: '#6b7280', fontSize: '14px', fontWeight: '500' }}>
                      Showing {paginatedLeads.length === 1 ? '1 lead' : `${paginatedLeads.length} leads`} 
                      {filteredLeadsForListAndCard.length !== allValidLeads.length || activeStatus !== ALL_STATUS_KEY ? ` (of ${filteredLeadsForListAndCard.length} filtered)` : ` (of ${allValidLeads.length} total)`}
                  </div>
              )}
              <LeadsTableView leads={paginatedLeads} />
            </div>
          )}

          {/* Pagination for Card and Table views */}
          { (viewMode === 'card' || viewMode === 'table') && totalPages > 1 && ( 
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default LeadsView;