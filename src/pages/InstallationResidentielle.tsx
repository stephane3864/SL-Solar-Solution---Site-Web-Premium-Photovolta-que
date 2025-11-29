import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Award, Smartphone, FileText, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InstallationResidentielle() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Étude personnalisée',
      description: 'Notre équipe d\'experts réalise une analyse complète et détaillée de votre toiture, prenant en compte l\'orientation optimale, l\'inclinaison, les zones d\'ombrage potentielles et le dimensionnement précis de votre installation. Nous étudions également vos habitudes de consommation électrique pour déterminer la puissance idéale et calculer avec précision l\'impact sur vos économies d\'énergie. Cette approche sur mesure garantit une solution parfaitement adaptée à votre foyer et maximise votre retour sur investissement.'
    },
    {
      icon: Shield,
      title: 'Matériel garanti 25 ans',
      description: 'Nous sélectionnons exclusivement des panneaux photovoltaïques premium de fabricants reconnus mondialement, bénéficiant de certifications internationales strictes (IEC, TÜV, CE). Ces équipements haute performance offrent une garantie constructeur de 25 ans sur la production et une garantie produit de 12 ans. La durabilité exceptionnelle de nos matériaux, couplée à notre assurance décennale, vous assure une tranquillité d\'esprit totale et un investissement pérenne pour votre famille.'
    },
    {
      icon: Award,
      title: 'Pose RGE QualiPV',
      description: 'Nos techniciens certifiés RGE QualiPV maîtrisent parfaitement les techniques d\'installation les plus avancées et respectent scrupuleusement les normes de sécurité en vigueur. Cette certification officielle garantit la qualité de l\'installation, la sécurité de votre habitation et vous permet de bénéficier des aides publiques. Chaque intervention est réalisée selon un protocole rigoureux, avec une attention particulière portée à l\'étanchéité, à la solidité de la fixation et à l\'intégration esthétique sur votre toiture.'
    },
    {
      icon: Smartphone,
      title: 'Suivi intelligent',
      description: 'Grâce à notre application mobile intuitive et notre système de monitoring avancé, vous pouvez suivre en temps réel la production de votre installation, visualiser vos économies quotidiennes, mensuelles et annuelles, et recevoir des alertes automatiques en cas d\'anomalie. Le système vous propose également des conseils personnalisés pour optimiser votre autoconsommation et maximiser vos bénéfices. Notre équipe technique surveille également votre installation à distance pour une maintenance préventive optimale.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Étude gratuite et simulation personnalisée',
      description: 'Analyse complète de votre toiture avec mesure précise des dimensions, étude de l\'orientation et de l\'inclinaison optimales, évaluation des zones d\'ombrage, calcul de la puissance recommandée selon vos besoins. Nous réalisons également une étude financière détaillée avec estimation des économies, calcul du retour sur investissement et présentation des aides disponibles.',
      duration: '2-3 jours'
    },
    {
      step: '02',
      title: 'Démarches administratives',
      description: 'SL Solar Solution vous accompagne dans toutes les démarches administratives obligatoires. Nous nous occupons de la déclaration préalable de travaux auprès de votre mairie, des demandes de raccordement ENEDIS, de la constitution du dossier Consuel pour la conformité électrique, et nous vous assistons dans l\'obtention des aides et subventions (prime à l\'autoconsommation, crédit d\'impôt, aides locales). Notre équipe administrative expérimentée garantit un traitement rapide et conforme de votre dossier.',
      duration: '3-6 semaines'
    },
    {
      step: '03',
      title: 'Installation professionnelle',
      description: 'Pose réalisée en 1 à 2 jours par nos équipes certifiées RGE QualiPV. Sécurisation complète du chantier, fixation renforcée des panneaux avec respect de l\'étanchéité, installation de l\'onduleur et du système de monitoring, câblage selon les normes électriques en vigueur. Chaque étape fait l\'objet d\'un contrôle qualité rigoureux pour garantir la conformité et la performance de votre installation.',
      duration: '1-2 jours'
    },
    {
      step: '04',
      title: 'Mise en service & raccordement',
      description: 'Activation complète de votre installation avec tests de performance, validation Consuel pour la conformité électrique, mise en route du système de production, paramétrage du monitoring et formation à l\'utilisation de l\'application mobile. Nous effectuons également les démarches de raccordement final avec ENEDIS et la mise en place du contrat de revente du surplus si applicable.',
      duration: '1-2 semaines'
    },
    {
      step: '05',
      title: 'Suivi et optimisation',
      description: 'Accès à notre application mobile pour le suivi en temps réel de votre production et de vos économies, monitoring continu avec alertes automatiques, assistance client dédiée, conseils personnalisés pour optimiser votre autoconsommation. Notre service client reste à votre disposition pour toute question et notre équipe technique surveille les performances de votre installation pour une maintenance préventive optimale.',
      duration: 'En continu'
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
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
              alt="Installation résidentielle"
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
              Installation <span className="font-normal">Résidentielle</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Faites de votre maison une source d'énergie propre et autonome.
              L'expertise SL Solar Solution au service de votre transition énergétique.
            </motion.p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Faites de votre maison une source d'énergie propre et autonome
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                SL Solar Solution vous accompagne à chaque étape de votre projet solaire avec l'expertise 
                et la fiabilité d'un spécialiste reconnu en Rhône-Alpes
              </p>
            </div>

            <div className="space-y-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mr-6">
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 h-64 flex items-center justify-center">
                      <feature.icon className="h-24 w-24 text-blue-600 opacity-20" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Notre processus d'installation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                De l'étude initiale à la mise en service, un accompagnement complet et professionnel 
                pour garantir la réussite de votre projet solaire
              </p>
            </div>

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-start gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-4">
                          <span className="text-2xl font-bold text-white">{step.step}</span>
                        </div>
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {step.duration}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          {step.title}
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-10 top-full w-0.5 h-12 bg-gradient-to-b from-blue-500 to-green-500 transform translate-y-0"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Pourquoi choisir SL Solar Solution ?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                L'expertise et la fiabilité d'un spécialiste reconnu pour votre projet solaire
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Expertise certifiée',
                  description: 'Techniciens RGE QualiPV avec plus de 500 installations réalisées en Rhône-Alpes'
                },
                {
                  icon: Shield,
                  title: 'Garanties étendues',
                  description: 'Matériel garanti 25 ans, installation couverte par notre assurance décennale'
                },
                {
                  icon: FileText,
                  title: 'Accompagnement administratif',
                  description: 'Prise en charge complète des démarches et optimisation des aides disponibles'
                },
                {
                  icon: Zap,
                  title: 'Performance optimisée',
                  description: 'Rendement maximal grâce à notre étude personnalisée et nos équipements premium'
                },
                {
                  icon: Smartphone,
                  title: 'Suivi intelligent',
                  description: 'Monitoring en temps réel et maintenance préventive pour une performance durable'
                },
                {
                  icon: CheckCircle,
                  title: 'Satisfaction garantie',
                  description: 'Plus de 98% de clients satisfaits et un service après-vente réactif'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
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
              Prêt pour votre installation solaire ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto"
            >
              Obtenez votre étude personnalisée gratuite et découvrez le potentiel solaire de votre maison. 
              Nos experts vous accompagnent dans votre projet de A à Z.
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
                className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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