import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import blog1 from '/uploads/blog-1.jpg';
import blog2 from '/uploads/blog-2.jpg';
import blog3 from '/uploads/blog-3.jpg';
import blog4 from '/uploads/blog-4.jpg';
import LeadCaptureModal from './LeadCaptureModal';
import { useState } from 'react';

const BlogSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({ message: '', phone: '' });

  const handleWhatsAppClick = (message: string, phone: string) => {
    setModalConfig({ message, phone });
    setShowModal(true);
  };


  const articles = [
    {
      title: 'Como aparecer no Google sem gastar muito',
      excerpt: 'Mantenha seu perfil do Google atualizado, peça avaliações aos clientes, use as redes sociais com frequência e aproveite os grupos locais para divulgar seu serviço. Com ações simples e consistentes, é possível ganhar visibilidade sem grandes investimentos. E se quiser resultados ainda mais rápidos e estratégicos, conte com a minha empresa de tráfego digital — fazemos seu negócio aparecer para quem realmente importa.',
      image: blog1,
      date: '2025',
      author: 'AD Tráfego Digital'
    },
    {
      title: '5 dicas para atrair mais clientes locais',
      excerpt: 'Mantenha seu Google Meu Negócio sempre atualizado, com fotos recentes, horários corretos e respostas rápidas às avaliações, pois isso faz toda a diferença. Peça aos seus clientes que deixem avaliações, já que depoimentos reais aumentam sua credibilidade e atraem novos clientes. Invista também em anúncios segmentados, pois com pouco investimento é possível alcançar pessoas que estão próximas e realmente procuram pelo seu serviço. Use as redes sociais para mostrar seu dia a dia, divulgando bastidores, promoções e novidades, criando assim uma conexão com o público local. Além disso, participar de grupos e eventos da sua região ajuda a aumentar a visibilidade e fortalecer sua presença na comunidade. Parece complicado? Não precisa ser — com a orientação certa, qualquer negócio pode aplicar essas dicas e obter resultados rapidamente.',
      image: blog2,
      date: '2025',
      author: 'AD Tráfego Digital'
    },
    {
      title: 'O que é Google Meu Negócio e por que você precisa usar',
      excerpt: 'O Google Meu Negócio é uma ferramenta gratuita que coloca sua empresa no mapa — literalmente! Com ele, seu negócio aparece nas buscas do Google e no Google Maps, facilitando que os clientes te encontrem, vejam avaliações, fotos e entrem em contato rapidamente. Não sabe como criar ou melhorar seu perfil? Nós fazemos tudo para você, sem complicação. Não perca mais clientes por não ser encontrado online!',
      image: blog3,
      date: '2025',
      author: 'AD Tráfego Digital'
    },
    {
      title: 'Como funcionam os anúncios no Google para pequenos negócios',
      excerpt: 'Os anúncios no Google permitem que seu negócio seja aplicado exatamente para quem está procurando pelo seu serviço ou produto, na hora certa e no lugar certo. Você define quanto quer investir, escolhe as palavras-chave e só paga quando alguém clica no seu anúncio. É possível começar com valores baixos e aumentar conforme os resultados aparecem. Achou que anunciou que o Google não era apenas para grandes empresas? Nada disso! Pequenos negócios podem (e devem) usar essa estratégia para crescer rápido e de forma controlada.',
      image: blog4,
      date: '2025',
      author: 'AD Tráfego Digital'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Nosso Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Confira dicas, novidades e estratégias para contribuição para seu negócio local no ambiente digital. 
            Nosso blog é atualizado com conteúdos exclusivos sobre Google Ads, Google Meu Negócio, 
            marketing digital e muito mais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/20 overflow-hidden hover-scale hover-glow transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <CardHeader>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <Button size="lg" onClick={() => handleWhatsAppClick('Oi, quero uma consultoria grátis!', '5571983419891')} 
                  className="p-0 h-auto text-gray bg-primary/20 hover:text-primary/80 group/btn hover:text-white"
                >
                  <span className="hidden sm:inline">Eu quero impulsionar o meu negócio! </span>
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>

              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={() => handleWhatsAppClick('Oi, quero uma consultoria grátis!', '5571983419891')} 
            className="border-4 border-double border-primary/80 bg-gradient-primary hover:shadow-button transition-all duration-300 hover:scale-125 text-white"
          >

            <span className="hidden sm:inline"></span>Contactar agora mesmo
              <ArrowRight className="ml-2 h-5 w-5" />

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

export default BlogSection;