// LeadsView.jsx
import React, { useState, useEffect, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// --- ICONS ---
const IconTableView = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm5 0v3h4V4h-4z"/></svg>;
const IconPipelineView = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12 1.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5zm-3 0a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5zm-3 0a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5zm-3 0a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5z"/></svg>;
const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V12h2.293l6.5-6.5zm1.586 3L10.5 6.207 7 9.707V12h2.293l2.5-2.5zm1.586 3L10.5 9.207l-4 4V16h2.793l4-4z"/></svg>;
const DeleteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.51z"/></svg>;
const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V6.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 6.383v4.722Z"/></svg>;
const MoreIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>;
const FilterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/></svg>;
const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>;
const FunnelIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>;
const ExportIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/></svg>;
const ImportIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8.5 9.5a.5.5 0 0 1-1 0V5.707L6.354 6.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 5.707V9.5z"/><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/></svg>;
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg>;
const AlertCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>;

// --- DATA CONFIGURATION ---
const FUNNELS = [
  { id: 'funnel1', name: 'VSL Funnel', type: 'calendar_funnel', statuses: [ { key: 'registered_vsl_training', label: 'Registered for Free VSL Training', color: '#667eea' }, { key: 'started_watching_vsl', label: 'Started Watching VSL', color: '#7c3aed' }, { key: 'watched_25', label: 'Watched 25%', color: '#8b5cf6' }, { key: 'watched_50', label: 'Watched 50%', color: '#a78bfa' }, { key: 'clicked_booking_button', label: 'Clicked Booking Button', color: '#c4b5fd' }, { key: 'call_booked', label: 'Call Booked', color: '#a5b4fc' }, { key: 'call_no_show', label: 'Call No-Show', color: '#93c5fd' }, { key: 'call_done_not_closed', label: 'Call Done - Not Closed', color: '#60a5fa' }, { key: 'call_done_sale_closed', label: 'Call Done - Sale Closed', color: '#3b82f6' } ] },
  { id: 'funnel2', name: 'Paid Webinar', type: 'payment_funnel', statuses: [ { key: 'viewed_sales_page', label: 'Viewed Sales Page (but didn\'t buy)', color: '#f59e0b' }, { key: 'registered_paid', label: 'Registered & Paid', color: '#fbbf24' }, { key: 'attended_day_1', label: 'Attended Day 1', color: '#fcd34d' }, { key: 'attended_day_2', label: 'Attended Day 2', color: '#fde68a' }, { key: 'attended_day_3', label: 'Attended Day 3', color: '#fef3c7' }, { key: 'missed_any_day', label: 'Missed Any Day', color: '#fca5a5' }, { key: 'clicked_high_ticket_offer', label: 'Clicked High-Ticket Offer', color: '#f87171' }, { key: 'booked_sales_call', label: 'Booked Sales Call', color: '#ef4444' }, { key: 'call_no_show_payment', label: 'Call No-Show', color: '#dc2626' }, { key: 'call_done_not_closed_payment', label: 'Call Done - Not Closed', color: '#b91c1c' }, { key: 'sale_closed', label: 'Sale Closed', color: '#991b1b' } ] },
  { id: 'funnel3', name: 'Free Webinar', type: 'meeting_funnel', statuses: [ { key: 'registered_webinar', label: 'Registered for Webinar', color: '#10b981' }, { key: 'added_whatsapp_community', label: 'Added to WhatsApp Community', color: '#34d399' }, { key: 'opened_reminder_email', label: 'Opened Reminder Email', color: '#6ee7b7' }, { key: 'attended_live_day1', label: 'Attended Live (Day 1)', color: '#a7f3d0' }, { key: 'missed_live', label: 'Missed Live', color: '#d1fae5' }, { key: 'clicked_paid_booking_link', label: 'Clicked Paid Booking Link', color: '#a5f3fc' }, { key: 'call_booked_meeting', label: 'Call Booked', color: '#67e8f9' }, { key: 'call_no_show_meeting', label: 'Call No-Show', color: '#22d3ee' }, { key: 'call_done_not_closed_meeting', label: 'Call Done - Not Closed', color: '#06b6d4' }, { key: 'clicked_high_ticket_offer_meeting', label: 'Clicked High-Ticket Offer', color: '#0891b2' }, { key: 'call_done_sale_closed_meeting', label: 'Call Done - Sale Closed', color: '#0e7490' } ] },
  { id: 'funnel4', name: 'Consultation Funnel', type: 'consultation_funnel', statuses: [ { key: 'initial_contact', label: 'Initial Contact', color: '#8b5cf6' }, { key: 'needs_assessment', label: 'Needs Assessment', color: '#7c3aed' }, { key: 'proposal_sent', label: 'Proposal Sent', color: '#6d28d9' }, { key: 'follow_up', label: 'Follow Up', color: '#5b21b6' }, { key: 'closed_won', label: 'Closed - Won', color: '#4c1d95' }, { key: 'closed_lost', label: 'Closed - Lost', color: '#7e22ce' } ] },
  { id: 'funnel5', name: 'Product Demo', type: 'demo_funnel', statuses: [ { key: 'requested_demo', label: 'Demo Requested', color: '#ec4899' }, { key: 'demo_scheduled', label: 'Demo Scheduled', color: '#db2777' }, { key: 'demo_completed', label: 'Demo Completed', color: '#be185d' }, { key: 'proposal_sent_demo', label: 'Proposal Sent', color: '#9d174d' }, { key: 'negotiation', label: 'Negotiation', color: '#831843' } ] }
];
const ALL_LEADS_FUNNEL = { id: 'all', name: 'All Leads', statuses: [] };

// --- MOCK DATA ---
const defaultLeads = [
  { id: 1, name: 'Jyoti Sharma', email: 'riaanshubh@gmail.com', number: '+91 78763*****', whatsapp_number: '+91 81234 56789', value: '5000', status: 'call_booked', color: '#667eea', type: 'calendar_funnel', funnelId: 'funnel1', tags: ['HP S x'], dob: 'mm/dd/yyyy', createdOn: '16/07/2025 21:41 PM', notes: 'Interested in premium package', followUps: [ { date: '18/07/2025', note: 'Follow up call scheduled' } ], appointments: [ { date: '20/07/2025', time: '15:00', note: 'Product demo' } ] },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', number: '+9876543210', whatsapp_number: '+9876543210', value: '', status: 'registered_webinar', color: '#10b981', type: 'meeting_funnel', funnelId: 'funnel3', tags: ['New Lead'], dob: '05/12/1990', createdOn: '15/07/2025 14:30 PM', notes: 'Asked about pricing details', followUps: [], appointments: [] },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', number: '+1122334455', whatsapp_number: '+1122334455', value: '7500', status: 'registered_paid', color: '#f59e0b', type: 'payment_funnel', funnelId: 'funnel2', tags: ['VIP', 'Repeat Customer'], dob: '22/08/1985', createdOn: '14/07/2025 10:15 AM', notes: 'Upgrading to enterprise plan', followUps: [ { date: '16/07/2025', note: 'Send contract details' } ], appointments: [] },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', number: '+9988776655', whatsapp_number: '+9988776655', value: '', status: 'initial_contact', color: '#8b5cf6', type: 'consultation_funnel', funnelId: 'funnel4', tags: ['Consultation'], dob: '10/05/1988', createdOn: '17/07/2025 09:30 AM', notes: 'Interested in consulting services', followUps: [], appointments: [] },
  { id: 5, name: 'David Brown', email: 'david@example.com', number: '+1122334455', whatsapp_number: '+1122334455', value: '', status: 'requested_demo', color: '#ec4899', type: 'demo_funnel', funnelId: 'funnel5', tags: ['Demo'], dob: '15/03/1975', createdOn: '17/07/2025 11:45 AM', notes: 'Requested product demo', followUps: [], appointments: [] }
];

// --- NOTIFICATION COMPONENT ---
const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === 'success';
  const bgColor = isSuccess ? 'bg-green-100' : 'bg-red-100';
  const textColor = isSuccess ? 'text-green-800' : 'text-red-800';
  const Icon = isSuccess ? CheckCircleIcon : AlertCircleIcon;

  return (
    <div className={`notification ${bgColor} ${textColor}`}>
      <Icon />
      <span>{message}</span>
      <button onClick={onClose}><CloseIcon /></button>
    </div>
  );
};

// --- FUNNEL SELECTION MODAL ---
const FunnelSelectionModal = ({ funnels, onSelect, onClose }) => {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h3>Funnel Chunein</h3>
            <button onClick={onClose}><CloseIcon /></button>
          </div>
          <div className="modal-body">
            <div className="funnel-grid">
              {[ALL_LEADS_FUNNEL, ...funnels].map(funnel => (
                <div key={funnel.id} className="funnel-card" onClick={() => onSelect(funnel)}>
                  <div className="funnel-icon"><FunnelIcon /></div>
                  <h4>{funnel.name}</h4>
                  <p>{funnel.id === 'all' ? `${defaultLeads.length} total leads` : `${funnel.statuses.length} stages`}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

// --- CREATE/EDIT LEAD MODAL ---
const CreateLeadModal = ({ onClose, onCreate, leadToEdit, onUpdate }) => {
    const isEditMode = !!leadToEdit;
    const initialFormData = isEditMode ? leadToEdit : {
      name: '', email: '', number: '', whatsapp_number: '', value: '', status: '', funnelId: '', tags: [], dob: '', notes: '', followUps: [], appointments: []
    };
    
    const [formData, setFormData] = useState(initialFormData);
    const [newTag, setNewTag] = useState('');
    const [selectedFunnel, setSelectedFunnel] = useState(isEditMode ? FUNNELS.find(f => f.id === leadToEdit.funnelId) : null);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
  
    const handleAddTag = () => {
      if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
        setFormData(prev => ({ ...prev, tags: [...prev.tags, newTag.trim()] }));
        setNewTag('');
      }
    };
  
    const handleRemoveTag = (tagToRemove) => {
      setFormData(prev => ({ ...prev, tags: prev.tags.filter(tag => tag !== tagToRemove) }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (isEditMode) {
        onUpdate(formData);
      } else {
        const newLead = {
          ...formData,
          id: `lead-${Date.now()}`,
          createdOn: new Date().toLocaleString(),
          color: selectedFunnel.statuses.find(s => s.key === formData.status)?.color || '#667eea',
          type: selectedFunnel.type
        };
        onCreate(newLead);
      }
      onClose();
    };
  
    return (
      <div className="modal-overlay">
        <div className="modal" style={{maxWidth: '600px'}}>
          <div className="modal-header">
            <h3>{isEditMode ? 'Edit Lead' : 'Create New Lead'}</h3>
            <button onClick={onClose}><CloseIcon /></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit} className="lead-form">
              <div className="form-row">
                <div className="form-group"><label>Name*</label><input type="text" name="name" value={formData.name} onChange={handleInputChange} required /></div>
                <div className="form-group"><label>Email*</label><input type="email" name="email" value={formData.email} onChange={handleInputChange} required /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Phone Number*</label><input type="tel" name="number" value={formData.number} onChange={handleInputChange} required /></div>
                <div className="form-group"><label>WhatsApp Number</label><input type="tel" name="whatsapp_number" value={formData.whatsapp_number} onChange={handleInputChange} /></div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Funnel*</label>
                  <select name="funnelId" value={formData.funnelId} onChange={(e) => { const funnel = FUNNELS.find(f => f.id === e.target.value); setSelectedFunnel(funnel); setFormData(prev => ({ ...prev, funnelId: e.target.value, status: '' })); }} required>
                    <option value="">Select Funnel</option>
                    {FUNNELS.map(funnel => <option key={funnel.id} value={funnel.id}>{funnel.name}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Status*</label>
                  <select name="status" value={formData.status} onChange={handleInputChange} disabled={!formData.funnelId} required>
                    <option value="">Select Status</option>
                    {selectedFunnel?.statuses.map(status => <option key={status.key} value={status.key}>{status.label}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Opportunity Value (₹)</label><input type="number" name="value" value={formData.value} onChange={handleInputChange} /></div>
                <div className="form-group"><label>Date of Birth</label><input type="date" name="dob" value={formData.dob} onChange={handleInputChange} /></div>
              </div>
              <div className="form-group">
                <label>Tags</label>
                <div className="tags-input">
                  <div className="tags-container">{formData.tags.map(tag => <span key={tag} className="tag">{tag}<button type="button" onClick={() => handleRemoveTag(tag)}><CloseIcon /></button></span>)}</div>
                  <div className="tag-input-container"><input type="text" value={newTag} onChange={(e) => setNewTag(e.target.value)} placeholder="Naya tag daalein" /><button type="button" onClick={handleAddTag}><PlusIcon /></button></div>
                </div>
              </div>
              <div className="form-group"><label>Notes</label><textarea name="notes" value={formData.notes} onChange={handleInputChange} rows="3" /></div>
              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
                <button type="submit" className="btn-submit">{isEditMode ? 'Update Karein' : 'Lead Banaye'}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

// --- LEAD DETAILS MODAL ---
const LeadDetailsModal = ({ lead, onClose, onUpdate, onDelete, getStatusLabel, getFunnelName }) => {
    const [activeTab, setActiveTab] = useState('details');
  
    if (!lead) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal" style={{maxWidth: '800px'}}>
          <div className="modal-header">
            <h3>{lead.name}</h3>
            <button onClick={onClose}><CloseIcon /></button>
          </div>
          <div className="modal-body">
            <div className="lead-details-header">
                <div>
                    <p><strong>Status:</strong> {getStatusLabel(lead.status, lead.funnelId)}</p>
                    <p><strong>Funnel:</strong> {getFunnelName(lead.funnelId)}</p>
                    {lead.value && <p className="lead-value"><strong>Value:</strong> ₹{lead.value}</p>}
                </div>
                <div className="action-buttons">
                    <button onClick={() => onUpdate(lead)} className="btn-update"><EditIcon /> Edit</button>
                    <button onClick={() => { if(window.confirm('Pakka delete karna hai?')) { onDelete(lead.id); onClose(); } }} className="btn-delete"><DeleteIcon /> Delete</button>
                </div>
            </div>
            <div className="tab-container">
                <div className="tabs">
                    <button onClick={() => setActiveTab('details')} className={activeTab === 'details' ? 'active' : ''}>Details</button>
                    <button onClick={() => setActiveTab('notes')} className={activeTab === 'notes' ? 'active' : ''}>Notes</button>
                    <button onClick={() => setActiveTab('tasks')} className={activeTab === 'tasks' ? 'active' : ''}>Follow-ups</button>
                </div>
            </div>
            <div className="tab-content">
                {activeTab === 'details' && (
                    <div className="lead-info-grid">
                        <div className="info-item"><h4>Email</h4><p>{lead.email}</p></div>
                        <div className="info-item"><h4>Phone</h4><p>{lead.number}</p></div>
                        <div className="info-item"><h4>WhatsApp</h4><p>{lead.whatsapp_number || 'N/A'}</p></div>
                        <div className="info-item"><h4>Created On</h4><p>{lead.createdOn}</p></div>
                        <div className="info-item"><h4>DOB</h4><p>{lead.dob || 'N/A'}</p></div>
                        <div className="info-item"><h4>Tags</h4><div className="tags-container">{lead.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div></div>
                    </div>
                )}
                {activeTab === 'notes' && <div className="notes-section"><p>{lead.notes || 'Koi notes nahi hai.'}</p></div>}
                {activeTab === 'tasks' && <div className="tasks-section"><p>Follow-up feature jald hi aa raha hai.</p></div>}
            </div>
          </div>
        </div>
      </div>
    );
};

// --- DRAG & DROP COMPONENTS ---
const DraggableLeadItem = ({ lead, onClick }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: 'LEAD',
      item: { lead },
      collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
    }));
  
    return (
      <div ref={drag} className={`pipeline-lead-item ${isDragging ? 'dragging' : ''}`} onClick={() => onClick(lead)}>
        <h4>{lead.name}</h4>
        <p><EmailIcon /> {lead.email}</p>
        {lead.value && <div className="value-display"><span>Rs. {lead.value}</span></div>}
      </div>
    );
};
  
const DroppableStatusColumn = ({ statusInfo, leadsInColumn, onLeadClick, onStatusChange }) => {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: 'LEAD',
      drop: (item) => onStatusChange(item.lead.id, statusInfo.key),
      collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    }));
  
    const columnTotalValue = leadsInColumn.reduce((sum, lead) => sum + (Number(lead.value) || 0), 0);
  
    return (
      <div ref={drop} className={`pipeline-column ${isOver ? 'drop-target' : ''}`}>
        <div className="column-header">
          <span className="color-dot" style={{ backgroundColor: statusInfo.color }}></span>
          <h3>{statusInfo.label}</h3>
          <span className="lead-count">{leadsInColumn.length} {columnTotalValue > 0 && `(₹${columnTotalValue})`}</span>
        </div>
        <div className="column-body">
          {leadsInColumn.map((lead) => <DraggableLeadItem key={lead.id} lead={lead} onClick={onLeadClick} />)}
        </div>
      </div>
    );
};

// --- TABLE VIEW COMPONENT ---
const LeadsTableView = ({ leads, onEditLead, onDeleteLead, onExport, onImport, getStatusLabel, getFunnelName, selectedLeads, onSelectLead, onSelectAllLeads }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedLeads = React.useMemo(() => {
    let sortableLeads = [...leads];
    if (sortConfig.key) {
      sortableLeads.sort((a, b) => {
        const valA = a[sortConfig.key] || '';
        const valB = b[sortConfig.key] || '';
        if (valA < valB) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (valA > valB) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
      });
    }
    return sortableLeads;
  }, [leads, sortConfig]);

  const filteredLeads = sortedLeads.filter(lead => {
    const searchLower = searchTerm.toLowerCase();
    return Object.values(lead).some(value => 
      String(value).toLowerCase().includes(searchLower)
    ) || getStatusLabel(lead.status, lead.funnelId).toLowerCase().includes(searchLower)
      || getFunnelName(lead.funnelId).toLowerCase().includes(searchLower);
  });

  if (!leads) return <div className="empty-state">Loading...</div>;

  return (
    <div className="table-view-container">
      <div className="table-controls">
        <div className="search-bar">
          <SearchIcon />
          <input type="text" placeholder="Search leads..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div className="table-actions">
          <button className="btn-export" onClick={onExport}><ExportIcon /> Export</button>
          <label className="btn-import"><ImportIcon /> Import<input type="file" accept=".csv" onChange={onImport} style={{ display: 'none' }} /></label>
        </div>
      </div>
      
      {filteredLeads.length === 0 ? (
        <div className="empty-state">Koi leads nahi mile.</div>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" checked={selectedLeads.size === filteredLeads.length && filteredLeads.length > 0} onChange={(e) => onSelectAllLeads(e.target.checked, filteredLeads)} /></th>
                {['Name', 'Email', 'Phone', 'Value', 'Status', 'Funnel', 'Actions'].map(header => (
                  <th key={header} onClick={() => requestSort(header.toLowerCase())}>
                    {header} {sortConfig.key === header.toLowerCase() && (sortConfig.direction === 'ascending' ? ' ↑' : ' ↓')}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map(lead => (
                <tr key={lead.id} className={selectedLeads.has(lead.id) ? 'selected-row' : ''}>
                  <td><input type="checkbox" checked={selectedLeads.has(lead.id)} onChange={() => onSelectLead(lead.id)} /></td>
                  <td onClick={() => onEditLead(lead)}>{lead.name || 'N/A'}</td>
                  <td onClick={() => onEditLead(lead)}>{lead.email || 'N/A'}</td>
                  <td>{lead.number || 'N/A'}</td>
                  <td>{lead.value ? `Rs. ${lead.value}` : '-'}</td>
                  <td>{getStatusLabel(lead.status, lead.funnelId)}</td>
                  <td><span className={`funnel-tag ${lead.type}`}>{getFunnelName(lead.funnelId)}</span></td>
                  <td>
                    <button title="Edit Lead" onClick={() => onEditLead(lead)}><EditIcon /></button>
                    <button title="Delete Lead" onClick={() => onDeleteLead(lead.id)}><DeleteIcon /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};


// --- MAIN LEADSVIEW COMPONENT ---
const LeadsView = () => {
  const [viewMode, setViewMode] = useState('table');
  const [activeFunnel, setActiveFunnel] = useState(ALL_LEADS_FUNNEL);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [leadForModal, setLeadForModal] = useState(null); // Can be for create, edit, or details
  const [modalMode, setModalMode] = useState(''); // 'create', 'edit', 'details'
  const [showFunnelModal, setShowFunnelModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [selectedLeads, setSelectedLeads] = useState(new Set());

  const getFunnelName = (funnelId) => FUNNELS.find(f => f.id === funnelId)?.name || 'Unknown Funnel';
  const getStatusLabel = (statusKey, funnelId) => FUNNELS.find(f => f.id === funnelId)?.statuses.find(s => s.key === statusKey)?.label || statusKey;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => { setLeads(defaultLeads); setLoading(false); }, 500);
  }, []);

  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
  };

  const handleUpdateLead = (updatedLead) => {
    setLeads(leads.map(lead => lead.id === updatedLead.id ? updatedLead : lead));
    showNotification("Lead successfully update kiya gaya!");
  };

  const handleDeleteLead = (leadId) => {
    if (window.confirm('Kya aap is lead ko pakka delete karna chahte hain?')) {
        setLeads(leads.filter(lead => lead.id !== leadId));
        showNotification("Lead delete ho gaya hai", "error");
    }
  };

  const handleCreateLead = (newLead) => {
    setLeads([newLead, ...leads]);
    showNotification("Naya lead safaltapurvak banaya gaya!");
  };

  const handleSelectLead = (leadId) => {
    setSelectedLeads(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(leadId)) newSelected.delete(leadId);
      else newSelected.add(leadId);
      return newSelected;
    });
  };

  const handleSelectAllLeads = (isChecked, displayedLeads) => {
    setSelectedLeads(isChecked ? new Set(displayedLeads.map(lead => lead.id)) : new Set());
  };

  const handleBulkDelete = () => {
    if (window.confirm(`Kya aap sach me ${selectedLeads.size} leads delete karna chahte hain?`)) {
        setLeads(leads.filter(lead => !selectedLeads.has(lead.id)));
        showNotification(`${selectedLeads.size} leads delete kar diye gaye hain.`, 'error');
        setSelectedLeads(new Set());
    }
  };

  const handleExport = () => {
    const dataToExport = selectedLeads.size > 0 ? leads.filter(l => selectedLeads.has(l.id)) : leads;
    const headers = ['Name', 'Email', 'Phone', 'Value', 'Status', 'Funnel', 'Tags'];
    const csvContent = [
      headers.join(','),
      ...dataToExport.map(lead => [ `"${lead.name || ''}"`, `"${lead.email || ''}"`, `"${lead.number || ''}"`, `"${lead.value || ''}"`, `"${getStatusLabel(lead.status, lead.funnelId)}"`, `"${getFunnelName(lead.funnelId)}"`, `"${(lead.tags || []).join(', ')}"` ].join(','))
    ].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'leads_export.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification(`${dataToExport.length} leads successfully export!`);
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      const lines = content.split('\n').filter(line => line.trim() !== '');
      const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, '').toLowerCase());
      const importedLeads = lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim().replace(/"/g, ''));
        if (values.length < headers.length) return null;
        const leadData = {};
        headers.forEach((header, index) => { leadData[header] = values[index]; });
        const funnel = FUNNELS.find(f => f.name.toLowerCase() === (leadData.funnel || '').toLowerCase()) || FUNNELS[0];
        const status = funnel.statuses.find(s => s.label.toLowerCase() === (leadData.status || '').toLowerCase()) || funnel.statuses[0];
        return { id: `imported-${Date.now()}-${Math.random()}`, name: leadData.name, email: leadData.email, number: leadData.phone, value: leadData.value, status: status.key, funnelId: funnel.id, color: status.color, type: funnel.type, tags: leadData.tags ? leadData.tags.split(',').map(t => t.trim()) : [], createdOn: new Date().toLocaleString() };
      }).filter(Boolean);
      setLeads(prev => [...importedLeads, ...prev]);
      showNotification(`${importedLeads.length} leads import kiye gaye!`);
    };
    reader.readAsText(file);
    e.target.value = null;
  };

  const handleSelectFunnel = (funnel) => {
    setActiveFunnel(funnel);
    setShowFunnelModal(false);
    setSelectedLeads(new Set());
  };

  const handleViewChange = (mode) => {
    if (mode === 'pipeline' && activeFunnel.id === 'all') {
        setActiveFunnel(FUNNELS[0]);
    }
    setViewMode(mode);
  };
  
  const handleStatusChange = (leadId, newStatus) => {
    setLeads(leads.map(lead => {
      if (lead.id === leadId) {
        const funnel = FUNNELS.find(f => f.id === lead.funnelId);
        const statusInfo = funnel?.statuses.find(s => s.key === newStatus);
        return { ...lead, status: newStatus, color: statusInfo?.color || lead.color };
      }
      return lead;
    }));
  };

  const openModal = (mode, lead = null) => {
    setModalMode(mode);
    setLeadForModal(lead);
  };

  const closeModal = () => {
    setModalMode('');
    setLeadForModal(null);
  };

  const filteredLeads = leads.filter(lead => {
    if (activeFunnel && activeFunnel.id !== 'all' && lead.funnelId !== activeFunnel.id) return false;
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (lead.name?.toLowerCase().includes(searchLower) || lead.email?.toLowerCase().includes(searchLower) || lead.number?.toLowerCase().includes(searchLower));
    }
    return true;
  });

  const leadsByStatus = {};
  if (activeFunnel && activeFunnel.id !== 'all') {
    activeFunnel.statuses.forEach(statusInfo => {
      leadsByStatus[statusInfo.key] = filteredLeads.filter(lead => lead.status === statusInfo.key);
    });
  }

  if (loading) return <div className="loading-state">Leads load ho rahe hain...</div>;

  return (
    <div className="leads-container">
      {notification.show && <Notification message={notification.message} type={notification.type} onClose={() => setNotification({ show: false, message: '', type: '' })} />}
      
      <div className="leads-header">
        <div className="header-top">
          <h2>Leads Management</h2>
          <div className="header-actions">
            <div className="search-bar"><SearchIcon /><input type="text" placeholder="Leads search karein..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /></div>
            <div className="view-toggle">
              <button onClick={() => handleViewChange('table')} className={viewMode === 'table' ? 'active' : ''}><IconTableView /> Table</button>
              <button onClick={() => handleViewChange('pipeline')} className={viewMode === 'pipeline' ? 'active' : ''}><IconPipelineView /> Pipeline</button>
            </div>
            <button onClick={() => openModal('create')} className="btn-create"><PlusIcon /> New Lead</button>
          </div>
        </div>
        <div className="header-bottom">
          <div className="funnel-selector"><div className="funnel-info"><span>{filteredLeads.length} Total leads</span>
            </div>
            <button onClick={() => setShowFunnelModal(true)} className="funnel-dropdown"><FunnelIcon />{activeFunnel ? activeFunnel.name : 'Select Funnel'}</button>
            
          </div>
        </div>
      </div>

      {selectedLeads.size > 0 && viewMode === 'table' && (
        <div className="bulk-actions-toolbar">
            <span>{selectedLeads.size} leads chune gaye</span>
            <div>
                <button className="btn-export" onClick={handleExport}><ExportIcon/> Export Selected</button>
                <button className="btn-delete" onClick={handleBulkDelete}><DeleteIcon /> Delete Selected</button>
            </div>
        </div>
      )}

      {viewMode === 'pipeline' && activeFunnel.id !== 'all' ? (
        <DndProvider backend={HTML5Backend}>
          <div className="pipeline-view">
            {activeFunnel.statuses.map(statusInfo => (
              <DroppableStatusColumn key={statusInfo.key} statusInfo={statusInfo} leadsInColumn={leadsByStatus[statusInfo.key] || []} onLeadClick={(lead) => openModal('details', lead)} onStatusChange={handleStatusChange} />
            ))}
          </div>
        </DndProvider>
      ) : (
        <LeadsTableView leads={filteredLeads} onEditLead={(lead) => openModal('details', lead)} onDeleteLead={handleDeleteLead} onExport={handleExport} onImport={handleImport} getStatusLabel={getStatusLabel} getFunnelName={getFunnelName} selectedLeads={selectedLeads} onSelectLead={handleSelectLead} onSelectAllLeads={handleSelectAllLeads} />
      )}

      {showFunnelModal && <FunnelSelectionModal funnels={FUNNELS} onSelect={handleSelectFunnel} onClose={() => setShowFunnelModal(false)} />}
      
      {(modalMode === 'create' || modalMode === 'edit') && <CreateLeadModal onClose={closeModal} onCreate={handleCreateLead} leadToEdit={leadForModal} onUpdate={handleUpdateLead} />}
      
      {modalMode === 'details' && <LeadDetailsModal lead={leadForModal} onClose={closeModal} onUpdate={(lead) => openModal('edit', lead)} onDelete={handleDeleteLead} getStatusLabel={getStatusLabel} getFunnelName={getFunnelName} />}

      <style jsx>{`
        /* --- Base & Layout --- */
        .leads-container { padding: 24px; background: #f3f4f6; min-height: 100vh; font-family: 'Inter', sans-serif; }
        .leads-header { background: white; border-radius: 10px; padding: 16px 20px; margin-bottom: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        
        /* --- Header --- */
        .header-top, .header-bottom { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
        .header-top h2 { font-size: 22px; font-weight: 600; color: #1f2937; }
        .header-actions { display: flex; align-items: center; gap: 12px; }
        .search-bar { position: relative; }
        .search-bar svg { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #9ca3af; }
        .search-bar input { padding: 10px 16px 10px 40px; border: 1px solid #d1d5db; border-radius: 8px; min-width: 250px; font-size: 14px; }
        .view-toggle { display: flex; background: #e5e7eb; border-radius: 8px; padding: 4px; }
        .view-toggle button { padding: 6px 12px; background: transparent; color: #6b7280; border: none; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 14px; }
        .view-toggle button.active { background: white; color: #4f46e5; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .btn-create { padding: 10px 16px; background: #4f46e5; color: white; border: none; border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 14px; }
        .funnel-selector { display: flex; align-items: center; gap: 16px; }
        .funnel-dropdown { padding: 8px 16px; border: 1px solid #d1d5db; background: white; border-radius: 6px; font-weight: 500; display: flex; align-items: center; gap: 8px; cursor: pointer; }
        .funnel-info { font-size: 14px; color: #6b7280; }

        /* --- Table View --- */
        .table-view-container { background: white; border-radius: 10px; padding: 20px; }
        .table-controls { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .table-actions { display: flex; gap: 10px; }
        .btn-export, .btn-import { padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 500; font-size: 14px; display: flex; align-items: center; gap: 6px; }
        .btn-export { background: #f0fdf4; color: #16a34a; border: 1px solid #dcfce7; }
        .btn-import { background: #eff6ff; color: #2563eb; border: 1px solid #dbeafe; }
        .table-container { overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; font-size: 14px; }
        th { padding: 12px 16px; text-align: left; background: #f9fafb; border-bottom: 2px solid #e5e7eb; font-weight: 600; color: #4b5563; font-size: 12px; cursor: pointer; white-space: nowrap; }
        td { padding: 14px 16px; border-bottom: 1px solid #f3f4f6; }
        tr:hover { background: #f9fafb; }
        .selected-row { background: #eff6ff !important; }
        td:nth-child(2) { font-weight: 500; color: #4f46e5; cursor: pointer; }
        td button { background: transparent; border: none; cursor: pointer; padding: 4px; color: #6b7280; }
        td button:hover { color: #1f2937; }
        .funnel-tag { padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 500; }
        .funnel-tag.calendar_funnel { background-color: #eff6ff; color: #2563eb; }
        .funnel-tag.payment_funnel { background-color: #fffbeb; color: #d97706; }
        .funnel-tag.meeting_funnel { background-color: #f0fdf4; color: #16a34a; }
        .funnel-tag.consultation_funnel { background-color: #f5f3ff; color: #7c3aed; }
        .funnel-tag.demo_funnel { background-color: #fdf2f8; color: #db2777; }
        .empty-state { padding: 40px; text-align: center; color: #6b7280; background: white; border-radius: 10px; }

        /* --- Bulk Actions Toolbar --- */
        .bulk-actions-toolbar { padding: 12px 20px; background: #374151; color: white; border-radius: 8px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; }
        .bulk-actions-toolbar .btn-delete { background-color: #ef4444; color: white; border: none; padding: 8px 12px; border-radius: 6px; display: flex; align-items: center; gap: 6px; cursor: pointer; margin-left: 12px; }
        .bulk-actions-toolbar .btn-export { background-color: #22c55e; color: white; border: none; padding: 8px 12px; border-radius: 6px; display: flex; align-items: center; gap: 6px; cursor: pointer; }

        /* --- Pipeline View --- */
        .pipeline-view { display: flex; overflow-x: auto; padding-bottom: 10px; gap: 16px; }
        .pipeline-column { flex: 0 0 320px; display: flex; flex-direction: column; }
        .pipeline-column.drop-target .column-body { background-color: #f0f9ff; }
        .column-header { display: flex; align-items: center; padding: 12px; background: white; border-radius: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); border: 1px solid #e5e7eb; margin-bottom: 16px; }
        .column-header .color-dot { width: 8px; height: 8px; border-radius: 50%; margin-right: 10px; }
        .column-header h3 { margin: 0; font-size: 15px; font-weight: 600; color: #374151; flex-grow: 1; }
        .column-header .lead-count { color: #6b7280; background-color: #f3f4f6; padding: 2px 10px; border-radius: 12px; font-size: 13px; font-weight: 500; }
        .column-body { flex-grow: 1; padding: 8px; border-radius: 8px; background-color: #f9fafb; overflow-y: auto; max-height: calc(100vh - 350px); }
        .pipeline-lead-item { background: white; border-radius: 8px; padding: 12px; margin-bottom: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.07); border: 1px solid #e5e7eb; cursor: grab; }
        .pipeline-lead-item.dragging { opacity: 0.5; }
        .pipeline-lead-item h4 { margin: 0 0 8px 0; font-size: 15px; font-weight: 500; }
        .pipeline-lead-item p { margin: 4px 0; font-size: 13px; color: #4b5563; display: flex; align-items: center; gap: 6px; }
        .pipeline-lead-item .value-display { margin-top: 8px; font-size: 14px; font-weight: 500; }

        /* --- Modals --- */
        .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.6); z-index: 1000; display: flex; justify-content: center; align-items: center; padding: 20px; }
        .modal { background-color: white; border-radius: 12px; width: 100%; max-height: 90vh; display: flex; flex-direction: column; box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
        .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 16px 24px; border-bottom: 1px solid #e5e7eb; }
        .modal-header h3 { margin: 0; font-size: 18px; font-weight: 600; }
        .modal-header button { background: none; border: none; cursor: pointer; color: #6b7280; }
        .modal-body { padding: 24px; overflow-y: auto; }
        .funnel-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; }
        .funnel-card { padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; cursor: pointer; text-align: center; }
        .funnel-card:hover { border-color: #4f46e5; background-color: #f5f3ff; }
        .funnel-icon { width: 40px; height: 40px; background-color: #eef2ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; color: #4f46e5; }
        .lead-form { display: flex; flex-direction: column; gap: 16px; }
        .form-row { display: flex; gap: 16px; }
        .form-row > * { flex: 1; }
        .form-group { display: flex; flex-direction: column; gap: 6px; }
        .form-group label { font-size: 14px; font-weight: 500; color: #4b5563; }
        .form-group input, .form-group select, .form-group textarea { padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px; }
        .tags-input { display: flex; flex-direction: column; gap: 8px; }
        .tags-container { display: flex; flex-wrap: wrap; gap: 6px; }
        .tag { background-color: #e5e7eb; padding: 4px 10px; border-radius: 20px; font-size: 13px; display: flex; align-items: center; gap: 4px; }
        .tag button { background: none; border: none; cursor: pointer; padding: 0; display: flex; align-items: center; color: #6b7280; }
        .tag-input-container { display: flex; gap: 8px; }
        .tag-input-container input { flex: 1; }
        .tag-input-container button { padding: 0 12px; background: #4f46e5; color: white; border: none; border-radius: 6px; cursor: pointer; }
        .form-actions { display: flex; justify-content: flex-end; gap: 12px; margin-top: 16px; }
        .btn-cancel { padding: 10px 16px; background: #e5e7eb; color: #4b5563; border: none; border-radius: 6px; cursor: pointer; }
        .btn-submit { padding: 10px 16px; background: #4f46e5; color: white; border: none; border-radius: 6px; cursor: pointer; }
        .lead-details-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; }
        .lead-details-header p { margin: 0 0 4px; }
        .lead-value { font-size: 16px; color: #16a34a; }
        .btn-update { background-color: #4f46e5; color: white; }
        .btn-delete { background-color: #ef4444; color: white; }
        .action-buttons button { padding: 8px 12px; border: none; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 6px; font-size: 14px; }
        .tab-container { border-bottom: 1px solid #e5e7eb; margin-bottom: 15px; }
        .tabs { display: flex; gap: 20px; }
        .tabs button { padding: 8px 4px; border-bottom: 2px solid transparent; background: none; border: none; cursor: pointer; color: #6b7280; }
        .tabs button.active { border-bottom-color: #4f46e5; color: #4f46e5; font-weight: 600; }
        .lead-info-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .info-item h4 { margin: 0 0 4px; font-size: 13px; color: #6b7280; font-weight: 400; }
        .info-item p { margin: 0; }

        /* --- Notification --- */
        .notification { position: fixed; top: 20px; right: 20px; padding: 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 2000; display: flex; align-items: center; gap: 12px; }
        .notification.bg-green-100 { background-color: #dcfce7; }
        .notification.text-green-800 { color: #166534; }
        .notification.bg-red-100 { background-color: #fee2e2; }
        .notification.text-red-800 { color: #991b1b; }
        .notification button { background: none; border: none; cursor: pointer; color: inherit; margin-left: auto; }
        
        /* --- Loading State --- */
        .loading-state { padding: 24px; text-align: center; font-size: 18px; color: #4b5563; }
      `}</style>
    </div>
  );
};

export default LeadsView;
