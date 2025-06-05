'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Regalos() {
    const router = useRouter();
    return (
      <section className="relative bg-primary md:h-[80vh] w-full  flex flex-col items-center">
        {/* Imagen superior */}
        <div className=" w-full h-auto relative">
          <Image 
            src="/papelrasgadoblack.svg" 
            alt="Wedding" 
            width={500} 
            height={100}
            className="w-full scale-x-110 absolute bottom-[-23vh] md:bottom-[-50vh] lg:bottom-[-60vh] xl:bottom-[-84vh] pointer-events-none translate-y-1"
          />
        </div>

        {/* Contenido principal */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col  md:absolute md:top-[15vh]  items-center text-white px-4 py-8 z-10"
        >
          <Image 
            width={100} 
            height={100} 
            className="h-[15vh] md:h-[18vh] lg:h-[20vh] xl:h-[25vh] w-auto " 
            src="/regalos.svg" 
            alt="Regalos icon" 
          />
          
          <h2 className="text-2xl md:text-4xl font-centuryBold mb-6">REGALOS</h2>
          
          <p className="font-centuryBold text-sm sm:text-lg lg:text-2xl text-center mb-2">
            Tu presencia es lo más importante para nosotros.
          </p>
          
          <p className="font-centuryBold text-sm sm:text-lg lg:text-2xl text-center mb-8">
            Si deseas hacernos un regalo, será muy bienvenido.
          </p>
          
          <button
            onClick={() => router.push('/gifts')}
            className="text-sm md:text-lg lg:text-xl bg-white text-primary hover:bg-secondary font-bold py-2 px-6 rounded-3xl transition-colors"
          >
            MÁS INFORMACIÓN
          </button>
        </motion.div>

        {/* Imagen inferior */}
        <div className="w-full mt-auto relative">
          <Image 
            src="/papelrasgadoblack.svg" 
            alt="Wedding" 
            width={500} 
            height={100} 
            className="w-full scale-x-110 rotate-180 absolute top-[-23vh] md:top-[-50vh] lg:top-[-60vh] xl:top-[-82vh] -translate-y-1"
          />
        </div>
      </section>
    );
}
