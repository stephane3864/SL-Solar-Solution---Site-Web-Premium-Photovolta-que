import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { TrendingUp, DollarSign, Building, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InstallationProfessionnelle() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'ROI 3-7 ans',
      description: 'Retour sur investissement rapide grâce aux économies d\'énergie et à la revente du surplus.'
    },
    {
      icon: DollarSign,
      title: 'Réduction des charges',
      description: 'Diminuez significativement vos factures d\'électricité et améliorez votre compétitivité.'
    },
    {
      icon: Building,
      title: 'Grandes installations',
      description: 'Expertise sur les projets de grande envergure : hangars, entrepôts, bâtiments industriels.'
    },
    {
      icon: Wrench,
      title: 'Maintenance incluse',
      description: 'Contrat de maintenance préventive pour garantir la performance de votre installation.'
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
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Installation professionnelle"
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
              Installation <span className="font-normal">Professionnelle</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Solutions photovoltaïques sur mesure pour entreprises, industries et collectivités.
            </motion.p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Avantages pour votre entreprise
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Réduisez vos coûts énergétiques et valorisez votre image
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Nos réalisations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Expertise sur tous types de bâtiments professionnels
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Bâtiments industriels', 
                  description: 'Hangars, entrepôts, usines',
                  image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
                },
                { 
                  title: 'Centres commerciaux', 
                  description: 'Grandes surfaces, magasins',
                  image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
                },
                { 
                  title: 'Bâtiments publics', 
                  description: 'Écoles, mairies, hôpitaux',
                  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm"
                >
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-8">
              Un projet professionnel ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contactez-nous pour une étude personnalisée de votre projet
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Nous contacter
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}