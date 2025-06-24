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
    <section className="relative bg-primary md:py-8 h-[45vh] md:h-screen flex items-center justify-center">
      <Image
        src="/papelrasgadoblack.svg"
        alt="Decoración"
        width={1920}
        height={200}
        className="absolute top-[-25vh] z-20 h-[65vh] sm:h-[115vh]   w-full scale-110 md:h-[85vh] lg:h-[150vh] lg:top-[-60vh] xl:top-[-75vh] xl:scale-[1.5] pointer-events-none "
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
          className="scale-[1.2] w-full sm:scale-100 sm:h-[68vh] sm:object-cover md:h-[70vh] lg:h-[90vh]  xl:h-[100vh] object-center"
          priority
        />
      </motion.div> 

      {/* SVG inferior decorativo */}
      <Image
        src="/papelrasgadoblack.svg"
        alt="Decoración"
        width={1920}
        height={200}
        className="top-[12vh] z-20  rotate-180 h-[52vh] sm:h-[80vh] sm:scale-125  w-full  absolute md:h-[148vh] lg:scale-[1.8] lg:h-[80vh] lg:top-[55vh] xl:h-[125vh] xl:scale-[1.5] xl:top-[38vh] pointer-events-none"
      />
    </section>
  );
}
