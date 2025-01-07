// app/procesos-especiales/page.tsx
import { Beaker, Layers, Shapes, Pipette, TestTube, Sparkles, Shield, Hammer, Cog, Gauge } from 'lucide-react';
import Image from 'next/image';

export default function ProcesosEspecialesPage() {
  const procesosEspeciales = [
    {
      titulo: "Zincado Negro brillante",
      descripcion: "Recubrimiento metálico de zinc mediante baño electrolítico para una excelente protección y acabado decorativo.",
      icon: <Beaker className="w-6 h-6" />
    },
    {
      titulo: "Zincado Verde brillante",
      descripcion: "Acabado verde oliva que proporciona protección superior y apariencia distintiva.",
      icon: <Pipette className="w-6 h-6" />
    },
    {
      titulo: "Latonado brillante y mate",
      descripcion: "Recubrimiento de latón que combina protección con acabados estéticos superiores.",
      icon: <TestTube className="w-6 h-6" />
    },
    {
      titulo: "Niquelado",
      descripcion: "Disponible en acabados brillante, mate y negro para máxima versatilidad.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      titulo: "Cobrizado",
      descripcion: "Acabados brillante y mate para diversas aplicaciones industriales y decorativas.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      titulo: "Estañado",
      descripcion: "Protección superior con opciones de acabado brillante y mate.",
      icon: <Layers className="w-6 h-6" />
    }
  ];

  return (
    <main className="w-full">
      {/* Hero Section con elementos industriales */}
      <section className="w-full bg-primary relative overflow-hidden">
        {/* Elementos decorativos industriales */}
        <div className="absolute inset-0 flex justify-between opacity-10">
          <Cog className="w-64 h-64 -ml-24 -mt-12 text-white animate-spin-slow" />
          <Gauge className="w-48 h-48 -mr-12 mt-24 text-white" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 py-20 relative">
          <div className="flex flex-col items-center">
            <div className="relative w-72 h-28 mb-12">
              <div className="absolute inset-0 bg-white/95 rounded-lg shadow-lg backdrop-blur-sm" />
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <Image
                  src="/logos/galvagroup-logo.png"
                  alt="GalvaGroup"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="h-0.5 w-48 bg-gradient-to-r from-transparent via-white/70 to-transparent mb-8" />
            <h1 className="text-4xl font-light text-white mb-4 text-center">
              Procesos y Recubrimientos Especiales
            </h1>
            <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
              Soluciones avanzadas de recubrimiento para múltiples industrias
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Descripción General */}
        <section className="w-full -mt-16 mb-24">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                En Indugal – Industrias y Galvanizados S.A.S, además de Galvanizado en frío o zincado 
                por electrodeposición de zinc, contamos con una amplia línea de procesos y recubrimientos 
                especiales de metales no férricos por electrodeposición sobre piezas en metales varios.
              </p>
              
              {/* Industrias */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  "Metalmecánica",
                  "Autopartes",
                  "Motopartes",
                  "Ferretería",
                  "Herrajes Eléctricos",
                  "Marroquinería",
                  "Confección",
                  "Bisutería"
                ].map((industria, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                    <Hammer className="w-6 h-6 text-primary mx-auto mb-2" />
                    <span className="text-sm text-gray-700">{industria}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid de Procesos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {procesosEspeciales.map((proceso, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="bg-primary/10 rounded-full p-4 w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {proceso.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-primary mb-3">{proceso.titulo}</h3>
                  <p className="text-gray-600">{proceso.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Procesos Adicionales */}
        <section className="mb-24">
          <div className="bg-gray-900 rounded-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-light mb-8">Procesos Especializados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  titulo: "Oro brillante",
                  descripcion: "Recubrimiento metálico mínimo (flash) de oro que proporciona un color uniforme y acabado premium.",
                  icon: <Sparkles />
                },
                {
                  titulo: "Envejecidos",
                  descripcion: "Recubrimientos metálicos multicapa con acabados especiales para lograr efectos de envejecido.",
                  icon: <Layers />
                },
                {
                  titulo: "Lacado cataforético",
                  descripcion: "Recubrimiento de laca transparente que ofrece alto brillo y resistencia superior.",
                  icon: <Shapes />
                }
              ].map((proceso, index) => (
                <div 
                  key={index}
                  className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="text-primary-500 mb-4">
                    {proceso.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3">{proceso.titulo}</h3>
                  <p className="text-white/70">{proceso.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Características Destacadas */}
        <section className="mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10 text-primary" />,
                title: "Protección Superior",
                description: "Resistencia excepcional al desgaste y la oxidación para todos los metales base."
              },
              {
                icon: <Sparkles className="w-10 h-10 text-primary" />,
                title: "Acabados Precisos",
                description: "Variedad de acabados decorativos que combinan estética y funcionalidad."
              },
              {
                icon: <Beaker className="w-10 h-10 text-primary" />,
                title: "Versatilidad",
                description: "Aplicable sobre diversos materiales: acero, latón, cobre, zamak y más."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="rounded-full w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}