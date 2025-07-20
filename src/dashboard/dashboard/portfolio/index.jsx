// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setNewFunnelDetails } from '../../../redux/uiSlice';
// import './funnel.css'; // सुनिश्चित करें कि यह CSS फ़ाइल अपडेट की गई है

// // --- SVG Icons ---
// const SearchIcon = () => (
//     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7422 10.3438H11.0234L10.7656 10.0938C11.6641 9.03125 12.1875 7.66406 12.1875 6.125C12.1875 2.75 9.4375 0 6.09375 0C2.75 0 0 2.75 0 6.125C0 9.5 2.75 12.25 6.09375 12.25C7.63281 12.25 9.00781 11.7188 10.0703 10.7891L10.3203 11.0469V11.7656L14.8438 16L16 14.8438L11.7422 10.3438ZM6.09375 10.3438C3.78906 10.3438 1.90625 8.46094 1.90625 6.125C1.90625 3.78906 3.78906 1.90625 6.09375 1.90625C8.40625 1.90625 10.2812 3.78906 10.2812 6.125C10.2812 8.46094 8.40625 10.3438 6.09375 10.3438Z" fill="#888888"/></svg>
// );
// const VisitIcon = () => (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
// );
// const EditIcon = () => (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.628 2.17157 19 2.17157C19.372 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26265 21.471 3.57444 21.6131 3.9176C21.7553 4.26076 21.8284 4.62796 21.8284 5C21.8284 5.37204 21.7553 5.73924 21.6131 6.0824C21.471 6.42556 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
// );
// const DeleteIcon = () => (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6H5H21M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.071 5 20.5304 5 20V6H19Z" stroke="#E53E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
// );
// const CloseIcon = () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
// );
// const PlusIcon = () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4V20M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
// );
// // --- End of SVG Icons ---

// // Publish/Unpublish Toggle Component
// const PublishToggle = ({ isPublished, onToggle }) => {
//     return (
//         <label className="toggle-switch" onClick={(e) => e.stopPropagation()}>
//             <input type="checkbox" checked={isPublished} onChange={onToggle} />
//             <span className="toggle-slider"></span>
//         </label>
//     );
// };


// // Mock data with isPublished status
// const initialLeadsData = [
//     { id: 1, name: 'Aarav Sharma', email: 'aarav.s@example.com', phone: '9876543210', value: '-', funnel: 'VSL (Video Sales Letter Funnel)', funnelType: 'vsl', isPublished: true },
//     { id: 2, name: 'Priya Patel', email: 'priya.p@example.com', phone: '8765432109', value: 'Rs. 5000', funnel: '3-Day Paid Zoom Webinar Funnel', funnelType: 'paid-zoom', isPublished: true },
//     { id: 3, name: 'Rohan Mehta', email: 'rohan.m@example.com', phone: '7654321098', value: '-', funnel: 'Free Zoom Webinar Funnel', funnelType: 'free-zoom', isPublished: false },
//     { id: 4, name: 'Sneha Gupta', email: 'sneha.g@example.com', phone: '6543210987', value: 'Rs. 12500', funnel: '3-Day Paid Zoom Webinar Funnel', funnelType: 'paid-zoom', isPublished: true },
//     { id: 5, name: 'Vikram Singh', email: 'vikram.s@example.com', phone: '5432109876', value: '-', funnel: 'VSL (Video Sales Letter Funnel)', funnelType: 'vsl', isPublished: false },
//     { id: 6, name: 'Anjali Reddy', email: 'anjali.r@example.com', phone: '4321098765', value: '-', funnel: 'Free Zoom Webinar Funnel', funnelType: 'free-zoom', isPublished: true },
// ];

// function FunnelManagementComponent() {
//     const [modalOpen, setModalOpen] = useState(false);
//     const [newFunnelName, setNewFunnelName] = useState('');
//     const [leads, setLeads] = useState([]);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         // API call simulation
//         setLeads(initialLeadsData);
//     }, []);

//     const handleOpenModal = () => setModalOpen(true);
//     const handleCloseModal = () => {
//         setModalOpen(false);
//         setNewFunnelName('');
//     };
    
//     const handleRowClick = (leadName) => {
//         console.log(`Navigating to details for: ${leadName}`);
//         navigate(`/dashboard/lead/${encodeURIComponent(leadName)}`);
//     };

//     const handlePublishToggle = (leadId) => {
//         setLeads(leads.map(lead =>
//             lead.id === leadId ? { ...lead, isPublished: !lead.isPublished } : lead
//         ));
//         console.log(`Toggled publish status for Lead ID: ${leadId}`);
//     };

//     const handleProceedWithNewFunnel = () => {
//         if (!newFunnelName.trim()) {
//             alert('Please enter a funnel name.');
//             return;
//         }
//         dispatch(setNewFunnelDetails({ name: newFunnelName }));
//         handleCloseModal();
//         navigate(`/dashboard/Funnel_settings/${newFunnelName}`);
//     };
    
//     const handleActionClick = (e, callback) => {
//         e.stopPropagation(); // Prevent row click from firing
//         callback();
//     };

//     return (
//         <div className="page-background">
//             <div className="funnel-management-container">
//                 {/* Header Section */}
//                 <div className="controls-header">
//                     <h1 className="main-title">Funnel Management</h1>
//                     <div className="header-actions">
//                         <div className="search-bar">
//                             <input type="text" placeholder="Search Leads..." />
//                             <button className="search-button" aria-label="Search">
//                                 <SearchIcon />
//                             </button>
//                         </div>
//                         <button className="add-funnel-button" onClick={handleOpenModal}>
//                             <PlusIcon /> Funnel
//                         </button>
//                     </div>
//                 </div>

//                 {/* Table Section */}
//                 <div className="funnel-table-container">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Phone</th>
//                                 <th>Value</th>
//                                 <th>Funnel</th>
//                                 <th>Status</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {leads.map((lead) => (
//                                 <tr key={lead.id} onClick={() => handleRowClick(lead.name)} className="table-row-clickable">
//                                     <td>{lead.name}</td>
//                                     <td>{lead.email}</td>
//                                     <td>{lead.phone}</td>
//                                     <td>{lead.value}</td>
//                                     <td>
//                                         <span className={`funnel-tag ${lead.funnelType}`}>
//                                             {lead.funnel}
//                                         </span>
//                                     </td>
//                                     <td>
//                                         <PublishToggle 
//                                             isPublished={lead.isPublished} 
//                                             onToggle={() => handlePublishToggle(lead.id)}
//                                         />
//                                     </td>
//                                     <td className="actions-cell">
//                                         <button className="icon-button" aria-label="View Lead" onClick={(e) => handleActionClick(e, () => console.log(`Viewing lead ID: ${lead.id}`))}>
//                                             <VisitIcon />
//                                         </button>
//                                         <button className="icon-button" aria-label="Edit Lead" onClick={(e) => handleActionClick(e, () => console.log(`Editing lead ID: ${lead.id}`))}>
//                                             <EditIcon />
//                                         </button>
//                                         <button className="icon-button" aria-label="Delete Lead" onClick={(e) => handleActionClick(e, () => {
//                                             if (window.confirm('Are you sure?')) {
//                                                 setLeads(leads.filter(l => l.id !== lead.id));
//                                                 console.log(`Deleted lead ID: ${lead.id}`);
//                                             }
//                                         })}>
//                                             <DeleteIcon />
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             {/* Create New Funnel Modal */}
//             {modalOpen && (
//                 <div className="modal-overlay">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h2>Create New Funnel</h2>
//                             <button className="close-modal-button" onClick={handleCloseModal} aria-label="Close modal">
//                                 <CloseIcon />
//                             </button>
//                         </div>
//                         <div className="modal-body">
//                             <div className="form-group">
//                                 <label htmlFor="funnelName">Funnel Name</label>
//                                 <input
//                                     id="funnelName"
//                                     type="text"
//                                     placeholder="Name Your Funnel"
//                                     value={newFunnelName}
//                                     onChange={(e) => setNewFunnelName(e.target.value)}
//                                 />
//                             </div>
//                         </div>
//                         <div className="modal-footer">
//                             <button className="cancel-button" onClick={handleCloseModal}>
//                                 Cancel
//                             </button>
//                             <button className="proceed-button" onClick={handleProceedWithNewFunnel}>
//                                 Proceed &gt;
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default FunnelManagementComponent;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setNewFunnelDetails } from '../../../redux/uiSlice';
import './funnel.css';

// --- SVG Icons ---
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.7422 10.3438H11.0234L10.7656 10.0938C11.6641 9.03125 12.1875 7.66406 12.1875 6.125C12.1875 2.75 9.4375 0 6.09375 0C2.75 0 0 2.75 0 6.125C0 9.5 2.75 12.25 6.09375 12.25C7.63281 12.25 9.00781 11.7188 10.0703 10.7891L10.3203 11.0469V11.7656L14.8438 16L16 14.8438L11.7422 10.3438ZM6.09375 10.3438C3.78906 10.3438 1.90625 8.46094 1.90625 6.125C1.90625 3.78906 3.78906 1.90625 6.09375 1.90625C8.40625 1.90625 10.2812 3.78906 10.2812 6.125C10.2812 8.46094 8.40625 10.3438 6.09375 10.3438Z" fill="#888888"/>
  </svg>
);

const VisitIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EditIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.628 2.17157 19 2.17157C19.372 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26265 21.471 3.57444 21.6131 3.9176C21.7553 4.26076 21.8284 4.62796 21.8284 5C21.8284 5.37204 21.7553 5.73924 21.6131 6.0824C21.471 6.42556 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DeleteIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6H5H21M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.071 5 20.5304 5 20V6H19Z" stroke="#E53E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Publish/Unpublish Toggle Component
const PublishToggle = ({ isPublished, onToggle }) => {
  return (
    <label className="toggle-switch" onClick={(e) => e.stopPropagation()}>
      <input type="checkbox" checked={isPublished} onChange={onToggle} />
      <span className="toggle-slider"></span>
    </label>
  );
};

// Mock data with isPublished status
const initialLeadsData = [
  { id: 1, name: 'Aarav Sharma', email: 'aarav.s@example.com', phone: '9876543210', value: '-', funnel: 'VSL (Video Sales Letter Funnel)', funnelType: 'vsl', isPublished: true },
  { id: 2, name: 'Priya Patel', email: 'priya.p@example.com', phone: '8765432109', value: 'Rs. 5000', funnel: '3-Day Paid Zoom Webinar Funnel', funnelType: 'paid-zoom', isPublished: true },
  { id: 3, name: 'Rohan Mehta', email: 'rohan.m@example.com', phone: '7654321098', value: '-', funnel: 'Free Zoom Webinar Funnel', funnelType: 'free-zoom', isPublished: false },
  { id: 4, name: 'Sneha Gupta', email: 'sneha.g@example.com', phone: '6543210987', value: 'Rs. 12500', funnel: '3-Day Paid Zoom Webinar Funnel', funnelType: 'paid-zoom', isPublished: true },
  { id: 5, name: 'Vikram Singh', email: 'vikram.s@example.com', phone: '5432109876', value: '-', funnel: 'VSL (Video Sales Letter Funnel)', funnelType: 'vsl', isPublished: false },
  { id: 6, name: 'Anjali Reddy', email: 'anjali.r@example.com', phone: '4321098765', value: '-', funnel: 'Free Zoom Webinar Funnel', funnelType: 'free-zoom', isPublished: true },
];

function FunnelManagementComponent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [newFunnelName, setNewFunnelName] = useState('');
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Get coachID from Redux auth state
const coachID = useSelector(state => state.auth?.user?.id);

  useEffect(() => {
    const fetchFunnels = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Mock API response for testing
        // const mockApiResponse = [
        //   { id: 101, name: 'API Funnel 1', email: 'api1@example.com', phone: '1111111111', value: 'Rs. 10000', type: 'VSL (Video Sales Letter Funnel)', isPublished: true },
        //   { id: 102, name: 'API Funnel 2', email: 'api2@example.com', phone: '2222222222', value: '-', type: 'Free Zoom Webinar Funnel', isPublished: false },
        // ];

        // Uncomment this to use real API
        if (!coachID) {
          throw new Error('Coach ID not found');
        }
        const response = await fetch(`http://api.funnelseye.com/api/funnels/coach/${coachID}/funnels`);
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const mockApiResponse = await response.json();

        // Transform API data to match our expected format
        const transformedData = mockApiResponse.map((funnel, index) => ({
          id: funnel.id || index + 1,
          name: funnel.name || `Funnel ${index + 1}`,
          email: funnel.email || '-',
          phone: funnel.phone || '-',
          value: funnel.value || '-',
          funnel: funnel.type || 'Unknown Funnel Type',
          funnelType: mapFunnelType(funnel.type),
          isPublished: funnel.isPublished || false
        }));

        // Combine API data with mock data for demonstration
        setLeads([...transformedData, ...initialLeadsData]);
      } catch (err) {
        console.error('Error fetching funnels:', err);
        setError(err.message);
        // Fall back to mock data if API fails
        setLeads(initialLeadsData);
      } finally {
        setLoading(false);
      }
    };

    fetchFunnels();
  }, [coachID]);

  // Helper function to map API funnel types to our types
  const mapFunnelType = (type) => {
    if (!type) return 'vsl';
    const lowerType = type.toLowerCase();
    if (lowerType.includes('zoom')) {
      return lowerType.includes('paid') ? 'paid-zoom' : 'free-zoom';
    }
    return 'vsl';
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => {
    setModalOpen(false);
    setNewFunnelName('');
  };
  
  const handleRowClick = (leadName) => {
    console.log(`Navigating to details for: ${leadName}`);
    navigate(`/dashboard/lead/${encodeURIComponent(leadName)}`);
  };

  const handlePublishToggle = (leadId) => {
    setLeads(leads.map(lead =>
      lead.id === leadId ? { ...lead, isPublished: !lead.isPublished } : lead
    ));
    console.log(`Toggled publish status for Lead ID: ${leadId}`);
  };

  const handleProceedWithNewFunnel = () => {
    if (!newFunnelName.trim()) {
      alert('Please enter a funnel name.');
      return;
    }
    dispatch(setNewFunnelDetails({ name: newFunnelName }));
    handleCloseModal();
    navigate(`/dashboard/Funnel_settings/${newFunnelName}`);
  };
  
  const handleActionClick = (e, callback) => {
    e.stopPropagation();
    callback();
  };

  if (loading) {
    return (
      <div className="page-background">
        <div className="funnel-management-container">
          <div className="loading-message">Loading funnels...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-background">
      <div className="funnel-management-container">
        {/* Header Section */}
        <div className="controls-header">
          <h1 className="main-title">Funnel Management</h1>
          {error && (
            <div className="error-message">
              Warning: Could not fetch funnels from API. Showing default data. ({error})
            </div>
          )}
          <div className="header-actions">
            <div className="search-bar">
              <input type="text" placeholder="Search Leads..." />
              <button className="search-button" aria-label="Search">
                <SearchIcon />
              </button>
            </div>
            <button className="add-funnel-button" onClick={handleOpenModal}>
              <PlusIcon /> Funnel
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="funnel-table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Value</th>
                <th>Funnel</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} onClick={() => handleRowClick(lead.name)} className="table-row-clickable">
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.phone}</td>
                  <td>{lead.value}</td>
                  <td>
                    <span className={`funnel-tag ${lead.funnelType}`}>
                      {lead.funnel}
                    </span>
                  </td>
                  <td>
                    <PublishToggle 
                      isPublished={lead.isPublished} 
                      onToggle={(e) => {
                        e.stopPropagation();
                        handlePublishToggle(lead.id);
                      }}
                    />
                  </td>
                  <td className="actions-cell">
                    <button className="icon-button" aria-label="View Lead" onClick={(e) => handleActionClick(e, () => console.log(`Viewing lead ID: ${lead.id}`))}>
                      <VisitIcon />
                    </button>
                    <button className="icon-button" aria-label="Edit Lead" onClick={(e) => handleActionClick(e, () => console.log(`Editing lead ID: ${lead.id}`))}>
                      <EditIcon />
                    </button>
                    <button className="icon-button" aria-label="Delete Lead" onClick={(e) => handleActionClick(e, () => {
                      if (window.confirm('Are you sure?')) {
                        setLeads(leads.filter(l => l.id !== lead.id));
                        console.log(`Deleted lead ID: ${lead.id}`);
                      }
                    })}>
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create New Funnel Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Create New Funnel</h2>
              <button className="close-modal-button" onClick={handleCloseModal} aria-label="Close modal">
                <CloseIcon />
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="funnelName">Funnel Name</label>
                <input
                  id="funnelName"
                  type="text"
                  placeholder="Name Your Funnel"
                  value={newFunnelName}
                  onChange={(e) => setNewFunnelName(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="cancel-button" onClick={handleCloseModal}>
                Cancel
              </button>
              <button className="proceed-button" onClick={handleProceedWithNewFunnel}>
                Proceed &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FunnelManagementComponent;