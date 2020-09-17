import Layout from '../components/layout';
import Prices from '../components/Prices';

const Index = ({ bpi }) => (
  <>
    <Layout>
      Hello
      <Prices usd={bpi.USD} />
    </Layout>
  </>
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return { bpi: data.bpi };
};

export default Index;
