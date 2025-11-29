import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-400/10"></div>
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-light text-white mb-8"
        >
          Prêt à passer au <span className="bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent">solaire</span> ?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto"
        >
          Obtenez une étude personnalisée gratuite et découvrez votre potentiel d'économies.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            to="/simulateur"
            className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Demander une étude
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;