import { useState } from 'react';
import { Dashboard } from '../../pages/Dashboard';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { useSidebarStore } from '../../store/sidebar.store';

export const Layout = () => {
  const isCollapsed = useSidebarStore((state) => state.isCollapsed);
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <div className={`layout ${isCollapsed ? 'collapsed' : ''}`}>
      <Sidebar />

      <div className="main">
        <Header
          onSidebarToggle={toggleSidebar}
          toggleTheme={toggleTheme}
          theme={theme}
        />
        <div className="content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};
