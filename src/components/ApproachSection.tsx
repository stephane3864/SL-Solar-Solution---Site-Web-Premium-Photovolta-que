import React from 'react';
import { Search, Zap, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const ApproachSection = () => {
  const approaches = [
    {
      icon: Search,
      title: 'Étude claire',
      description: 'Analyse précise de vos besoins et de votre potentiel énergétique avec des recommandations transparentes.',
      color: 'from-blue-500 to-green-500',
      bgGradient: 'from-blue-500/10 to-green-500/10'
    },
    {
      icon: Zap,
      title: 'Installation nette',
      description: 'Pose professionnelle par des techniciens certifiés RGE QualiPV avec matériel premium garanti.',
      color: 'from-green-500 to-blue-500',
      bgGradient: 'from-green-500/10 to-blue-500/10'
    },
    {
      icon: Smartphone,
      title: 'Suivi intelligent',
      description: 'Monitoring en temps réel de votre production avec maintenance préventive et support dédié.',
      color: 'from-blue-600 to-green-600',
      bgGradient: 'from-blue-600/10 to-green-600/10'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Notre <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Approche</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une méthode éprouvée pour votre transition énergétique
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${approach.bgGradient} rounded-2xl shadow-lg mx-auto mb-6 border border-white/50`}>
                <approach.icon className={`h-10 w-10 bg-gradient-to-r ${approach.color} bg-clip-text text-transparent`} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {approach.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {approach.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;