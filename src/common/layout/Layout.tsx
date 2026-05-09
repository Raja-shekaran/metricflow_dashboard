import { useState } from 'react';
import { Dashboard } from '../../pages/Dashboard';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <div className={`layout ${isCollapsed ? 'collapsed' : ''}`}>
      <Sidebar isCollapsed={isCollapsed} />

      <div className="main">
        <Header
          toggleCollapse={() => setIsCollapsed(!isCollapsed)}
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
