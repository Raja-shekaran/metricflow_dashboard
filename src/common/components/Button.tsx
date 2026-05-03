import type { ButtonProps } from '../types';

export const Button = ({ children, variant = 'primary' }: ButtonProps) => {
  return <button className={`btn btn--${variant}`}>{children}</button>;
};
