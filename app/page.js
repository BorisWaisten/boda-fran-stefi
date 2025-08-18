'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('inicio');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'nuestra-historia', 'celebracion', 'como-llegar', 'regalos'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-warm-white">
      <Header activeSection={activeSection} onSectionChange={scrollToSection} />
      
            {/* Sección Inicio */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/bodaF&S/foto2.jpeg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
          <img 
            src="/bodaF&S/logo-inicio-white.svg" 
            alt="Logo inicio" 
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Sección Nuestra Historia */}
      <section id="nuestra-historia" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-centuryBold text-terracota mb-6">
                Nuestra <span className="text-ocre-gold">Historia</span>
              </h2>
              <div className="space-y-4 text-lg text-terracota font-century leading-relaxed">
                <p>
                  Todo comenzó en una tarde de otoño, cuando nuestros caminos se cruzaron 
                  por primera vez. Desde ese momento, cada día ha sido una nueva aventura 
                  llena de risas, amor y momentos inolvidables.
                </p>
                <p>
                  Después de años de compartir sueños, metas y la vida cotidiana, 
                  decidimos dar el siguiente paso y unir nuestras vidas para siempre.
                </p>
                <p>
                  Te invitamos a ser parte de este momento tan especial en nuestras vidas, 
                  donde celebraremos no solo nuestro amor, sino también la familia y 
                  amigos que han sido fundamentales en nuestro camino.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/bodaF&S/foto3.jpeg" 
                alt="Fran y Stefi" 
                className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección Sagrada Familia y Cita Bíblica */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-warm-white to-terracota/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-centuryBold text-terracota mb-12">
              Nuestro <span className="text-ocre-gold">Ejemplo</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <div className="relative">
                  <img 
                    src="/bodaF&S/foto1.webp" 
                    alt="Sagrada Familia" 
                    className="w-full max-w-md mx-auto object-contain rounded-lg shadow-2xl"
                  />
                </div>
              </div>
              <div className="space-y-6 text-left">
                <h3 className="text-3xl font-centuryBold text-terracota mb-4">
                  La Sagrada Familia
                </h3>
                <div className="space-y-4 text-lg text-terracota font-century leading-relaxed">
                  <p>
                    La Sagrada Familia de Nazaret es nuestro modelo de amor, fe y santidad. 
                    En José, María y Jesús encontramos el ejemplo perfecto de cómo construir 
                    una familia basada en el amor de Dios.
                  </p>
                  <p>
                    Como ellos, queremos que nuestro matrimonio sea un reflejo del amor 
                    divino, donde cada día crezcamos juntos en fe, esperanza y caridad, 
                    siguiendo el camino que nos han marcado.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Cita Bíblica */}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
              <div className="text-6xl text-ocre-gold mb-6">❝</div>
              <blockquote className="text-xl md:text-2xl text-terracota font-century italic leading-relaxed mb-6">
                El amor no se deleita en la maldad,<br/>
                sino que se regocija con la verdad.<br/>
                Todo lo disculpa, todo lo cree,<br/>
                todo lo espera, todo lo soporta.<br/>
                El amor jamás se extingue.
              </blockquote>
              <div className="text-lg text-ocre-gold font-centuryBold">
                1 Corintios 13:4-8
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Celebración */}
      <section id="celebracion" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-warm-white to-terracota/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-centuryBold text-terracota mb-6">
              La <span className="text-ocre-gold">Celebración</span>
            </h2>
            <p className="text-xl text-terracota font-century max-w-2xl mx-auto">
              Únete a nosotros en este día tan especial donde celebraremos 
              el amor, la familia y los nuevos comienzos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl mb-4">⛪</div>
              <h3 className="text-2xl font-centuryBold text-terracota mb-3">Ceremonia</h3>
              <p className="text-terracota font-century">11:00 hs</p>
              <p className="text-terracota font-century">Basílica Nuestra Señora del Santo Rosario</p>
              <p className="text-terracota font-century text-sm">Defensa 422, CABA</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-2xl font-centuryBold text-terracota mb-3">Fiesta</h3>
              <p className="text-terracota font-century">Salón Esloveno</p>
              <p className="text-terracota font-century text-sm">República de Eslovenia 1851, Castelar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Como Llegar */}
      <section id="como-llegar" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-centuryBold text-terracota mb-6 text-center">
                Cómo <span className="text-ocre-gold">Llegar</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <h3 className="text-2xl font-centuryBold text-terracota mb-3">📍 Ceremonia</h3>
                  <p className="text-terracota font-century">Basílica Nuestra Señora del Santo Rosario</p>
                  <p className="text-terracota font-century">Defensa 422, CABA</p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <h3 className="text-2xl font-centuryBold text-terracota mb-3">📍 Fiesta</h3>
                  <p className="text-terracota font-century">Salón Esloveno</p>
                  <p className="text-terracota font-century">República de Eslovenia 1851, Castelar</p>
                </div>
                
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <h3 className="text-2xl font-centuryBold text-terracota mb-3">🚗 Transporte</h3>
                  <p className="text-terracota font-century">• Subte línea B - Estación Callao</p>
                  <p className="text-terracota font-century">• Colectivos: 24, 29, 39, 60</p>
                  <p className="text-terracota font-century">• Estacionamiento disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Regalos */}
      <section id="regalos" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-warm-white to-terracota/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-centuryBold text-terracota mb-6">
              <span className="text-ocre-gold">Regalos</span>
            </h2>
            <p className="text-xl text-terracota font-century mb-8 leading-relaxed">
              Tu presencia es el mejor regalo que podemos recibir. Sin embargo, 
              si deseas hacernos un obsequio, hemos preparado algunas opciones 
              que nos harían muy felices.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="p-8 bg-white rounded-lg shadow-lg">
                <div className="text-4xl mb-4">💝</div>
                <h3 className="text-2xl font-centuryBold text-terracota mb-4">Lista de Regalos</h3>
                <p className="text-terracota font-century mb-6">
                  Hemos seleccionado algunos artículos para nuestro nuevo hogar 
                  que nos encantaría recibir.
                </p>
                <button className="bg-terracota text-white px-8 py-3 rounded-lg font-century hover:bg-ocre-gold hover:text-terracota transition-colors">
                  Ver Lista
                </button>
              </div>
              
              <div className="p-8 bg-white rounded-lg shadow-lg">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-2xl font-centuryBold text-terracota mb-4">Contribución</h3>
                <p className="text-terracota font-century mb-6">
                  Si prefieres, puedes hacer una contribución para nuestra 
                  luna de miel o nuestro futuro hogar.
                </p>
                <button className="bg-terracota text-white px-8 py-3 rounded-lg font-century hover:bg-ocre-gold hover:text-terracota transition-colors">
                  Contribuir
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
