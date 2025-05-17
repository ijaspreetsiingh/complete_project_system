import { createSlice } from '@reduxjs/toolkit';

const initialLeadsData = [
  { id: 1, name: 'Alex Johnson', company: 'TechCorp', value: '12,500', status: 'new', color: '#667eea' },
  { id: 2, name: 'Sarah Williams', company: 'DesignHub', value: '8,200', status: 'new', color: '#764ba2' },
  { id: 3, name: 'Michael Chen', company: 'DataSystems', value: '25,000', status: 'contacted', color: '#4fd1c5' },
   { id: 4, name: 'Michael Chen', company: 'DataSystems', value: '25,000', status: 'contacted', color: '#4fd1c5' },
  { id: 5, name: 'Alex Johnson', company: 'TechCorp', value: '12,500', status: 'new', color: '#667eea' },
  { id: 6, name: 'Sarah Williams', company: 'DesignHub', value: '8,200', status: 'new', color: '#764ba2' },
  { id: 7, name: 'Michael Chen', company: 'DataSystems', value: '25,000', status: 'contacted', color: '#4fd1c5' },
   { id: 8, name: 'Michael Chen', company: 'DataSystems', value: '25,000', status: 'contacted', color: '#4fd1c5' },
     { id: 9, name: 'Alex Johnson', company: 'TechCorp', value: '12,500', status: 'new', color: '#667eea' },
  { id: 10, name: 'Sarah Williams', company: 'DesignHub', value: '8,200', status: 'new', color: '#764ba2' },
  { id: 11, name: 'Michael Chen', company: 'DataSystems', value: '25,000', status: 'contacted', color: '#4fd1c5' },
   { id: 12, name: 'Michael Chen', company: 'DataSystems', value: '25,000', status: 'contacted', color: '#4fd1c5' },
  { id: 13, name: 'Alex Johnson', company: 'TechCorp', value: '12,500', status: 'new', color: '#667eea' },
  { id: 14, name: 'Sarah Williams', company: 'DesignHub', value: '8,200', status: 'new', color: '#764ba2' },
  { id: 15, name: 'Michael Chen', company: 'DataSystems', value: '25,000', status: 'contacted', color: '#4fd1c5' },
   { id: 16, name: 'Michael Chen', company: 'DataSystems', value: '25,000', status: 'contacted', color: '#4fd1c5' }, 
  // ... add more leads as needed
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
      // action.payload: { id, toStatus }
      const { id, toStatus } = action.payload;
      const lead = state.items.find(l => l && l.id === id);
      if (lead) {
        lead.status = toStatus;
      }
    },
    setCurrentLeadToEdit: (state, action) => {
      state.currentLeadToEdit = action.payload;
    },
    openLeadFormModal: (state) => {
      state.isLeadFormModalOpen = true;
    },
    closeLeadFormModal: (state) => {
      state.isLeadFormModalOpen = false;
    },
  },
});

export const { 
  addLead, 
  updateLead, 
  deleteLead, 
  updateLeadStatus,
  setCurrentLeadToEdit,
  openLeadFormModal,
  closeLeadFormModal
} = leadsSlice.actions;

// New selectors
export const selectLeadsByCoach = (state, coachId) => 
  state.leads.items.filter(lead => lead.coachId === coachId);

export const selectLeadCountsByStatus = (state, coachId) => {
  const leads = selectLeadsByCoach(state, coachId);
  return leads.reduce((acc, lead) => {
    acc[lead.status] = (acc[lead.status] || 0) + 1;
    return acc;
  }, {});
};

export default leadsSlice.reducer;