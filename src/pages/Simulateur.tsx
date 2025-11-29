import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calculator, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';

const formSchema = z.object({
  houseType: z.string().min(1, 'Veuillez sélectionner un type de maison'),
  roofSurface: z.string().min(1, 'Veuillez indiquer la surface de toiture'),
  orientation: z.string().min(1, 'Veuillez sélectionner une orientation'),
  consumption: z.string().min(1, 'Veuillez indiquer votre consommation'),
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide')
});

type FormData = z.infer<typeof formSchema>;

export default function Simulateur() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Simulation data:', data);
      toast.success('Votre simulation a été envoyée ! Nous vous contacterons rapidement.');
      setIsSubmitted(true);
      reset();
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center w-20 h-20 bg-blue-900 rounded-2xl mx-auto mb-8"
            >
              <Calculator className="h-10 w-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6"
            >
              Simulateur <span className="font-normal">Solaire</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Découvrez le potentiel solaire de votre maison et estimez vos économies d'énergie.
            </motion.p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Simulation envoyée !</h3>
                <p className="text-gray-600 mb-6">
                  Nos experts analysent votre demande et vous contacteront dans les 24h avec une estimation personnalisée.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-900 hover:text-blue-800 font-medium"
                >
                  Faire une nouvelle simulation
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    Estimez votre installation
                  </h2>
                  <p className="text-gray-600">
                    Quelques informations pour calculer votre potentiel solaire
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* House Type */}
                  <div>
                    <label className="block text-lg font-medium text-gray-900 mb-4">
                      Type de maison *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { value: 'individuelle', label: 'Maison individuelle' },
                        { value: 'mitoyenne', label: 'Maison mitoyenne' },
                        { value: 'appartement', label: 'Appartement' }
                      ].map((option) => (
                        <label key={option.value} className="relative">
                          <input
                            {...register('houseType')}
                            type="radio"
                            value={option.value}
                            className="sr-only peer"
                          />
                          <div className="p-4 border-2 border-gray-200 rounded-xl cursor-pointer peer-checked:border-blue-900 peer-checked:bg-blue-50 hover:border-gray-300 transition-colors">
                            <span className="font-medium text-gray-900">{option.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.houseType && <p className="text-red-500 text-sm mt-2">{errors.houseType.message}</p>}
                  </div>

                  {/* Roof Surface */}
                  <div>
                    <label className="block text-lg font-medium text-gray-900 mb-4">
                      Surface de toiture disponible *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {[
                        { value: 'moins-30', label: 'Moins de 30m²' },
                        { value: '30-50', label: '30 - 50m²' },
                        { value: '50-100', label: '50 - 100m²' },
                        { value: 'plus-100', label: 'Plus de 100m²' }
                      ].map((option) => (
                        <label key={option.value} className="relative">
                          <input
                            {...register('roofSurface')}
                            type="radio"
                            value={option.value}
                            className="sr-only peer"
                          />
                          <div className="p-4 border-2 border-gray-200 rounded-xl cursor-pointer peer-checked:border-blue-900 peer-checked:bg-blue-50 hover:border-gray-300 transition-colors text-center">
                            <span className="font-medium text-gray-900">{option.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.roofSurface && <p className="text-red-500 text-sm mt-2">{errors.roofSurface.message}</p>}
                  </div>

                  {/* Orientation */}
                  <div>
                    <label className="block text-lg font-medium text-gray-900 mb-4">
                      Orientation principale de la toiture *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {[
                        { value: 'sud', label: 'Sud' },
                        { value: 'sud-est', label: 'Sud-Est' },
                        { value: 'sud-ouest', label: 'Sud-Ouest' },
                        { value: 'autre', label: 'Autre' }
                      ].map((option) => (
                        <label key={option.value} className="relative">
                          <input
                            {...register('orientation')}
                            type="radio"
                            value={option.value}
                            className="sr-only peer"
                          />
                          <div className="p-4 border-2 border-gray-200 rounded-xl cursor-pointer peer-checked:border-blue-900 peer-checked:bg-blue-50 hover:border-gray-300 transition-colors text-center">
                            <span className="font-medium text-gray-900">{option.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.orientation && <p className="text-red-500 text-sm mt-2">{errors.orientation.message}</p>}
                  </div>

                  {/* Consumption */}
                  <div>
                    <label className="block text-lg font-medium text-gray-900 mb-4">
                      Consommation électrique annuelle *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { value: 'moins-6000', label: 'Moins de 6 000 kWh' },
                        { value: '6000-12000', label: '6 000 - 12 000 kWh' },
                        { value: 'plus-12000', label: 'Plus de 12 000 kWh' }
                      ].map((option) => (
                        <label key={option.value} className="relative">
                          <input
                            {...register('consumption')}
                            type="radio"
                            value={option.value}
                            className="sr-only peer"
                          />
                          <div className="p-4 border-2 border-gray-200 rounded-xl cursor-pointer peer-checked:border-blue-900 peer-checked:bg-blue-50 hover:border-gray-300 transition-colors text-center">
                            <span className="font-medium text-gray-900">{option.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.consumption && <p className="text-red-500 text-sm mt-2">{errors.consumption.message}</p>}
                  </div>

                  {/* Contact Info */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">
                      Vos coordonnées pour recevoir l'estimation
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? 'Calcul en cours...' : 'Calculer mon potentiel solaire'}
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