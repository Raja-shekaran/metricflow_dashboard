// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Card({ title, value }: any) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
}
