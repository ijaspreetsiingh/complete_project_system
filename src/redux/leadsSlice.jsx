// leadsSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

// Updated data structure with the new 'email' field and funnel-specific statuses
const initialLeadsData = [
  { id: 1, name: 'Aarav Sharma', email: 'aarav.s@example.com', number: '9876543210', whatsapp_number: '9876543210', value: '', status: 'registered_vsl_training', color: '#0ea5e9', type: 'calendar_funnel' },
  { id: 2, name: 'Priya Patel', email: 'priya.p@example.com', number: '8765432109', whatsapp_number: '8765432109', value: '5000', status: 'registered_paid', color: '#6366f1', type: 'payment_funnel' },
  { id: 3, name: 'Rohan Mehta', email: 'rohan.m@example.com', number: '7654321098', whatsapp_number: '7654321098', value: '', status: 'registered_webinar', color: '#0ea5e9', type: 'meeting_funnel' },
  { id: 4, name: 'Sneha Gupta', email: 'sneha.g@example.com', number: '6543210987', whatsapp_number: '6543210987', value: '12500', status: 'sale_closed', color: '#22c55e', type: 'payment_funnel' },
  { id: 5, name: 'Vikram Singh', email: 'vikram.s@example.com', number: '5432109876', whatsapp_number: '5432109876', value: '', status: 'watched_50', color: '#ec4899', type: 'calendar_funnel' },
  { id: 6, name: 'Anjali Reddy', email: 'anjali.r@example.com', number: '4321098765', whatsapp_number: '4321098765', value: '', status: 'attended_live_day1', color: '#ec4899', type: 'meeting_funnel' },
  { id: 7, name: 'Karan Malhotra', email: 'karan.m@example.com', number: '3210987654', whatsapp_number: '3210987654', value: '', status: 'call_booked', color: '#f97316', type: 'calendar_funnel' },
  { id: 8, name: 'Diya Kumar', email: 'diya.k@example.com', number: '2109876543', whatsapp_number: '2109876543', value: '8000', status: 'call_done_not_closed_payment', color: '#d97706', type: 'payment_funnel' },
];


const initialState = {
  items: initialLeadsData,
  currentLeadToEdit: null,
  isLeadFormModalOpen: false,
};

const leadsSlice = createSlice({
  name: 'leads',
  initialState,
  reducers: {
    addLead: (state, action) => {
      const newLead = {
        id: state.items.length > 0 ? Math.max(...state.items.map(l => l.id)) + 1 : 1,
        ...action.payload
      };
      state.items.push(newLead);
    },
    updateLead: (state, action) => {
      const index = state.items.findIndex(lead => lead.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteLead: (state, action) => {
      state.items = state.items.filter(lead => lead.id !== action.payload);
    },
    updateLeadStatus: (state, action) => {
      const { id, toStatus } = action.payload;
      const lead = state.items.find(l => l && l.id === id);
      if (lead) {
        lead.status = toStatus;
      }
    },
    setCurrentLeadToEdit: (state, action) => {
      state.currentLeadToEdit = action.payload;
    },
    closeLeadFormModal: (state) => {
      state.isLeadFormModalOpen = false;
    },
    openLeadFormModal: (state) => {
      state.isLeadFormModalOpen = true;
    },
  },
});

export const { addLead, updateLead, deleteLead, updateLeadStatus, setCurrentLeadToEdit, closeLeadFormModal, openLeadFormModal } = leadsSlice.actions;

export default leadsSlice.reducer;

// --- Status Definitions for each Funnel Type (copied from LeadsView.jsx and modified for consistency) ---
export const CALENDAR_FUNNEL_STATUSES = [
  { key: 'registered_vsl_training', label: 'Registered for Free VSL Training', color: '#0ea5e9' }, // sky-500
  { key: 'started_watching_vsl', label: 'Started Watching VSL', color: '#6366f1' }, // indigo-500
  { key: 'watched_25', label: 'Watched 25%', color: '#a855f7' }, // purple-500
  { key: 'watched_50', label: 'Watched 50%', color: '#ec4899' }, // pink-500
  { key: 'clicked_booking_button', label: 'Clicked Booking Button', color: '#f43f5e' }, // rose-500
  { key: 'call_booked', label: 'Call Booked', color: '#f97316' }, // orange-500
  { key: 'call_no_show', label: 'Call No-Show', color: '#ef4444' }, // red-500
  { key: 'call_done_not_closed', label: 'Call Done - Not Closed', color: '#eab308' }, // yellow-500
  { key: 'call_done_sale_closed', label: 'Call Done - Sale Closed', color: '#22c55e' } // green-500
];

export const PAYMENT_FUNNEL_STATUSES = [
  { key: 'viewed_sales_page', label: 'Viewed Sales Page (but didn’t buy)', color: '#0ea5e9' },
  { key: 'registered_paid', label: 'Registered & Paid', color: '#6366f1' },
  { key: 'attended_day_1', label: 'Attended Day 1', color: '#a855f7' },
  { key: 'attended_day_2', label: 'Attended Day 2', color: '#ec4899' },
  { key: 'attended_day_3', label: 'Attended Day 3', color: '#f43f5e' },
  { key: 'missed_any_day', label: 'Missed Any Day', color: '#ef4444' },
  { key: 'clicked_high_ticket_offer', label: 'Clicked High-Ticket Offer', color: '#eab308' },
  { key: 'booked_sales_call', label: 'Booked Sales Call', color: '#f97316' },
  { key: 'call_no_show_payment', label: 'Call No-Show', color: '#dc2626' },
  { key: 'call_done_not_closed_payment', label: 'Call Done - Not Closed', color: '#d97706' },
  { key: 'sale_closed', label: 'Sale Closed', color: '#22c55e' }
];

export const MEETING_FUNNEL_STATUSES = [
  { key: 'registered_webinar', label: 'Registered for Webinar', color: '#0ea5e9' },
  { key: 'added_whatsapp_community', label: 'Added to WhatsApp Community', color: '#6366f1' },
  { key: 'opened_reminder_email', label: 'Opened Reminder Email', color: '#a855f7' },
  { key: 'attended_live_day1', label: 'Attended Live (Day 1)', color: '#ec4899' },
  { key: 'missed_live', label: 'Missed Live', color: '#ef4444' },
  { key: 'clicked_paid_booking_link', label: 'Clicked Paid Booking Link', color: '#eab308' },
  { key: 'call_booked_meeting', label: 'Call Booked', color: '#f97316' },
  { key: 'call_no_show_meeting', label: 'Call No-Show', color: '#dc2626' },
  { key: 'call_done_not_closed_meeting', label: 'Call Done - Not Closed', color: '#d97706' },
  { key: 'clicked_high_ticket_offer_meeting', label: 'Clicked High-Ticket Offer', color: '#fbbf24' },
  { key: 'call_done_sale_closed_meeting', label: 'Call Done - Sale Closed', color: '#22c55e' }
];

export const ALL_FUNNEL_STATUSES = [
  ...CALENDAR_FUNNEL_STATUSES,
  ...PAYMENT_FUNNEL_STATUSES,
  ...MEETING_FUNNEL_STATUSES
];


// Renamed and updated leadTypeFilters to match the new funnel names and add 'All Leads'
export const leadTypeFilters = [
  { key: 'all', label: 'All Leads' },
  { key: 'calendar_funnel', label: 'VSL (Video Sales Letter Funnel)' },
  { key: 'payment_funnel', label: '3-Day Paid Zoom Webinar Funnel' },
  { key: 'meeting_funnel', label: 'Free Zoom Webinar Funnel' },
];

export const getFunnelStatuses = (funnelType) => {
  switch (funnelType) {
    case 'calendar_funnel':
      return CALENDAR_FUNNEL_STATUSES;
    case 'payment_funnel':
      return PAYMENT_FUNNEL_STATUSES;
    case 'meeting_funnel':
      return MEETING_FUNNEL_STATUSES;
    case 'all': // When 'all' is selected, combine all unique statuses or handle as needed for display
        return ALL_FUNNEL_STATUSES;
    default:
      return [];
  }
};