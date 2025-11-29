import React, { useState } from 'react';
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import ImageUpload from '../components/ImageUpload';
    import { CheckCircle, Upload } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { toast } from 'react-toastify';

    export default function UploadImages() {
      const [selectedImages, setSelectedImages] = useState<File[]>([]);
      const [isUploading, setIsUploading] = useState(false);
      const [isUploaded, setIsUploaded] = useState(false);

      const handleImagesChange = (images: File[]) => {
        setSelectedImages(images);
      };

      const handleUpload = async () => {
        if (selectedImages.length === 0) {
          toast.error('Veuillez sélectionner au moins une image');
          return;
        }

        setIsUploading(true);
        
        try {
          // Simulate upload process
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          // Here you would typically upload to your server or cloud storage
          console.log('Uploading images:', selectedImages);
          
          toast.success(`${selectedImages.length} image${selectedImages.length > 1 ? 's' : ''} téléchargée${selectedImages.length > 1 ? 's' : ''} avec succès !`);
          setIsUploaded(true);
          setSelectedImages([]);
        } catch (error) {
          toast.error('Erreur lors du téléchargement des images');
        } finally {
          setIsUploading(false);
        }
      };

      const resetUpload = () => {
        setIsUploaded(false);
        setSelectedImages([]);
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
                  <Upload className="h-10 w-10 text-white" />
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6"
                >
                  Télécharger des <span className="font-normal">Images</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-gray-700 max-w-3xl mx-auto"
                >
                  Ajoutez vos images d'installations solaires, de projets ou de réalisations pour enrichir le site web.
                </motion.p>
              </div>
            </section>

            {/* Upload Section */}
            <section className="py-24">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {isUploaded ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg text-center"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Images téléchargées !</h3>
                    <p className="text-gray-600 mb-6">
                      Vos images ont été ajoutées avec succès au site web.
                    </p>
                    <button
                      onClick={resetUpload}
                      className="bg-blue-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-800 transition-colors"
                    >
                      Télécharger d'autres images
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
                        Sélectionnez vos images
                      </h2>
                      <p className="text-gray-600">
                        Téléchargez des photos de vos installations, projets ou équipements
                      </p>
                    </div>

                    <ImageUpload
                      onImagesChange={handleImagesChange}
                      maxImages={10}
                      maxSizePerImage={10}
                      acceptedTypes={['image/jpeg', 'image/jpg', 'image/png', 'image/webp']}
                    />

                    {selectedImages.length > 0 && (
                      <div className="mt-8 flex justify-center">
                        <button
                          onClick={handleUpload}
                          disabled={isUploading}
                          className="bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        >
                          {isUploading ? 'Téléchargement en cours...' : `Télécharger ${selectedImages.length} image${selectedImages.length > 1 ? 's' : ''}`}
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </section>

            {/* Guidelines Section */}
            <section className="py-24 bg-gray-50">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-light text-gray-900 mb-4">
                    Conseils pour vos images
                  </h2>
                  <p className="text-lg text-gray-600">
                    Optimisez la qualité de vos téléchargements
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Qualité recommandée</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Résolution minimum : 1920x1080px</li>
                      <li>• Format préféré : JPG ou WebP</li>
                      <li>• Taille maximum : 10MB par image</li>
                      <li>• Éclairage naturel de préférence</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Types d'images utiles</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Installations terminées</li>
                      <li>• Panneaux solaires en détail</li>
                      <li>• Équipes au travail</li>
                      <li>• Matériel et équipements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      );
    }