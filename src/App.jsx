import { useState } from 'react';
import Envelope from './components/Envelope';
import Hero from './components/Hero';
import Galery from './components/Galery';
import Countdown from './components/Countdown';
import Ubication from './components/Ubication';
import Confirmation from './components/Confirmation';
import Footer from './components/Footer';

export default function App() {
  const [opened, setOpened] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => setVisible(true), 100);
  };

  return (
    <div className="bg-[#FAFAF8]">
      {!opened && <Envelope onOpen={handleOpen} />}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.8s ease',
          pointerEvents: visible ? 'auto' : 'none',
        }}
      >
        <Hero />
        <Galery />
        <Countdown />
        <Ubication />
        <Confirmation />
        <Footer />
      </div>
    </div>
  );
}