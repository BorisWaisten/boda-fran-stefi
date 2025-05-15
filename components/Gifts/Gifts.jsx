'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Regalos() {
    const router = useRouter();
    return (
      <section 
        className="bg-primary h-[40vh] md:h-screen text-white text-center w-full">
          <Image src ={"./papeldos.svg"} alt="Wedding" width={500} height={100} className="relative w-full top-[-10vh] sm:top-[-37vh]   scale-x-110   md:top-[-72vh]  pointer-events-none" />

          <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative top-[-10vh] sm:top-[-50vh] md:top-[-90vh]">
            <Image width={100} height={100} className="h-[4vh] scale-[4] md:h-[20vh] lg:h-[12vh] mx-auto pb-2  md:pb-8 " src="/regalos.svg" alt="" />
            <h2 className=" text-2xl  md:text-2xl lg:text-3xl  font-centuryBold mb-4">REGALOS</h2>
            <div className="flex justify-center w-full ">
            <p className=" font-centuryBold text-sm sm:text-lg  lg:text-2xl">
              Tu presencia es lo más importante para nosotros.
            </p>
          </div>
          <div className="flex justify-center w-full">
          <p className="mb-4  font-centuryBold text-sm sm:text-lg lg:text-2xl">
              Si deseas hacernos un regalo, será muy bienvenido.</p>
          </div>
          <button
              onClick={() => router.push('/gifts')}
              className=" text-sm md:text-lg lg:text-xl bg-white text-primary hover:bg-secondary font-bold py-2 px-4  rounded-3xl">
                MÁS INFORMACIÓN
          </button>
          </motion.div>
          <Image src ={"./papeldos.svg"} alt="Wedding" width={500} height={100} className="relative  w-full top-[-35vw] rotate-180 sm:top-[-66vh]    scale-x-110  md:top-[-110vh]    z-[0] pointer-events-none"  />         
      </section>
    );
  }
