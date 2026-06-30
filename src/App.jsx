import Hero from './components/Hero';
import Galery from './components/Galery';
import Countdown from './components/Countdown';
import Ubication from './components/Ubication';
import Footer from './components/Footer';
import Confirmation from './components/Confirmation';

export default function App() {
  return (
    <div className="bg-[#FAFAF8]">
      <Hero />
      <Galery />
      <Countdown />
      <Ubication />
      <Confirmation />
      <Footer />
    </div>
  );
}
