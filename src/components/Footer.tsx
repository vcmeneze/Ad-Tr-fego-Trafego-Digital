import { 
  Facebook, 
  Instagram, 
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from 'lucide-react';
import adTrafegoLogo from '/uploads/ads-2.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-footer border-t border-border/20">
      <div className="bg-foot container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={adTrafegoLogo} 
                alt="AD Tráfego Digital" 
                className="h-36 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Especialistas em transformar investimento em tráfego pago em resultados reais. 
              Torne-se uma das muitas empresas que já confiaram em nossa expertise.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('blog')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-muted-gray hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="https://api.whatsapp.com/send?phone=5571983419891" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card/50 p-3 rounded-lg hover:bg-green-600/20 transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="h-5 w-5 text-green-600" />
              </a>
              <a 
                href="https://www.instagram.com/adtrafegodigital/" 
                className="bg-card/50 p-3 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-primary">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">(71) 98341-9891</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">contato@adtrafegodigital.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Salvador, Bahia - Brasil</span>
              </div>
            </div>
            
            {/* Quick CTA */}

          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 AD Tráfego Digital. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Termos de Uso
              </a>
              <button
                onClick={scrollToTop}
                className="bg-card/50 p-2 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                <ArrowUp className="h-4 w-4 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;