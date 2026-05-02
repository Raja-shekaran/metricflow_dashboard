import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const App = () => {
  return (
    <Layout>
      <Card>
        <h2>Dashboard Card</h2>
        <p>This is a reusable card</p>

        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </Card>
    </Layout>
  );
};

export default App;
