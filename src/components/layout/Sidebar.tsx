export default function Sidebar({ isCollapsed }: { isCollapsed: boolean }) {
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
}
