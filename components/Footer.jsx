'use client';

const Footer = () => {
  return (
    <footer className="bg-terracota text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-centuryBold mb-2">
              Fran <span className="text-ocre-gold">&</span> Stefi
            </h3>
            <p className="text-lg font-century opacity-90">
              15 de Diciembre, 2024
            </p>
          </div>
          
          <div className="mb-8">
            <p className="text-lg font-century mb-4">
              Gracias por ser parte de este momento tan especial
            </p>
            <p className="font-century opacity-80">
              Con amor, Fran y Stefi
            </p>
          </div>
          
          <div className="border-t border-ocre-gold/30 pt-6">
            <p className="text-sm font-century opacity-70">
              © 2024 - Hecho con ❤️ para nuestra boda
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
