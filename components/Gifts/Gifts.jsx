'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Regalos() {
    const router = useRouter();
    return (
      <section className="relative">
          <Image src ={"./papeldos.svg"} alt="Wedding" width={500} height={100} className="relative w-full top-[10vh]  md:w-full  md:h-[75vh]  scale-x-150 md:scale-150   md:top-[30vh] md:left-[57vh] z-[0] pointer-events-none" />

        <div className="bg-primary h-[35vh] md:h-screen text-white text-center w-full  z-20">

          <Image width={100} height={100} className="h-[12vh] md:h-[20vh] lg:h-[20vh] mx-auto mt-4 " src="/regalos.svg" alt="" />
          <h2 className=" text-2xl md:text-2xl lg:text-3xl  font-centuryBold mb-4">REGALOS</h2>
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
              className=" text-sm md:text-lg lg:text-xl bg-white text-primary hover:bg-secondary font-bold py-2 px-4  rounded-3xl">
                MÁS INFORMACIÓN
          </button>

            <Image src ={"./papeldos.svg"} alt="Wedding" width={500} height={100} className="relative  w-full top-[-5vh] rotate-180    md:h-[75vh]  scale-x-150 md:scale-150  md:top-[5vh]  md:right-[56vh]   z-[0] pointer-events-none"  />
        </div>
      </section>
    );
  }
