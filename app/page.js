'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [copiedAlias, setCopiedAlias] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Funciones para el carrusel
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % 2);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + 2) % 2);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'nosotros', 'celebracion', 'rsvp', 'regalos'];
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

  // Función para copiar alias
  const copyToClipboard = async (text, aliasType) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedAlias(aliasType);
      setTimeout(() => setCopiedAlias(null), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-warm-white">
      <Header activeSection={activeSection} onSectionChange={scrollToSection} />
      
            {/* Sección Inicio */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/bodaF&S/background.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
            style={{ objectPosition: 'top' }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
          <img 
            src="/bodaF&S/logo-inicio-white.svg" 
            alt="Logo inicio" 
            className="w-full h-auto object-contain drop-shadow-2xl mb-6"
          />
          <div className="text-white font-serif italic text-xl md:text-2xl drop-shadow-lg tracking-wide">
            Sábado 11 de octubre de 2025
          </div>
        </div>
      </section>

      {/* Sección Nosotros */}
      <section id="nosotros" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-centuryBold text-terracota mb-12">
              <span className="text-ocre-gold">Nosotros</span>
            </h2>
            
            {/* Carrusel de imágenes */}
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out" 
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  <div className="w-full flex-shrink-0">
                    <img 
                      src="/bodaF&S/foto2.jpeg" 
                      alt="Fran y Stefi" 
                      className="w-full h-96 md:h-[500px] object-cover"
                    />
                  </div>
                  <div className="w-full flex-shrink-0">
                    <img 
                      src="/bodaF&S/foto3.jpeg" 
                      alt="Fran y Stefi" 
                      className="w-full h-96 md:h-[500px] object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Controles del carrusel */}
              <button 
                onClick={previousImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-terracota p-2 rounded-full shadow-lg transition-all duration-200"
                aria-label="Imagen anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-terracota p-2 rounded-full shadow-lg transition-all duration-200"
                aria-label="Siguiente imagen"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Indicadores */}
              <div className="flex justify-center mt-4 space-x-2">
                <button 
                  onClick={() => goToImage(0)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentImageIndex === 0 ? 'bg-terracota' : 'bg-terracota/50 hover:bg-terracota'
                  }`}
                  aria-label="Ir a imagen 1"
                ></button>
                <button 
                  onClick={() => goToImage(1)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentImageIndex === 1 ? 'bg-terracota' : 'bg-terracota/50 hover:bg-terracota'
                  }`}
                  aria-label="Ir a imagen 2"
                ></button>
              </div>

              {/* Cita Bíblica */}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto mb-12 mt-12">
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
        </div>
      </section>

      {/* Sección Sagrada Familia y Cita Bíblica */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-warm-white to-terracota/5">
        <div className="container mx-auto px-4">
          <div className="text-center mx-auto">
            <h2 className="text-4xl md:text-5xl font-centuryBold text-terracota mb-12">
              Nuestro <span className="text-ocre-gold">Ejemplo</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="relative">
                  <img 
                    src="/bodaF&S/foto1.webp" 
                    alt="Sagrada Familia" 
                    className="w-full max-w-md mx-auto object-contain rounded-lg shadow-2xl"
                  />
                </div>
              </div>
              <div className="space-y-6 text-justify">
                <h3 className="text-3xl font-centuryBold text-terracota mb-4">
                  La Sagrada Familia
                </h3>
                <div className="space-y-4 text-lg text-terracota font-century leading-relaxed">
                  <p>
                  “Dios ha creado al hombre a su imagen y semejanza: 
                  llamándolo a la existencia por amor, lo ha llamado al mismo tiempo al amor.
                  </p>
                  <p>
                  Dios es amor y vive en sí mismo un misterio de comunión personal de amor. 
                  Creándola a su imagen y conservándola continuamente en el ser, 
                  Dios inscribe en la humanidad del hombre y de la mujer la vocación y 
                  consiguientemente la capacidad y la responsabilidad del amor y de la comunión. 
                  El amor es por tanto la vocación fundamental e innata de todo ser humano. […]
                  </p>
                  <p>
                  La comunión entre Dios y los hombres halla su cumplimiento definitivo en Cristo Jesús, 
                  el Esposo que ama y se da como Salvador de la humanidad, uniéndola a sí como su cuerpo.
                  </p>
                  <p>
                  Él revela la verdad original del matrimonio, la verdad del «principio» y, 
                  liberando al hombre de la dureza del corazón, lo hace capaz de realizarla plenamente.
                  </p>
                  <p>
                  Esta revelación alcanza su plenitud definitiva en el don de amor que 
                  el Verbo de Dios hace a la humanidad asumiendo la naturaleza humana, 
                  y en el sacrificio que Jesucristo hace de sí mismo en la cruz por su Esposa, la Iglesia.
                   En este sacrificio se desvela enteramente el designio que Dios ha impreso en la humanidad del hombre 
                   y de la mujer desde su creación; el matrimonio de los bautizados se convierte así en el símbolo real de la nueva y eterna Alianza, 
                   sancionada con la sangre de Cristo. El Espíritu que infunde el Señor renueva el corazón y hace al hombre 
                   y a la mujer capaces de amarse como Cristo nos amó. El amor conyugal alcanza de este modo la plenitud a la que está ordenado interiormente, 
                   la caridad conyugal, que es el modo propio y específico con que los esposos participan 
                   y están llamados a vivir la misma caridad de Cristo que se dona sobre la cruz.” 
                   (Juan Pablo II, Exhort. Ap. Familiaris Consortio, 1981, n. 11, 13.)
                  </p>

                </div>
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
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl mb-4">⛪</div>
              <h3 className="text-2xl font-centuryBold text-terracota mb-3">Santa Misa de Esponsales</h3>
              <p className="text-terracota font-century">15:00 hs</p>
              <p className="text-terracota font-century">Basílica Nuestra Señora del Santo Rosario</p>
              <p className="text-terracota font-century text-sm mb-4">Defensa 422, CABA</p>
              <a 
                href="https://maps.app.goo.gl/1AS12Wcq6poSBagi8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-terracota text-white px-4 py-2 rounded-lg font-century hover:bg-ocre-gold transition-colors text-sm"
              >
                📍 Ver en Google Maps
              </a>
              
              <div className="mt-6 p-4 bg-ocre-gold/10 rounded-lg">
                <p className="text-terracota font-century text-sm italic">
                  Teniendo en cuenta que el templo es la casa de Dios, les suplicamos cuidar el recogimiento, 
                  silencio y el decoro en la vestimenta.
                </p>
              </div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-2xl font-centuryBold text-terracota mb-3">Fiesta</h3>
              <p className="text-terracota font-century">Club Esloveno Slomškov Dom</p>
              <p className="text-terracota font-century text-sm mb-4">Castelli 28</p>
              <a 
                href="https://maps.app.goo.gl/vqAqT3JfN7jwS5rc8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-terracota text-white px-4 py-2 rounded-lg font-century hover:bg-ocre-gold transition-colors text-sm"
              >
                📍 Ver en Google Maps
              </a>
            </div>
          </div>
          
          {/* Código de Vestimenta */}
          <div className="mt-12 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-centuryBold text-terracota mb-4">Código de Vestimenta</h3>
              <div className="space-y-2">
                <p className="text-terracota font-century text-lg">Elegante</p>
                <p className="text-terracota font-century text-lg">Militares: Uniforme social de invierno</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección RSVP */}
      <section id="rsvp" className="flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-centuryBold text-terracota mb-6">
              <span className="text-ocre-gold">RSVP</span>
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <div className="text-4xl mb-6">📝</div>
              <h3 className="text-2xl font-centuryBold text-terracota mb-6">Confirmar Asistencia</h3>
              <p className="text-terracota font-century mb-8 leading-relaxed">
                Queremos compartir este momento tan especial con vos. Por eso, 
                necesitamos que completes este formulario para ayudarnos a organizar todo.
              </p>
              
              <a 
                href="https://forms.gle/x6Uinq4iQUq4WCnx7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-terracota text-white px-8 py-4 rounded-lg font-century hover:bg-ocre-gold hover:text-terracota transition-colors text-lg"
              >
                📋 Confirmar Asistencia
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Regalos */}
      <section id="regalos" className="flex items-center py-20 bg-gradient-to-b from-warm-white to-terracota/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-centuryBold text-terracota mb-6">
              <span className="text-ocre-gold">Regalos</span>
            </h2>
            <p className="text-xl text-terracota font-century mb-8 leading-relaxed">
              Tu presencia es el mejor regalo que podemos recibir. Sin embargo, 
              si deseas hacernos un obsequio para ayudarnos con nuestra luna de miel 
              y nuestra futura familia, podés hacerlo acá:
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <div className="text-4xl mb-6">💝</div>              
              <div className="space-y-4 text-left">
                <div className="p-4 bg-ocre-gold/10 rounded-lg">
                  <h4 className="text-lg font-centuryBold text-terracota mb-2">Cuenta en dólares</h4>
                  <button 
                    onClick={() => copyToClipboard('stefiyfran.2025', 'dolares')}
                    className="w-full flex items-center justify-between p-3 bg-white rounded-lg border-2 border-ocre-gold/30 hover:border-ocre-gold hover:bg-ocre-gold/5 transition-all duration-300 group"
                  >
                    <span className="text-terracota font-century font-mono text-lg">stefiyfran.2025</span>
                    <div className="flex items-center space-x-2">
                      {copiedAlias === 'dolares' && (
                        <span className="text-terracota text-sm font-century animate-pulse">¡Alias copiado!</span>
                      )}
                      <svg 
                        className="w-5 h-5 text-ocre-gold group-hover:scale-110 transition-transform duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </button>
                </div>
                
                <div className="p-4 bg-ocre-gold/10 rounded-lg">
                  <h4 className="text-lg font-centuryBold text-terracota mb-2">Cuenta de MercadoPago</h4>
                  <button 
                    onClick={() => copyToClipboard('stefiyfran.mp', 'mercadopago')}
                    className="w-full flex items-center justify-between p-3 bg-white rounded-lg border-2 border-ocre-gold/30 hover:border-ocre-gold hover:bg-ocre-gold/5 transition-all duration-300 group"
                  >
                    <span className="text-terracota font-century font-mono text-lg">stefiyfran.mp</span>
                    <div className="flex items-center space-x-2">
                      {copiedAlias === 'mercadopago' && (
                        <span className="text-terracota text-sm font-century animate-pulse">¡Alias copiado!</span>
                      )}
                      <svg 
                        className="w-5 h-5 text-ocre-gold group-hover:scale-110 transition-transform duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
