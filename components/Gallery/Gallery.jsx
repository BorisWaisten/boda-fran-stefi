'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GothicCross from '../Invitation/GothicCross';

export default function Gallery() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const images = [
    '/bodaF&S/foto3.jpeg',
  ];

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-[rgb(245,245,220)] via-[rgb(245,245,220)] to-[rgb(245,245,220)] text-dark">
      {/* Título de la sección */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h2 className="font-gothicTitle text-3xl md:text-4xl lg:text-5xl text-dark mb-4 tracking-wider">
          Nosotros 
        </h2>
        
      </motion.div>

      {/* Galería de imágenes */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-lg border border-dark/20 hover:border-dark/40 transition-all duration-300"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={image}
                  alt={`Foto ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-dark/50 transition-all duration-300 rounded-lg"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mensaje religioso */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-12"
      >
        <div className="bg-gradient-to-br from-gray-800/30 to-black/30 backdrop-blur-sm rounded-lg border border-dark/20 p-6 max-w-2xl mx-auto relative">
          {/* Cruz gótica decorativa */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-10 h-10 bg-dark/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <GothicCross size={20} color="#8B4513" />
            </div>
          </div>
          
          <p className="font-religiousBody text-balance text-dark/80 text-sm md:text-base italic mb-2">
            "Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos"
          </p>
            <p className="font-religiousSubtitle text-dark/60 text-xs md:text-sm">
            - Mateo 18:20
          </p>
        </div>
      </motion.div>
    </section>
  );
}
