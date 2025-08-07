import { useEffect, useState } from 'react';

const PartnersCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('partners');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const partnerImages = [
    '/uploads/parceiros/1.jpeg',
    '/uploads/parceiros/2.jpeg',
    '/uploads/parceiros/3.jpeg',
    '/uploads/parceiros/4.jpeg',
    '/uploads/parceiros/5.jpeg',
    '/uploads/parceiros/6.jpeg',
    '/uploads/parceiros/7.jpeg',
    '/uploads/parceiros/10.jpeg',
    '/uploads/parceiros/11.jpeg',
    '/uploads/parceiros/12.jpg',
    '/uploads/parceiros/13.png',
    '/uploads/parceiros/14.jpeg',
    '/uploads/parceiros/15.jpeg',
    '/uploads/parceiros/16.jpeg'
  ];

  const groups = [
    partnerImages.slice(0, 4),
    partnerImages.slice(4, 9),
    partnerImages.slice(9, 16),
  ];

  return (
    <section id="partners" className="py-16 bg-gradient-section overflow-hidden space-y-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Empresas que Confiam na
            <span className="bg-gradient-primary bg-clip-text text-transparent"> AD Tráfego Digital</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Diversas empresas já confiam na AD Tráfego Digital para impulsionar seus negócios. Venha ser um parceiro também!
          </p>
        </div>

        {/* Três carrosséis distintos */}
        {groups.map((group, groupIndex) => (
          <div key={groupIndex} className="relative overflow-hidden">
            <div className="flex partners-scroll-container whitespace-nowrap">
              {/* Duplicação para efeito contínuo */}
              {[...group, ...group].map((img, index) => (
                <div
                  key={`${groupIndex}-${index}`}
                  className="flex-shrink-0 mx-3 w-96 h-48 bg-card/30 border border-border/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:bg-card/50 transition-all duration-300"
                >
                  <img
                    src={img}
                    alt={`Parceiro ${groupIndex * 5 + (index % group.length) + 1}`}
                    className="h-36 w-auto opacity-70 filter transition-all duration-300 object-cover rounded"
                  />
                </div>
              ))}
            </div>

            {/* Gradientes laterais */}
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersCarousel;
