'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ConfirmarAsistencia() {
    const router = useRouter();
    return (
      <div className="relative text-center font-centuryItalic text-white bg-primary py-10 overflow-hidden">
      <Image
        width={100}
        height={100}
        src='/hojitablanca.svg'
        alt="decoración"
        className="absolute top-[33.5vw] left-[-15.5vw] rotate-[75deg] w-[20vh] sm:w-[40vh] sm:left-[-13vh] sm:top-[17vh] md:w-[50vh] md:top-[15vh] md:left-[-16vh] sm:rotate-[78deg] pointer-events-none"
      />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        <div className="flex justify-center ">
          <Image width={100} height={100}  className="w-1/6 sm:w-[14vh] md:w-[16vh] mb-5" src="/confirmacion.svg" alt="" />
        </div>
        <h2 className= {`   text-lg sm:text-2xl md:text-3xl lg:text-4xl  mb-2 `}>
          Confirmación de Asistencia
        </h2>
        <p className=" text-[0.6rem] font-centuryBoldItalic sm:text-sm md:text-base lg:text-lg mb-4 ">
          !NO OLVIDES CONFIRMAR, TE ESPERAMOS!
        </p>
        <div className="flex justify-center ">
          <button
            onClick={() => router.push('/asistency')} 
              className=" font-centuryBold text-sm md:text-lg lg:text-xl bg-white text-primary hover:bg-secondary font-bold py-2 px-4  rounded-3xl">
            
            CONFIRMAR ASISTENCIA
          </button>
        </div>
        </motion.div>
      </div>
    );
  }