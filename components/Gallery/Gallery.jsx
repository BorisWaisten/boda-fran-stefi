'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Gallery() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })
  return (
    <section className="relative bg-primary md:py-8 h-[75vh] md:h-screen flex items-center justify-center">
      <Image
        src="/papelrasgadoblack.svg"
        alt="Decoración"
        width={1920}
        height={200}
        className="absolute top-[-25vh] h-[65vh] sm:h-auto w-full scale-110 sm:top-[-37.5vh] md:top-[-40vh] lg:top-[-60vh] xl:top-[-80vh] z-[0] pointer-events-none "
      />
      
      <motion.div
        ref={ref} // <- Esto es lo que faltaba
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="relative w-full overflow-hidden  transition-all duration-700 ease-in-out z-10"
      >
        <Image
          src="/S&D-2.jpg"
          alt="Foto principal"
          width={1920}
          height={1080}
          className="scale-[1.2] w-full sm:scale-100  sm:object-cover lg:h-[70vh]  xl:h-[70vh] object-center"
          priority
        />
      </motion.div> 

      {/* SVG inferior decorativo */}
      <Image
        src="/papelrasgadoblack.svg"
        alt="Decoración"
        width={1920}
        height={200}
        className="top-[35vh] rotate-180 h-[65vh] sm:h-auto scale-110 w-full  absolute sm:top-[50vh] md:top-[45vh] lg:top-[38vh] xl:top-[15vh] z-[0] pointer-events-none"
      />
    </section>
  );
}
