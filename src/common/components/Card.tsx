import type { CardProps } from '../types';

export const Card = (cardProps: CardProps) => {
  return (
    <div className="card">
      <h2>{cardProps.title}</h2>
      <p>{cardProps.value}</p>
    </div>
  );
};
