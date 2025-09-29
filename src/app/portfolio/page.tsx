import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PortfolioSection from '../../components/PortfolioSection';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
}



