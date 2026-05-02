import Kpicard from '../components/dashboard/Kpicard';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Kpicard title="Total revenue" value="$1,284,500" />
      <Kpicard title="Monthly Profit" value="$42,920" />
      <Kpicard title="Trading Volume" value="$5.2M" />
      <Kpicard title="Accrued Fees" value="$1,840" />
    </div>
  );
}
