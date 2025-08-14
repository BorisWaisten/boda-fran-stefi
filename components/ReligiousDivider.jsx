import React from 'react';
import GothicCross from './Invitation/GothicCross';

const ReligiousDivider = ({ className = "", color = "#b8860b" }) => {
  return (
    <div className={`relative flex items-center justify-center my-8 ${className}`}>
      {/* Línea izquierda */}
      <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-current opacity-50"></div>
      
      {/* Cruz gótica central */}
      <div className="mx-4">
        <GothicCross size={32} color={color} />
      </div>
      
      {/* Línea derecha */}
      <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent to-current opacity-50"></div>
    </div>
  );
};

export default ReligiousDivider;
