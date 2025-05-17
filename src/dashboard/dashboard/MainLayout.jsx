// // src/layouts/MainLayout.js
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// // Aapke original imports
// import Sidebar from './Sidebar';
// import TopNav from './TopNav';
// import DashboardView from './DashboardView'; // Aapka component
// import LeadsView from './LeadsView';       // Aapka component
// import Team from "./team";                  // Aapka component
// import Portfolio from "./portfolioedit";     // Aapka component
// import LeadFormModal from './LeadFormModal';

// // uiSlice se actions (setSettingsSliderOpen add kiya gaya hai agar zaroorat pade)
// import { setSidebarOpen, setSettingsSliderOpen } from '../../redux/uiSlice'; // Path adjust karein

// // Naya SettingsSlider component
// import SettingsSlider from './settings/SettingsSlider'; // Path adjust karein agar alag jagah hai

// const MainLayout = () => {
//   const dispatch = useDispatch();
//   // Redux state se zaroori values (topNavMenuType aur isSettingsSliderOpen add kiye gaye)
//   const {
//     activeTab,
//     darkMode,
//     sidebarOpen,
//     showLeadForm,
//     topNavMenuType,       // Settings slider se control hoga
//     isSettingsSliderOpen  // Settings slider ki visibility ke liye
//   } = useSelector((state) => state.ui);

//   // Main Sidebar ke overlay ke liye click handler
//   // Yeh sirf tab kaam karega jab menu type 'sidebar' ho
//   const handleOverlayClick = () => {
//     if (topNavMenuType === 'sidebar' && sidebarOpen) {
//       dispatch(setSidebarOpen(false)); // Sidebar band karne ka action
//     }
//     // Agar settings slider khula ho aur overlay par click ho (SettingsSlider component khud handle karta hai)
//     // Lekin agar aap yahan se bhi control karna chahte hain:
//     // if (isSettingsSliderOpen) {
//     //   dispatch(setSettingsSliderOpen(false));
//     // }
//   };

//   // Theme class ko body par apply karne ka effect (Aapka original logic)
//   useEffect(() => {
//     const body = document.body;
//     if (!darkMode) { // Agar darkMode false hai, toh light theme active
//       body.classList.add('light');
//       body.classList.remove('dark'); // Ensure dark class is removed
//     } else { // Agar darkMode true hai, toh dark theme active
//       body.classList.remove('light');
//       body.classList.add('dark');   // Ensure dark class is added
//     }
//     // Optional: MainLayout unmount hone par body class reset karein
//     // return () => {
//     //   body.classList.remove('light', 'dark');
//     // };
//   }, [darkMode]); // Dependency array: effect darkMode change hone par run hoga

//   // Active view render karne ka function (Aapka original switch statement)
//   const renderActiveView = () => {
//     switch (activeTab) {
//       case 'leads':
//         return <LeadsView />;
//       case 'team':
//         return <Team />;
//       case 'Portfolio': // Case ka dhyan rakhein
//         return <Portfolio />;
//       case 'dashboard':
//       default:
//         return <DashboardView />;
//     }
//   };

//   // Main content ke liye dynamic class
//   let mainContentClasses = "main-content";
//   if (topNavMenuType === 'sidebar' && sidebarOpen) {
//     // Jab left sidebar active ho, toh content ko shift karne ke liye class (CSS mein define karein)
//     // e.g., .main-content.sidebar-active { margin-left: 250px; /* sidebar width */ }
//     mainContentClasses += " sidebar-active";
//   } else if (topNavMenuType === 'topbar') {
//     // Jab menu topbar mein ho, toh content ka left margin reset karein (CSS mein define karein)
//     // e.g., .main-content.topbar-menu-active { margin-left: 0; }
//     mainContentClasses += " topbar-menu-active";
//   }
//   // Agar sidebar band hai (aur menu type 'sidebar' hai), toh bhi `topbar-menu-active` jaisa behavior ho sakta hai (margin-left: 0)
//   // Ya aap ek alag class `sidebar-inactive` add kar sakte hain. Abhi ke liye simple rakhte hain.

//   return (
//     // dashboard-container par theme class add karna optional hai, agar body par already hai
//     // Lekin agar specific styling chahiye toh yeh accha hai:
//     <div className={`dashboard-container ${darkMode ? 'dark-theme-container' : 'light-theme-container'}`}>
//       {/* Sidebar ko conditionally render karein (sirf jab menu type 'sidebar' ho) */}
//       {topNavMenuType === 'sidebar' && <Sidebar />}

//       {/* Main Sidebar ka overlay (sirf tab jab menu type 'sidebar' aur sidebar khula ho) */}
//       {topNavMenuType === 'sidebar' && sidebarOpen && (
//         <div
//           className="sidebar-overlay active" // Ensure 'active' class is applied
//           onClick={handleOverlayClick}
//         ></div>
//       )}

//       <div className={mainContentClasses}>
//         <TopNav /> {/* TopNav hamesha render hoga */}
//         <div className="content">
//           {renderActiveView()} {/* Aapka active view yahan render hoga */}
//         </div>
//       </div>

//       {/* Lead Form Modal (Aapka original logic) */}
//       {showLeadForm && <LeadFormModal />}

//       {/* Settings Slider (conditionally render hoga) */}
//       {/* SettingsSlider component apne overlay ko khud manage karta hai */}
//       {isSettingsSliderOpen && <SettingsSlider />}
//     </div>
//   );
// };

// export default MainLayout;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import DashboardView from './DashboardView';
import LeadsView from './LeadsView';
import Team from "./team";
import Portfolio from "./portfolioedit";
import LeadFormModal from './LeadFormModal';
import SettingsSlider from './settings/SettingsSlider';
import { 
  setSidebarOpen, 
  setSettingsSliderOpen,
  setTopNavMenuType,
  toggleDarkMode
} from '../../redux/uiSlice';

const MainLayout = () => {
  const dispatch = useDispatch();
  const {
    activeTab,
    darkMode,
    sidebarOpen,
    showLeadForm,
    topNavMenuType,
    isSettingsSliderOpen
  } = useSelector((state) => state.ui);

  // Initialize from localStorage
  useEffect(() => {
    const savedMenuType = localStorage.getItem('menuType');
    if (savedMenuType) {
      dispatch(setTopNavMenuType(savedMenuType));
    }
    
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      dispatch(toggleDarkMode(savedTheme === 'true'));
    }
  }, [dispatch]);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const handleOverlayClick = () => {
    if (sidebarOpen) {
      dispatch(setSidebarOpen(false));
    }
    if (isSettingsSliderOpen) {
      dispatch(setSettingsSliderOpen(false));
    }
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'leads':
        return <LeadsView />;
      case 'team':
        return <Team />;
      case 'Portfolio':
        return <Portfolio />;
      case 'dashboard':
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className={`dashboard-container ${darkMode ? 'dark' : 'light'}`}>
      {topNavMenuType === 'sidebar' && <Sidebar />}
      
      <div 
        className={`sidebar-overlay ${sidebarOpen || isSettingsSliderOpen ? 'active' : ''}`}
        onClick={handleOverlayClick}
      ></div>
      
      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <TopNav />
        <div className="content">
          {renderActiveView()}
        </div>
      </div>
      
      {showLeadForm && <LeadFormModal />}
      {isSettingsSliderOpen && <SettingsSlider />}
    </div>
  );
};

export default MainLayout;