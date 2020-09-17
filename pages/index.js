import Layout from '../components/layout';
import Prices from '../components/Prices';

const Index = ({ fetchData }) => (
  <>
    <Layout>
      Hello
      <Prices data={fetchData} />
    </Layout>
  </>
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return { fetchData: data };
};

export default Index;
