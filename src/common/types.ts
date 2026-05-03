export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

export type CardProps = {
  title: string;
  value: string;
};

export type HeaderProps = {
  toggleCollapse: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};
