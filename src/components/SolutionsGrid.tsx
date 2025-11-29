import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, Battery, Wrench, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const SolutionsGrid = () => {
  const solutions = [
    {
      icon: Home,
      title: 'Installation Résidentielle',
      description: 'Solutions sur mesure pour votre maison',
      href: '/installation-residentielle',
      color: 'from-blue-500 to-green-500',
      bgColor: 'bg-blue-50 group-hover:bg-blue-100'
    },
    {
      icon: Building,
      title: 'Installation Professionnelle',
      description: 'Projets industriels et commerciaux',
      href: '/installation-professionnelle',
      color: 'from-green-500 to-blue-500',
      bgColor: 'bg-green-50 group-hover:bg-green-100'
    },
    {
      icon: Battery,
      title: 'Stockage d\'Énergie',
      description: 'Batteries pour l\'autonomie énergétique',
      href: '/stockage-energie',
      color: 'from-blue-600 to-green-600',
      bgColor: 'bg-blue-50 group-hover:bg-blue-100'
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'Entretien et suivi de vos installations',
      href: '/maintenance',
      color: 'from-green-600 to-blue-600',
      bgColor: 'bg-green-50 group-hover:bg-green-100'
    },
    {
      icon: BarChart3,
      title: 'Études Énergétiques',
      description: 'Analyse complète de vos besoins',
      href: '/etudes-energetiques',
      color: 'from-blue-500 to-green-500',
      bgColor: 'bg-blue-50 group-hover:bg-blue-100'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Nos <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des services complets pour tous vos projets photovoltaïques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={solution.href}
                className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
              >
                <div className={`flex items-center justify-center w-16 h-16 ${solution.bgColor} rounded-xl mb-6 transition-colors duration-300`}>
                  <solution.icon className={`h-8 w-8 bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600">
                  {solution.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;