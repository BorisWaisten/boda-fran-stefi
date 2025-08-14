'use client'

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ConfirmarAsistencia() {
    const router = useRouter();
    return (
      <div className="relative text-center font-centuryItalic text-dark bg-[rgb(245,245,220)] py-10 overflow-hidden">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        <h2 className= {`   text-lg sm:text-2xl md:text-3xl lg:text-4xl  mb-2 `}>
          Confirmación de Asistencia
        </h2>
        <p className=" text-[0.6rem] font-centuryBoldItalic sm:text-sm md:text-base lg:text-lg mb-4 ">
          !NO OLVIDES CONFIRMAR, TE ESPERAMOS!
        </p>
        <div className="flex justify-center ">
          <button
            onClick={() => router.push('/asistency')} 
              className=" font-centuryBold text-sm md:text-lg lg:text-xl bg-secondary text-white hover:bg-primary font-bold py-2 px-4  rounded-3xl">
            
            CONFIRMAR   
          </button>
        </div>
        </motion.div>
      </div>
    );
  }