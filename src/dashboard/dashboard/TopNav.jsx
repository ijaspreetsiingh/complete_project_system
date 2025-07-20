// src/layouts/TopNav.js
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSidebarOpen, toggleDarkMode, toggleSettingsSlider, setActiveTab } from '../../redux/uiSlice';
import { logout } from '../../redux/authSlice'; // <-- Import the logout action from authSlice
import { menuStructure } from './settings/menuConfig'; // Make sure this path is correct

const TopNav = () => {
  const dispatch = useDispatch();
  const { activeTab, sidebarOpen, darkMode, topNavMenuType } = useSelector((state) => state.ui);
  const user = useSelector(state => state.auth?.user) || { name: 'Admin User', email: 'admin@example.com', initials: 'AU', avatarUrl: null }; // Fallback with email

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const getPageTitle = () => {
    const currentMenuItem = menuStructure.find(item => item.path === activeTab);
    if (currentMenuItem) return currentMenuItem.label;
    if (activeTab === 'dashboard' || activeTab === 'dash-default') return 'Dashboards';
    if (activeTab) return activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace(/-/g, ' '); // Replace hyphens with spaces
    return 'Dashboard';
  };
  
  const handleToggleSidebar = () => dispatch(setSidebarOpen(!sidebarOpen));
  const handleOpenSettings = () => dispatch(toggleSettingsSlider());
  const handleTopNavMenuItemClick = (itemPath) => dispatch(setActiveTab(itemPath));

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(prev => !prev);
  };

  // --- LOGOUT HANDLER MODIFICATION ---
  const handleLogout = () => {
    console.log('User logged out');
    setIsProfileDropdownOpen(false); // Close dropdown
    dispatch(logout()); // <-- Dispatch the logout action here!
    // Optional: Redirect to login page after logout
    // For redirection, you would typically use useNavigate hook from react-router-dom
    // const navigate = useNavigate(); // Add this at the top with other hooks
    // navigate('/login'); // Redirect to your login path
  };
  // --- END OF LOGOUT HANDLER MODIFICATION ---

  const handleEditProfile = () => {
    console.log('Navigate to Edit Profile page');
    // dispatch(setActiveTab('settings/profile')); // Example: Navigate to profile settings tab
    setIsProfileDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        const avatarButton = document.getElementById('user-avatar-button');
        if (avatarButton && avatarButton.contains(event.target)) {
          return; 
        }
        setIsProfileDropdownOpen(false);
      }
    };

    if (isProfileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileDropdownOpen]);

  const topBarMenuItems = menuStructure.filter(item => item.type === 'item' && item.showInTopNav !== false);

  const renderIcon = (iconStringOrJsx) => {
    if (typeof iconStringOrJsx === 'string' && iconStringOrJsx.startsWith('<svg')) {
      return <span dangerouslySetInnerHTML={{ __html: iconStringOrJsx }} />;
    }
    return iconStringOrJsx; 
  };


  return (
    <div className="top-nav">
      <div className="nav-left">
        {topNavMenuType === 'sidebar' && (
          <button 
            className="menu-toggle-btn" 
            onClick={handleToggleSidebar} 
            aria-label="Toggle sidebar"
          >
            <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        )}
        <div className="page-title">
          {getPageTitle()}
        </div>
      </div>
      {topNavMenuType === 'topbar' && (
        <div className="topbar-menu">
          {topBarMenuItems.map(item => (
            <button 
              key={item.name || item.path} 
              onClick={() => handleTopNavMenuItemClick(item.path)}
              className={`topbar-menu-button ${activeTab === item.path ? 'active' : ''}`}
            >
              {item.icon && renderIcon(item.icon) }
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}

      <div className="nav-actions">
        <button 
          className="nav-action-btn theme-toggle-btn" 
          onClick={()=> dispatch(toggleDarkMode())} 
          aria-label="Toggle theme"
        >
          {darkMode ? ( 
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> 
          ) : ( 
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path></svg> 
          )}
        </button>
        
        <button className="nav-action-btn notification-btn" aria-label="Notifications">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"> <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path> </svg>
          <span className="notification-badge">3</span>
        </button>

        <button className="nav-action-btn settings-btn" onClick={handleOpenSettings} aria-label="Open settings">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <circle cx="12" cy="12" r="3"></circle> <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path> </svg>
        </button>

        <div className="user-avatar-container" ref={dropdownRef}>
          <button
            id="user-avatar-button"
            className="user-avatar-button"
            onClick={toggleProfileDropdown}
            aria-label="User menu"
            aria-haspopup="true"
            aria-expanded={isProfileDropdownOpen}
            style={{ backgroundColor: user.avatarUrl ? 'transparent' : 'var(--primary-color)' }} 
          >
            {user.avatarUrl ? <img src={user.avatarUrl} alt="User avatar" /> : user.initials}
          </button>

          <div className={`profile-dropdown ${isProfileDropdownOpen ? 'open' : ''}`}>
            <div className="profile-dropdown-header">
              <p className="user-name">{user.name}</p>
              {user.email && <p className="user-email">{user.email}</p>}
            </div>
            <button onClick={handleEditProfile} className="profile-dropdown-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              Edit Profile
            </button>
            <button onClick={handleLogout} className="profile-dropdown-item danger">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;