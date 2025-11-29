import React, { useState, useRef, useEffect } from 'react';
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import { RotateCcw, ZoomIn, ZoomOut, Move3D, Sun, Home, Settings, Download } from 'lucide-react';
    import { motion } from 'framer-motion';

    interface PanelConfig {
      count: number;
      power: number;
      efficiency: number;
      area: number;
    }

    interface SimulationResults {
      annualProduction: number;
      monthlySavings: number;
      co2Reduction: number;
      roiYears: number;
    }

    export default function Simulateur3D() {
      const canvasRef = useRef<HTMLCanvasElement>(null);
      const [isLoading, setIsLoading] = useState(true);
      const [viewMode, setViewMode] = useState<'3d' | 'top' | 'side'>('3d');
      const [panelConfig, setPanelConfig] = useState<PanelConfig>({
        count: 12,
        power: 400,
        efficiency: 20.5,
        area: 2.1
      });
      const [simulationResults, setSimulationResults] = useState<SimulationResults>({
        annualProduction: 0,
        monthlySavings: 0,
        co2Reduction: 0,
        roiYears: 0
      });
      const [roofType, setRoofType] = useState<'tuile' | 'ardoise' | 'bac-acier'>('tuile');
      const [orientation, setOrientation] = useState(180); // Sud = 180°
      const [tilt, setTilt] = useState(30);

      useEffect(() => {
        // Simulate 3D scene loading
        const timer = setTimeout(() => {
          setIsLoading(false);
          initializeCanvas();
        }, 2000);

        return () => clearTimeout(timer);
      }, []);

      useEffect(() => {
        calculateSimulation();
      }, [panelConfig, orientation, tilt]);

      const initializeCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        drawScene(ctx);
      };

      const drawScene = (ctx: CanvasRenderingContext2D) => {
        const { width, height } = ctx.canvas;
        
        // Clear canvas
        ctx.fillStyle = '#87CEEB';
        ctx.fillRect(0, 0, width, height);

        // Draw ground
        ctx.fillStyle = '#90EE90';
        ctx.fillRect(0, height * 0.7, width, height * 0.3);

        // Draw house
        drawHouse(ctx, width / 2, height * 0.6);
        
        // Draw solar panels
        drawSolarPanels(ctx, width / 2, height * 0.45);

        // Draw sun
        drawSun(ctx, width * 0.8, height * 0.2);
      };

      const drawHouse = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
        const houseWidth = 200;
        const houseHeight = 120;
        const roofHeight = 60;

        // House walls
        ctx.fillStyle = '#DEB887';
        ctx.fillRect(x - houseWidth/2, y - houseHeight, houseWidth, houseHeight);

        // Roof
        ctx.fillStyle = roofType === 'tuile' ? '#CD853F' : roofType === 'ardoise' ? '#2F4F4F' : '#708090';
        ctx.beginPath();
        ctx.moveTo(x - houseWidth/2 - 20, y - houseHeight);
        ctx.lineTo(x, y - houseHeight - roofHeight);
        ctx.lineTo(x + houseWidth/2 + 20, y - houseHeight);
        ctx.closePath();
        ctx.fill();

        // Windows
        ctx.fillStyle = '#87CEEB';
        ctx.fillRect(x - 60, y - 80, 30, 40);
        ctx.fillRect(x + 30, y - 80, 30, 40);

        // Door
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(x - 15, y - 60, 30, 60);
      };

      const drawSolarPanels = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
        const panelWidth = 12;
        const panelHeight = 8;
        const spacing = 2;
        const panelsPerRow = 4;
        const rows = Math.ceil(panelConfig.count / panelsPerRow);

        ctx.fillStyle = '#1a1a2e';
        ctx.strokeStyle = '#16213e';
        ctx.lineWidth = 1;

        for (let row = 0; row < rows; row++) {
          const panelsInRow = Math.min(panelsPerRow, panelConfig.count - row * panelsPerRow);
          const rowWidth = panelsInRow * panelWidth + (panelsInRow - 1) * spacing;
          
          for (let col = 0; col < panelsInRow; col++) {
            const panelX = x - rowWidth/2 + col * (panelWidth + spacing);
            const panelY = y - row * (panelHeight + spacing);
            
            // Panel shadow (3D effect)
            ctx.fillStyle = '#0f0f1a';
            ctx.fillRect(panelX + 2, panelY + 2, panelWidth, panelHeight);
            
            // Panel
            ctx.fillStyle = '#1a1a2e';
            ctx.fillRect(panelX, panelY, panelWidth, panelHeight);
            ctx.strokeRect(panelX, panelY, panelWidth, panelHeight);
            
            // Panel grid
            ctx.strokeStyle = '#2a2a4e';
            ctx.lineWidth = 0.5;
            for (let i = 1; i < 4; i++) {
              ctx.beginPath();
              ctx.moveTo(panelX + i * panelWidth/4, panelY);
              ctx.lineTo(panelX + i * panelWidth/4, panelY + panelHeight);
              ctx.stroke();
            }
            for (let i = 1; i < 3; i++) {
              ctx.beginPath();
              ctx.moveTo(panelX, panelY + i * panelHeight/3);
              ctx.lineTo(panelX + panelWidth, panelY + i * panelHeight/3);
              ctx.stroke();
            }
          }
        }
      };

      const drawSun = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
        const radius = 30;
        
        // Sun rays
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 3;
        for (let i = 0; i < 8; i++) {
          const angle = (i * Math.PI) / 4;
          ctx.beginPath();
          ctx.moveTo(x + Math.cos(angle) * (radius + 10), y + Math.sin(angle) * (radius + 10));
          ctx.lineTo(x + Math.cos(angle) * (radius + 25), y + Math.sin(angle) * (radius + 25));
          ctx.stroke();
        }

        // Sun body
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
      };

      const calculateSimulation = () => {
        const totalPower = panelConfig.count * panelConfig.power;
        const orientationFactor = Math.cos((orientation - 180) * Math.PI / 180) * 0.3 + 0.7;
        const tiltFactor = Math.cos((tilt - 35) * Math.PI / 180) * 0.2 + 0.8;
        
        const annualProduction = Math.round(totalPower * 1.2 * orientationFactor * tiltFactor);
        const monthlySavings = Math.round(annualProduction * 0.15 / 12);
        const co2Reduction = Math.round(annualProduction * 0.4);
        const roiYears = Math.round(totalPower * 2.5 / monthlySavings / 12 * 10) / 10;

        setSimulationResults({
          annualProduction,
          monthlySavings,
          co2Reduction,
          roiYears
        });
      };

      const resetView = () => {
        setViewMode('3d');
        setOrientation(180);
        setTilt(30);
        initializeCanvas();
      };

      const exportResults = () => {
        const results = {
          configuration: panelConfig,
          orientation,
          tilt,
          roofType,
          results: simulationResults,
          date: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(results, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'simulation-solaire-3d.json';
        link.click();
        URL.revokeObjectURL(url);
      };

      return (
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-8"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-900 rounded-2xl mx-auto mb-6">
                    <Move3D className="h-8 w-8 text-white" />
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
                    Simulateur <span className="font-normal">3D</span>
                  </h1>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Visualisez votre installation solaire en 3D et optimisez votre configuration
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Main Simulator */}
            <section className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* 3D Viewer */}
                  <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Vue 3D de votre installation</h3>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => setViewMode('3d')}
                            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                              viewMode === '3d' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            3D
                          </button>
                          <button
                            onClick={() => setViewMode('top')}
                            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                              viewMode === 'top' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            Vue du dessus
                          </button>
                          <button
                            onClick={resetView}
                            className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                            title="Réinitialiser la vue"
                          >
                            <RotateCcw className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="relative">
                        {isLoading ? (
                          <div className="h-96 flex items-center justify-center bg-gray-50">
                            <div className="text-center">
                              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
                              <p className="text-gray-600">Chargement du modèle 3D...</p>
                            </div>
                          </div>
                        ) : (
                          <canvas
                            ref={canvasRef}
                            className="w-full h-96 bg-gradient-to-b from-blue-100 to-green-100"
                            onClick={initializeCanvas}
                          />
                        )}
                        
                        {!isLoading && (
                          <div className="absolute bottom-4 right-4 flex space-x-2">
                            <button className="p-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:bg-white transition-colors">
                              <ZoomIn className="h-4 w-4 text-gray-600" />
                            </button>
                            <button className="p-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:bg-white transition-colors">
                              <ZoomOut className="h-4 w-4 text-gray-600" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Configuration Panel */}
                  <div className="space-y-6">
                    {/* Panel Configuration */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Settings className="h-5 w-5 mr-2" />
                        Configuration
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre de panneaux: {panelConfig.count}
                          </label>
                          <input
                            type="range"
                            min="6"
                            max="30"
                            value={panelConfig.count}
                            onChange={(e) => setPanelConfig(prev => ({ ...prev, count: parseInt(e.target.value) }))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Puissance par panneau: {panelConfig.power}W
                          </label>
                          <select
                            value={panelConfig.power}
                            onChange={(e) => setPanelConfig(prev => ({ ...prev, power: parseInt(e.target.value) }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value={300}>300W</option>
                            <option value={350}>350W</option>
                            <option value={400}>400W</option>
                            <option value={450}>450W</option>
                            <option value={500}>500W</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Type de toiture
                          </label>
                          <select
                            value={roofType}
                            onChange={(e) => setRoofType(e.target.value as any)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="tuile">Tuiles</option>
                            <option value="ardoise">Ardoise</option>
                            <option value="bac-acier">Bac acier</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Orientation: {orientation}° ({orientation === 180 ? 'Sud' : orientation < 180 ? 'Sud-Est' : 'Sud-Ouest'})
                          </label>
                          <input
                            type="range"
                            min="90"
                            max="270"
                            value={orientation}
                            onChange={(e) => setOrientation(parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Inclinaison: {tilt}°
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="60"
                            value={tilt}
                            onChange={(e) => setTilt(parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Sun className="h-5 w-5 mr-2" />
                        Résultats de simulation
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">Production annuelle</span>
                          <span className="text-lg font-semibold text-green-600">{simulationResults.annualProduction.toLocaleString()} kWh</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">Économies mensuelles</span>
                          <span className="text-lg font-semibold text-blue-600">{simulationResults.monthlySavings}€</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">CO₂ évité/an</span>
                          <span className="text-lg font-semibold text-green-600">{simulationResults.co2Reduction} kg</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-700">Retour sur investissement</span>
                          <span className="text-lg font-semibold text-orange-600">{simulationResults.roiYears} ans</span>
                        </div>
                      </div>

                      <button
                        onClick={exportResults}
                        className="w-full mt-6 bg-blue-900 text-white px-4 py-3 rounded-xl font-medium hover:bg-blue-800 transition-colors flex items-center justify-center"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Exporter les résultats
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-light text-gray-900 mb-4">
                    Fonctionnalités du simulateur
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-4">
                      <Move3D className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Visualisation 3D</h3>
                    <p className="text-gray-600">Visualisez votre installation sous tous les angles</p>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mx-auto mb-4">
                      <Settings className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Configuration avancée</h3>
                    <p className="text-gray-600">Ajustez tous les paramètres en temps réel</p>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mx-auto mb-4">
                      <Sun className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Calculs précis</h3>
                    <p className="text-gray-600">Estimations basées sur des données réelles</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      );
    }