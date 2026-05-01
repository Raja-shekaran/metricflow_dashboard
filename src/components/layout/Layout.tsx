import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ children }: any) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`layout ${isCollapsed ? 'collapsed' : ''}`}>
      <Sidebar isCollapsed={isCollapsed} />

      <div className="main">
        <Header toggleCollapse={() => setIsCollapsed(!isCollapsed)} />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
