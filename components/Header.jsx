import React from 'react';
import './components.css';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="relative">
      <div className="relative w-full h-[100vw] md:h-[80vw] lg:h-[70vw]">
        <Image
          src="/fondo.jpg"
          alt="header"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority={true}
          className="w-full h-full"
        />
        {/* Capa de superposición con gradiente oscuro */}
        <div className="absolute "></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <svg viewBox="0 0 500 150" className="w-[20vh] h-[5.5vh] ">
            <path id="curve" d="M 50 100 Q 250 0 450 100" fill="transparent" />
            <text width="500">
              <textPath
                xlinkHref="#curve"
                startOffset="50%"
                textAnchor="middle"
                className="fill-white text-[5.5vh] md:text-[4vw] font-century"
              >
                ¡NOS CASAMOS!
              </textPath>
            </text>
          </svg>
          <div className="flex flex-col items-center w-[20vh]">
            <h1 className={` text-[8vh] md:text-[12vw] text-center font-retro`}>
              Shirley & Diego
            </h1>
          </div>
          <p className="flex iems-center text-[1.2rem] xmd:text-xl lg:text-xl font-centuryBold mb-4">
            22.03.25
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
