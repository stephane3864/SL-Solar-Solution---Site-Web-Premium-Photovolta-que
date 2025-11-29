import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-white">SL Solar Solution</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Spécialiste de l'installation photovoltaïque en Isère et Rhône-Alpes. 
              Une énergie propre, une installation maîtrisée, une expérience claire.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <div className="p-1 bg-green-500/20 rounded">
                  <Phone className="h-4 w-4 text-green-400" />
                </div>
                <span>04 76 XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <div className="p-1 bg-blue-500/20 rounded">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <span>contact@slsolarsolution.fr</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <div className="p-1 bg-green-500/20 rounded">
                  <MapPin className="h-4 w-4 text-green-400" />
                </div>
                <span>Isère & Rhône-Alpes</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/installation-residentielle" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Installation Résidentielle</Link></li>
              <li><Link to="/installation-professionnelle" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Installation Professionnelle</Link></li>
              <li><Link to="/stockage-energie" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Stockage d'Énergie</Link></li>
              <li><Link to="/nos-offres" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Nos Offres</Link></li>
              <li><Link to="/etudes-energetiques" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Études Énergétiques</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Contact</Link></li>
              <li><Link to="/simulateur" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Simulateur</Link></li>
              <li><Link to="/mentions-legales" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Mentions légales</Link></li>
              <li><Link to="/politique-confidentialite" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">Politique de confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 SL Solar Solution. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm mt-2 sm:mt-0">
            Built with ❤️ by <a rel='nofollow' target='_blank' href="https://meku.dev" className="text-blue-400 hover:text-blue-300 transition-colors">Meku.dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;