// // src/layouts/Sidebar.js
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setActiveTab, toggleDarkMode, setSidebarOpen } from '../../redux/uiSlice'; // setSidebarOpen import karein

// const Sidebar = () => {
//   const dispatch = useDispatch();
//   const { activeTab, darkMode, sidebarOpen } = useSelector((state) => state.ui);
//   const user = { name: 'Admin User', email: 'admin@example.com', avatarInitials: 'AU' }; // User data update karein

//   // Image ke anusaar nested menu items
//   const menuStructure = [
//     {
//       type: 'header', // 'Favorites' aur 'Recently' ke liye alag se handle karna hoga agar woh tabs hain
//       title: 'Favorites', // Ya ise 'tabs' ke roop mein render karein
//     },
//     { name: 'fav-overview', label: 'Overview', icon: '📊', parent: 'Favorites', type: 'item', path: 'dashboard' }, // Icon aur path update karein
//     { name: 'fav-projects', label: 'Leads', icon: '📁', parent: 'Favorites', type: 'item', path: 'leads' }, // Icon aur path update karein
//     {
//       type: 'header',
//       title: 'Dashboards',
//     },
//     { name: 'dash-default', label: 'Default', icon: '🏠', parent: 'Dashboards', type: 'item', path: 'dashboard' },
//     { name: 'dash-ecommerce', label: 'Portfolio', icon: '🛒', parent: 'Dashboards', type: 'item', path: 'Portfolio' },
//     { name: 'dash-projects', label: 'Team', icon: '🛠️', parent: 'Dashboards', type: 'item', path: 'team' },
//     { name: 'dash-online-courses', label: 'Whatsapp/mail Setup', icon: '📚', parent: 'Dashboards', type: 'item', path: 'online-courses' },
//     // {
//     //   type: 'header',
//     //   title: 'Pages',
//     // },
//     // { 
//     //   name: 'pages-user-profile', 
//     //   label: 'User Profile', 
//     //   icon: '👤', 
//     //   parent: 'Pages', 
//     //   type: 'item', // Ise collapsible banane ke liye state aur logic add karna hoga
//     //   path: 'user-profile',
//     //   subItems: [ // Agar User Profile ke neeche sub-items hain
//     //     { name: 'profile-overview', label: 'Overview', path: 'profile-overview'},
//     //     { name: 'profile-projects', label: 'Projects', path: 'profile-projects'},
//     //     { name: 'profile-campaigns', label: 'Campaigns', path: 'profile-campaigns'},
//     //     { name: 'profile-documents', label: 'Documents', path: 'profile-documents'},
//     //     { name: 'profile-followers', label: 'Followers', path: 'profile-followers'},
//     //     { name: 'profile-account', label: 'Account', path: 'profile-account'},
//     //   ]
//     // },
//   ];

//   // User Profile jaise collapsible items ke liye state
//   const [openSubmenus, setOpenSubmenus] = useState({});

//   const handleMenuItemClick = (item) => {
//     if (item.subItems) {
//       setOpenSubmenus(prev => ({ ...prev, [item.name]: !prev[item.name] }));
//     }
//     if (item.path) { // Path wale items hi activeTab set karenge
//         dispatch(setActiveTab(item.path)); // activeTab ko item.path se set karein
//         if (window.innerWidth < 768) { // Mobile par click ke baad sidebar band karein
//             dispatch(setSidebarOpen(false));
//         }
//     }
//   };
  
//   // "Favorites" aur "Recently" ke liye tabs. CSS mein inke liye alag style ki zaroorat ho sakti hai.
//   // Abhi ke liye, main unhe menu ke upar simple text ke roop mein dikhaunga.
//   const [activeTopTab, setActiveTopTab] = useState('Favorites');


//   return (
//     <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
//       <div className="sidebar-header">
//         {/* Window control dots (agar aapko inhe fake karna hai toh yahan HTML/CSS add karein) */}
//         {/* <div className="window-controls"> <span className="dot red"></span> <span className="dot yellow"></span> <span className="dot green"></span> </div> */}
//         <h2 className="logo">Your<span>Logo</span></h2> {/* Apna logo yahan daalein */}
//         {/* Theme toggle button from dd.css might be different, adjust if needed */}
//         <button className="theme-toggle" onClick={() => dispatch(toggleDarkMode())} aria-label="Toggle theme">
//           {darkMode ? '☀️' : '🌙'}
//         </button>
//       </div>

//       {/* Favorites / Recently Tabs - Inhe dd.css ke anusaar style karna hoga */}
//       <div style={{ padding: '0 20px', display: 'flex', gap: '10px', borderBottom: '1px solid var(--border-color)', marginBottom: '10px' }}>
//         <button 
//             onClick={() => setActiveTopTab('Favorites')} 
//             style={{ background: 'none', border: 'none', padding: '10px 0', color: activeTopTab === 'Favorites' ? 'var(--primary-color)' : 'var(--text-color)', cursor: 'pointer', fontWeight: activeTopTab === 'Favorites' ? 'bold' : 'normal' }}>
//             Favorites
//         </button>
//         <button 
//             onClick={() => setActiveTopTab('Recently')} 
//             style={{ background: 'none', border: 'none', padding: '10px 0', color: activeTopTab === 'Recently' ? 'var(--primary-color)' : 'var(--text-color)', cursor: 'pointer', fontWeight: activeTopTab === 'Recently' ? 'bold' : 'normal' }}>
//             Recently
//         </button>
//       </div>

//       <div className="sidebar-menu">
//         {menuStructure.map((item, index) => {
//           if (item.type === 'header') {
//             // Header sirf tab 'Favorites' active hone par dikhayein (ya apni logic ke anusaar)
//             if (activeTopTab === 'Favorites' && (item.title === 'Favorites' || item.title === 'Dashboards' || item.title === 'Pages')) {
//                  return <h3 key={index} style={{ padding: '10px 20px', margin: '10px 0 5px 0', color: 'var(--text-color-secondary)', fontSize: '0.8rem', textTransform: 'uppercase'}}>{item.title}</h3>;
//             }
//             return null; // Agar activeTopTab 'Recently' hai toh headers na dikhayein
//           }
          
//           // Menu items sirf tab 'Favorites' active hone par dikhayein
//           if (activeTopTab === 'Favorites' && item.type === 'item') {
//             return (
//               <React.Fragment key={item.name}>
//                 <button
//                   className={`menu-item ${activeTab === item.path ? 'active' : ''}`}
//                   onClick={() => handleMenuItemClick(item)}
//                 >
//                   <span className="menu-icon">{item.icon}</span>
//                   <span>{item.label}</span>
//                   {item.subItems && (
//                     <span style={{ marginLeft: 'auto' }}>{openSubmenus[item.name] ? '▲' : '▼'}</span>
//                   )}
//                 </button>
//                 {item.subItems && openSubmenus[item.name] && (
//                   <div style={{ marginLeft: '20px' }}> {/* Submenu styling */}
//                     {item.subItems.map(subItem => (
//                       <button
//                         key={subItem.name}
//                         className={`menu-item ${activeTab === subItem.path ? 'active' : ''}`}
//                         onClick={() => {
//                             dispatch(setActiveTab(subItem.path));
//                             if (window.innerWidth < 768) { dispatch(setSidebarOpen(false));}
//                         }}
//                         style={{paddingLeft: '25px'}} // Indent sub-items
//                       >
//                         {/* Sub-item icon agar hai toh yahan add karein */}
//                         <span>{subItem.label}</span>
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </React.Fragment>
//             );
//           }
//           return null; // Agar activeTopTab 'Recently' hai toh menu items na dikhayein
//         })}
//         {/* Agar 'Recently' tab active hai, toh yahan recent items dikhaayein */}
//         {activeTopTab === 'Recently' && (
//             <div style={{padding: '20px', color: 'var(--text-color)'}}>Recently viewed items yahan aayenge...</div>
//         )}
//       </div>

//       <div className="sidebar-footer">
//         <div className="user-profile">
//           <div className="avatar"> {/* dd.css mein .avatar ke liye gradient hai, ya aap initials use kar sakte hain */}
//             {user.avatarInitials}
//           </div>
//           <div className="user-info">
//             <div className="user-name">{user.name}</div>
//             <div className="user-email">{user.email}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
  
// };

// export default Sidebar;

// src/layouts/Sidebar.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab, toggleDarkMode, setSidebarOpen } from '../../redux/uiSlice'; // Path ko apne project structure ke anusaar adjust karein
import { menuStructure } from './settings/menuConfig'; // Sahi path se import karein

const Sidebar = () => {
  const dispatch = useDispatch();
  const { activeTab, darkMode, sidebarOpen } = useSelector((state) => state.ui);
  const user = { name: 'Admin User', email: 'admin@example.com', avatarInitials: 'AU' }; // User data update karein

  // User Profile jaise collapsible items ke liye state (agar menuStructure mein subItems hain)
  const [openSubmenus, setOpenSubmenus] = useState({});

  const handleMenuItemClick = (item) => {
    if (item.subItems) {
      // Toggle submenu visibility
      setOpenSubmenus(prev => ({ ...prev, [item.name]: !prev[item.name] }));
    }
    // Agar item ka path hai, toh active tab set karein
    if (item.path) {
        dispatch(setActiveTab(item.path));
        // Chhote screens par, item click hone ke baad sidebar ko band kar dein
        if (window.innerWidth < 768 && sidebarOpen) { // sidebarOpen check add kiya
            dispatch(setSidebarOpen(false));
        }
    }
  };
  
  // "Favorites" aur "Recently" ke liye tabs.
  const [activeTopTab, setActiveTopTab] = useState('Favorites'); // Default 'Favorites' active

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2 className="logo">Your<span>Logo</span></h2> {/* Apna logo yahan daalein */}
        {/* Theme toggle button (optional, agar sirf settings slider mein chahiye) */}
        <button className="theme-toggle" onClick={() => dispatch(toggleDarkMode())} aria-label="Toggle theme">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Favorites / Recently Tabs */}
      <div style={{ padding: '0 20px', display: 'flex', gap: '10px', borderBottom: '1px solid var(--border-color)', marginBottom: '10px' }}>
        <button 
            onClick={() => setActiveTopTab('Favorites')} 
            style={{ background: 'none', border: 'none', padding: '10px 0', color: activeTopTab === 'Favorites' ? 'var(--primary-color)' : 'var(--text-color)', cursor: 'pointer', fontWeight: activeTopTab === 'Favorites' ? 'bold' : 'normal', fontSize: '0.9rem' }}>
            Favorites
        </button>
        <button 
            onClick={() => setActiveTopTab('Recently')} 
            style={{ background: 'none', border: 'none', padding: '10px 0', color: activeTopTab === 'Recently' ? 'var(--primary-color)' : 'var(--text-color)', cursor: 'pointer', fontWeight: activeTopTab === 'Recently' ? 'bold' : 'normal', fontSize: '0.9rem' }}>
            Recently
        </button>
      </div>

      <div className="sidebar-menu">
        {menuStructure.map((item, index) => {
          // Headers ko render karein agar woh activeTopTab ke criteria se match karte hain
          if (item.type === 'header') {
            // Example: Sirf 'Favorites' tab ke andar ke headers dikhayein
            if (activeTopTab === 'Favorites' && (item.title === 'Favorites' || item.title === 'Dashboards' || item.title === 'Pages')) {
                 return <h3 key={index} style={{ padding: '10px 20px', margin: '10px 0 5px 0', color: 'var(--text-color-secondary)', fontSize: '0.8rem', textTransform: 'uppercase'}}>{item.title}</h3>;
            }
            return null; // Baaki cases mein header render na karein
          }
          
          // Menu items ko render karein agar woh activeTopTab ke criteria se match karte hain
          if (activeTopTab === 'Favorites' && item.type === 'item') {
            // Yahan check karein ki item ka parent activeTopTab ke anusaar hai ya nahi
            // Example: Sirf 'Favorites' ya 'Dashboards' ke items dikhayein jab 'Favorites' tab active ho
            if (item.parent === 'Favorites' || item.parent === 'Dashboards' || item.parent === 'Pages') { // Condition ko apni zaroorat ke anusaar adjust karein
              return (
                <React.Fragment key={item.name}>
                  <button
                    className={`menu-item ${activeTab === item.path ? 'active' : ''}`}
                    onClick={() => handleMenuItemClick(item)}
                  >
                    {item.icon && <span className="menu-icon">{item.icon}</span>}
                    <span>{item.label}</span>
                    {item.subItems && (
                      <span style={{ marginLeft: 'auto', fontSize: '0.7em', transition: 'transform 0.2s' , transform: openSubmenus[item.name] ? 'rotate(180deg)' : 'rotate(0deg)'}}>{'▼'}</span> // Icon ko rotate karein
                    )}
                  </button>
                  {item.subItems && openSubmenus[item.name] && (
                    <div style={{ marginLeft: '20px', borderLeft: '1px solid var(--border-color-translucent)', paddingLeft: '10px' }}> {/* Submenu styling */}
                      {item.subItems.map(subItem => (
                        <button
                          key={subItem.name}
                          className={`menu-item sub-menu-item ${activeTab === subItem.path ? 'active' : ''}`}
                          onClick={() => {
                              dispatch(setActiveTab(subItem.path));
                              if (window.innerWidth < 768 && sidebarOpen) { dispatch(setSidebarOpen(false));}
                          }}
                          style={{paddingLeft: '15px'}} // Sub-items ko indent karein
                        >
                          {/* Sub-item icon agar hai toh yahan add karein */}
                          {subItem.icon && <span className="menu-icon" style={{fontSize: '0.8em'}}>{subItem.icon}</span>}
                          <span>{subItem.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              );
            }
          }
          return null; // Baaki cases mein item render na karein
        })}
        
        {/* Agar 'Recently' tab active hai, toh yahan recent items dikhaayein */}
        {activeTopTab === 'Recently' && (
            <div style={{padding: '20px', color: 'var(--text-color)', textAlign: 'center', fontSize: '0.9rem'}}>
                <p>Recently viewed items will appear here.</p>
                {/* Example:
                <ul style={{listStyle: 'none', padding: 0}}>
                    <li style={{padding: '8px 0', cursor: 'pointer'}}>Recent Project Alpha</li>
                    <li style={{padding: '8px 0', cursor: 'pointer'}}>Lead: John Doe</li>
                </ul>
                */}
            </div>
        )}
      </div>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar" style={{ 
            width: '36px', height: '36px', borderRadius: '50%', 
            backgroundColor: 'var(--primary-color)', color: 'white', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            fontWeight: '500', fontSize: '0.9rem', marginRight: '10px'
          }}>
            {user.avatarInitials}
          </div>
          <div className="user-info">
            <div className="user-name" style={{fontWeight: '500', fontSize: '0.9rem'}}>{user.name}</div>
            <div className="user-email" style={{fontSize: '0.75rem', color: 'var(--text-color-secondary)'}}>{user.email}</div>
          </div>
          {/* Optional: Logout/Settings icon for user */}
          {/* <button style={{marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--text-color-secondary)'}}>⚙️</button> */}
        </div>
      </div>
    </div>
  );
  
};

export default Sidebar;
