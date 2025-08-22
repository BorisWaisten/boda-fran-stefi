'use client';

import { motion, AnimatePresence } from 'framer-motion';

const MobileNav = ({ isOpen, onClose, menuItems, activeSection, onSectionChange }) => {
  const handleNavClick = (sectionId) => {
    onSectionChange(sectionId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />

          {/* Mobile Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-warm-white z-50 md:hidden shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-ocre-gold/20">
                <div className="text-2xl font-centuryBold text-terracota">
                  F & S
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-terracota hover:text-ocre-gold transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-6">
                <ul className="space-y-4">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left py-3 px-4 rounded-lg font-century text-lg transition-all duration-300 ${
                          activeSection === item.id
                            ? 'bg-ocre-gold text-terracota font-centuryBold'
                            : 'text-terracota hover:bg-terracota/10 hover:text-ocre-gold'
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-ocre-gold/20">
                <p className="text-sm text-terracota font-century text-center">
                  11 de Octubre, 2025
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
