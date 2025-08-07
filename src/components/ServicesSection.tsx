import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { useState } from 'react';
import LeadCaptureModal from './LeadCaptureModal';



const ServicesSection = () => {
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

  

  const services = [
    {
      icon: Search,
      title: 'Google Ads',
      description: 'Coloque seu negócio na frente de quem realmente procura pelos seus serviços! Criamos, otimizamos e gerenciamos campanhas no Google Ads para atrair clientes e aumentar seu faturamento. Você investe o quanto quiser e acompanha os resultados em tempo real.',
      features: ['Pesquisa de palavras-chave', 'Otimização de anúncios', 'Relatórios detalhados'],
      color: 'text-primary'
    },
    {
      icon: Target,
      title: 'Facebook & Instagram Ads',
      description: 'Estratégias avançadas de segmentação para capturar seu público ideal nas redes sociais.',
      features: ['Segmentação avançada', 'Criativos otimizados', 'Funis de conversão'],
      color: 'text-accent'
    },
    {
      icon: TrendingUp,
      title: 'Otimização do Google Meu Negócio',
      description: 'Seja facilmente encontrado no Google Maps e nas buscas locais. Atualizamos, otimizamos e monitoramos seu perfil no Google Meu Negócio para garantir mais visibilidade e proteção para o seu negócio. Respondemos avaliações, publicamos novidades e mantemos suas informações sempre atualizadas. Não tem tempo para cuidar disso? Nós fazemos tudo para você, sem complicação e com total transparência.',
      features: ['Otimização de perfil', 'Gestão de avaliações', 'Atualizações constantes'],
      color: 'text-primary-glow'
    },
    {
      icon: BarChart3,
      title: 'Gestão de Tráfego Digital',
      description: 'Aumente o fluxo de clientes com estratégias personalizadas de tráfego digital. Analisamos seu público, criamos campanhas segmentadas e acompanhamos os resultados de perto para garantir o melhor retorno sobre o investimento. Não entende nada de marketing digital? Deixe com a gente! Você recebe relatórios claros e pode tirar dúvidas sempre que quiser.',
      features: ['Análise de público', 'Campanhas segmentadas', 'Relatórios claros'],
      color: 'text-primary'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Nossos Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas de marketing digital para acelerar o crescimento do seu negócio 
            com estratégias comprovadas e resultados mensuráveis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/20 hover-scale hover-glow transition-all duration-300 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/10 mb-4 mx-auto group-hover:animate-glow`}>
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-gray-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-primary">Como Trabalhamos</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nosso processo testado e comprovado que já gerou milhões em resultados para nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Diagnóstico',
                description: 'Análise completa do seu negócio e concorrência'
              },
              {
                step: '02', 
                title: 'Estratégia',
                description: 'Criação de plano personalizado para seus objetivos'
              },
              {
                step: '03',
                title: 'Execução',
                description: 'Implementação das campanhas e otimizações'
              },
              {
                step: '04',
                title: 'Resultados',
                description: 'Monitoramento e relatórios de performance'
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                    <span className="text-xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                  )}
                </div>
                <h4 className="text-lg font-semibold mb-2">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para <span className="text-primary">Ampliar</span> o seu alcance?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Fale agora com um especialista e descubra como podemos transformar seu negócio!
          </p>
          <Button size="lg" onClick={() => handleWhatsAppClick('Oi, quero uma consultoria grátis!', '5571983419891')}  
            className="bg-primary/80 hover:shadow-button transition-all duration-300 hover:scale-150 group text-lg px-8 py-6 text-white"
          >

            <span className="hidden sm:inline"></span>Quero Aumentar Meu Alcance Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />

          </Button>

        </div>
      </div>
      <LeadCaptureModal 
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      whatsappMessage={modalConfig.message}
      whatsappPhone={modalConfig.phone}
      />
    </section>
  );
};

export default ServicesSection;