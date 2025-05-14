'use client';
import Image from 'next/image';

export default function Gallery() {
  return (
    <section className="relative bg-primary md:py-8 h-[75vh] md:h-screen flex items-center justify-center">
      {/* SVG superior decorativo */}
      <Image
        src="/papelrasgado.svg"
        alt="Decoración"
        width={1920}
        height={200}
        className="top-[-20vh] left-[2vh] h-[34vh] scale-125  md:w-[200vh]  md:h-[100vh]  md:scale-x-150 rotate-180 absolute md:top-[-58%] md:left-[50vh] z-[0] pointer-events-none "
      />
      
      {/* Imagen centrada */}
<div className="relative w-[80%] md:w-[30%] h-[50vh] sm:h-[70vh] md:h-[80vh] overflow-hidden rounded-[5vh] transition-all duration-700 ease-in-out z-10">
  <Image
    src="/fondo.jpg"
    alt="Foto principal"
    fill
    className="object-cover"
    priority
  />
</div>


      {/* SVG inferior decorativo */}
      <Image
        src="/papelrasgado.svg"
        alt="Decoración"
        width={1920}
        height={200}
        className="top-[60vh] right-[2vh] h-[34vh] scale-125 md:w-full  md:h-[100vh]  md:scale-x-150  absolute md:top-[58%] md:right-[40vh]  z-[0] pointer-events-none"
      />
    </section>
  );
}
