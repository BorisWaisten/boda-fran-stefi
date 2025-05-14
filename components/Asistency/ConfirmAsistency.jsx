'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ConfirmarAsistencia() {
    const router = useRouter();
    return (
      <div className=" text-center font-centuryItalic text-white bg-primary py-10">
        <div className="flex justify-center ">
          <Image width={100} height={100}  className="w-1/6 mb-5" src="/confirmacion.svg" alt="" />
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

      </div>
    );
  }