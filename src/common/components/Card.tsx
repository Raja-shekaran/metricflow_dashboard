import type { CardProps } from '../types';

export const Card = ({ title, value, imageUrl }: CardProps) => {
  return (
    <div className="card">
      <h2 className="card_title">{title}</h2>

      {imageUrl && <img className="card_image" src={imageUrl} alt={title} />}

      {value && <p className="card_value">{value}</p>}
    </div>
  );
};
