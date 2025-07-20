import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { setSidebarOpen, setSettingsSliderOpen } from '../../redux/uiSlice';

// --- Define colors for the sidebar ---
const defaultIconColor = '#B0B0B0';
const activeIconColor = 'white';
const selectedItemBgColor = '#d9d9d929';
const inactiveTextColor = '#A0A0A0';
const activeTextColor = '#FFFFFF';

// SVG Icon Components (unchanged)
const DashboardIcon = ({ color = defaultIconColor, ...props }) => (
    <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill={color}>
        <rect x="3" y="3" width="8" height="8"></rect>
        <rect x="13" y="3" width="8" height="8"></rect>
        <rect x="3" y="13" width="8" height="8"></rect>
        <rect x="13" y="13" width="8" height="8"></rect>
    </svg>
);

const FunnelIcon = ({ color = defaultIconColor, ...props }) => (
    <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill={color}>
        <path d="M10.677 14.418L3 3h18l-7.677 11.418v5.582l-3.646 2.734v-8.316z" />
    </svg>
);

const LeadsIcon = ({ color = defaultIconColor, ...props }) => (
    <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill={color}>
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="12" cy="5" r="1.5" />
        <circle cx="12" cy="19" r="1.5" />
        <circle cx="5" cy="12" r="1.5" />
        <circle cx="19" cy="12" r="1.5" />
        <circle cx="7.5" cy="7.5" r="1" />
        <circle cx="16.5" cy="7.5" r="1" />
        <circle cx="7.5" cy="16.5" r="1" />
        <circle cx="16.5" cy="16.5" r="1" />
    </svg>
);

const ClientsIcon = ({ color = defaultIconColor, ...props }) => (
    <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill={color}>
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
);

const MessagesIcon = ({ color = defaultIconColor, ...props }) => (
    <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

const CalendarIcon = ({ color = defaultIconColor, ...props }) => (
    <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

const AIAutomationIcon = ({ color = defaultIconColor, ...props }) => (
    <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L8 6L12 10L16 6L12 2Z" />
        <path d="M6 8L2 12L6 16" />
        <path d="M18 8L22 12L18 16" />
        <path d="M12 22L8 18L12 14L16 18L12 22Z" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);

const ContentLibraryIcon = ({ color = defaultIconColor, ...props }) => (
    <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
    </svg>
);

const SettingsIcon = ({ color = defaultIconColor, ...props }) => (
    <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33A1.65 1.65 0 0 0 9 4.09V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v1.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V12a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
);

const ArrowRightIcon = ({ color = activeIconColor, ...props }) => (
    <svg {...props} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

// New Icon for Setup
const SetupIcon = ({ color = defaultIconColor, ...props }) => (
    <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
);


const menuStructure = [
    {
        id: 'main', 
        items: [
            { name: 'dashboard', label: 'Dashboard', path: 'dashboard', icon: DashboardIcon },
        ]
    },
    { type: 'separator' },
    {
        id: 'core', 
        items: [
            { name: 'funnel1', label: 'Funnels', path: 'funnel_list', icon: FunnelIcon },
            { name: 'leads', label: 'Leads', path: 'leads', icon: LeadsIcon },
             { name: 'setup', label: 'Setup', path: 'inbox', icon: SetupIcon },
        ]
    },
    // Combined "Setup" section
   
    { type: 'separator' },
    {
        id: 'tools', 
        items: [
            { name: 'clients', label: 'Clients', path: 'clients', icon: ClientsIcon },
            { name: 'messages', label: 'Messages', path: 'messages', icon: MessagesIcon },
            { name: 'calendar', label: 'Calendar', path: 'calendar', icon: CalendarIcon },
            { name: 'ai_automation', label: 'AI & Automation', path: 'ai-automation', icon: AIAutomationIcon },
            { name: 'content_library', label: 'Content Library', path: 'content-library', icon: ContentLibraryIcon },
        ]
    },
];

const Sidebar = ({ className }) => {
    const dispatch = useDispatch();
    const { sidebarOpen } = useSelector((state) => state.ui);
    const location = useLocation();

    const handleSettingsClick = () => {
        dispatch(setSettingsSliderOpen(true));
        if (window.innerWidth < 768 && sidebarOpen) {
            dispatch(setSidebarOpen(false));
        }
    };

    const handleNavLinkClick = () => {
        if (window.innerWidth < 768 && sidebarOpen) {
            dispatch(setSidebarOpen(false));
        }
    };

    return (
        <div className={`sidebar ${sidebarOpen ? 'open' : ''} ${className || ''}`}
            style={{
                width: '250px',
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh',
                zIndex: 1000,
                transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 0.3s ease-in-out',
                padding: '0',
                boxSizing: 'border-box',
                backgroundColor: 'black',
            }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ padding: '30px 20px', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0', textAlign: 'center' }}>
                        <span style={{ color: '#6366f1' }}>Funnels</span>
                        <span style={{ color: 'white' }}>Eye</span>
                    </h2>
                </div>

                <div style={{ flexGrow: 1, overflowY: 'auto', paddingBottom: '10px' }}>
                    {menuStructure.map((section, sectionIndex) => {
                        if (section.type === 'separator') {
                            return <div key={'sep-' + sectionIndex} style={{ height: '1px', backgroundColor: '#3A3A3A', margin: '10px 25px' }}></div>;
                        }
                        return (
                            <div key={section.id || sectionIndex} style={{ padding: '0 10px' }}>
                                {section.items.map((item) => {
                                    const IconComponent = item.icon;
                                    const isActive = location.pathname.endsWith(item.path);

                                    return (
                                        <NavLink
                                            key={item.name}
                                            to={item.path}
                                            className={'menu-item'}
                                            onClick={handleNavLinkClick}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '12px 15px',
                                                marginBottom: '5px',
                                                textAlign: 'left',
                                                border: 'none',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                fontSize: '0.9rem',
                                                transition: 'background-color 0.2s ease, color 0.2s ease',
                                                textDecoration: 'none',
                                                backgroundColor: isActive ? selectedItemBgColor : 'transparent',
                                                fontWeight: isActive ? '600' : 'normal',
                                                color: isActive ? activeTextColor : inactiveTextColor,
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                                                {IconComponent && (
                                                    <span style={{ marginRight: '12px', display: 'flex', alignItems: 'center' }}>
                                                        <IconComponent color={isActive ? activeIconColor : defaultIconColor} />
                                                    </span>
                                                )}
                                                <span style={{ fontSize: 'inherit' }}>{item.label}</span>
                                            </div>
                                            {isActive && (
                                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                                    <ArrowRightIcon color={activeIconColor} />
                                                </span>
                                            )}
                                        </NavLink>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>

                <div style={{ padding: '10px 10px' }}>
                    <div style={{ height: '1px', backgroundColor: '#3A3A3A', margin: '10px 15px' }}></div>
                    <NavLink
                        to="settings"
                        className={'menu-item'}
                        onClick={handleSettingsClick}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px 15px',
                            marginBottom: '5px',
                            textAlign: 'left',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            transition: 'background-color 0.2s ease, color 0.2s ease',
                            textDecoration: 'none',
                            backgroundColor: location.pathname.endsWith('settings') ? selectedItemBgColor : 'transparent',
                            fontWeight: location.pathname.endsWith('settings') ? '600' : 'normal',
                            color: location.pathname.endsWith('settings') ? activeTextColor : inactiveTextColor,
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                            <span style={{ marginRight: '12px', display: 'flex', alignItems: 'center' }}>
                                <SettingsIcon color={location.pathname.endsWith('settings') ? activeIconColor : defaultIconColor} />
                            </span>
                            <span style={{ fontSize: 'inherit' }}>Settings</span>
                        </div>
                        {location.pathname.endsWith('settings') && (
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                <ArrowRightIcon color={activeIconColor} />
                            </span>
                        )}
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;