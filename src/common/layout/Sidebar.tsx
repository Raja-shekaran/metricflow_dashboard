import { useSidebarStore } from '../../store/sidebar.store';

export const Sidebar = () => {
  const isCollapsed = useSidebarStore((state) => state.isCollapsed);
  return (
    <aside
      className={`
        sidebar 
        ${isCollapsed ? 'sidebar--collapsed' : ''}
      `}
    >
      <h2>{isCollapsed ? 'M' : 'MetricFlow'}</h2>
    </aside>
  );
};
