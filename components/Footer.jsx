'use client';

const Footer = () => {
  return (
    <footer className="bg-terracota text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-centuryBold mb-2">
              Štefi <span className="text-ocre-gold">&</span> Fran
            </h3>
            <p className="text-lg font-century opacity-90">
              11 de octubre, 2025
            </p>
          </div>
          
          <div className="border-t border-ocre-gold/30 pt-6">
            <p className="text-sm font-century opacity-70">
              © 2025 - waistenprogramacion.com.ar 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
