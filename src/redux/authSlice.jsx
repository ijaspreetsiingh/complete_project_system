// import { createSlice } from '@reduxjs/toolkit';

// // Initial state for the authentication slice
// const initialState = {
//   // user: {id:"hahah",name:"testing", email:"testing@gmail.com"},
//   // token: "ahaaha",
//     user: null,
//   token: null, 
//   selectedPlan: null,
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     // Login successful hone par state update karna
//     loginSuccess: (state, action) => {
//       state.user = action.payload.user; // API se mila user object
//       state.token = action.payload.token; // API se mila token
//       state.isAuthenticated = true;
//       state.error = null;
//     },
//     // Register successful hone par state update karna (login jaisa hi)
//     registerSuccess: (state, action) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isAuthenticated = true;
//       state.error = null;
//     },
//     // Logout hone par state ko reset karna
//     logout: (state) => {
//       state.user = null;
//       state.token = null; // Token ko bhi null set karna
//       state.isAuthenticated = false;
//       state.error = null;
//     },
//     // Error set karna
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//     // Plan select karna
//     selectPlan: (state, action) => {
//       state.selectedPlan = action.payload;
//     },
//   },
// });

// // Actions ko export karna
// export const { loginSuccess, registerSuccess, logout, setError, selectPlan } = authSlice.actions;

// // Selectors: State se data get karne ke liye helper functions
// export const selectUser = (state) => state.auth.user;
// export const selectToken = (state) => state.auth.token; // Token ke liye naya selector
// export const selectCurrentPlan = (state) => state.auth.selectedPlan;
// export const selectAuthStatus = (state) => state.auth.isAuthenticated;

// // Reducer ko export karna
// export default authSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

// Function to load state from localStorage
const loadState = () => {
  try {
    const serializedUser = localStorage.getItem('user');
    const serializedToken = localStorage.getItem('token');
    
    if (serializedUser === null || serializedToken === null) {
      return undefined; // Let Redux initialize with default initialState if no data in localStorage
    }
    
    // Parse the stored strings back into JavaScript objects
    const user = JSON.parse(serializedUser);
    const token = JSON.parse(serializedToken);
    
    return {
      user: user,
      token: token,
      selectedPlan: null, // selectedPlan is not stored in localStorage in this context
      isAuthenticated: true, // Set to true if user and token are successfully loaded
    };
  } catch (e) {
    console.warn("Could not load state from localStorage", e);
    return undefined; // Return undefined to use the default initial state in case of an error
  }
};

// Initial state for the authentication slice, loaded from localStorage or default
const initialState = loadState() || {
  user: null,
  token: null, 
  // user:{id:"jass"},
  // token:"ahah",
  selectedPlan: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Login successful होने पर state update करना और localStorage में store करना
    loginSuccess: (state, action) => {
      state.user = action.payload.user; // API से मिला user object
      state.token = action.payload.token; // API से मिला token
      state.isAuthenticated = true;
      state.error = null;
      // Store user and token in localStorage
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
    },
    // Register successful होने पर state update करना (login जैसा ही) और localStorage में store करना
    registerSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
      // Store user and token in localStorage
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
    },
    // Logout होने पर state को reset करना और localStorage से remove करना
    logout: (state) => {
      state.user = null;
      state.token = null; // Token को भी null set करना
      state.isAuthenticated = false;
      state.error = null;
      // Remove user and token from localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    // Error set करना
    setError: (state, action) => {
      state.error = action.payload;
    },
    // Plan select करना
    selectPlan: (state, action) => {
      state.selectedPlan = action.payload;
    },
  },
});

// Actions को export करना
export const { loginSuccess, registerSuccess, logout, setError, selectPlan } = authSlice.actions;

// Selectors: State से data get करने के लिए helper functions
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token; // Token के लिए नया selector
export const selectCurrentPlan = (state) => state.auth.selectedPlan;
export const selectAuthStatus = (state) => state.auth.isAuthenticated;

// Reducer को export करना
export default authSlice.reducer;