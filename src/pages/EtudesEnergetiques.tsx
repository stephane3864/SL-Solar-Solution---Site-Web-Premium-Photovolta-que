import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BarChart3, Calculator, FileText, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';

const formSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  propertyType: z.string().min(1, 'Veuillez sélectionner un type de bien'),
  consumption: z.string().min(1, 'Veuillez indiquer votre consommation'),
  message: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

export default function EtudesEnergetiques() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form data:', data);
      toast.success('Votre demande a été envoyée avec succès !');
      setIsSubmitted(true);
      reset();
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  const benefits = [
    {
      icon: BarChart3,
      title: 'Analyse de consommation',
      description: 'Étude détaillée de vos habitudes énergétiques et identification des postes de consommation.'
    },
    {
      icon: Calculator,
      title: 'Calcul de rentabilité',
      description: 'Simulation précise du retour sur investissement et des économies potentielles.'
    },
    {
      icon: FileText,
      title: 'Rapport complet',
      description: 'Document détaillé avec recommandations personnalisées et plan d\'action.'
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
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
              alt="Études énergétiques"
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
              Études <span className="font-normal">Énergétiques</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Optimisez votre transition énergétique avec une analyse complète et personnalisée.
            </motion.p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Une étude complète
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nos experts analysent votre situation pour vous proposer la solution optimale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-xl mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                Demander une étude
              </h2>
              <p className="text-lg text-gray-600">
                Remplissez ce formulaire pour recevoir votre étude énergétique personnalisée
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-8 shadow-sm text-center"
              >
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Demande envoyée !</h3>
                <p className="text-gray-600">
                  Nous vous contacterons dans les 24h pour planifier votre étude énergétique.
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Votre nom"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="06 XX XX XX XX"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                        Type de bien *
                      </label>
                      <select
                        {...register('propertyType')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="maison">Maison individuelle</option>
                        <option value="appartement">Appartement</option>
                        <option value="entreprise">Entreprise</option>
                        <option value="industrie">Industrie</option>
                      </select>
                      {errors.propertyType && <p className="text-red-500 text-sm mt-1">{errors.propertyType.message}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="consumption" className="block text-sm font-medium text-gray-700 mb-2">
                        Consommation annuelle *
                      </label>
                      <select
                        {...register('consumption')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Sélectionnez votre consommation</option>
                        <option value="moins-3000">Moins de 3 000 kWh/an</option>
                        <option value="3000-6000">3 000 - 6 000 kWh/an</option>
                        <option value="6000-9000">6 000 - 9 000 kWh/an</option>
                        <option value="9000-15000">9 000 - 15 000 kWh/an</option>
                        <option value="plus-15000">Plus de 15 000 kWh/an</option>
                      </select>
                      {errors.consumption && <p className="text-red-500 text-sm mt-1">{errors.consumption.message}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message (optionnel)
                      </label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Décrivez votre projet ou vos questions..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Demander mon étude gratuite'}
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}