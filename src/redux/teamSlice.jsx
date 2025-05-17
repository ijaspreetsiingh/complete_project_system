// src/redux/teamSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  // Jassi is the main coach. In a real app, the initial main coach might be created differently or seeded.
  // 'loggedInCoachId' will determine whose perspective the dashboard shows.
  coaches: [
    { id: 'jassi-main', name: 'Jassi (Main Coach)', email: 'jassi@example.com', parentId: null, canCreateSubCoaches: true, role: 'Main Coach' },
    // You can add more initial coaches here for testing, e.g., a sub-coach for Jassi
    // { id: nanoid(), name: 'Varun Test', email: 'varun.test@example.com', parentId: 'jassi-main', canCreateSubCoaches: true, role: 'Sub-Coach' },
  ],
  loggedInCoachId: 'jassi-main', // This would typically be set dynamically after user authentication
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    addCoach: {
      reducer: (state, action) => {
        state.coaches.push(action.payload);
      },
      prepare: ({ name, email, parentId, canCreateSubCoaches = true }) => {
        const id = nanoid(); // Generate a unique ID for the new coach
        const role = parentId ? 'Sub-Coach' : 'Main Coach'; // Assign role based on parentId
        return { payload: { id, name, email, parentId, canCreateSubCoaches, role } };
      },
    },
    // You could add other reducers here like removeCoach, updateCoachDetails, etc.
  },
});

export const { addCoach } = teamSlice.actions;

// Selectors
export const selectAllCoaches = state => state.team.coaches;
export const selectLoggedInCoachId = state => state.team.loggedInCoachId;

export const selectCoachById = (state, coachId) =>
  state.team.coaches.find(coach => coach.id === coachId);

export const selectSubCoaches = (state, parentId) =>
  state.team.coaches.filter(coach => coach.parentId === parentId);

// This selector can be used if you need the full hierarchy object, but recursive rendering often uses selectSubCoaches.
export const selectCoachHierarchy = (state, coachId) => {
  const coaches = state.team.coaches;
  const buildHierarchy = (currentCoachId) => {
    return coaches
      .filter(coach => coach.parentId === currentCoachId)
      .map(coach => ({
        ...coach,
        subCoaches: buildHierarchy(coach.id), // Recursively find sub-coaches
      }));
  };
  
  const rootCoach = coaches.find(c => c.id === coachId);
  if (!rootCoach) return null;

  return {
    ...rootCoach,
    subCoaches: buildHierarchy(coachId),
  };
};
export const selectAggregatedLeadMetrics = (state, coachId) => {
  const coaches = state.team.coaches;
  const leads = state.leads.items;
  
  const calculateMetrics = (currentCoachId) => {
    const currentCoachLeads = leads.filter(lead => lead.coachId === currentCoachId);
    const subCoaches = coaches.filter(c => c.parentId === currentCoachId);
    
    const subMetrics = subCoaches.map(sc => calculateMetrics(sc.id));
    
    return {
      new: currentCoachLeads.filter(l => l.status === 'new').length + 
           subMetrics.reduce((sum, m) => sum + (m?.new || 0), 0),
      contacted: currentCoachLeads.filter(l => l.status === 'contacted').length + 
                 subMetrics.reduce((sum, m) => sum + (m?.contacted || 0), 0),
      // Add other statuses as needed
    };
  };
  
  return calculateMetrics(coachId);
};

export default teamSlice.reducer;
