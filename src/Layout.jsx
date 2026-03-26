import Header from './components/Header'; // Tu nuevo header inteligente
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}