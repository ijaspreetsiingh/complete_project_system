import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import {
  updateLeadStatus,
  deleteLead as deleteLeadAction,
  setCurrentLeadToEdit
} from '../../redux/leadsSlice';
import { openLeadFormModal } from '../../redux/uiSlice';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const STATUS_LIST = [
  { key: 'new', label: 'New', color: '#667eea' },
  { key: 'contacted', label: 'Contacted', color: '#f6ad55' },
  { key: 'proposal', label: 'Proposal', color: '#f687b3' },
  { key: 'won', label: 'Won', color: '#68d391' }
];

// --- LeadItem Component ---
const LeadItem = ({ lead, currentLeadStatus }) => {
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'LEAD',
    item: { id: lead.id, status: currentLeadStatus },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  const handleEdit = () => {
    dispatch(setCurrentLeadToEdit(lead));
    dispatch(openLeadFormModal());
  };

  const handleDelete = () => {
    dispatch(deleteLeadAction(lead.id));
  };

  return (
    <div ref={drag} className={`lead-card ${isDragging ? 'dragging' : ''}`} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div className="lead-avatar" style={{ background: lead.color }}>{lead.name ? lead.name.charAt(0) : '?'}</div>
      <div className="lead-info">
        <h4>{lead.name}</h4>
        <p>{lead.company}</p>
        <span className="lead-value">${lead.value}</span>
      </div>
      <div className="lead-actions">
        <button className="action-btn" onClick={handleEdit}>✏️</button>
        <button className="action-btn" onClick={handleDelete}>🗑️</button>
      </div>
    </div>
  );
};

// --- StatusColumn Component ---
const StatusColumn = ({ statusKey, statusTitle, leadsInColumn, columnColor }) => {
  const dispatch = useDispatch();
  const [, drop] = useDrop(() => ({
    accept: 'LEAD',
    drop: (item) => {
      if (item.status !== statusKey) {
        dispatch(updateLeadStatus({ id: item.id, fromStatus: item.status, toStatus: statusKey }));
      }
    }
  }), [statusKey, dispatch]);

  return (
    <div
      ref={drop}
      className="status-column"
      style={{ '--primary-color': columnColor, borderTop: `4px solid ${columnColor}` }}
    >
      <div className="column-header">
        <h3>{statusTitle}</h3>
        <span className="count-badge">{leadsInColumn.length}</span>
      </div>
      <div className="leads-container">
        {leadsInColumn.filter(Boolean).map((lead) =>
          <LeadItem key={lead.id} lead={lead} currentLeadStatus={statusKey} />
        )}
      </div>
    </div>
  );
};

const DashboardView = () => {
  // Defensive: always default to []
  const leads = useSelector(state => state.leads.items) || [];
  const { darkMode } = useSelector(state => state.ui) || {};

  // Defensive: filter out undefined leads
  const leadsClean = leads.filter(Boolean);

  // Analytics data
  const pipelineData = {
    labels: STATUS_LIST.map(status => status.label),
    datasets: [{
      label: 'Leads by Status',
      data: STATUS_LIST.map(status =>
        leadsClean.filter(l => l.status === status.key).length
      ),
      backgroundColor: STATUS_LIST.map(status => status.color)
    }]
  };

  // Example revenue data
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Revenue (in thousands)',
      data: [45, 60, 75, 90, 110, 130],
      backgroundColor: '#4fd1c5'
    }]
  };

  // Group leads by status
  const leadsByStatus = {};
  STATUS_LIST.forEach(status => {
    leadsByStatus[status.key] = leadsClean.filter(l => l.status === status.key);
  });

  // For recent leads
  const recentLeads = [...leadsClean].sort((a, b) => b.id - a.id).slice(0, 4);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="dashboard-container">
        
        <div className="main-content">
          {/* --- Stats Cards --- */}
          <div className="stats-grid">
            <div className="stat-card" style={{ background: darkMode ? 'rgba(102, 126, 234, 0.1)' : '#f0f4ff' }}>
              <div className="stat-title">Total Leads</div>
              <div className="stat-value">{leadsClean.length}</div>
              <div className="stat-change up">↑ 12% from last month</div>
            </div>
            <div className="stat-card" style={{ background: darkMode ? 'rgba(248, 113, 113, 0.1)' : '#fff0f1' }}>
              <div className="stat-title">Conversion Rate</div>
              <div className="stat-value">24%</div>
              <div className="stat-change up">↑ 3% from last month</div>
            </div>
            <div className="stat-card" style={{ background: darkMode ? 'rgba(104, 211, 145, 0.1)' : '#f0fdf4' }}>
              <div className="stat-title">Revenue</div>
              <div className="stat-value">$152,750</div>
              <div className="stat-change up">↑ 18% from last month</div>
            </div>
            <div className="stat-card" style={{ background: darkMode ? 'rgba(251, 191, 36, 0.1)' : '#fef9e7' }}>
              <div className="stat-title">Active Deals</div>
              <div className="stat-value">18</div>
              <div className="stat-change down">↓ 2 from last week</div>
            </div>
          </div>

          {/* --- Analytics Section --- */}
          <div className="analytics-section">
            <div className="analytics-chart">
              <h2 className="section-title">Revenue Overview</h2>
              <div className="chart-container">
                <Bar data={revenueData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
              </div>
            </div>
            <div className="analytics-chat">
              <h2 className="section-title">Team Chat</h2>
              <div className="chat-container">
                <p>Chat functionality to be implemented.</p>
              </div>
            </div>
          </div>

          {/* --- Recent Leads --- */}
          <div className="top-leads-section">
            <h2 className="section-title">Recent Leads</h2>
            <div className="top-leads-grid">
              {recentLeads.filter(Boolean).map(lead => (
                <div key={lead.id} className="top-lead-card" style={{ '--primary-color': lead.color }}>
                  <div className="lead-main">
                    <div className="lead-avatar" style={{ background: lead.color }}>
                      {lead.name ? lead.name.charAt(0) : '?'}
                    </div>
                    <div className="lead-details">
                      <h3>{lead.name}</h3>
                      <p>{lead.company}</p>
                    </div>
                  </div>
                  <div className="lead-value">${lead.value}</div>
                  <div className="lead-status">
                    {lead.status ? lead.status.charAt(0).toUpperCase() + lead.status.slice(1) : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- CRM Pipeline --- */}
          <div className="crm-pipeline">
            <h2 className="section-title">Sales Pipeline</h2>
            <div className="pipeline-container">
              {STATUS_LIST.map(status => (
                <StatusColumn
                  key={status.key}
                  statusKey={status.key}
                  statusTitle={status.label}
                  leadsInColumn={leadsByStatus[status.key]}
                  columnColor={status.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default DashboardView;
