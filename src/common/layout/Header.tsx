import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import type { HeaderProps } from '../types';

export const Header = ({
  onSidebarToggle,
  theme,
  toggleTheme,
}: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__left">
        <button className="icon" onClick={onSidebarToggle}>
          <Bars3Icon />
        </button>

        <h1>Dashboard</h1>

        <button className="icon" onClick={toggleTheme}>
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </header>
  );
};
