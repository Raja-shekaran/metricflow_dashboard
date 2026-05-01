export default function Header({ toggleCollapse }: any) {
  return (
    <header className="header">
      <div className="header__left">
        {/* Desktop collapse */}
        <button onClick={toggleCollapse}>☰</button>

        <h1>Dashboard</h1>
      </div>
    </header>
  );
}
