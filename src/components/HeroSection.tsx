import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';
import heroBg from '/uploads/hero-bg.jpg';
import LeadCaptureModal from './LeadCaptureModal';
import { useState } from 'react';


const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({ message: '', phone: '' });

  const handleWhatsAppClick = (message: string, phone: string) => {
    setModalConfig({ message, phone });
    setShowModal(true);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-glow/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mt-5 inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-slide-up">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              #1 Agência de Tráfego Digital
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6 animate-slide-up leading-tight">
            Cresça seu negócio local com anúncios inteligentes no 
            <span className="bg-gradient-primary bg-clip-text text-transparent block mt-2">
              Google e Instagram
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up max-w-3xl mx-auto leading-relaxed">
            Atraia mais clientes, aumente seu faturamento e conquiste destaque em sua região com 

            <strong className="text-primary"> estratégias digitais feitas sob medida </strong> para negócios locais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button size="lg" onClick={() => handleWhatsAppClick('Oi, quero uma consultoria grátis!', '5571983419891')} className="bg-primary hover:bg-primary/90 hover:shadow-button transition-all duration-300 hover:scale-105 group text-sm sm:text-lg px-4 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
              Fale agora com um especialista
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>    
          <p className="text-sm md:text-xl text-muted-foreground mb-1 animate-slide-up max-w-3xl mx-auto leading-relaxed">
             e descubra como podemos transformar

            <strong className="text-primary"> o  seu negócio! </strong> 
          </p>

          </div>
          {/* Quick Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10 animate-slide-up">
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl p-6 hover-scale text-center">
              <div className="text-lg font-bold text-primary mb-2">Google Ads para Negócios Locais</div>
              <div className="text-sm text-gray-foreground">Seja encontrado por quem realmente procura pelos seus serviços.</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl p-6 hover-scale text-center">
              <div className="text-lg font-bold text-primary-glow mb-2">Otimização no Google Meu Negócio</div>
              <div className="text-sm text-gray-foreground">Seja facilmente encontrado no Google Maps e nas buscas locais.</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl p-6 hover-scale text-center">
              <div className="text-lg font-bold text-primary mb-2">Gestão de Tráfego Digital</div>
              <div className="text-sm text-gray-foreground">Aumente o fluxo de clientes com estratégias personalizadas de tráfego digital.</div>
            </div>
          </div>



          {/* Trust Indicator */}
          <p className="text-base text-muted-foreground mt-6 animate-slide-up">
            ✅ Aumente sua confiança • ✅ Supere a concorrência • ✅ Expanda seu alcance
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
            
      <LeadCaptureModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        whatsappMessage={modalConfig.message}
        whatsappPhone={modalConfig.phone}
      />
    </section>
  );
};

export default HeroSection;