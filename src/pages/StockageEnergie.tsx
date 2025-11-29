import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Battery, Sun, Shield, Zap, Home, Users, MapPin, Clock, CheckCircle, TrendingUp, Lightbulb, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StockageEnergie() {
  const benefits = [
    {
      icon: Battery,
      title: 'Autoconsommation maximale',
      description: 'Avec une batterie, vous stockez l\'énergie produite par vos panneaux solaires en journée pour l\'utiliser le soir et la nuit. Sans batterie, cette énergie est revendue au réseau à un tarif moins avantageux. Par exemple, une partie de l\'énergie produite à 14h est stockée pour alimenter votre maison à 20h. Cela vous permet de mieux rentabiliser vos panneaux solaires en consommant directement votre propre production, réduisant ainsi votre dépendance au réseau électrique et maximisant vos économies.'
    },
    {
      icon: Shield,
      title: 'Indépendance énergétique',
      description: 'Avec le stockage d\'énergie, vous devenez moins sensible aux hausses constantes du prix de l\'électricité. Vous réduisez significativement votre dépendance au réseau électrique traditionnel et gagnez en autonomie. Cette indépendance vous apporte une tranquillité d\'esprit à long terme, sachant que vous maîtrisez une partie importante de votre approvisionnement énergétique et que vous êtes protégé contre les fluctuations tarifaires.'
    },
    {
      icon: Zap,
      title: 'Sécurité et continuité de service',
      description: 'Certaines solutions de stockage permettent de maintenir l\'alimentation électrique lors des coupures de réseau. En cas de panne, vous gardez le frigo, l\'éclairage et quelques prises en fonctionnement pendant plusieurs heures. Cette sécurité d\'approvisionnement est particulièrement appréciable dans les zones rurales ou lors d\'intempéries, vous garantissant un confort minimal même en cas de problème sur le réseau électrique.'
    },
    {
      icon: TrendingUp,
      title: 'Optimisation des économies',
      description: 'La batterie vous permet de consommer votre énergie solaire au bon moment, quand l\'électricité du réseau est la plus chère. Par exemple, avec les tarifs heures pleines/heures creuses, vous utilisez votre énergie stockée pendant les heures pleines (plus chères) et rechargez votre batterie pendant les heures creuses. Cette optimisation intelligente maximise vos économies et améliore significativement la rentabilité de votre installation solaire.'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Production solaire',
      description: 'Vos panneaux solaires produisent de l\'électricité grâce au soleil'
    },
    {
      step: '2',
      title: 'Consommation directe',
      description: 'L\'énergie alimente d\'abord vos appareils en fonctionnement'
    },
    {
      step: '3',
      title: 'Stockage du surplus',
      description: 'L\'excédent d\'énergie charge automatiquement la batterie'
    },
    {
      step: '4',
      title: 'Restitution nocturne',
      description: 'La batterie alimente votre maison quand les panneaux ne produisent plus'
    }
  ];

  const profiles = [
    {
      icon: Home,
      title: 'Famille avec forte consommation le soir',
      description: 'Vous rentrez du travail, allumez l\'éclairage, préparez le dîner, regardez la télévision... Votre consommation est maximale quand vos panneaux ne produisent plus.'
    },
    {
      icon: Users,
      title: 'Personnes en télétravail',
      description: 'Vous travaillez à domicile et consommez de l\'électricité toute la journée. Le stockage vous permet d\'optimiser l\'utilisation de votre production solaire.'
    },
    {
      icon: MapPin,
      title: 'Maison en zone rurale',
      description: 'Vous habitez dans une zone où les coupures électriques sont plus fréquentes. La batterie vous assure une continuité d\'alimentation rassurante.'
    },
    {
      icon: TrendingUp,
      title: 'Clients soucieux de rentabilité',
      description: 'Vous voulez maximiser votre autoconsommation et optimiser le retour sur investissement de votre installation photovoltaïque.'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Analyse de vos besoins',
      description: 'Étude approfondie de votre consommation électrique, analyse de votre installation solaire existante ou future, et évaluation de vos habitudes de vie pour dimensionner parfaitement votre solution de stockage.'
    },
    {
      step: '2',
      title: 'Dimensionnement de la batterie',
      description: 'Choix précis de la capacité adaptée (en kWh), sélection de la technologie la plus appropriée, et vérification de la compatibilité avec votre installation existante ou future.'
    },
    {
      step: '3',
      title: 'Installation et mise en service',
      description: 'Pose réalisée par nos techniciens certifiés, paramétrage complet du système de gestion, tests de bon fonctionnement et formation à l\'utilisation de votre nouvelle installation.'
    },
    {
      step: '4',
      title: 'Suivi et optimisation',
      description: 'Accès à notre application de suivi en temps réel, conseils personnalisés pour optimiser l\'usage de votre batterie, et support client dédié pour toute question ou assistance.'
    }
  ];

  const solutions = [
    {
      icon: Battery,
      title: 'Batteries lithium LiFePO4',
      description: 'Technologie de pointe pour une sécurité maximale et une durée de vie exceptionnelle de 15-20 ans.',
      features: ['6000+ cycles de charge', 'Rendement 95%', 'Maintenance minimale', 'Sécurité renforcée']
    },
    {
      icon: Settings,
      title: 'Système de gestion intelligent',
      description: 'Optimisation automatique de la charge et décharge pour maximiser vos économies.',
      features: ['Monitoring temps réel', 'Optimisation automatique', 'Application mobile', 'Alertes intelligentes']
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
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Stockage d'énergie"
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
              Stockage <span className="font-normal">d'Énergie</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto mb-8"
            >
              Ne laissez plus votre énergie solaire se perdre. Grâce au stockage, vous utilisez votre propre électricité même le soir, en cas de coupure ou lors des pics tarifaires. SL Solar Solution vous accompagne pour choisir et installer la solution de stockage parfaitement adaptée à vos besoins.
            </motion.p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Pourquoi ajouter une batterie ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez comment le stockage d'énergie transforme votre installation solaire en véritable source d'autonomie énergétique
              </p>
            </div>

            <div className="space-y-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
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
                        <benefit.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 h-64 flex items-center justify-center">
                      <benefit.icon className="h-24 w-24 text-blue-600 opacity-20" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Comment fonctionne une batterie avec vos panneaux solaires ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Le principe est simple et tout est automatique. Votre système de stockage gère intelligemment l'énergie sans aucune action de votre part.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-center">
                <Lightbulb className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Tout est automatique !
                </h3>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Votre onduleur ou gestionnaire d'énergie pilote automatiquement la batterie. 
                  Aucune action particulière n'est nécessaire de votre part. Le système optimise 
                  en permanence l'utilisation de votre énergie solaire pour maximiser vos économies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Is It For Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Le stockage, est-ce fait pour vous ?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez si votre profil correspond aux bénéficiaires types du stockage d'énergie
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {profiles.map((profile, index) => (
                <motion.div
                  key={profile.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                      <profile.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {profile.title}
                      </h3>
                      <p className="text-gray-700">
                        {profile.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Nos solutions de stockage
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Technologies de pointe pour une autonomie énergétique optimale et durable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-sm"
                >
                  <div className="flex items-center mb-6">
                    <solution.icon className="h-12 w-12 text-blue-900 mr-4" />
                    <h3 className="text-2xl font-semibold text-gray-900">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Method Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Notre méthode pour le stockage
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                SL Solar Solution vous accompagne de A à Z avec une approche personnalisée et un savoir-faire reconnu
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
                  <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-lg p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-start gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-4">
                          <span className="text-2xl font-bold text-white">{step.step}</span>
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

        {/* Expertise Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                L'expertise SL Solar Solution
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fiabilité du matériel, expertise technique et accompagnement de A à Z
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Matériel premium',
                  description: 'Nous sélectionnons exclusivement des batteries de marques reconnues avec les meilleures garanties du marché'
                },
                {
                  icon: Users,
                  title: 'Techniciens certifiés',
                  description: 'Nos installateurs sont formés et certifiés par les fabricants pour une pose dans les règles de l\'art'
                },
                {
                  icon: Clock,
                  title: 'Suivi personnalisé',
                  description: 'Support client dédié et maintenance préventive pour optimiser les performances de votre installation'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
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
              Prêt à optimiser votre autonomie énergétique ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto"
            >
              Contactez-nous pour une étude personnalisée de vos besoins en stockage. 
              Nos experts vous conseillent la solution parfaitement adaptée à votre situation.
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
                Simuler avec stockage
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/20 transition-all duration-300"
              >
                Demander une étude stockage
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}