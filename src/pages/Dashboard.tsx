import Card from '../components/common/Card';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Card title="Total revenue" value="$1,284" />
      <Card title="Monthly Profit" value="$42,920" />
      <Card title="Trading Volume" value="$5.2M" />
      <Card title="Accrued Fees" value="$1,840" />
    </div>
  );
}
