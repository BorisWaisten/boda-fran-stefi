'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Invitación', href: '#invitation' },
    { name: 'Fecha', href: '#date' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Fiesta', href: '#party' },
    { name: 'Regalos', href: '#regalos' },
    { name: 'Hospedaje', href: '#lodging' },
    { name: 'Confirmar', href: '#asistency' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Botón de menú */}
      <button
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-6 relative">
          <span className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : '-translate-y-1'}`}></span>
          <span className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-1'}`}></span>
        </div>
      </button>

      {/* Menú desplegable */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={isOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-16 right-0 w-48 bg-black/90 backdrop-blur-md border border-yellow-400/30 rounded-lg shadow-2xl overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="py-2">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => scrollToSection(item.href)}
              className="w-full px-4 py-3 text-left text-white hover:bg-yellow-400/20 transition-all duration-300 font-religiousBody text-sm"
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
