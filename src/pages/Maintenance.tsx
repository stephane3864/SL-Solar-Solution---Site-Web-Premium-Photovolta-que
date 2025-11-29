import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Wrench, Droplets, Activity, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Maintenance() {
  const services = [
    {
      icon: Wrench,
      title: 'Entretien',
      description: 'Vérification annuelle de tous les composants de votre installation photovoltaïque.'
    },
    {
      icon: Droplets,
      title: 'Nettoyage',
      description: 'Nettoyage professionnel des panneaux pour maintenir un rendement optimal.'
    },
    {
      icon: Activity,
      title: 'Diagnostic à distance',
      description: 'Surveillance continue et détection précoce des anomalies via notre système de monitoring.'
    },
    {
      icon: Zap,
      title: 'Dépannage rapide',
      description: 'Intervention sous 48h en cas de panne pour minimiser les pertes de production.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
              alt="Maintenance panneaux solaires"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/60"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6"
            >
              Maintenance <span className="font-normal">& SAV</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Préservez la performance de votre installation avec nos services de maintenance professionnels.
            </motion.p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Nos services de maintenance
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Un suivi complet pour garantir la longévité de votre installation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
                  Pourquoi maintenir votre installation ?
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance optimale</h3>
                    <p className="text-gray-600">Maintenez un rendement maximal tout au long de la vie de votre installation.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Durée de vie prolongée</h3>
                    <p className="text-gray-600">Un entretien régulier peut prolonger la durée de vie de 25 à 30 ans.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Garanties préservées</h3>
                    <p className="text-gray-600">Respectez les conditions de garantie constructeur et assurance.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Technicien maintenance"
                  className="rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contracts Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Nos contrats de maintenance
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choisissez la formule adaptée à vos besoins
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contrat Essentiel</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                    Visite annuelle
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                    Nettoyage des panneaux
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                    Vérification électrique
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                    Rapport de performance
                  </li>
                </ul>
                <p className="text-2xl font-semibold text-blue-900">À partir de 150€/an</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-2xl p-8 shadow-sm border border-blue-200"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contrat Premium</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                    Tout du contrat Essentiel
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                    Monitoring 24/7
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                    Dépannage inclus
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                    Extension de garantie
                  </li>
                </ul>
                <p className="text-2xl font-semibold text-blue-900">À partir de 250€/an</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-8">
              Besoin d'une maintenance ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contactez-nous pour un devis personnalisé
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Demander un devis maintenance
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}