import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Eye, Lock, UserCheck, Database, Settings, AlertTriangle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PolitiqueConfidentialite() {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: Shield,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            SL Solar Solution s'engage à protéger la confidentialité et la sécurité de vos données personnelles. 
            Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations 
            conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi française.
          </p>
          <p>
            En utilisant notre site web ou nos services, vous acceptez les pratiques décrites dans cette politique.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Responsable du traitement</h4>
            <p className="text-blue-800">
              SL Solar Solution, SARL au capital de 10 000 €<br />
              123 Avenue de la République, 38000 Grenoble<br />
              Email : contact@slsolarsolution.fr<br />
              Téléphone : 04 76 XX XX XX
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'donnees-collectees',
      title: 'Données personnelles collectées',
      icon: Database,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            Nous collectons différents types de données personnelles selon vos interactions avec notre site et nos services :
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Données d'identification</h4>
              <ul className="space-y-1 ml-4">
                <li>• Nom et prénom</li>
                <li>• Adresse email</li>
                <li>• Numéro de téléphone</li>
                <li>• Adresse postale</li>
                <li>• Informations sur votre propriété (pour les devis)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Données techniques</h4>
              <ul className="space-y-1 ml-4">
                <li>• Adresse IP</li>
                <li>• Type de navigateur et version</li>
                <li>• Système d'exploitation</li>
                <li>• Pages visitées et durée de visite</li>
                <li>• Données de géolocalisation (si autorisée)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Données de projet</h4>
              <ul className="space-y-1 ml-4">
                <li>• Consommation électrique</li>
                <li>• Caractéristiques de votre toiture</li>
                <li>• Photos de votre installation (si fournies)</li>
                <li>• Préférences énergétiques</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'finalites',
      title: 'Finalités du traitement',
      icon: Eye,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            Vos données personnelles sont collectées et traitées pour les finalités suivantes :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">Services principaux</h4>
              <ul className="space-y-1 text-green-800 text-sm">
                <li>• Réalisation de devis personnalisés</li>
                <li>• Études énergétiques et modélisation 3D</li>
                <li>• Installation et maintenance</li>
                <li>• Suivi de votre projet</li>
                <li>• Service client et support technique</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Communication</h4>
              <ul className="space-y-1 text-blue-800 text-sm">
                <li>• Réponse à vos demandes</li>
                <li>• Envoi d'informations sur nos services</li>
                <li>• Newsletter (avec votre consentement)</li>
                <li>• Invitations à des événements</li>
                <li>• Enquêtes de satisfaction</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-900 mb-2">Amélioration</h4>
              <ul className="space-y-1 text-orange-800 text-sm">
                <li>• Analyse du trafic web</li>
                <li>• Amélioration de nos services</li>
                <li>• Développement de nouveaux produits</li>
                <li>• Optimisation de l'expérience utilisateur</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-2">Obligations légales</h4>
              <ul className="space-y-1 text-purple-800 text-sm">
                <li>• Respect des obligations comptables</li>
                <li>• Conformité réglementaire</li>
                <li>• Gestion des garanties</li>
                <li>• Archivage légal</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'bases-legales',
      title: 'Bases légales du traitement',
      icon: UserCheck,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            Conformément au RGPD, nous nous appuyons sur les bases légales suivantes :
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">Exécution d'un contrat</h4>
              <p className="text-sm">
                Pour la réalisation de devis, l'installation de panneaux solaires, le suivi de projet et le service après-vente.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">Consentement</h4>
              <p className="text-sm">
                Pour l'envoi de newsletters, communications marketing et cookies non essentiels.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">Intérêt légitime</h4>
              <p className="text-sm">
                Pour l'amélioration de nos services, la sécurité du site et l'analyse statistique.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">Obligation légale</h4>
              <p className="text-sm">
                Pour le respect des obligations comptables, fiscales et réglementaires.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'partage-donnees',
      title: 'Partage des données',
      icon: Settings,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            Vos données personnelles peuvent être partagées dans les cas suivants :
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Partenaires techniques</h4>
              <ul className="space-y-1 ml-4 text-sm">
                <li>• Fabricants de panneaux solaires (pour les garanties)</li>
                <li>• Sous-traitants d'installation (avec accord de confidentialité)</li>
                <li>• Organismes de certification (RGE, Qualibat)</li>
                <li>• Prestataires de maintenance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Prestataires de services</h4>
              <ul className="space-y-1 ml-4 text-sm">
                <li>• Hébergeur web (Meku.dev)</li>
                <li>• Service d'emailing (avec votre consentement)</li>
                <li>• Outils d'analyse web (Google Analytics, anonymisé)</li>
                <li>• Plateforme de gestion client (CRM)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Autorités compétentes</h4>
              <p className="text-sm">
                En cas d'obligation légale ou de demande judiciaire, nous pouvons être amenés à communiquer vos données aux autorités compétentes.
              </p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-900 mb-2">Engagement de protection</h4>
            <p className="text-red-800 text-sm">
              Nous ne vendons jamais vos données personnelles à des tiers. Tous nos partenaires sont tenus par des accords de confidentialité stricts.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'conservation',
      title: 'Durée de conservation',
      icon: Lock,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            Nous conservons vos données personnelles pendant les durées suivantes :
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type de données</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Durée de conservation</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Justification</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Données de prospects</td>
                  <td className="border border-gray-300 px-4 py-2">3 ans</td>
                  <td className="border border-gray-300 px-4 py-2">Durée légale de prospection</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Données clients</td>
                  <td className="border border-gray-300 px-4 py-2">10 ans après fin de contrat</td>
                  <td className="border border-gray-300 px-4 py-2">Garantie décennale</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Données comptables</td>
                  <td className="border border-gray-300 px-4 py-2">10 ans</td>
                  <td className="border border-gray-300 px-4 py-2">Obligation légale</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Cookies analytiques</td>
                  <td className="border border-gray-300 px-4 py-2">13 mois</td>
                  <td className="border border-gray-300 px-4 py-2">Recommandation CNIL</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Données de navigation</td>
                  <td className="border border-gray-300 px-4 py-2">12 mois</td>
                  <td className="border border-gray-300 px-4 py-2">Amélioration du service</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm">
            À l'expiration de ces délais, vos données sont automatiquement supprimées ou anonymisées, 
            sauf obligation légale de conservation plus longue.
          </p>
        </div>
      )
    },
    {
      id: 'droits',
      title: 'Vos droits',
      icon: UserCheck,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Droit d'accès</h4>
              <p className="text-blue-800 text-sm">
                Obtenir une copie de toutes les données personnelles que nous détenons sur vous.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">Droit de rectification</h4>
              <p className="text-green-800 text-sm">
                Corriger ou mettre à jour vos données personnelles inexactes ou incomplètes.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-900 mb-2">Droit à l'effacement</h4>
              <p className="text-red-800 text-sm">
                Demander la suppression de vos données dans certaines conditions.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-900 mb-2">Droit à la limitation</h4>
              <p className="text-orange-800 text-sm">
                Limiter le traitement de vos données dans certaines circonstances.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-2">Droit à la portabilité</h4>
              <p className="text-purple-800 text-sm">
                Récupérer vos données dans un format structuré et lisible.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Droit d'opposition</h4>
              <p className="text-gray-800 text-sm">
                Vous opposer au traitement de vos données pour des raisons légitimes.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-900 mb-2">Comment exercer vos droits ?</h4>
            <p className="text-yellow-800 text-sm mb-2">
              Pour exercer ces droits, contactez-nous :
            </p>
            <ul className="text-yellow-800 text-sm space-y-1">
              <li>• Email : contact@slsolarsolution.fr</li>
              <li>• Courrier : SL Solar Solution, 123 Avenue de la République, 38000 Grenoble</li>
              <li>• Téléphone : 04 76 XX XX XX</li>
            </ul>
            <p className="text-yellow-800 text-sm mt-2">
              Nous vous répondrons dans un délai maximum d'un mois.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'securite',
      title: 'Sécurité des données',
      icon: Lock,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Mesures techniques</h4>
              <ul className="space-y-1 text-sm">
                <li>• Chiffrement SSL/TLS pour toutes les transmissions</li>
                <li>• Stockage sécurisé avec chiffrement des données</li>
                <li>• Sauvegardes régulières et sécurisées</li>
                <li>• Pare-feu et systèmes de détection d'intrusion</li>
                <li>• Mises à jour de sécurité régulières</li>
                <li>• Accès restreint par authentification forte</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Mesures organisationnelles</h4>
              <ul className="space-y-1 text-sm">
                <li>• Formation du personnel à la protection des données</li>
                <li>• Accès aux données sur principe du besoin d'en connaître</li>
                <li>• Clauses de confidentialité pour tous les employés</li>
                <li>• Procédures de gestion des incidents</li>
                <li>• Audits de sécurité réguliers</li>
                <li>• Politique de mots de passe renforcée</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-900 mb-2">En cas de violation de données</h4>
            <p className="text-red-800 text-sm">
              En cas de violation de données susceptible d'engendrer un risque élevé pour vos droits et libertés, 
              nous vous en informerons dans les meilleurs délais et prendrons toutes les mesures nécessaires pour limiter l'impact.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'cookies-detail',
      title: 'Politique des cookies',
      icon: Settings,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            Notre site utilise des cookies pour améliorer votre expérience et analyser notre trafic. 
            Voici le détail de notre utilisation des cookies :
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Cookies strictement nécessaires</h4>
              <p className="text-sm mb-2">Ces cookies sont indispensables au fonctionnement du site :</p>
              <ul className="space-y-1 text-sm ml-4">
                <li>• Cookies de session pour la navigation</li>
                <li>• Cookies de sécurité (protection CSRF)</li>
                <li>• Cookies de préférences linguistiques</li>
                <li>• Cookies de consentement</li>
              </ul>
              <p className="text-xs text-gray-600 mt-2">Base légale : Intérêt légitime (fonctionnement du site)</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Cookies analytiques</h4>
              <p className="text-sm mb-2">Pour mesurer l'audience et améliorer le site :</p>
              <ul className="space-y-1 text-sm ml-4">
                <li>• Google Analytics (anonymisé)</li>
                <li>• Statistiques de fréquentation</li>
                <li>• Analyse du comportement utilisateur</li>
              </ul>
              <p className="text-xs text-gray-600 mt-2">Base légale : Consentement</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Cookies de préférences</h4>
              <p className="text-sm mb-2">Pour mémoriser vos choix :</p>
              <ul className="space-y-1 text-sm ml-4">
                <li>• Préférences d'affichage</li>
                <li>• Paramètres du simulateur</li>
                <li>• Choix de consentement cookies</li>
              </ul>
              <p className="text-xs text-gray-600 mt-2">Base légale : Consentement</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Gestion des cookies</h4>
            <p className="text-blue-800 text-sm mb-2">
              Vous pouvez gérer vos préférences de cookies :
            </p>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Via le bandeau de consentement lors de votre première visite</li>
              <li>• Dans les paramètres de votre navigateur</li>
              <li>• En nous contactant pour toute question</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'reclamations',
      title: 'Réclamations et contact',
      icon: AlertTriangle,
      content: (
        <div className="space-y-4 text-gray-700">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Contact pour questions sur la confidentialité</h4>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="space-y-2 text-green-800">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span><strong>Email :</strong> contact@slsolarsolution.fr</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span><strong>Objet :</strong> "Protection des données personnelles"</span>
                </div>
                <p className="text-sm mt-2">
                  Notre équipe vous répondra dans les meilleurs délais pour toute question relative à vos données personnelles.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Droit de réclamation</h4>
            <p className="text-sm mb-3">
              Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, 
              vous avez le droit d'introduire une réclamation auprès de l'autorité de contrôle compétente :
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h5 className="font-semibold text-blue-900 mb-2">Commission Nationale de l'Informatique et des Libertés (CNIL)</h5>
              <div className="text-blue-800 text-sm space-y-1">
                <p><strong>Adresse :</strong> 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07</p>
                <p><strong>Téléphone :</strong> 01 53 73 22 22</p>
                <p><strong>Site web :</strong> <a href="https://www.cnil.fr" className="underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a></p>
                <p><strong>Formulaire de plainte en ligne :</strong> Disponible sur le site de la CNIL</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Délégué à la Protection des Données (DPO)</h4>
            <p className="text-sm">
              Pour toute question spécifique concernant la protection de vos données, vous pouvez contacter notre DPO :
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-2">
              <p className="text-gray-800 text-sm">
                <strong>Email :</strong> dpo@slsolarsolution.fr<br />
                <strong>Courrier :</strong> DPO - SL Solar Solution, 123 Avenue de la République, 38000 Grenoble
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'modifications',
      title: 'Modifications de la politique',
      icon: Settings,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            Cette politique de confidentialité peut être modifiée pour refléter les changements dans nos pratiques 
            ou pour des raisons opérationnelles, légales ou réglementaires.
          </p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-900 mb-2">En cas de modification</h4>
            <ul className="text-yellow-800 text-sm space-y-1">
              <li>• Nous publierons la nouvelle version sur cette page</li>
              <li>• La date de dernière mise à jour sera actualisée</li>
              <li>• Pour les modifications importantes, nous vous en informerons par email</li>
              <li>• Vous aurez la possibilité de retirer votre consentement si nécessaire</li>
            </ul>
          </div>

          <p className="text-sm">
            Nous vous encourageons à consulter régulièrement cette politique pour rester informé 
            de la façon dont nous protégeons vos données personnelles.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-green-50 to-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center w-16 h-16 bg-green-600 rounded-2xl mx-auto mb-8"
            >
              <Shield className="h-8 w-8 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-light text-gray-900 mb-6"
            >
              Politique de <span className="font-normal">Confidentialité</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Notre engagement pour la protection de vos données personnelles, 
              conforme au RGPD et à la réglementation française.
            </motion.p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 px-6 py-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-green-600 rounded-lg">
                        <section.icon className="h-4 w-4 text-white" />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  <div className="p-6">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Version 1.0 - Conforme au RGPD (Règlement UE 2016/679)
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}