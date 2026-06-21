import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { useUsers } from '../hooks/useUsers';

export const UsersByCountryChart = () => {
  const COLORS = ['#7fcc9d', '#8884d8'];
  const { data, isLoading, error } = useUsers();
  console.log(data?.usersData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie data={data?.usersData} dataKey="count" nameKey="country" label>
            {data?.usersData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
