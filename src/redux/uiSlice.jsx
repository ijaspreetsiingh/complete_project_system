// // src/store/uiSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   activeTab: 'dashboard', // Default active tab
//   darkMode: true,
//   sidebarOpen: false,
//   showLeadForm: false, // Controls visibility of LeadFormModal
// };

// const uiSlice = createSlice({
//   name: 'ui',
//   initialState,
//   reducers: {
//     setActiveTab: (state, action) => {
//       state.activeTab = action.payload;
//       state.sidebarOpen = false; // Close sidebar on tab change
//     },
//     toggleDarkMode: (state) => {
//       state.darkMode = !state.darkMode;
//     },
//     setSidebarOpen: (state, action) => {
//       state.sidebarOpen = action.payload;
//     },
//     openLeadFormModal: (state) => {
//       state.showLeadForm = true;
//     },
//     closeLeadFormModal: (state) => {
//       state.showLeadForm = false;
//     },
//   },
// });

// export const { 
//   setActiveTab, 
//   toggleDarkMode, 
//   setSidebarOpen,
//   openLeadFormModal,
//   closeLeadFormModal
// } = uiSlice.actions;
// export default uiSlice.reducer;

// src/redux/uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 'dashboard',
  darkMode: false,
  sidebarOpen: true, // Default state of your main sidebar
  showLeadForm: false,
  isSettingsSliderOpen: false, // Naya state: Settings slider ke liye
  topNavMenuType: 'sidebar', // Naya state: 'sidebar' (default) ya 'topbar'
  // ...any other initial UI states
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setSidebarOpen: (state, action) => {
      // Agar menu topbar mein hai, toh sidebarOpen ko force false rakhein
      if (state.topNavMenuType === 'topbar') {
        state.sidebarOpen = false;
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
    // Settings Slider ke liye naye reducers
    toggleSettingsSlider: (state) => {
      state.isSettingsSliderOpen = !state.isSettingsSliderOpen;
    },
    setSettingsSliderOpen: (state, action) => {
      state.isSettingsSliderOpen = action.payload;
    },
    // Navigation Menu Type ke liye naya reducer
    setTopNavMenuType: (state, action) => {
      state.topNavMenuType = action.payload;
      // Jab menu top bar mein move ho, left sidebar ko band kar dein
      if (action.payload === 'topbar') {
        state.sidebarOpen = false;
      }
      // Optional: Jab 'sidebar' par switch back karein, toh sidebar ko khol sakte hain
      // else if (action.payload === 'sidebar' && !state.sidebarOpen) {
      //   state.sidebarOpen = true; // Ya user ko alag se control karne dein
      // }
    },
    // ...other reducers
  },
});

export const {
  setActiveTab,
  toggleDarkMode,
  setSidebarOpen,
  openLeadFormModal,
  closeLeadFormModal,
  toggleSettingsSlider,
  setSettingsSliderOpen,
  setTopNavMenuType,
} = uiSlice.actions;

export default uiSlice.reducer;
