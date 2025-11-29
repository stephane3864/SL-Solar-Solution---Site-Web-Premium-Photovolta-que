import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Building, Phone, Mail, MapPin, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MentionsLegales() {
  const sections = [
    {
      id: 'editeur',
      title: 'Éditeur du site',
      icon: Building,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">SL Solar Solution</h4>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center space-x-2">
                <Building className="h-4 w-4 text-blue-600" />
                <span>SARL au capital de 10 000 €</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-blue-600" />
                <span>SIRET : 123 456 789 00012</span>
              </div>
              <div className="flex items-center space-x-2">
                <Scale className="h-4 w-4 text-blue-600" />
                <span>RCS Grenoble B 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-blue-600" />
                <span>TVA intracommunautaire : FR12123456789</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Adresse du siège social</h4>
            <div className="flex items-start space-x-2 text-gray-700">
              <MapPin className="h-4 w-4 text-blue-600 mt-1" />
              <div>
                <p>123 Avenue de la République</p>
                <p>38000 Grenoble</p>
                <p>France</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>04 76 XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>contact@slsolarsolution.fr</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Directeur de la publication</h4>
            <p className="text-gray-700">Monsieur [Nom du dirigeant], Gérant</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Qualifications professionnelles</h4>
            <div className="space-y-1 text-gray-700">
              <p>• Certification RGE QualiPV (Reconnu Garant de l'Environnement)</p>
              <p>• Qualification QUALIBAT 5911 - Installations photovoltaïques</p>
              <p>• Assurance responsabilité civile professionnelle : AXA Police n° 123456789</p>
              <p>• Assurance décennale : MAAF Police n° 987654321</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'hebergement',
      title: 'Hébergement',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Hébergeur du site</h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Meku.dev</strong></p>
              <p>Service d'hébergement web</p>
              <p>Site web : <a href="https://meku.dev" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">https://meku.dev</a></p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'propriete',
      title: 'Propriété intellectuelle',
      icon: Scale,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
          </p>
          <p>
            Les marques citées sur ce site sont déposées par les sociétés qui en sont propriétaires.
          </p>
        </div>
      )
    },
    {
      id: 'responsabilite',
      title: 'Responsabilité',
      icon: Scale,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, 
            mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
          </p>
          <p>
            Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email 
            à l'adresse <a href="mailto:contact@slsolarsolution.fr" className="text-blue-600 hover:text-blue-800 underline">contact@slsolarsolution.fr</a>, 
            en décrivant le problème de la manière la plus précise possible.
          </p>
          <p>
            Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule responsabilité. 
            En conséquence, SL Solar Solution ne saurait être tenu responsable d'un quelconque dommage subi par l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutives au téléchargement.
          </p>
          <p>
            Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres ressources présentes sur le réseau Internet 
            ne sauraient engager la responsabilité de SL Solar Solution.
          </p>
        </div>
      )
    },
    {
      id: 'cookies',
      title: 'Cookies et données personnelles',
      icon: FileText,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
            Les cookies sont de petits fichiers texte stockés sur votre ordinateur par votre navigateur web.
          </p>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Types de cookies utilisés :</h4>
            <ul className="space-y-1 ml-4">
              <li>• <strong>Cookies techniques</strong> : nécessaires au fonctionnement du site</li>
              <li>• <strong>Cookies analytiques</strong> : pour mesurer l'audience et améliorer le site</li>
              <li>• <strong>Cookies de préférences</strong> : pour mémoriser vos choix</li>
            </ul>
          </div>
          <p>
            Vous pouvez configurer votre navigateur pour refuser les cookies. Cependant, cela peut affecter le fonctionnement du site.
          </p>
          <p>
            Pour plus d'informations sur le traitement de vos données personnelles, consultez notre 
            <a href="/politique-confidentialite" className="text-blue-600 hover:text-blue-800 underline"> Politique de confidentialité</a>.
          </p>
        </div>
      )
    },
    {
      id: 'droit-applicable',
      title: 'Droit applicable et juridiction',
      icon: Scale,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            Tout litige en relation avec l'utilisation du site <strong>www.slsolarsolution.fr</strong> est soumis au droit français.
          </p>
          <p>
            Il est fait attribution exclusive de juridiction aux tribunaux compétents de Grenoble.
          </p>
          <p>
            La langue de référence pour le règlement de contentieux éventuels est le français.
          </p>
        </div>
      )
    },
    {
      id: 'contact-legal',
      title: 'Contact pour questions légales',
      icon: Mail,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            Pour toute question concernant ces mentions légales ou l'utilisation du site, vous pouvez nous contacter :
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span><strong>Email :</strong> contact@slsolarsolution.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span><strong>Téléphone :</strong> 04 76 XX XX XX</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-600 mt-1" />
                <div>
                  <strong>Adresse :</strong><br />
                  SL Solar Solution<br />
                  123 Avenue de la République<br />
                  38000 Grenoble<br />
                  France
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

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
              className="flex items-center justify-center w-16 h-16 bg-blue-900 rounded-2xl mx-auto mb-8"
            >
              <FileText className="h-8 w-8 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-light text-gray-900 mb-6"
            >
              Mentions <span className="font-normal">Légales</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Informations légales relatives au site web de SL Solar Solution, 
              conformément aux dispositions de la loi française.
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
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 px-6 py-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
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
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}