import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Zap, Home, Building, CheckCircle, ArrowRight, Sun, Battery, Wrench, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NosOffres() {
  const offers = [
    {
      id: '3kwc',
      title: 'Installation 3 kWc',
      subtitle: 'Pour petite consommation',
      production: 'Je produis 3 600 kWh/an',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        '6 modules photovoltaïques et onduleurs',
        'Démarches administratives',
        'Monitoring en ligne',
        'Installation et mise en service'
      ],
      gradient: 'from-blue-900 via-blue-800 to-indigo-900',
      accentColor: 'text-orange-400'
    },
    {
      id: '6kwc',
      title: 'Installation 6 kWc',
      subtitle: 'Pour consommation moyenne',
      production: 'Je produis 7 200 kWh/an',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: [
        '12 modules photovoltaïques et onduleurs',
        'Démarches administratives',
        'Monitoring en ligne',
        'Installation et mise en service'
      ],
      gradient: 'from-slate-900 via-gray-800 to-slate-900',
      accentColor: 'text-yellow-400'
    },
    {
      id: '10kwc',
      title: 'Installation ≥ 10 kWc',
      subtitle: 'Sur étude',
      production: null,
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Les installations ≥ 10 kWc demandent un dimensionnement précis. Notre bureau d\'étude définit la solution la plus efficace pour votre site. Le raccordement et la structure sont optimisés selon votre consommation.',
      features: [
        'Étude technique complète',
        'Dimensionnement sur mesure',
        'Accompagnement administratif complet',
        'Optimisation de la production'
      ],
      gradient: 'from-gray-900 via-slate-800 to-gray-900',
      accentColor: 'text-green-400'
    }
  ];

  const additionalServices = [
    {
      icon: Battery,
      title: 'Stockage d\'énergie',
      description: 'Batteries pour maximiser votre autoconsommation',
      link: '/stockage-energie'
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'Entretien et suivi de vos installations',
      link: '/contact'
    },
    {
      icon: BarChart3,
      title: 'Études énergétiques',
      description: 'Analyse complète de vos besoins',
      link: '/etudes-energetiques'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-green-900">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-400/10"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl mx-auto mb-8"
            >
              <Sun className="h-10 w-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6"
            >
              Nos <span className="font-normal bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Offres</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Découvrez nos solutions photovoltaïques adaptées à chaque besoin. 
              Des installations clés en main pour optimiser votre production d'énergie solaire.
            </motion.p>
          </div>
        </section>

        {/* Offers Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Choisissez l'offre adaptée à vos besoins
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trois solutions complètes pour tous les profils de consommation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {offers.map((offer, index) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br ${offer.gradient} transform hover:scale-105 transition-all duration-300`}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {offer.title}
                      </h3>
                      <p className="text-gray-300 text-lg">
                        {offer.subtitle}
                      </p>
                    </div>

                    {/* Production highlight */}
                    {offer.production ? (
                      <div className="text-center mb-6">
                        <div className={`text-2xl font-bold ${offer.accentColor} mb-2`}>
                          {offer.production}
                        </div>
                        <p className="text-gray-400 text-sm">
                          Données à titre indicatif
                        </p>
                      </div>
                    ) : (
                      <div className="mb-6">
                        <p className="text-gray-300 leading-relaxed text-center">
                          {offer.description}
                        </p>
                      </div>
                    )}

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {offer.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                      <Link
                        to="/contact"
                        className="inline-flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-xl font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        Demander un devis
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-3 h-3 ${offer.accentColor.replace('text-', 'bg-')} rounded-full opacity-60`}></div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-2 h-2 ${offer.accentColor.replace('text-', 'bg-')} rounded-full opacity-40`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Services complémentaires
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Optimisez votre installation avec nos services additionnels
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link
                    to={service.link}
                    className="block bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Pourquoi choisir SL Solar Solution ?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                L'expertise et la qualité au service de votre projet solaire
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: 'Expertise certifiée',
                  description: 'Techniciens RGE QualiPV avec plus de 500 installations'
                },
                {
                  icon: Home,
                  title: 'Garanties étendues',
                  description: 'Matériel garanti 25 ans, installation assurée'
                },
                {
                  icon: Zap,
                  title: 'Performance optimisée',
                  description: 'Rendement maximal grâce à notre expertise'
                },
                {
                  icon: Building,
                  title: 'Suivi personnalisé',
                  description: 'Accompagnement de A à Z et service après-vente'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-400/10"></div>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-light text-white mb-8"
            >
              Prêt à choisir votre installation solaire ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto"
            >
              Nos experts vous conseillent gratuitement pour choisir l'offre parfaitement adaptée à vos besoins et votre budget.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/simulateur"
                className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Simuler mon installation
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/20 transition-all duration-300"
              >
                Demander un devis
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}