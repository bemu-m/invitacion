import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Programa from './components/Programa';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0a0a0a]">
      <Hero />
      <Countdown />
      <Programa />
      <RSVP />
      <Footer />
    </div>
  );
}
