import Navbar from './navbar';
import Head from 'next/head';
import NavbarSecond from './navbarSecond';

const Layout = (props) => (
  <>
    <Head>
      <title>Learning</title>
      <link
        rel='stylesheet'
        href='https://bootswatch.com/4/journal/bootstrap.min.css'
      />
    </Head>
    <Navbar />
    <NavbarSecond />
    <div className='container'>{props.children}</div>
  </>
);

export default Layout;
