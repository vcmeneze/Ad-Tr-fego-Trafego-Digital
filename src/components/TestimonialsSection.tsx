import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Miguel Sehbe',
      role: ' sócio-proprietário da Faculdade Uninter',
      company: 'Educacional',
      rating: 5,
      text: 'A Ad - Tráfego Digital tem nos atendido de forma direta e objetiva gerando clareza e assertividade nos objetivos que precisamos alcançar. Um ponto de grande relevância é estarmos crescendo acima da média dos outros polos de educação que compõe nosso grupo, isso tem ocorrido desde que iniciamos as campanhas, é relevante pontuar que hoje 90% dos nossos investimentos de marketing estão direcionados para o digital.',
      results: 'Faculdade Uninter'
    },
    {
      name: 'Roberto de Castro',
      role: 'Imóveis Itacimirim',
      company: 'Imobiliário',
      rating: 5,
      text: 'Desde que começamos a utilizar os serviços da AD Tráfego Digital, tivemos uma melhora significativa nos resultados de vendas. Passamos a receber leads mais qualificados, com real interesse em nossos imóveis. Hoje, a AD Tráfego Digital é uma parceira essencial na nossa estratégia de crescimento e expansão. ',
      results: 'Imóveis Itacimirim'
    },
    {
      name: 'André Guerra',
      role: 'CEO da Anima Publicidade',
      company: 'Publicidade',
      rating: 5,
      text: 'O que percebemos da equipe da Ad Tráfego Digital é uma busca incansável pelo caminho que pode beneficiar o cliente.',
      results: 'Anima Publicidade'
    },
    {
      name: 'Aline',
      role: 'Restaurante Raghid Express',
      company: 'Alimentício',
      rating: 5,
      text: 'Ter iniciado a gestão de tráfego com Ad-Trafégo Digital nos possibilita anunciar ao público certo e direcionar as nossas campanhas com foco no nosso objetivo de acordo com as demandas de cada momento. Além disso, podemos acompanhar e visualizar o resultado do trabalho através de números. Super indico!',
      results: 'Raghid Express'
    },
    {
      name: 'Vítor',
      role: 'Restaurante Puro Saudável',
      company: 'Alimentício',
      rating: 5,
      text: 'O investimento em marketing digital é essencial para todas as empresas que fazem venda online ou precisam ser encontradas na internet. Achei que conhecia alguma coisa de tráfego pago, mas depois que contratamos a Ad-Trafego Digital, percebemos a diferença de ter um profissional capacitado para fazer esse trabalho. Utilizando as ferramentas corretas, os investimentos nas campanhas ficaram mais assertivos. O acompanhamento constante com métricas mensuráveis e ajustes conforme o desenvolvimento das campanhas criadas fazem toda a diferença. Estamos muito satisfeitos com o trabalho desenvolvido e os resultados alcançados em pouco tempo do início dos trabalhos.',
      results: 'Puro Saudável'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, index) => (
      <Star key={index} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-gradient-section-inv">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">O Que Nossos Clientes Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de transformação e crescimento. Veja como ajudamos empresas 
            a alcançar resultados extraordinários.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-card border-border/20 hover-glow transition-all duration-500">
            <CardContent className="p-8 md:p-12 text-center relative">
              <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />
              
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="text-center md:text-left">
                  <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                  <div className="text-sm text-primary">{testimonials[currentIndex].company}</div>
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-full px-6 py-2">
                  <span className="text-primary font-bold">{testimonials[currentIndex].results}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-border/20 hover-scale transition-all duration-300 cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-primary/50 shadow-glow' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className="bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                    <span className="text-xs text-primary font-medium">{testimonial.results}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border/20 pt-4">
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-16 text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-xl p-6 hover-scale">
            <div className="text-3xl font-bold text-primary mb-2">O próximo caso de sucesso pode ser o seu!</div>
            <div className="text-sm text-muted-foreground">Agende uma Sessão Estratégica Gratuita.</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;