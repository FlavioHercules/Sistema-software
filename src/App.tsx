import { useScrollReveal } from '@/hooks/useScrollReveal';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
