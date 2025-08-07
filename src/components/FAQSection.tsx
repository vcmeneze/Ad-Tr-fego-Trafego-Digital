import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import LeadCaptureModal from './LeadCaptureModal';

const FAQSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({ message: '', phone: '' });
  const handleWhatsAppClick = (message: string, phone: string) => {
  setModalConfig({ message, phone });
  setShowModal(true);
  };
  const faqs = [
    {
      question: 'Quanto tempo leva para ver os primeiros resultados?',
      answer: 'Com o tráfego pago, você pode esperar obter resultados tangíveis e mensuráveis ​​em questão de dias, impulsionando seu sucesso e acelerando seu crescimento.'
    },
    {
      question: 'Como é feito o acompanhamento dos resultados?',
      answer: 'Fornecemos relatórios semanais detalhados com todas as métricas importantes, dashboard em tempo real e reuniões mensais para análise estratégica e planejamento.'
    },
    {
      question: 'Vocês criam as campanhas do zero?',
      answer: 'Sim! Criamos toda a estratégia, desde a pesquisa de palavras-chave, criação de anúncios, landing pages, configuração de campanhas até as otimizações contínuas.'
    },
    {
      question: 'E se eu já tenho campanhas rodando?',
      answer: 'Fazemos uma auditoria completa das campanhas existentes, identificamos oportunidades de melhoria e implementamos otimizações para maximizar os resultados.'
    },
    {
      question: 'Vocês atendem empresas de que tamanho?',
      answer: 'Atendemos desde pequenas até grandes empresas. Nosso foco é no potencial de crescimento e comprometimento com resultados, independente do tamanho.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Dúvidas Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços e processo de trabalho. 
            Não encontrou sua resposta? Entre em contato conosco!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-border/20 rounded-xl px-6 data-[state=open]:shadow-glow transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                  <span className="text-lg font-medium pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help */}
        <div className="text-center mt-16">
          <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">Ainda tem dúvidas?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão e 
              ajudar você a tomar a melhor decisão para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => handleWhatsAppClick('Oi, quero uma consultoria grátis!', '5571983419891')}  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Falar no WhatsApp
              </Button>

              <button 
                onClick={() => handleWhatsAppClick('Oi, quero uma consultoria grátis!', '5571983419891')}  
                className="border-4 border-solid bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-button"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
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

export default FAQSection;