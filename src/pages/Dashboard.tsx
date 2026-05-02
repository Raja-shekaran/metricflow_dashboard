import KpiCard from "../components/dashboard/KpiCard";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <KpiCard title="Total revenue" value="$1,284,500" />
      <KpiCard title="Monthly Profit" value="$42,920" />
      <KpiCard title="Trading Volume" value="$5.2M" />
      <KpiCard title="Accrued Fees" value="$1,840" />
    </div>
  );
}
