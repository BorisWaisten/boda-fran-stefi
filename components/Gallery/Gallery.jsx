'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Gallery() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <section className="w-full flex justify-center items-center bg-primary py-8">
      <div
        className="relative w-full mx-auto"
        style={{ height: '60vw', maxHeight: 500, minHeight: 320 }}
      >
        {/* SVG superior mobile */}
        <Image
          src="/papelrasgadoblack.svg"
          alt="Decoración superior"
          width={1920}
          height={60}
          className="absolute left-0 w-full z-20 pointer-events-none sm:hidden"
          style={{ height: '450px', top: '-61%' }}
        />
        {/* SVG superior sm+ */}
        <Image
          src="/papelrasgadoblack.svg"
          alt="Decoración superior"
          width={1920}
          height={200}
          className="hidden sm:block absolute top-[-28vh] z-20 h-[65vh] sm:h-[115vh] w-full scale-110 md:scale-[1.8] md:h-[60vh] lg:scale-[1] lg:h-[120vh] lg:top-[-60vh] xl:top-[-75vh] xl:scale-[1.5] pointer-events-none"
        />
        {/* Imagen principal */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="absolute top-0 left-0 w-full h-full z-10"
        >
          <Image
            src="/S&D-2.jpg"
            alt="Foto principal"
            fill
            className="sm:hidden absolute  top-0 left-0 z-10"
            priority
          />
           <Image
            src="/S&D-2.jpg"
            alt="Foto principal"
            width={1920}
            height={1080}
            className="hidden sm:block lg:object-cover w-full h-full  z-10"
            priority
          />
        </motion.div>
        {/* SVG inferior mobile */}
        <Image
          src="/papelrasgadoblack.svg"
          alt="Decoración inferior"
          width={1920}
          height={60}
          className="absolute left-0 w-full z-20 pointer-events-none sm:hidden"
          style={{ height: '450px', top: '30%', transform: 'rotate(180deg)' }}
        />
        {/* SVG inferior sm+ */}
        <Image
          src="/papelrasgadoblack.svg"
          alt="Decoración inferior"
          width={1920}
          height={200}
          className="hidden sm:block absolute z-20 rotate-180 h-[56vh] sm:h-[80vh] sm:scale-125 w-full md:h-[90vh] md:top-[12vh] lg:scale-[1] lg:h-[120vh] lg:top-[-2vh] xl:h-[125vh] xl:scale-[1.5] xl:top-[38vh] pointer-events-none"
        />
      </div>
    </section>
  );
}
