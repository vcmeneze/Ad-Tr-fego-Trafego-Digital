import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  Target, 
  Users, 
  TrendingUp,
  ArrowRight,
  Star,
  CheckCircle2
} from 'lucide-react';

const AboutSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const achievements = [
    {
      icon: Users,
      number: 'Serviços compatíveis',
      label: 'com profissionais autônomos e empresas de todos os tamanhos',
      description: ''
    },
    {
      icon: TrendingUp,
      number: 'Resultados comprovados',
      label: 'Quem já contratou atesta a eficácia',
      description: ''
    }
  ];

  const values = [
    {
      title: 'Foco Total',
      description: 'Com uma abordagem centrada no cliente, A Ad-tráfego Digital oferece soluções personalizadas para cada cliente.'
    },
    {
      title: 'Resultados Comprovados',
      description: 'Muitos anos de experiência no mercado com cases de sucesso e clientes satisfeitos em diversos segmentos.'
    },
    {
      title: 'Tecnologia de Ponta',
      description: 'Utilizamos as ferramentas mais avançadas do mercado para otimização e análise de campanhas.'
    },
    {
      title: 'Métodos Ágeis',
      description: 'Através de uma combinação de análise de dados, segmentação de audiência e otimização contínua, a empresa garante excelentes resultados. '
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-section-inv">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Quem Somos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Ad – Tráfego Digital nasceu com o propósito de ajudar negócios locais a crescerem de verdade no ambiente digital. 
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Story */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Target className="h-6 w-6 text-primary mr-3" />
                Nossa Missão
              </h3>
              <p className="text-gray-foreground leading-relaxed mb-6">
                Sabemos que a rotina de quem empreende é corrida e cheia de desafios, por isso oferecemos soluções completas e personalizadas para que você conquiste mais clientes sem complicação.
              </p>
              
              <div className="space-y-3">
                {[
                  'Estratégias personalizadas para cada negócio',
                  'Foco total em ROI e resultados mensuráveis',
                  'Transparência em todos os processos',
                  'Suporte contínuo e otimização constante'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-card border border-border/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Por Que Escolher a AD Tráfego Digital?</h3>
              <p className="text-muted-foreground leading-relaxed">
              Nossa equipe é formada por especialistas em Google Ads, Google Meu Negócio e gestão de tráfego digital, Instagram, sempre atualizadas com as melhores práticas do mercado. Aqui, cada cliente é único: entendemos sua realidade, ouvimos suas necessidades e criamos estratégias sob medida para o seu negócio.
              Se você acha que marketing digital é complicado ou caro demais, pode ficar tranquilo. Trabalhamos com planos acessíveis e explicamos cada etapa do processo de forma simples e transparente. Nosso objetivo é o seu crescimento!
              </p>
            </div>
          </div>

          {/* Right Side - Achievements */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card key={index} className="bg-gradient-card border-border/20 hover-scale transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4 group-hover:animate-glow">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">{achievement.number}</div>
                      <div className="text-sm font-medium mb-1">{achievement.label}</div>
                      <div className="text-xs text-muted-foreground">{achievement.description}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-center mb-6">Nossos Diferenciais</h3>
              {values.map((value, index) => (
                <div key={index} className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-xl p-4 hover:bg-card/50 transition-all duration-300">
                  <h4 className="font-semibold text-primary mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default AboutSection;