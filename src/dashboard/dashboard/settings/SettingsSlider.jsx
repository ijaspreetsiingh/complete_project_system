// src/components/SettingsSlider.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleDarkMode, // Still needed if you want the theme toggle functionality within the dark slider
  setTopNavMenuType,
  setSettingsSliderOpen,
  setSidebarFixed
} from '../../../redux/uiSlice';

const SettingsSlider = () => {
  const dispatch = useDispatch();
  // We still need darkMode from Redux if the toggle button remains
  const {
    darkMode, // Keeping this if you still want the "Switch to Light/Dark Mode" button to function
    topNavMenuType,
    isSettingsSliderOpen,
    isSidebarFixed
  } = useSelector((state) => state.ui);

  if (!isSettingsSliderOpen) return null;

  // The handleThemeChange function remains as it toggles the global darkMode state.
  // This means if the main app can still switch themes, this button will control it.
  const handleThemeChange = () => {
    dispatch(toggleDarkMode());
  };

  const handleMenuDisplayChange = (type) => {
    dispatch(setTopNavMenuType(type));
    dispatch(setSidebarFixed(false)); // If a menu display type is chosen, ensure sidebar fixed is off
    localStorage.setItem('menuType', type);
  };

  const handleToggleFixedSidebar = () => {
    const newSidebarFixedState = !isSidebarFixed;
    dispatch(setSidebarFixed(newSidebarFixedState));
    // If sidebar is fixed, ensure the menu type is 'sidebar'
    if (newSidebarFixedState) {
      dispatch(setTopNavMenuType('sidebar'));
    }
    localStorage.setItem('sidebarFixed', newSidebarFixedState);
  };

  // --- Dark Mode Styles ---
  const darkColors = {
    // These values should align with what you define in your global CSS variables or theme object
    // if you have them, or be hardcoded dark values.
    sidebarBg: 'black', // Assuming this is your sidebar's main dark background
    sidebarTextColor: 'white', // General text color for sidebar items
    sidebarSeparatorColor: '#3A3A3A', // Dark separator
    sidebarHoverBg: '#1A1A1A', // Dark hover background
    sidebarActiveBg: '#374151', // Dark active background (consistent with Sidebar.js)
    sidebarActiveTextColor: 'white', // Active item text color
    logoFunnelsColor: '#6366f1', // Accent color for the logo/active border
    cardBg: '#1C1C1C', // Background for information cards
    borderColor: '#3A3A3A', // General border color
    textColor: '#E0E0E0', // General body text color for info boxes etc.
  };

  const sliderStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '300px',
    height: '100%',
    backgroundColor: darkColors.sidebarBg,
    color: darkColors.sidebarTextColor,
    boxShadow: '-5px 0 15px rgba(0,0,0,0.2)',
    padding: '20px',
    zIndex: 1050,
    transform: 'translateX(0)',
    transition: 'transform 0.3s ease-in-out',
    borderLeft: `1px solid ${darkColors.sidebarSeparatorColor}`,
    overflowY: 'auto',
  };

  const optionButtonStyle = {
    display: 'block',
    width: '100%',
    padding: '12px 15px',
    marginBottom: '10px',
    textAlign: 'left',
    backgroundColor: darkColors.sidebarHoverBg,
    color: darkColors.sidebarTextColor,
    border: `1px solid ${darkColors.sidebarSeparatorColor}`,
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.2s ease',
  };

  const activeOptionButtonStyle = {
    ...optionButtonStyle,
    backgroundColor: darkColors.sidebarActiveBg,
    color: darkColors.sidebarActiveTextColor,
    borderColor: darkColors.logoFunnelsColor,
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
          borderBottom: `1px solid ${darkColors.sidebarSeparatorColor}`
        }}>
          <h3 style={{
            margin: 0,
            fontSize: '1.2rem',
            fontWeight: '600',
            color: darkColors.sidebarTextColor
          }}>Dashboard Settings</h3>
          <button
            onClick={() => dispatch(setSettingsSliderOpen(false))}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: darkColors.sidebarTextColor,
              opacity: 0.7,
              transition: 'color 0.2s ease, opacity 0.2s ease'
            }}
            aria-label="Close settings"
          >
            &times;
          </button>
        </div>

        {/* Theme Mode section - still relies on darkMode state for toggle functionality */}
        <div style={{ marginBottom: '25px' }}>
          <h4 style={{
            fontSize: '1rem',
            marginBottom: '15px',
            fontWeight: '500',
            color: darkColors.sidebarTextColor
          }}>
            Theme Mode
          </h4>
          <button
            onClick={handleThemeChange}
            style={optionButtonStyle}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {darkMode ? ( // This check is still necessary to display current theme state
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
            color: darkColors.sidebarTextColor
          }}>
            Navigation Menu
          </h4>
          <button
            onClick={() => handleMenuDisplayChange('sidebar')}
            style={topNavMenuType === 'sidebar' && !isSidebarFixed ? activeOptionButtonStyle : optionButtonStyle}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px' }}>➡️</span>
              Left Sidebar
            </div>
          </button>
          <button
            onClick={() => handleMenuDisplayChange('topbar')}
            style={topNavMenuType === 'topbar' ? activeOptionButtonStyle : optionButtonStyle}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px' }}>⬆️</span>
              Top Navigation Bar
            </div>
          </button>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h4 style={{
            fontSize: '1rem',
            marginBottom: '15px',
            fontWeight: '500',
            color: darkColors.sidebarTextColor
          }}>
            Sidebar Behavior
          </h4>
          <button
            onClick={handleToggleFixedSidebar}
            style={isSidebarFixed ? activeOptionButtonStyle : optionButtonStyle}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px' }}>📌</span>
              {isSidebarFixed ? 'Unfix Sidebar' : 'Fix Sidebar (Always Open)'}
            </div>
          </button>
          <div style={{
            backgroundColor: darkColors.cardBg,
            padding: '15px',
            borderRadius: '8px',
            border: `1px solid ${darkColors.borderColor}`,
            marginTop: '10px'
          }}>
            <p style={{
              margin: '0 0 10px 0',
              fontSize: '0.9rem',
              color: darkColors.textColor
            }}>
              {isSidebarFixed ?
                'Sidebar is fixed open. Content is shifted to the right.' :
                'When sidebar is open, dashboard content will shift to the right.'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsSlider;