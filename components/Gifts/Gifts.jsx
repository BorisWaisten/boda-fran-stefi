'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Regalos() {
    const router = useRouter();
    return (
      <div className="bg-primary text-white text-center w-full py-10">
        <div className="absolute ">
          <Image src ={"./papelrasgado.svg"} alt="Wedding" width={500} height={100} className="relative w-full top-[-20vh] left-[8vh] h-[34vh] md:w-[200vh]  md:h-[100vh]  scale-x-150 rotate-180  md:top-[-59%] md:left-[50vh] z-[0]" />
        </div>
        <Image width={100} height={100} className="h-[12vh] md:h-[20vh] lg:h-[20vh] mx-auto " src="/regalos.svg" alt="" />
        <h2 className=" text-2xl md:text-2xl lg:text-3xl font-centuryBold mb-4">REGALOS</h2>
        <div className="flex justify-center w-full ">
          <p className=" font-centuryBold text-sm sm:text-xl  lg:text-2xl">
            Tu presencia es lo más importante para nosotros.
          </p>
        </div>
        <div className="flex justify-center w-full">
        <p className="mb-4  font-centuryBold text-sm sm:text-xl lg:text-2xl">
            Si deseas hacernos un regalo, será muy bienvenido.</p>
        </div>
        <button
            onClick={() => router.push('/gifts')}
            className=" text-sm md:text-lg lg:text-xl bg-secondary font-bold py-2 px-4 rounded-3xl">
              MÁS INFORMACIÓN
        </button>
        <div className="absolute ">
          <Image src ={"./papelrasgado.svg"} alt="Wedding" width={500} height={100} className=" relative w-full bottom-[10vh] right-[-5vh] h-[34vh]  md:w-[200vh]  md:h-[100vh]  scale-x-150  md:bottom-[-60%] md:right-[50vh] z-[0]" />
        </div>
      </div>
    );
  }
