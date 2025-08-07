import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Calendar,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import LeadCaptureModal from './LeadCaptureModal';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({ message: '', phone: '' });
  const handleWhatsAppClick = (message: string, phone: string) => {
  setModalConfig({ message, phone });
  setShowModal(true);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Crie a mensagem com os dados do estado 'formData'
    const message = `
    *Solicitação de Consultoria Gratuita*

    *Nome:* ${formData.name}
    *Email:* ${formData.email}
    *Telefone/WhatsApp:* ${formData.phone}
    *Empresa:* ${formData.company || 'Não informado'}

    *Projeto:*
  ${formData.message || 'Nenhuma mensagem adicional.'}
  `.trim();

    // 2. Codifique a mensagem para ser usada em uma URL
    const encodedMessage = encodeURIComponent(message);

    // 3. Crie a URL final do WhatsApp
    const whatsappURL = `https://api.whatsapp.com/send?phone=5571983419891&text=${encodedMessage}`;

    // 4. Abra o WhatsApp em uma nova aba
    window.open(whatsappURL, '_blank');

    // Opcional: Você pode limpar o formulário após a tentativa de envio
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-section-inv">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Vamos Conversar?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar seu negócio? Entre em contato conosco e 
            descubra como podemos acelerar seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Solicite uma <span className="text-primary">Consultoria Gratuita</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário e nossa equipe entrará em contato em até 2 horas úteis.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nome Completo *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Telefone/WhatsApp *</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Empresa</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nome da sua empresa"
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Conte-nos sobre seu projeto</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descreva seu negócio, objetivos e como podemos ajudar..."
                      rows={4}
                      className="bg-background/50"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="border-4 border-solid border-black/10 w-full bg-primary hover:shadow-button transition-all duration-300 hover:scale-105 group text-lg py-6 text-white"
                  >
                    {isSubmitting ? 'Enviando...' : 'Solicitar Consultoria Gratuita'}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                  </Button>
                  
                  <div className="text-center overflow-x-hidden mt-4">
                    <Button size="lg" onClick={() => handleWhatsAppClick('Oi, quero uma consultoria grátis!', '5571983419891')} className="bg-priumary border-4 border-double border-primary/60 hover:bg-primary/10 hover:text-primary hover:scale-110
                                text-lg px-8 py-6 text-gray 
                                text-center leading-snug w-full sm:w-auto whitespace-normal">

                        Não gosta de formulários?
                        <ArrowRight className="..." />

                    </Button>

                    <p className="text-sm md:text-xl text-muted-foreground mb-1 mt-4 animate-slide-up max-w-3xl mx-auto leading-relaxed">
                      Pode ligar direto no

                      <strong className="text-primary"> Whatsapp! </strong> 
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button size="lg" onClick={() => handleWhatsAppClick('Oi, quero uma consultoria grátis!', '5571983419891')} className="bg-green-600 hover:bg-green-700 text-white py-6 text-lg hover:scale-105 transition-all duration-300 group">

                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp

              </Button>
                <Button size="lg" onClick={() => handleWhatsAppClick('Oi, quero uma consultoria grátis!', '5571983419891')} variant="outline" className="border-primary/30 hover:bg-primary/10 hover:text-primary py-6 text-lg hover:scale-105 transition-all duration-300 group text-black flex items-center">

                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Reunião

                </Button>
            </div>
          </div>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Telefone</h4>
                    <p className="text-muted-foreground">(71) 98341-9891</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">contato@adtrafegodigital.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-glow/20 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary-glow" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Localização</h4>
                    <p className="text-muted-foreground">Salvador, Bahia - Brasil</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Horário de Atendimento</h4>
                    <p className="text-muted-foreground">Segunda à Sexta: 8h às 18h</p>
                    <p className="text-muted-foreground">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-gradient-card border-border/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Por que escolher a AD Tráfego Digital?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    'Consultoria inicial 100% gratuita',
                    'Suporte dedicado',
                    'Relatórios transparentes',
                    'Equipe especializada certificada'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>


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

export default ContactSection;