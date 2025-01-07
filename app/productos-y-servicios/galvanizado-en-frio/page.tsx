// app/productos-y-servicios/galvanizado-en-frio/page.tsx
import Image from 'next/image';
import { Shield, Beaker, TestTube, Blocks, Zap, Leaf, Clock } from 'lucide-react';

export default function GalvanizadoFrioPage() {
  return (
    <main className="w-full pb-16">
      {/* Hero Section */}
      <section className="w-full bg-primary">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-light text-white text-center mb-4">
            Galvanizado en Frío o por Electrodeposición de Zinc
          </h1>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            Proceso de deposición de zinc sobre hierro y acero por electrolisis, proporcionando acabados precisos y uniformes
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Descripción General */}
        <section className="max-w-6xl mx-auto my-16">
          <div className="bg-background rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-light text-primary mb-8">Proceso y Características</h2>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                El proceso de zincado por electrodeposición de zinc tiene un acabado con buena adherencia y aspecto 
                superficial liso y brillante. Nuestros procesos proporcionan una deposición y adherencia del zinc 
                con un alto grado de uniformidad, penetración y brillo en las piezas o productos.
              </p>
              <p>
                Los acabados aplicados sobre el zincado electrolítico proporcionan alta resistencia a la corrosión 
                y un aspecto visual excelente, asegurando una óptima calidad y fiabilidad en los ensayos de cámara 
                de niebla salina.
              </p>
            </div>
          </div>
        </section>

        {/* Tipos de Acabados */}
        <section className="max-w-6xl mx-auto my-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Zincado Azul */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="rounded-full w-16 h-16 bg-primary/10 flex items-center justify-center mb-4">
                <TestTube className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-medium text-primary mb-3">Zincado Azul</h4>
              <p className="text-gray-600">
                Galvanizado con cromatante azul, proporcionando un acabado profesional y una 
                excelente protección contra la corrosión. Ideal para aplicaciones que requieren 
                un acabado estético y duradero.
              </p>
            </div>

            {/* Zincado Amarillo */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="rounded-full w-16 h-16 bg-primary/10 flex items-center justify-center mb-4">
                <TestTube className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-medium text-primary mb-3">Zincado Amarillo</h4>
              <p className="text-gray-600">
                Tropicalizado con cromatante amarillo, especialmente diseñado para ambientes 
                agresivos. Proporciona una capa adicional de protección para condiciones 
                ambientales más exigentes.
              </p>
            </div>
          </div>
        </section>

        {/* Tabla de Velocidad de Corrosión */}
        <section className="max-w-6xl mx-auto my-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-light text-primary mb-8">Velocidad de Corrosión</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Categoría</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Velocidad</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Industrial</td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">5,6 micras/año</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Urbana</td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">1,5 micras/año</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Suburbano</td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">1,3 micras/año</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Rural</td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">0,8 micras/año</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Bajo techo</td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">≤ 0,5 micras/año</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Características Principales */}
        <section className="max-w-6xl mx-auto my-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Alta Precisión",
                description: "Proceso controlado que permite obtener espesores uniformes y acabados precisos en las piezas tratadas."
              },
              {
                icon: <Leaf className="w-8 h-8 text-primary" />,
                title: "Versatilidad",
                description: "Ideal para piezas pequeñas y medianas que requieren un acabado estético y protective de alta calidad."
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "Eficiencia",
                description: "Proceso rápido y eficiente que permite tratar grandes cantidades de piezas en tiempos reducidos."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="rounded-full w-16 h-16 bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-medium text-primary mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Normas y Especificaciones */}
        <section className="max-w-6xl mx-auto my-16">
          <div className="bg-gray-900 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-light mb-8">Normas y Especificaciones</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-white/5">
                <h3 className="text-xl font-bold mb-3">NTC 2150-2</h3>
                <p className="text-white/70">Estándar nacional para recubrimientos electrolíticos</p>
              </div>
              <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-white/5">
                <h3 className="text-xl font-bold mb-3">ASTM B633</h3>
                <p className="text-white/70">Especificación estándar internacional equivalente</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}