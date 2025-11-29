import React, { useState, useRef, useEffect } from 'react';
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import { Link } from 'react-router-dom';
    import { 
      Map, 
      Sun, 
      Ruler, 
      Eye, 
      TrendingUp, 
      Calculator, 
      Zap, 
      Shield,
      CheckCircle,
      ArrowRight,
      Compass,
      BarChart3,
      Camera,
      Download,
      FileText,
      Clock,
      Users
    } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { useForm } from 'react-hook-form';
    import { zodResolver } from '@hookform/resolvers/zod';
    import { z } from 'zod';
    import { toast } from 'react-toastify';

    const formSchema = z.object({
      name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
      email: z.string().email('Email invalide'),
      phone: z.string().min(10, 'Numéro de téléphone invalide'),
      address: z.string().min(5, 'Veuillez indiquer votre adresse complète'),
      projectType: z.string().min(1, 'Veuillez sélectionner un type de projet'),
      roofType: z.string().min(1, 'Veuillez sélectionner un type de toiture'),
      message: z.string().optional()
    });

    type FormData = z.infer<typeof formSchema>;

    export default function Modelisation3D() {
      const [activeTab, setActiveTab] = useState<'description' | 'integration' | 'mesure' | 'visualisation' | 'avantages' | 'avant-apres' | 'precision'>('description');
      const [isSubmitted, setIsSubmitted] = useState(false);
      const canvasRef = useRef<HTMLCanvasElement>(null);

      const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
        resolver: zodResolver(formSchema)
      });

      const onSubmit = async (data: FormData) => {
        try {
          // Simulate form submission
          await new Promise(resolve => setTimeout(resolve, 1000));
          console.log('Modélisation 3D request:', data);
          toast.success('Votre demande de modélisation 3D a été envoyée ! Nous vous contacterons rapidement.');
          setIsSubmitted(true);
          reset();
        } catch (error) {
          toast.error('Une erreur est survenue. Veuillez réessayer.');
        }
      };

      useEffect(() => {
        if (canvasRef.current) {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            draw3DRoof(ctx);
          }
        }
      }, []);

      const draw3DRoof = (ctx: CanvasRenderingContext2D) => {
        const { width, height } = ctx.canvas;
        
        // Clear canvas
        ctx.fillStyle = '#f0f9ff';
        ctx.fillRect(0, 0, width, height);

        // Draw 3D house with solar panels
        const centerX = width / 2;
        const centerY = height / 2;

        // House base
        ctx.fillStyle = '#e5e7eb';
        ctx.fillRect(centerX - 100, centerY, 200, 80);

        // Roof
        ctx.fillStyle = '#dc2626';
        ctx.beginPath();
        ctx.moveTo(centerX - 120, centerY);
        ctx.lineTo(centerX, centerY - 60);
        ctx.lineTo(centerX + 120, centerY);
        ctx.closePath();
        ctx.fill();

        // Solar panels on roof
        ctx.fillStyle = '#1e3a8a';
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 4; j++) {
            const panelX = centerX - 80 + j * 40;
            const panelY = centerY - 40 + i * 15;
            ctx.fillRect(panelX, panelY, 35, 12);
            
            // Panel grid
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 1;
            ctx.strokeRect(panelX, panelY, 35, 12);
          }
        }

        // Sun rays
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 3;
        const sunX = width * 0.8;
        const sunY = height * 0.2;
        
        for (let i = 0; i < 8; i++) {
          const angle = (i * Math.PI) / 4;
          ctx.beginPath();
          ctx.moveTo(sunX + Math.cos(angle) * 25, sunY + Math.sin(angle) * 25);
          ctx.lineTo(sunX + Math.cos(angle) * 40, sunY + Math.sin(angle) * 40);
          ctx.stroke();
        }

        // Sun
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(sunX, sunY, 20, 0, 2 * Math.PI);
        ctx.fill();
      };

      const features = [
        {
          icon: Map,
          title: 'Intégration Google Maps',
          description: 'Localisation précise et analyse satellite de votre toiture'
        },
        {
          icon: Sun,
          title: 'Calcul d\'ensoleillement',
          description: 'Analyse des ombres et de l\'exposition solaire tout au long de l\'année'
        },
        {
          icon: Compass,
          title: 'Orientation optimale',
          description: 'Détermination automatique de la meilleure orientation des panneaux'
        },
        {
          icon: Ruler,
          title: 'Mesure haute précision',
          description: 'Dimensions exactes au centimètre près grâce à l\'imagerie satellite'
        },
        {
          icon: Eye,
          title: 'Visualisation 3D',
          description: 'Rendu photoréaliste de votre future installation'
        },
        {
          icon: Calculator,
          title: 'Calculs avancés',
          description: 'Algorithmes de pointe pour une précision maximale'
        }
      ];

      const advantages = [
        {
          icon: TrendingUp,
          title: 'Optimisation maximale',
          description: 'Placement optimal de chaque panneau pour un rendement maximal'
        },
        {
          icon: Shield,
          title: 'Réduction des risques',
          description: 'Évite les erreurs de dimensionnement et les mauvaises surprises'
        },
        {
          icon: Zap,
          title: 'Gain de temps',
          description: 'Étude complète en quelques minutes au lieu de plusieurs heures'
        },
        {
          icon: CheckCircle,
          title: 'Précision garantie',
          description: 'Marge d\'erreur inférieure à 2% sur les calculs de production'
        }
      ];

      const studyProcess = [
        {
          icon: FileText,
          title: 'Demande d\'étude',
          description: 'Vous remplissez le formulaire avec les détails de votre projet',
          duration: '5 min'
        },
        {
          icon: Camera,
          title: 'Analyse satellite',
          description: 'Nos experts analysent votre toiture via imagerie haute résolution',
          duration: '24h'
        },
        {
          icon: Calculator,
          title: 'Modélisation 3D',
          description: 'Création du modèle 3D complet avec calculs de performance',
          duration: '48h'
        },
        {
          icon: Eye,
          title: 'Présentation',
          description: 'Remise de votre étude complète avec visualisation 3D',
          duration: '72h'
        }
      ];

      const tabContent = {
        description: (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Notre service d'étude de modélisation 3D
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nous réalisons pour vous une étude complète de modélisation 3D de votre toiture, 
                combinant imagerie satellite haute résolution, intelligence artificielle et calculs 
                d'ensoleillement avancés. Cette étude personnalisée vous permet de visualiser 
                précisément votre future installation solaire avant même sa réalisation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ),
        integration: (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Intégration Google Maps et calculs d'ensoleillement
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-gray-700 mb-6">
                    Notre outil utilise les données Google Maps et les algorithmes de calcul solaire 
                    les plus avancés pour analyser votre toiture avec une précision inégalée.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Analyse satellite haute résolution</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Calcul des ombres portées en temps réel</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Données météorologiques locales intégrées</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Optimisation automatique de l'orientation</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-xl p-6 text-center">
                  <Map className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Interface Google Maps</h4>
                  <p className="text-gray-600">Visualisation interactive de votre toiture avec superposition des données solaires</p>
                </div>
              </div>
            </div>
          </div>
        ),
        mesure: (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Mesure de toiture haute précision
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-gray-700 mb-6">
                    Notre technologie de mesure par imagerie satellite atteint une précision 
                    centimétrique, éliminant le besoin de déplacements pour les mesures préliminaires.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Précision garantie</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-green-700">Dimensions:</span>
                        <span className="font-semibold text-green-800">±2 cm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-700">Angles:</span>
                        <span className="font-semibold text-green-800">±0.5°</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-700">Surface:</span>
                        <span className="font-semibold text-green-800">±0.1 m²</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <Ruler className="h-8 w-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Mesures automatisées</h4>
                    <p className="text-gray-600 text-sm">Calcul automatique de toutes les dimensions nécessaires</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <Camera className="h-8 w-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Imagerie haute résolution</h4>
                    <p className="text-gray-600 text-sm">Images satellite de dernière génération</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <BarChart3 className="h-8 w-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Analyse topographique</h4>
                    <p className="text-gray-600 text-sm">Détection automatique des obstacles et reliefs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
        visualisation: (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Visualisation 3D des panneaux
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <canvas
                    ref={canvasRef}
                    className="w-full h-64 bg-gradient-to-b from-blue-50 to-white rounded-xl border border-gray-200"
                  />
                </div>
                <div>
                  <p className="text-lg text-gray-700 mb-6">
                    Visualisez votre future installation en 3D photoréaliste. Notre moteur de rendu 
                    génère des images d'une qualité exceptionnelle pour vous aider à prendre la meilleure décision.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Eye className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Rendu photoréaliste en temps réel</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Camera className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Vues multiples et angles personnalisés</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Download className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Export haute définition disponible</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
        avantages: (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Avantages pour le client
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={advantage.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <advantage.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                        <p className="text-gray-600">{advantage.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Bénéfices concrets</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">+15%</div>
                    <p className="text-gray-700">Rendement optimisé</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">-50%</div>
                    <p className="text-gray-700">Temps d'étude réduit</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
                    <p className="text-gray-700">Précision garantie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
        'avant-apres': (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Avant / Après notre technologie
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-red-800 mb-4">❌ Méthodes traditionnelles</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-red-700">Déplacements multiples nécessaires</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-red-700">Mesures manuelles imprécises</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-red-700">Calculs approximatifs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-red-700">Délais d'étude de 2-3 semaines</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-red-700">Risque d'erreurs de dimensionnement</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-red-700">Visualisation limitée du projet</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">✅ Notre étude 3D</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-green-700">Étude 100% à distance</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-green-700">Précision centimétrique garantie</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-green-700">Calculs scientifiques avancés</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-green-700">Résultats en 24-48h</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-green-700">Optimisation automatique</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-green-700">Rendu 3D photoréaliste</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">Impact sur votre projet</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">3 semaines → 2 jours</div>
                    <p className="text-blue-700 text-sm">Délai d'étude divisé par 10</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">±10% → ±2%</div>
                    <p className="text-blue-700 text-sm">Marge d'erreur réduite</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">0 → 100%</div>
                    <p className="text-blue-700 text-sm">Visualisation du projet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
        precision: (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Explication de la précision des calculs
              </h3>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Algorithmes de calcul avancés</h4>
                  <p className="text-gray-700 mb-4">
                    Notre système utilise des algorithmes de pointe développés en collaboration avec 
                    des instituts de recherche spécialisés dans l'énergie solaire.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Calcul d'irradiation</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Modèle de Perez pour le rayonnement diffus</li>
                        <li>• Données météorologiques sur 20 ans</li>
                        <li>• Correction atmosphérique locale</li>
                        <li>• Prise en compte de l'albédo</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Analyse des ombres</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Calcul 3D des ombres portées</li>
                        <li>• Obstacles environnants détectés</li>
                        <li>• Simulation heure par heure</li>
                        <li>• Variation saisonnière intégrée</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Sources de données</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Map className="h-6 w-6 text-blue-600" />
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-2">Imagerie satellite</h5>
                      <p className="text-sm text-gray-600">Résolution 30cm, mise à jour trimestrielle</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Sun className="h-6 w-6 text-green-600" />
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-2">Données météo</h5>
                      <p className="text-sm text-gray-600">Météo-France, historique 20 ans</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <BarChart3 className="h-6 w-6 text-orange-600" />
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-2">Topographie</h5>
                      <p className="text-sm text-gray-600">IGN, précision décimétrique</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Validation et certification</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Tests de validation</h5>
                      <p className="text-gray-700 text-sm mb-3">
                        Nos calculs sont validés sur plus de 1000 installations réelles avec un taux de précision de 98,2%.
                      </p>
                      <div className="bg-white rounded-lg p-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Écart moyen:</span>
                          <span className="font-semibold text-green-600">1,8%</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Certifications</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Certification ISO 9001:2015</li>
                        <li>• Validation ADEME</li>
                        <li>• Conformité IEC 61724</li>
                        <li>• Audit indépendant annuel</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      };

      return (
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Modélisation 3D de toiture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-900/60"></div>
              </div>
              
              <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6"
                >
                  Étude de modélisation <span className="font-normal">3D</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
                >
                  Nous réalisons une étude complète de modélisation 3D de votre toiture avec une précision 
                  inégalée et une visualisation photoréaliste de votre future installation solaire.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <a
                    href="#demande-etude"
                    className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Demander votre modélisation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </motion.div>
              </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-light text-gray-900 mb-4">
                    Notre processus d'étude
                  </h2>
                  <p className="text-lg text-gray-600">
                    De votre demande à la remise de votre étude complète
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {studyProcess.map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                          {step.duration}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Navigation Tabs */}
            <section className="py-8 bg-white sticky top-16 z-40 border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    { id: 'description', label: 'Description du service' },
                    { id: 'integration', label: 'Intégration Google Maps' },
                    { id: 'mesure', label: 'Mesure haute précision' },
                    { id: 'visualisation', label: 'Visualisation 3D' },
                    { id: 'avantages', label: 'Avantages client' },
                    { id: 'avant-apres', label: 'Avant / Après' },
                    { id: 'precision', label: 'Précision des calculs' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {tabContent[activeTab]}
                </motion.div>
              </div>
            </section>

            {/* Request Form Section */}
            <section id="demande-etude" className="py-24 bg-gray-50">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                    Demander votre étude de modélisation 3D
                  </h2>
                  <p className="text-lg text-gray-600">
                    Remplissez ce formulaire pour recevoir votre étude personnalisée sous 72h
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg text-center"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Demande envoyée !</h3>
                    <p className="text-gray-600 mb-6">
                      Nous avons bien reçu votre demande d'étude de modélisation 3D. 
                      Nos experts vont analyser votre projet et vous contacteront dans les 24h.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Prochaines étapes :</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Confirmation de réception par email</li>
                        <li>• Analyse satellite de votre toiture (24h)</li>
                        <li>• Création du modèle 3D (48h)</li>
                        <li>• Présentation de votre étude (72h)</li>
                      </ul>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="06 XX XX XX XX"
                          />
                          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                        </div>

                        <div>
                          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                            Type de projet *
                          </label>
                          <select
                            {...register('projectType')}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          >
                            <option value="">Sélectionnez</option>
                            <option value="residentiel">Résidentiel</option>
                            <option value="professionnel">Professionnel</option>
                            <option value="agricole">Agricole</option>
                            <option value="industriel">Industriel</option>
                          </select>
                          {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>}
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                            Adresse complète du projet *
                          </label>
                          <input
                            {...register('address')}
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Adresse, code postal, ville"
                          />
                          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                        </div>

                        <div>
                          <label htmlFor="roofType" className="block text-sm font-medium text-gray-700 mb-2">
                            Type de toiture *
                          </label>
                          <select
                            {...register('roofType')}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          >
                            <option value="">Sélectionnez</option>
                            <option value="tuiles">Tuiles</option>
                            <option value="ardoise">Ardoise</option>
                            <option value="bac-acier">Bac acier</option>
                            <option value="zinc">Zinc</option>
                            <option value="autre">Autre</option>
                          </select>
                          {errors.roofType && <p className="text-red-500 text-sm mt-1">{errors.roofType.message}</p>}
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Informations complémentaires (optionnel)
                          </label>
                          <textarea
                            {...register('message')}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Décrivez votre projet, contraintes particulières, objectifs..."
                          />
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h4 className="font-semibold text-green-800 mb-3">Ce que vous recevrez :</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-green-700">Modèle 3D photoréaliste</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-green-700">Calculs de production détaillés</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-green-700">Analyse d'ensoleillement</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-green-700">Optimisation du placement</span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                      >
                        {isSubmitting ? 'Envoi en cours...' : 'Demander mon étude 3D gratuite'}
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