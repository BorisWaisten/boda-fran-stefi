import React from 'react';

const GothicCross = ({ className = "", size = 60, color = "#b8860b" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cruz gótica con detalles ornamentales */}
      <g>
        {/* Brazo vertical principal */}
        <rect x="26" y="8" width="8" height="44" fill={color} />
        
        {/* Brazo horizontal principal */}
        <rect x="12" y="26" width="36" height="8" fill={color} />
        
        {/* Detalles ornamentales en los extremos */}
        {/* Extremo superior */}
        <rect x="24" y="6" width="12" height="4" fill={color} />
        <rect x="22" y="4" width="16" height="2" fill={color} />
        
        {/* Extremo inferior */}
        <rect x="24" y="50" width="12" height="4" fill={color} />
        <rect x="22" y="54" width="16" height="2" fill={color} />
        
        {/* Extremo izquierdo */}
        <rect x="10" y="24" width="4" height="12" fill={color} />
        <rect x="8" y="22" width="2" height="16" fill={color} />
        
        {/* Extremo derecho */}
        <rect x="46" y="24" width="4" height="12" fill={color} />
        <rect x="50" y="22" width="2" height="16" fill={color} />
        
        {/* Centro de la cruz con detalle ornamental */}
        <circle cx="30" cy="30" r="4" fill={color} />
        <circle cx="30" cy="30" r="2" fill="rgba(255,255,255,0.3)" />
        
        {/* Detalles decorativos en las esquinas */}
        <path d="M 24 20 L 26 20 L 26 22 L 24 22 Z" fill={color} />
        <path d="M 34 20 L 36 20 L 36 22 L 34 22 Z" fill={color} />
        <path d="M 24 38 L 26 38 L 26 40 L 24 40 Z" fill={color} />
        <path d="M 34 38 L 36 38 L 36 40 L 34 40 Z" fill={color} />
        
        {/* Líneas decorativas finas */}
        <line x1="28" y1="12" x2="32" y2="12" stroke={color} strokeWidth="1" />
        <line x1="28" y1="48" x2="32" y2="48" stroke={color} strokeWidth="1" />
        <line x1="16" y1="28" x2="16" y2="32" stroke={color} strokeWidth="1" />
        <line x1="44" y1="28" x2="44" y2="32" stroke={color} strokeWidth="1" />
      </g>
    </svg>
  );
};

export default GothicCross;
