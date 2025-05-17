// // src/layouts/SettingsSlider.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleDarkMode, setTopNavMenuType, setSettingsSliderOpen } from '../../../redux/uiSlice'; // Path adjust karein

// const SettingsSlider = () => {
//   const dispatch = useDispatch();
//   const { darkMode, topNavMenuType, isSettingsSliderOpen } = useSelector((state) => state.ui);

//   if (!isSettingsSliderOpen) {
//     return null;
//   }

//   const handleThemeChange = () => {
//     dispatch(toggleDarkMode());
//   };

//   const handleMenuDisplayChange = (type) => {
//     dispatch(setTopNavMenuType(type));
//   };

//   const sliderStyle = {
//     position: 'fixed',
//     top: 0,
//     right: 0,
//     width: '280px',
//     height: '100%',
//     backgroundColor: darkMode ? '#1A202C' : '#FFFFFF', // Dark: gray-900, Light: white
//     color: darkMode ? '#E2E8F0' : '#1A202C',       // Dark: gray-200, Light: gray-900
//     boxShadow: '-5px 0 15px rgba(0,0,0,0.2)',
//     padding: '20px',
//     zIndex: 1050,
//     transform: 'translateX(0)',
//     transition: 'transform 0.3s ease-in-out',
//     borderLeft: `1px solid ${darkMode ? '#2D3748' : '#E2E8F0'}`, // Dark: gray-700, Light: gray-300
//     overflowY: 'auto',
//   };

//   const optionButtonStyle = {
//     display: 'block',
//     width: '100%',
//     padding: '10px 15px',
//     marginBottom: '10px',
//     textAlign: 'left',
//     backgroundColor: darkMode ? '#2D3748' : '#F7FAFC', // Dark: gray-700, Light: gray-50
//     color: darkMode ? '#E2E8F0' : '#2D3748',
//     border: `1px solid ${darkMode ? '#4A5568' : '#E2E8F0'}`, // Dark: gray-600, Light: gray-300
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontSize: '0.9rem',
//   };

//   const activeOptionButtonStyle = {
//     ...optionButtonStyle,
//     backgroundColor: darkMode ? '#3182CE' : '#3182CE', // blue-600 for both
//     color: 'white',
//     borderColor: darkMode ? '#2B6CB0' : '#2B6CB0', // blue-700
//   };

//   return (
//     <>
//       <div
//         style={{
//           position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
//           backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1040,
//         }}
//         onClick={() => dispatch(setSettingsSliderOpen(false))}
//       ></div>
//       <div style={sliderStyle}>
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', paddingBottom: '15px', borderBottom: `1px solid ${darkMode ? '#2D3748' : '#E2E8F0'}` }}>
//           <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>Dashboard Settings</h3>
//           <button
//             onClick={() => dispatch(setSettingsSliderOpen(false))}
//             style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: darkMode ? '#A0AEC0' : '#718096' }} // gray-400 / gray-500
//             aria-label="Close settings"
//           >
//             &times;
//           </button>
//         </div>

//         <div style={{ marginBottom: '25px' }}>
//           <h4 style={{ fontSize: '0.95rem', marginBottom: '10px', fontWeight: '500' }}>Theme Mode</h4>
//           <button onClick={handleThemeChange} style={optionButtonStyle}>
//             Switch to {darkMode ? 'Light' : 'Dark'} Mode
//           </button>
//         </div>

//         <div style={{ marginBottom: '25px' }}>
//           <h4 style={{ fontSize: '0.95rem', marginBottom: '10px', fontWeight: '500' }}>Navigation Menu</h4>
//           <button
//             onClick={() => handleMenuDisplayChange('sidebar')}
//             style={topNavMenuType === 'sidebar' ? activeOptionButtonStyle : optionButtonStyle}
//           >
//             Left Sidebar (Default)
//           </button>
//           <button
//             onClick={() => handleMenuDisplayChange('topbar')}
//             style={topNavMenuType === 'topbar' ? activeOptionButtonStyle : optionButtonStyle}
//           >
//             Top Navigation Bar
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SettingsSlider;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  toggleDarkMode, 
  setTopNavMenuType, 
  setSettingsSliderOpen,
  setSidebarOpen
} from '../../../redux/uiSlice';

const SettingsSlider = () => {
  const dispatch = useDispatch();
  const { darkMode, topNavMenuType, isSettingsSliderOpen } = useSelector((state) => state.ui);

  if (!isSettingsSliderOpen) return null;

  const handleThemeChange = () => {
    dispatch(toggleDarkMode());
  };

  const handleMenuDisplayChange = (type) => {
    dispatch(setTopNavMenuType(type));
    if (type === 'topbar') {
      dispatch(setSidebarOpen(false));
    }
    // Save to localStorage for persistence
    localStorage.setItem('menuType', type);
  };

  const sliderStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '300px',
    height: '100%',
    backgroundColor: darkMode ? '#1e293b' : '#ffffff',
    color: darkMode ? '#f8fafc' : '#1e293b',
    boxShadow: '-5px 0 15px rgba(0,0,0,0.2)',
    padding: '20px',
    zIndex: 1050,
    transform: 'translateX(0)',
    transition: 'transform 0.3s ease-in-out',
    borderLeft: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
    overflowY: 'auto',
  };

  const optionButtonStyle = {
    display: 'block',
    width: '100%',
    padding: '12px 15px',
    marginBottom: '10px',
    textAlign: 'left',
    backgroundColor: darkMode ? '#334155' : '#f1f5f9',
    color: darkMode ? '#e2e8f0' : '#1e293b',
    border: `1px solid ${darkMode ? '#475569' : '#cbd5e1'}`,
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.2s ease',
  };

  const activeOptionButtonStyle = {
    ...optionButtonStyle,
    backgroundColor: darkMode ? '#4f46e5' : '#4f46e5',
    color: 'white',
    borderColor: darkMode ? '#4338ca' : '#4338ca',
  };

  return (
    <>
      <div
        className="settings-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: 1040,
        }}
        onClick={() => dispatch(setSettingsSliderOpen(false))}
      ></div>
      <div style={sliderStyle}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '25px', 
          paddingBottom: '15px', 
          borderBottom: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}` 
        }}>
          <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '600' }}>Dashboard Settings</h3>
          <button
            onClick={() => dispatch(setSettingsSliderOpen(false))}
            style={{ 
              background: 'none', 
              border: 'none', 
              fontSize: '1.5rem', 
              cursor: 'pointer', 
              color: darkMode ? '#94a3b8' : '#64748b',
              transition: 'color 0.2s ease'
            }}
            aria-label="Close settings"
          >
            &times;
          </button>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ 
            fontSize: '1rem', 
            marginBottom: '15px', 
            fontWeight: '500',
            color: darkMode ? '#e2e8f0' : '#1e293b'
          }}>
            Theme Mode
          </h4>
          <button 
            onClick={handleThemeChange} 
            style={optionButtonStyle}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {darkMode ? (
                <>
                  <span style={{ marginRight: '10px' }}>☀️</span>
                  Switch to Light Mode
                </>
              ) : (
                <>
                  <span style={{ marginRight: '10px' }}>🌙</span>
                  Switch to Dark Mode
                </>
              )}
            </div>
          </button>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ 
            fontSize: '1rem', 
            marginBottom: '15px', 
            fontWeight: '500',
            color: darkMode ? '#e2e8f0' : '#1e293b'
          }}>
            Navigation Menu
          </h4>
          <button
            onClick={() => handleMenuDisplayChange('sidebar')}
            style={topNavMenuType === 'sidebar' ? activeOptionButtonStyle : optionButtonStyle}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px' }}>📊</span>
              Left Sidebar
            </div>
          </button>
          <button
            onClick={() => handleMenuDisplayChange('topbar')}
            style={topNavMenuType === 'topbar' ? activeOptionButtonStyle : optionButtonStyle}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px' }}>📱</span>
              Top Navigation Bar
            </div>
          </button>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ 
            fontSize: '1rem', 
            marginBottom: '15px', 
            fontWeight: '500',
            color: darkMode ? '#e2e8f0' : '#1e293b'
          }}>
            Sidebar Behavior
          </h4>
          <div style={{ 
            backgroundColor: darkMode ? '#334155' : '#f1f5f9',
            padding: '15px',
            borderRadius: '8px',
            border: `1px solid ${darkMode ? '#475569' : '#cbd5e1'}`
          }}>
            <p style={{ 
              margin: '0 0 10px 0', 
              fontSize: '0.9rem',
              color: darkMode ? '#94a3b8' : '#64748b'
            }}>
              When sidebar is open, dashboard content will shift to the right.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsSlider;