import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

type HeaderProps = {
  toggleCollapse: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export default function Header({
  toggleCollapse,
  theme,
  toggleTheme,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="header__left">
        <button className="icon" onClick={toggleCollapse}>
          <Bars3Icon />
        </button>

        <h1>Dashboard</h1>

        <button className="icon" onClick={toggleTheme}>
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </header>
  );
}
