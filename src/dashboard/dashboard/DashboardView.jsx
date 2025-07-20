// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { DndProvider, useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';
// import {
//   updateLeadStatus,
//   deleteLead as deleteLeadAction,
//   setCurrentLeadToEdit
// } from '../../redux/leadsSlice';
// import { openLeadFormModal } from '../../redux/uiSlice';

// // Register ChartJS components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );


// const STATUS_LIST = [
//   { key: 'new', label: 'New', color: '#667eea' },
//   { key: 'contacted', label: 'Contacted', color: '#f6ad55' },
//   { key: 'proposal', label: 'Proposal', color: '#f687b3' },
//   { key: 'won', label: 'Won', color: '#68d391' }
// ];

// // --- LeadItem Component ---
// const LeadItem = ({ lead, currentLeadStatus }) => {
//   const dispatch = useDispatch();
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: 'LEAD',
//     item: { id: lead.id, status: currentLeadStatus },
//     collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
//   }));

//   const handleEdit = () => {
//     dispatch(setCurrentLeadToEdit(lead));
//     dispatch(openLeadFormModal());
//   };

//   const handleDelete = () => {
//     dispatch(deleteLeadAction(lead.id));
//   };

//   return (
//     <div ref={drag} className={`lead-card ${isDragging ? 'dragging' : ''}`} style={{ opacity: isDragging ? 0.5 : 1 }}>
//       <div className="lead-avatar" style={{ background: lead.color }}>{lead.name ? lead.name.charAt(0) : '?'}</div>
//       <div className="lead-info">
//         <h4>{lead.name}</h4>
//         <p>{lead.company}</p>
//         <span className="lead-value">${lead.value}</span>
//       </div>
//       <div className="lead-actions">
//         <button className="action-btn" onClick={handleEdit}>✏️</button>
//         <button className="action-btn" onClick={handleDelete}>🗑️</button>
//       </div>
//     </div>
//   );
// };

// // --- StatusColumn Component ---
// const StatusColumn = ({ statusKey, statusTitle, leadsInColumn, columnColor }) => {
//   const dispatch = useDispatch();
//   const [, drop] = useDrop(() => ({
//     accept: 'LEAD',
//     drop: (item) => {
//       if (item.status !== statusKey) {
//         dispatch(updateLeadStatus({ id: item.id, fromStatus: item.status, toStatus: statusKey }));
//       }
//     }
//   }), [statusKey, dispatch]);

//   return (
//     <div
//       ref={drop}
//       className="status-column"
//       style={{ '--primary-color': columnColor, borderTop: `4px solid ${columnColor}` }}
//     >
//       <div className="column-header">
//         <h3>{statusTitle}</h3>
//         <span className="count-badge">{leadsInColumn.length}</span>
//       </div>
//       <div className="leads-container">
//         {leadsInColumn.filter(Boolean).map((lead) =>
//           <LeadItem key={lead.id} lead={lead} currentLeadStatus={statusKey} />
//         )}
//       </div>
//     </div>
//   );
// };

// const DashboardView = () => {
//   // Defensive: always default to []
//   const leads = useSelector(state => state.leads.items) || [];
//   const { darkMode } = useSelector(state => state.ui) || {};

//   // Defensive: filter out undefined leads
//   const leadsClean = leads.filter(Boolean);

//   // Analytics data
//   const pipelineData = {
//     labels: STATUS_LIST.map(status => status.label),
//     datasets: [{
//       label: 'Leads by Status',
//       data: STATUS_LIST.map(status =>
//         leadsClean.filter(l => l.status === status.key).length
//       ),
//       backgroundColor: STATUS_LIST.map(status => status.color)
//     }]
//   };

//   // Example revenue data
//   const revenueData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//     datasets: [{
//       label: 'Revenue (in thousands)',
//       data: [45, 60, 75, 90, 110, 130],
//       backgroundColor: '#4fd1c5'
//     }]
//   };

//   // Group leads by status
//   const leadsByStatus = {};
//   STATUS_LIST.forEach(status => {
//     leadsByStatus[status.key] = leadsClean.filter(l => l.status === status.key);
//   });

//   // For recent leads
//   const recentLeads = [...leadsClean].sort((a, b) => b.id - a.id).slice(0, 4);

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="dashboard-container">
        
//         <div className="main-content">
//           {/* --- Stats Cards --- */}
//           <div className="stats-grid">
//             <div className="stat-card" style={{ background: darkMode ? 'rgba(102, 126, 234, 0.1)' : '#f0f4ff' }}>
//               <div className="stat-title">Total Leads</div>
//               <div className="stat-value">{leadsClean.length}</div>
//               <div className="stat-change up">↑ 12% from last month</div>
//             </div>
//             <div className="stat-card" style={{ background: darkMode ? 'rgba(248, 113, 113, 0.1)' : '#fff0f1' }}>
//               <div className="stat-title">Conversion Rate</div>
//               <div className="stat-value">24%</div>
//               <div className="stat-change up">↑ 3% from last month</div>
//             </div>
//             <div className="stat-card" style={{ background: darkMode ? 'rgba(104, 211, 145, 0.1)' : '#f0fdf4' }}>
//               <div className="stat-title">Revenue</div>
//               <div className="stat-value">$152,750</div>
//               <div className="stat-change up">↑ 18% from last month</div>
//             </div>
//             <div className="stat-card" style={{ background: darkMode ? 'rgba(251, 191, 36, 0.1)' : '#fef9e7' }}>
//               <div className="stat-title">Active Deals</div>
//               <div className="stat-value">18</div>
//               <div className="stat-change down">↓ 2 from last week</div>
//             </div>
//           </div>

//           {/* --- Analytics Section --- */}
//           <div className="analytics-section">
//             <div className="analytics-chart">
//               <h2 className="section-title">Revenue Overview</h2>
//               <div className="chart-container">
//                 <Bar data={revenueData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
//               </div>
//             </div>
//             <div className="analytics-chat">
//               <h2 className="section-title">Team Chat</h2>
//               <div className="chat-container">
//                 <p>Chat functionality to be implemented.</p>
//               </div>
//             </div>
//           </div>

//           {/* --- Recent Leads --- */}
//           <div className="top-leads-section">
//             <h2 className="section-title">Recent Leads</h2>
//             <div className="top-leads-grid">
//               {recentLeads.filter(Boolean).map(lead => (
//                 <div key={lead.id} className="top-lead-card" style={{ '--primary-color': lead.color }}>
//                   <div className="lead-main">
//                     <div className="lead-avatar" style={{ background: lead.color }}>
//                       {lead.name ? lead.name.charAt(0) : '?'}
//                     </div>
//                     <div className="lead-details">
//                       <h3>{lead.name}</h3>
//                       <p>{lead.company}</p>
//                     </div>
//                   </div>
//                   <div className="lead-value">${lead.value}</div>
//                   <div className="lead-status">
//                     {lead.status ? lead.status.charAt(0).toUpperCase() + lead.status.slice(1) : ''}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* --- CRM Pipeline --- */}
//           <div className="crm-pipeline">
//             <h2 className="section-title">Sales Pipeline</h2>
//             <div className="pipeline-container">
//               {STATUS_LIST.map(status => (
//                 <StatusColumn
//                   key={status.key}
//                   statusKey={status.key}
//                   statusTitle={status.label}
//                   leadsInColumn={leadsByStatus[status.key]}
//                   columnColor={status.color}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// export default DashboardView;

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';
import { 
  FaRupeeSign, FaPaperPlane, FaStar, FaClock, FaRegBuilding, FaRegMoneyBillAlt, 
  FaChartLine, FaPercentage, FaMedal, FaTrophy, FaUserFriends, FaBullseye, 
  FaFunnelDollar, FaCheckCircle, FaTimesCircle, FaEnvelopeOpenText, FaBan
} from 'react-icons/fa';
import { 
  IoStatsChart, IoReceiptOutline, IoWalletOutline, IoRocketSharp, IoBarChart, 
  IoDocumentTextOutline, IoPeopleOutline, IoMailOutline, IoMailUnreadOutline, 
  IoTimeOutline, IoInfiniteOutline 
} from 'react-icons/io5';
import './dashboard.css';

// Chart.js के आवश्यक एलिमेंट्स को रजिस्टर करें
ChartJS.register(ArcElement, Tooltip, Legend);

// डोनट चार्ट के केंद्र में टेक्स्ट दिखाने के लिए कस्टम प्लगइन
const centerTextPlugin = {
  id: 'centerText',
  afterDraw: (chart) => {
    if (chart.config.options.plugins.centerText.text) {
      const ctx = chart.ctx;
      const { top, left, width, height } = chart.chartArea;
      const text = chart.config.options.plugins.centerText.text;
      
      ctx.save();
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const textX = left + width / 2;
      const textY = top + height / 2;
      ctx.fillText(text, textX, textY);
      ctx.restore();
    }
  },
};

// डैशबोर्ड कंपोनेंट
const Dashboard = () => {
    const user = useSelector(state => state.auth?.user) || { 
    name: 'Testing', 
    email: 'test@example.com', 
    initials: 'TU', 
    avatarUrl: null 
  };
  // प्रत्येक कार्ड के लिए डेटा
  const opportunitiesData = {
    datasets: [{ data: [136, 0, 0], backgroundColor: ['#36A2EB', '#FF6384', '#4BC0C0'], borderWidth: 0 }],
  };
  const salesData = {
    datasets: [{ data: [137, 0, 0], backgroundColor: ['#36A2EB', '#FF6384', '#4BC0C0'], borderWidth: 0 }],
  };
  const followUpsData = {
    datasets: [{ data: [0, 1, 0], backgroundColor: ['#36A2EB', '#FF6384', '#4BC0C0'], borderWidth: 0 }],
  };
  const activeDevicesData = {
    datasets: [{ data: [290, 0, 0], backgroundColor: ['#667eea', '#36A2EB', '#4BC0C0'], borderWidth: 0 }],
  };
  const whatsappOfficialData = {
    datasets: [{ data: [0, 250], backgroundColor: ['#36A2EB', '#E9ECEF'], borderWidth: 0 }],
  };

  // सभी चार्ट के लिए सामान्य विकल्प
  const commonChartOptions = (centerText) => ({
    cutout: '80%',
    plugins: { legend: { display: false }, tooltip: { enabled: true }, centerText: { text: centerText } },
    maintainAspectRatio: false,
  });

  return (
    <div className="dashboard-body">
      {/* ----------- TOP SECTION (IMAGE 1) ----------- */}
      <div className="dashboard-header">
        <h1>Welcome {user.name} </h1>
        <div className="header-actions">
          <div className="date-range">📅 July 1, 2025 - August 7, 2025</div>
          <button className="edit-dashboard-btn">Edit Dashboard</button>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header"><h3>Total Opportunities</h3><span className="card-total">136</span></div>
          <div className="card-content chart-and-legend">
            <div className="chart-container"><Doughnut data={opportunitiesData} options={commonChartOptions('136')} plugins={[centerTextPlugin]} /></div>
            <div className="legend">
              <div className="legend-item"><span className="dot blue"></span>Cold Leads <span className="legend-value">136</span></div>
              <div className="legend-item"><span className="dot red"></span>Warm Leads <span className="legend-value">0</span></div>
              <div className="legend-item"><span className="dot green"></span>Hot Leads <span className="legend-value">0</span></div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header"><h3>Total Sales</h3><span className="card-total">0</span></div>
          <div className="card-content chart-and-legend">
            <div className="chart-container"><Doughnut data={salesData} options={commonChartOptions('137')} plugins={[centerTextPlugin]} /></div>
            <div className="legend">
              <div className="legend-item"><span className="dot blue"></span>Total Leads <span className="legend-value">137</span></div>
              <div className="legend-item"><span className="dot red"></span>Customer <span className="legend-value">0</span></div>
              <div className="legend-item"><span className="dot green"></span>Conversion % <span className="legend-value">0.00</span></div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header"><h3>Total Follow Ups</h3><span className="card-total">1</span></div>
          <div className="card-content chart-and-legend">
            <div className="chart-container"><Doughnut data={followUpsData} options={commonChartOptions('1')} plugins={[centerTextPlugin]} /></div>
            <div className="legend">
              <div className="legend-item"><span className="dot blue"></span>Upcoming <span className="legend-value">0</span></div>
              <div className="legend-item"><span className="dot red-followup"></span>Overdue <span className="legend-value">1</span></div>
              <div className="legend-item"><span className="dot green"></span>Completed <span className="legend-value">0</span></div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header"><h3>Total Active Whatsapp Devices</h3><span className="card-total">4</span></div>
          <div className="card-content chart-and-legend">
            <div className="chart-container"><Doughnut data={activeDevicesData} options={commonChartOptions('290')} plugins={[centerTextPlugin]} /></div>
            <div className="legend">
              <div className="legend-item"><span className="dot dark-blue"></span>Automation <span className="legend-value">290</span></div>
              <div className="legend-item"><span className="dot blue"></span>Single <span className="legend-value">0</span></div>
              <div className="legend-item"><span className="dot green"></span>Bulk/Scheduled <span className="legend-value">0</span></div>
            </div>
          </div>
        </div>
        <div className="card large-card">
          <div className="card-header"><h3>WhatsApp Official</h3><button className="today-stats-btn">Today's Stats</button></div>
          <div className="card-content whatsapp-official-content">
            <div className="chart-container"><Doughnut data={whatsappOfficialData} options={commonChartOptions('250')} plugins={[centerTextPlugin]} /></div>
            <div className="info-grid four-cols">
              <div className="info-box"><FaStar className="info-icon" /><p>Quality Rating</p><span className="info-value flagged">Flagged</span></div>
              <div className="info-box"><FaClock className="info-icon" /><p>Remaining Quota</p><span className="info-value">250</span></div>
              <div className="info-box"><FaPaperPlane className="info-icon" /><p>Sent</p><span className="info-value">0</span></div>
              <div className="info-box"><FaRupeeSign className="info-icon" /><p>Pricing</p><span className="info-value">₹0.00</span></div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header"><h3>Marketing</h3></div>
          <div className="card-content marketing-content">
            <div className="marketing-item main-spent"><FaRegBuilding className="marketing-icon blue-icon"/><p>Ad Spent</p><span>₹0.00</span></div>
            <div className="marketing-item"><IoStatsChart className="marketing-icon green-icon"/><p>CPL (cost per lead)</p><span>₹0.00</span></div>
            <div className="marketing-item"><FaChartLine className="marketing-icon orange-icon"/><p>ROAS (return on Ad Spent)</p><span>0.00</span></div>
          </div>
        </div>
        <div className="card large-card">
           <div className="card-header"><h3>Total Revenue (Earned)</h3><span className="card-total revenue-total">₹0.00</span></div>
          <div className="card-content revenue-content">
              <div className="info-box"><IoWalletOutline className="info-icon" /><p>Income</p><span className="info-value">₹0.00</span></div>
              <div className="info-box"><IoReceiptOutline className="info-icon" /><p>Expense</p><span className="info-value">₹0.00</span></div>
              <div className="info-box"><FaRegMoneyBillAlt className="info-icon" /><p>Net Profit</p><span className="info-value">₹0.00</span></div>
              <div className="info-box"><FaPercentage className="info-icon" /><p>Profitability</p><span className="info-value">0.00%</span></div>
          </div>
        </div>
      </div>

      {/* ----------- BOTTOM SECTION (IMAGE 2) ----------- */}
      <div className="bottom-section">
        
        {/* Leaderboard Card */}
        <div className="card leaderboard-card">
          <div className="card-header no-border"><FaTrophy /><h3>Leaderboard</h3></div>
          <div className="leaderboard-grid">
            <div className="leaderboard-header-row">
              <div><IoRocketSharp /> Ranking</div>
              <div><FaUserFriends /> Name</div>
              <div><FaBullseye /> Conversion</div>
              <div><FaFunnelDollar /> Revenue</div>
            </div>
            <div className="leaderboard-row">
              <div><FaMedal className="rank-gold" /></div>
              <div>Meenu</div>
              <div>0</div>
              <div>0</div>
            </div>
            <div className="leaderboard-row">
              <div><FaMedal className="rank-silver" /></div>
              <div>Jaspreet</div>
              <div>0</div>
              <div>0</div>
            </div>
            <div className="leaderboard-row">
              <div><FaMedal className="rank-bronze" /></div>
              <div>Shivam</div>
              <div>0</div>
              <div>0</div>
            </div>
          </div>
        </div>

        {/* Webinar Stats Card */}
        <div className="card">
          <div className="card-header no-border"><h3>Webinar Stats 0% <span className="coming-soon">(Coming Soon)</span></h3></div>
          <div className="webinar-content">
            <div className="stat-box-grid">
              <div className="stat-box"><IoPeopleOutline className="stat-icon red" /><p>Registrations</p><span>0</span></div>
              <div className="stat-box"><IoDocumentTextOutline className="stat-icon orange" /><p>Show-up</p><span>0</span></div>
              <div className="stat-box"><IoBarChart className="stat-icon blue" /><p>During pitch</p><span>0</span></div>
              <div className="stat-box"><IoStatsChart className="stat-icon green" /><p>Sales</p><span>0</span></div>
            </div>
            <div className="funnel-container">
              <div className="funnel-stage red-funnel"><p>0 (0%)</p></div>
              <div className="funnel-stage orange-funnel"><p>0 (0%)</p></div>
              <div className="funnel-stage green-funnel"><p>0 (0%)</p></div>
            </div>
          </div>
        </div>

        {/* Email Stats Card */}
        <div className="card">
          <div className="card-header no-border"><h3>Email Stats <span className="coming-soon">(Coming Soon)</span></h3></div>
          <div className="stat-box-grid seven-cols">
            <div className="stat-box"><IoPeopleOutline className="stat-icon" /><p>Subscribers</p></div>
            <div className="stat-box"><IoMailOutline className="stat-icon" /><p>Sent</p></div>
            <div className="stat-box"><FaCheckCircle className="stat-icon" /><p>Delivered</p></div>
            <div className="stat-box"><FaTimesCircle className="stat-icon" /><p>Failed</p></div>
            <div className="stat-box"><FaEnvelopeOpenText className="stat-icon" /><p>Avg Open Rate</p></div>
            <div className="stat-box"><FaBan className="stat-icon" /><p>Unsubscribes</p></div>
            <div className="stat-box"><FaCheckCircle className="stat-icon" /><p>Active</p></div>
          </div>
        </div>

        {/* Automation Stats Card */}
        <div className="card">
          <div className="card-header no-border"><h3>Automation Stats <span className="coming-soon">(Coming Soon)</span></h3></div>
          <div className="stat-box-grid four-cols">
            <div className="stat-box"><FaCheckCircle className="stat-icon" /><p>Active</p></div>
            <div className="stat-box"><FaTimesCircle className="stat-icon red-text" /><p>Disabled</p></div>
            <div className="stat-box"><IoInfiniteOutline className="stat-icon" /><p>Tasks Executed</p></div>
            <div className="stat-box"><IoTimeOutline className="stat-icon" /><p>Time Saved</p></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
