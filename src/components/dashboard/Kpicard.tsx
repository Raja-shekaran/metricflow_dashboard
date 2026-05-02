import Card from '../ui/Card';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const KpiCard = ({ title, value }: any) => {
  return (
    <>
      <Card title={title} value={value} />
    </>
  );
};

export default KpiCard;
