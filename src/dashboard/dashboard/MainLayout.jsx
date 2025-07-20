import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import DashboardView from './DashboardView';
import LeadsView from './LeadsView';
import Team from "./team";
import Portfolio from "./portfolio/index";
import Portfolio_page from "./portfolio/funnel1/portfolioedit";
import LeadFormModal from './LeadFormModal';
import SettingsSlider from './settings/SettingsSlider';
import Inbox from './setup/index';
import Whatsapp from './setup/whatsapp/index';
import Mail from './setup/mail/index';
import "./dd.css";
import {
  setSidebarOpen,
  setSettingsSliderOpen,
  setTopNavMenuType,
  toggleDarkMode
} from '../../redux/uiSlice';
import { logout, selectToken, selectUser } from '../../redux/authSlice';
import Funnel_settings from "./portfolio/funnel1/index"

const MainLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!token || !user?.id) {
      dispatch(logout());
      swal("Session Expired", "Please log in again to continue.", "warning")
        .then(() => navigate('/login'));
    }
  }, [token, user, navigate, dispatch]);

  const { darkMode, sidebarOpen, showLeadForm, topNavMenuType, isSettingsSliderOpen, isSidebarFixed } = useSelector((state) => state.ui);

  useEffect(() => {
    const savedMenuType = localStorage.getItem('menuType');
    if (savedMenuType) dispatch(setTopNavMenuType(savedMenuType));
    
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) dispatch(toggleDarkMode(savedTheme === 'true'));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const handleOverlayClick = () => {
    if (sidebarOpen) dispatch(setSidebarOpen(false));
    if (isSettingsSliderOpen) dispatch(setSettingsSliderOpen(false));
  };

  if (!token || !user?.id) return null;

  // Check if current route is the portfolio edit page
  const isPortfolioEditPage = location.pathname.includes('funnel_edit');

  return (
    <div className={`dashboard-container ${darkMode ? 'dark' : 'light'}`}>
      {/* Don't show sidebar for portfolio edit page */}
      {!isPortfolioEditPage && topNavMenuType === 'sidebar' && (
        <Sidebar className={`${isSidebarFixed ? 'fixed' : ''}`} />
      )}
      
      <div className={`sidebar-overlay ${(sidebarOpen && !isSidebarFixed) || isSettingsSliderOpen ? 'active' : ''}`}
        onClick={handleOverlayClick}></div>

      <div className={`main-content ${isSidebarFixed ? 'fixed-sidebar' : ''} ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {/* Don't show topnav for portfolio edit page */}
        {!isPortfolioEditPage && <TopNav />}
        <div className="content">
          <Routes>
            <Route index element={<DashboardView />} />
            <Route path="dashboard" element={<DashboardView />} />
            <Route path="leads" element={<LeadsView />} />
            <Route path="funnel_edit/:id/:stageId" element={<Portfolio_page />} />
            <Route path="funnel_list" element={<Portfolio />} />
            <Route path="team" element={<Team />} />       
            <Route path="inbox" element={<Inbox />} /> 
            <Route path="whatsapp_setup" element={<Whatsapp />} />
            <Route path="mail_setup" element={<Mail />} />
            <Route path="/Funnel_settings/:slug" element={<Funnel_settings />} />
            <Route path="*" element={<div>Dashboard Page Not Found</div>} />
          </Routes>
        </div>
      </div>

      {showLeadForm && <LeadFormModal />}
      {isSettingsSliderOpen && <SettingsSlider />}
    </div>
  );
};

export default MainLayout;