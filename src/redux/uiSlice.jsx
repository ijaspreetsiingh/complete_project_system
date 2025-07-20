import { createSlice } from '@reduxjs/toolkit';

// Function to get initial state from localStorage, with new defaults, combined with your other states
const getInitialState = () => {
  // --- Settings from localStorage ---
  const sidebarFixed = localStorage.getItem('sidebarFixed');
  // Default to `true` (fixed) if nothing is in localStorage
  const isSidebarFixed = sidebarFixed ? JSON.parse(sidebarFixed) : true;

  const menuType = localStorage.getItem('menuType');
  // Default to 'sidebar'
  const topNavMenuType = menuType ? menuType : 'sidebar';
  
  const darkMode = localStorage.getItem('darkMode');
  // Default to `false` (light mode)
  const isDarkMode = darkMode ? JSON.parse(darkMode) : false;

  // --- Combine with your other initial states ---
  return {
    // Your existing states
    activeTab: 'dashboard',
    sidebarOpen: true, // This can be true by default, logic will adjust it
    showLeadForm: false,
    edit_funnel_name_data: "",
    newFunnelName: '',
    selectedFunnelGroup: '',
    
    // States with localStorage persistence and new defaults
    isSettingsSliderOpen: false,
    darkMode: isDarkMode,
    isSidebarFixed: isSidebarFixed,
    // Ensure menu type is 'sidebar' if the sidebar is fixed by default
    topNavMenuType: isSidebarFixed ? 'sidebar' : topNavMenuType, 
  };
};

const initialState = getInitialState();

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // --- Your existing reducers (unchanged) ---
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setSidebarOpen: (state, action) => {
      // This logic is good, but we should prevent closing if it's fixed
      if (state.isSidebarFixed) {
        state.sidebarOpen = true;
      } else {
        state.sidebarOpen = action.payload;
      }
    },
    openLeadFormModal: (state) => {
      state.showLeadForm = true;
    },
    closeLeadFormModal: (state) => {
      state.showLeadForm = false;
    },
    toggleSettingsSlider: (state) => {
      state.isSettingsSliderOpen = !state.isSettingsSliderOpen;
    },
    setNewFunnelDetails: (state, action) => {
      state.newFunnelName = action.payload.name;
      state.selectedFunnelGroup = action.payload.group;
    },
    clearNewFunnelDetails: (state) => {
      state.newFunnelName = '';
      state.selectedFunnelGroup = '';
    },
    edit_funnel_name_data: (state, action) => {
      state.edit_funnel_name_data = action.payload;
    },

    // --- Reducers updated with localStorage logic ---
    setSettingsSliderOpen: (state, action) => {
      state.isSettingsSliderOpen = action.payload;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode', state.darkMode);
    },
    setSidebarFixed: (state, action) => {
      state.isSidebarFixed = action.payload;
      localStorage.setItem('sidebarFixed', state.isSidebarFixed);
      
      // If the sidebar is fixed, it must be open and the menu type must be 'sidebar'.
      if (state.isSidebarFixed) {
        state.sidebarOpen = true;
        state.topNavMenuType = 'sidebar';
        localStorage.setItem('menuType', 'sidebar');
      }
    },
    setTopNavMenuType: (state, action) => {
      state.topNavMenuType = action.payload;
      localStorage.setItem('menuType', action.payload);

      // If menu type is changed to topbar, the sidebar cannot be fixed or open.
      if (action.payload === 'topbar') {
        state.isSidebarFixed = false;
        state.sidebarOpen = false;
        localStorage.setItem('sidebarFixed', 'false');
      }
    },
  },
});

// Export all your actions
export const {
  setActiveTab,
  toggleDarkMode,
  setSidebarOpen,
  openLeadFormModal,
  closeLeadFormModal,
  toggleSettingsSlider,
  setSettingsSliderOpen,
  setTopNavMenuType,
  setSidebarFixed,
  setNewFunnelDetails,
  clearNewFunnelDetails,
  edit_funnel_name_data,
} = uiSlice.actions;

export default uiSlice.reducer;
