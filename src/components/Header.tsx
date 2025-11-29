import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Résidentiel', href: '/installation-residentielle' },
    { name: 'Professionnel', href: '/installation-professionnelle' },
    { name: 'Stockage', href: '/stockage-energie' },
    { name: 'Nos Offres', href: '/nos-offres' },
    { name: 'Études', href: '/etudes-energetiques' },
    { name: 'Modélisation 3D', href: '/modelisation-3d' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl">
              <Sun className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-800 to-green-700 bg-clip-text text-transparent">
              SL Solar Solution
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-blue-600 border-b-2 border-blue-400 pb-1'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/simulateur"
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-xl text-sm font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Simulateur
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/simulateur"
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-2 rounded-xl text-sm font-medium mx-3 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Simulateur
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;