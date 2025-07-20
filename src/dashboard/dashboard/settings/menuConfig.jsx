// src/config/menuConfig.js
export const menuStructure = [
    {
      type: 'header',
      title: 'Favorites',
    },
    { name: 'fav-overview', label: 'Overview', icon: '📊', parent: 'Favorites', type: 'item', path: 'dashboard' },
    { name: 'fav-projects', label: 'Leads', icon: '📁', parent: 'Favorites', type: 'item', path: 'leads' },
    {
      type: 'header',
      title: 'Dashboards',
    },
    { name: 'dash-default', label: 'Default', icon: '🏠', parent: 'Dashboards', type: 'item', path: 'dashboard' },
    { name: 'dash-ecommerce', label: 'Portfolio', icon: '🛒', parent: 'Dashboards', type: 'item', path: 'Portfolio' },
    { name: 'dash-projects', label: 'Team', icon: '🛠️', parent: 'Dashboards', type: 'item', path: 'team' },
    { name: 'dash-online-courses', label: 'Whatsapp/mail Setup', icon: '📚', parent: 'Dashboards', type: 'item', path: 'online-courses' },
  ];
