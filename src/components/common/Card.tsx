type CardProps = {
  title: string;
  value: string;
};

export default function Card(cardProps: CardProps) {
  return (
    <div className="card">
      <h2>{cardProps.title}</h2>
      <p>{cardProps.value}</p>
    </div>
  );
}
