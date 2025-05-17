// // src/layouts/TopNav.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { openLeadFormModal as openLeadFormModalAction } from '../../redux/uiSlice';
// import { setCurrentLeadToEdit } from '../../redux/leadsSlice';
// // Import toggleDarkMode and setSidebarOpen from your uiSlice
// import { setSidebarOpen, toggleDarkMode } from '../../redux/uiSlice';

// const TopNav = () => {
//   const dispatch = useDispatch();
//   // Ensure darkMode state is retrieved from the store
//   const { activeTab, sidebarOpen, darkMode } = useSelector((state) => state.ui);

//   const getBreadcrumb = () => {
//     if (activeTab === 'dashboard' || activeTab === 'dash-default') {
//       return (
//         <>
//           <span style={{ color: 'var(--text-color)' }}>Dashboards</span>
//         </>
//       );
//     }
//     return <span>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>;
//   };
  
//   const handleToggleSidebar = () => {
//     dispatch(setSidebarOpen(!sidebarOpen)); // Toggles sidebar state
//   };

//   const handleThemeToggle = () => {
//     dispatch(toggleDarkMode()); // Dispatches action to toggle theme
//   };

//   // Placeholder for CSS variables that might not be in dd.css
//   // --font-weight-semibold: 600;
//   // --font-weight-medium: 500;
//   // --text-color-secondary: rgba(var(--text-color-rgb), 0.7); /* if --text-color-rgb is defined */
//   // For simplicity, direct values or existing variables will be used if placeholders are not defined.

//   return (
//     <div className="top-nav" style={{ 
//       background: 'var(--card-bg)',
//       boxShadow: '0 1px 3px rgba(0,0,0,0.1)', // Consider using var(--card-shadow) or similar
//       borderBottom: '1px solid var(--border-color)'
//     }}>
//       <div className="nav-left">
//         <button className="menu-toggle" onClick={handleToggleSidebar} aria-label="Toggle sidebar">
//           <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
//           </svg>
//         </button>
//         <div className="page-title" style={{
//           color: 'var(--text-color)',
//           fontSize: '1.25rem',
//           fontWeight: '600' // Assuming --font-weight-semibold is 600
//         }}>
//           {getBreadcrumb()}
//         </div>
//       </div>
//       <div className="nav-actions" style={{ gap: '1rem' }}>
//         <div className="search-bar" style={{ position: 'relative' }}>
//           <input 
//             type="text" 
//             placeholder="Search..." 
//             style={{
//               padding: '0.5rem 1rem 0.5rem 2rem',
//               borderRadius: '0.375rem',
//               border: '1px solid var(--border-color)',
//               background: 'var(--bg-color)', // Uses theme-dependent background
//               color: 'var(--text-color)',     // Uses theme-dependent text color
//               fontSize: '0.875rem'
//             }}
//           />
//           <span className="search-icon" style={{
//             position: 'absolute',
//             left: '0.75rem',
//             top: '50%',
//             transform: 'translateY(-50%)',
//             color: 'rgba(var(--text-color-rgb, 0,0,0), 0.7)' // Fallback if --text-color-rgb not set for rgba
//                                                             // Or ideally, use a defined --text-color-secondary
//                                                             // For now, let's use a general approach that might need CSS adjustment:
//                                                             // color: 'var(--text-color)', opacity: 0.7
//           }}>
//             <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
//             </svg>
//           </span>
//         </div>
//         <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
//           {/* THEME TOGGLE BUTTON */}
//           <button 
//             className="notification-btn" // Uses existing class for some base styles
//             onClick={handleThemeToggle}
//             aria-label="Toggle theme"
//             style={{
//               background: 'transparent',
//               border: 'none',
//               color: 'var(--text-color)', // Icon color will adapt to theme
//               cursor: 'pointer',
//               padding: '0.5rem',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center'
//             }}
//           >
//             {darkMode ? (
//               // Moon icon (shows when dark mode is ON, clicking switches to light)
//               <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
//                 <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
//               </svg>
//             ) : (
//               // Sun icon (shows when light mode is ON, clicking switches to dark)
//               <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
//               </svg>
//             )}
//           </button>
          
//           <button className="notification-btn" style={{
//             background: 'transparent',
//             border: 'none',
//             color: 'var(--text-color)',
//             cursor: 'pointer',
//             padding: '0.5rem',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             position: 'relative'
//           }}>
//             <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
//               <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
//             </svg>
//             <span className="notification-badge" style={{
//               position: 'absolute',
//               top: '0',
//               right: '0',
//               background: 'var(--danger-color)',
//               color: 'white',
//               borderRadius: '50%',
//               width: '1rem',
//               height: '1rem',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '0.75rem'
//             }}>3</span>
//           </button>

//           <div style={{
//             width: '2rem',
//             height: '2rem',
//             borderRadius: '50%',
//             background: 'var(--primary-color)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             color: 'white',
//             fontWeight: '500', // Assuming --font-weight-medium is 500
//             cursor: 'pointer'
//           }}>
//             AU
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopNav;

// src/layouts/TopNav.js
import React, { useState, useEffect, useRef } from 'react'; // useState, useEffect, useRef import karein
import { useSelector, useDispatch } from 'react-redux';
import { setSidebarOpen, toggleDarkMode, toggleSettingsSlider, setActiveTab } from '../../redux/uiSlice';
// Agar aapke paas authSlice hai logout ke liye:
// import { logoutUser } from '../../redux/authSlice'; // Example import
import { menuStructure } from './settings/menuConfig';

const TopNav = () => {
  const dispatch = useDispatch();
  const { activeTab, sidebarOpen, darkMode, topNavMenuType } = useSelector((state) => state.ui);
  // User data (example, yeh Redux ya context se aana chahiye)
  const user = useSelector(state => state.auth?.user) || { name: 'Admin User', initials: 'AU', avatarUrl: null }; // Fallback

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Dropdown ke bahar click detect karne ke liye ref

  // Function to get the display name for the breadcrumb/page title
  const getPageTitle = () => { /* ... aapka pichhla getPageTitle code ... */
    const currentMenuItem = menuStructure.find(item => item.path === activeTab);
    if (currentMenuItem) return currentMenuItem.label;
    if (activeTab === 'dashboard' || activeTab === 'dash-default') return 'Dashboards';
    if (activeTab) return activeTab.charAt(0).toUpperCase() + activeTab.slice(1);
    return 'Dashboard';
  };
  
  const handleToggleSidebar = () => dispatch(setSidebarOpen(!sidebarOpen));
  const handleOpenSettings = () => dispatch(toggleSettingsSlider());
  const handleTopNavMenuItemClick = (itemPath) => dispatch(setActiveTab(itemPath));

  // Profile dropdown ko toggle karne ka function
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(prev => !prev);
  };

  // Logout handler (placeholder)
  const handleLogout = () => {
    console.log('User logged out');
    setIsProfileDropdownOpen(false); // Dropdown band karein
    // dispatch(logoutUser()); // Asli logout action dispatch karein
    // Redirect to login page
  };

  // Edit Profile handler (placeholder)
  const handleEditProfile = () => {
    console.log('Navigate to Edit Profile page');
    // dispatch(setActiveTab('profile-edit')); // Ya navigate karein
    setIsProfileDropdownOpen(false); // Dropdown band karein
  };


  // Dropdown ke bahar click karne par use band karne ka effect
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Avatar button ko check karein taaki uspe click karne par dropdown band na ho
        const avatarButton = document.getElementById('user-avatar-button');
        if (avatarButton && avatarButton.contains(event.target)) {
          return; // Agar avatar button par click hua hai, toh kuch na karein (toggle handle karega)
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


  const topBarMenuItems = menuStructure.filter(item => item.type === 'item');

  // Basic styling for dropdown (aapko CSS file mein daalna chahiye)
  const dropdownStyle = {
    position: 'absolute',
    top: '50px', // TopNav ki height ke neeche
    right: '10px', // Right se thoda offset
    backgroundColor: darkMode ? 'var(--card-bg-dark, #2D3748)' : 'var(--card-bg-light, white)',
    border: `1px solid ${darkMode ? 'var(--border-dark, #4A5568)' : 'var(--border-light, #E2E8F0)'}`,
    borderRadius: '6px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: 1100, // Sabse upar
    width: '180px',
    padding: '8px 0',
  };

  const dropdownItemStyle = {
    display: 'block',
    width: '100%',
    padding: '10px 15px',
    textAlign: 'left',
    background: 'none',
    border: 'none',
    color: darkMode ? 'var(--text-dark, #E2E8F0)' : 'var(--text-light, #1A202C)',
    cursor: 'pointer',
    fontSize: '0.9rem',
  };


  return (
    <div className="top-nav" style={{ /* ... aapke pichhle top-nav styles ... */
      background: 'var(--card-bg)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      borderBottom: '1px solid var(--border-color)', display: 'flex',
      alignItems: 'center', padding: '0 15px', height: '60px', position: 'relative' // position: relative for dropdown
    }}>
      <div className="nav-left" style={{ display: 'flex', alignItems: 'center' }}>
        {topNavMenuType === 'sidebar' && (
          <button className="menu-toggle" onClick={handleToggleSidebar} aria-label="Toggle sidebar" style={{ /* ... */ }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        )}
        <div className="page-title" style={{ color: 'var(--text-color)', fontSize: '1.15rem', fontWeight: '600', whiteSpace: 'nowrap' }}>
          {getPageTitle()}
        </div>
      </div>

      {topNavMenuType === 'topbar' && (
        <div className="topbar-menu-items" style={{ /* ... aapke pichhle topbar-menu-items styles ... */
            display: 'flex', gap: '5px', alignItems: 'center', overflowX: 'auto', flexGrow: 1,
            marginLeft: '20px', marginRight: '20px', justifyContent: 'flex-start',
        }}>
          {topBarMenuItems.map(item => (
            <button key={item.name} onClick={() => handleTopNavMenuItemClick(item.path)}
              className={`topbar-menu-button ${activeTab === item.path ? 'active' : ''}`}
              style={{ /* ... aapke pichhle button styles ... */
                background: 'transparent', border: 'none', color: activeTab === item.path ? 'var(--primary-color)' : 'var(--text-color-secondary)',
                padding: '8px 10px', cursor: 'pointer', fontWeight: activeTab === item.path ? '600' : '500',
                whiteSpace: 'nowrap', borderRadius: '4px', fontSize: '0.875rem',
              }}>
              {item.icon && <span style={{ marginRight: '5px', verticalAlign: 'middle', fontSize: '0.9em' }}>{item.icon}</span>}
              <span style={{ verticalAlign: 'middle' }}>{item.label}</span>
            </button>
          ))}
        </div>
      )}

      <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: topNavMenuType === 'sidebar' ? 'auto' : '0' }}>
        {/* Theme Toggle Button */}
        <button className="theme-toggle-btn" onClick={()=> dispatch(toggleDarkMode())} aria-label="Toggle theme" style={{ /* ... */ }}>
            {darkMode ? ( <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> ) : ( <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path></svg> )}
        </button>
        
        {/* Notification Button */}
        <button className="notification-btn" style={{ /* ... */ }}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"> <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path> </svg>
          <span className="notification-badge" style={{ /* ... */ }}>3</span>
        </button>

        {/* Settings Button */}
        <button onClick={handleOpenSettings} aria-label="Open settings" style={{ /* ... */ }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <circle cx="12" cy="12" r="3"></circle> <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path> </svg>
        </button>

        {/* User Avatar and Dropdown */}
        <div className="user-avatar-container" style={{ position: 'relative' }} ref={dropdownRef}>
          <button
            id="user-avatar-button" // ID for outside click detection
            onClick={toggleProfileDropdown}
            style={{
              width: '36px', height: '36px', borderRadius: '50%',
              background: user.avatarUrl ? `url(${user.avatarUrl}) center/cover` : 'var(--primary-color)',
              color: 'white', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontWeight: '500', cursor: 'pointer',
              border: '2px solid transparent', // Optional: border for focus/hover
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary-color-light, #63b3ed)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
            aria-label="User menu"
            aria-haspopup="true"
            aria-expanded={isProfileDropdownOpen}
          >
            {!user.avatarUrl && user.initials}
          </button>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown" style={dropdownStyle}>
              <div style={{ padding: '10px 15px', borderBottom: `1px solid ${darkMode ? '#4A5568' : '#E2E8F0'}`, marginBottom: '5px' }}>
                <p style={{ margin: 0, fontWeight: '600', fontSize: '0.95rem' }}>{user.name}</p>
                {/* <p style={{ margin: '2px 0 0', fontSize: '0.8rem', color: 'var(--text-color-secondary)' }}>{user.email || 'user@example.com'}</p> */}
              </div>
              <button onClick={handleEditProfile} style={{...dropdownItemStyle, display: 'flex', alignItems: 'center'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', opacity: 0.7}}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                Edit Profile
              </button>
              {/* Aap aur bhi items add kar sakte hain, jaise "Account Settings" */}
              <button onClick={handleLogout} style={{...dropdownItemStyle, display: 'flex', alignItems: 'center', color: 'var(--danger-color, #E53E3E)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', opacity: 0.7}}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default TopNav;
