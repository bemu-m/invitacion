import { useState } from 'react';
import Envelope from './components/Envelope';
import Hero from './components/Hero';
import Galery from './components/Galery';
import Countdown from './components/Countdown';
import Ubication from './components/Ubication';
import Footer from './components/Footer';
import Padrinos from './components/Padrinos';

export default function App() {
  const [opened, setOpened] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => setVisible(true), 100);
  };

  return (
    <div className="bg-[#fdf8f5]">
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
        <Padrinos/>
        <Ubication />
        <Footer />
      </div>
    </div>
  );
}