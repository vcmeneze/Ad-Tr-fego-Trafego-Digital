import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import LeadCaptureModal from './LeadCaptureModal';

const FloatingWhatsApp = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-primary transition-all duration-900 hover:scale-110 z-50 animate-pulse"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      
      <LeadCaptureModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        whatsappMessage="Oi, quero uma consultoria grátis!"
        whatsappPhone="5571983419891"
      />
    </>
  );
};

export default FloatingWhatsApp;