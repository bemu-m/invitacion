import Hero from './components/Hero';
import Galery from './components/Galery';
import Countdown from './components/Countdown';
import Ubication from './components/Ubication';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#FAFAF8]">
      <Hero />
      <Galery />
      <Countdown />
      <Ubication />
      <Footer />
    </div>
  );
}
