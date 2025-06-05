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
        className="absolute top-[-15vh] w-full scale-110 sm:top-[-37.5vh] md:top-[-40vh] lg:top-[-60vh] xl:top-[-80vh] z-[0] pointer-events-none "
      />
      
      {/* <motion.div
        ref={ref} // <- Esto es lo que faltaba
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="relative w-[80%] md:w-[30%] h-[50vh] sm:w-[50%] sm:h-[62vh] md:h-[80vh] overflow-hidden rounded-[5vh] transition-all duration-700 ease-in-out z-10"
      >
        <Image
          src="/fondo.jpg"
          alt="Foto principal"
          fill
          className="object-cover"
          priority
        />
      </motion.div> */}

      <div>

        <p className="text-white font-centuryBold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          FOTO
        </p>

      </div>

      {/* SVG inferior decorativo */}
      <Image
        src="/papelrasgadoblack.svg"
        alt="Decoración"
        width={1920}
        height={200}
        className="top-[45vh] rotate-180  scale-110 w-full  absolute sm:top-[50vh] md:top-[45vh] lg:top-[38vh] xl:top-[15vh] z-[0] pointer-events-none"
      />
    </section>
  );
}
