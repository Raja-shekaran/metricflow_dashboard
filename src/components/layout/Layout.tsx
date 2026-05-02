import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Layout({ children }: any) {
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
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
