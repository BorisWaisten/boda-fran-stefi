'use client';

import { useState } from 'react';
import MobileNav from './MobileNav';

const Header = ({ activeSection, onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nuestra-historia', label: 'Nuestra Historia' },
    { id: 'celebracion', label: 'Celebración' },
    { id: 'como-llegar', label: 'Como Llegar' },
    { id: 'regalos', label: 'Regalos' }
  ];

  const handleNavClick = (sectionId) => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-ocre-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="text-2xl md:text-3xl font-centuryBold text-terracota">
                F & S
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-century text-lg transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-ocre-gold font-centuryBold'
                      : 'text-terracota hover:text-ocre-gold'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-terracota hover:text-ocre-gold transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={menuItems}
        activeSection={activeSection}
        onSectionChange={handleNavClick}
      />
    </>
  );
};

export default Header;
