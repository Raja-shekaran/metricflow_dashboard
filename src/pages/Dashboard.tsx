import { Card } from '../common/components/Card';
import { useCoinHistory } from '../hooks/useCoinHistory';
import { useUsers } from '../hooks/useUsers';

export const Dashboard = () => {
  const {
    data: coinData,
    isLoading: coinLoading,
    error: coinError,
  } = useCoinHistory();

  const {
    data: userData,
    isLoading: userLoading,
    error: userError,
  } = useUsers();

  if (coinLoading || userLoading) {
    return <div>Loading...</div>;
  }

  if (coinError || userError || !coinData || !userData) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="dashboard">
      <Card title="Users" value={userData.totalUsers.toString()} />
      <Card title="Bitcoin Price" value={`$${coinData.price}`} />
      <Card title="Market Cap" value={`$${coinData.marketCap}`} />
      <Card title="Symbol" value={coinData.symbol.toUpperCase()} />
    </div>
  );
};
