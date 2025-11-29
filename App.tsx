import React from 'react';
    import '@radix-ui/themes/styles.css';
    import { Theme } from '@radix-ui/themes';
    import { ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

    import Home from './src/pages/Home';
    import InstallationResidentielle from './src/pages/InstallationResidentielle';
    import InstallationProfessionnelle from './src/pages/InstallationProfessionnelle';
    import StockageEnergie from './src/pages/StockageEnergie';
    import NosOffres from './src/pages/NosOffres';
    import EtudesEnergetiques from './src/pages/EtudesEnergetiques';
    import Simulateur from './src/pages/Simulateur';
    import Contact from './src/pages/Contact';
    import UploadImages from './src/pages/UploadImages';
    import Modelisation3D from './src/pages/Modelisation3D';
    import MentionsLegales from './src/pages/MentionsLegales';
    import PolitiqueConfidentialite from './src/pages/PolitiqueConfidentialite';
    import NotFound from './src/pages/NotFound';

    const App: React.FC = () => {
      return (
        <Theme appearance="inherit" radius="large" scaling="100%">
          <Router>
            <main className="min-h-screen font-inter">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/installation-residentielle" element={<InstallationResidentielle />} />
                <Route path="/installation-professionnelle" element={<InstallationProfessionnelle />} />
                <Route path="/stockage-energie" element={<StockageEnergie />} />
                <Route path="/nos-offres" element={<NosOffres />} />
                <Route path="/etudes-energetiques" element={<EtudesEnergetiques />} />
                <Route path="/simulateur" element={<Simulateur />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/upload-images" element={<UploadImages />} />
                <Route path="/modelisation-3d" element={<Modelisation3D />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                newestOnTop
                closeOnClick
                pauseOnHover
              />
            </main>
          </Router>
        </Theme>
      );
    }

    export default App;