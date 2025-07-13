import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';

const Layout = ({ children }) => {
  return (
    <>
      <div
        className='
      absolute w-full h-full -z-10'
      ></div>
      <main className=''>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
};

export default Layout;

// static__noise
