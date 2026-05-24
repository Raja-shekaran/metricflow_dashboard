export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

export type CardProps = {
  title: string;
  value: string;
};

export type HeaderProps = {
  onSidebarToggle: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};
