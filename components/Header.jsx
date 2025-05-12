import React from 'react';
import './components.css';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="relative w-full h-[100vw] md:h-[80vw] lg:h-[70vw]">
        {/* Imagen de fondo */}
        <Image
          src="/fondo.jpg"
          alt="header"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority={true}
          className="w-full h-full filter grayscale"
        />

        {/* Contenido superpuesto */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white  z-10">
          {/* Curva de texto */}
          <svg viewBox="0 0 500 200" className="w-[25vh] h-[10vh] mt-16">
            <path id="curve" d="M 50 160 Q 250 -80 450 160" fill="transparent" />
            <text width="500">
              <textPath
                xlinkHref="#curve"
                startOffset="50%"
                textAnchor="middle"
                className="fill-white text-[4rem] md:text-[5rem] font-century"
              >
                ¡Nos Casamos!
              </textPath>
            </text>
          </svg>

          {/* Nombres */}
          <div className="relative w-full h-[10rem] md:h-[14rem]">
            <h1 className="absolute left-[20%] top-[-2rem] md:left-[20%] md:top-0 text-[6rem] md:text-[5.8rem] font-retro">
              Shirley
            </h1>
            <span className="absolute left-[32%] top-[3.8rem] md:left-[47%] md:top-[2.4rem] text-[2.2rem] md:text-[2.8rem] font-century">
              &
            </span>
            <h1 className="absolute left-[40%] top-[2rem] md:left-[58%] md:top-[4.2rem] text-[6rem] md:text-[5.8rem] font-retro">
              Diego
            </h1>
          </div>

          {/* Fecha */}
          <p className=" text-[1.5rem] md:text-[1.8rem] font-centuryBold">
            15.11.25
          </p>
        </div>

        {/* Papel rasgado: debe invadir el fondo */}
        <img
          src="/papelrasgado.svg"
          alt="borde rasgado"
          className="absolute top-[40%] left-0 w-[150%] scale-x-150 h-auto z-20 pointer-events-none"
        />
      </div>
    </header>
  );
};

export default Header;
