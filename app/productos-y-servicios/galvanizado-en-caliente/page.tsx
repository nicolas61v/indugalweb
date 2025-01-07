// app/productos-y-servicios/galvanizado-en-caliente/page.tsx
import Image from 'next/image';
import { Shield, Leaf, Clock } from 'lucide-react';

export default function GalvanizadoCalientePage() {
  return (
    <main className="w-full pb-16">
      {/* Hero Section */}
      <section className="w-full bg-primary">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-light text-white text-center mb-4">
            Galvanizado por Inmersión en Caliente
          </h1>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            El proceso más eficiente de zinc para proteger el hierro y el acero durante largos periodos
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Descripción General */}
        <section className="max-w-6xl mx-auto my-16">
          <div className="bg-background rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-light text-primary mb-8">¿Por qué galvanizar?</h2>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                El recubrimiento de zinc sobre el hierro y el acero, posiblemente es el proceso más ecológico para evitar
                la corrosión. Se estima que los costos de la corrosión representan alrededor del 4% del Producto Interno
                Bruto de las naciones industrializadas, porcentaje que tiende a ser mayor en las economías de los países emergentes.
              </p>
              <p>
                Cada 90 segundos, en todo el mundo, una tonelada de hierro se consume por la corrosión y de cada dos
                toneladas de hierro producido, una es para reemplazar el corroído. Al proteger una tonelada de hierro contra
                la corrosión por galvanización en caliente, se ahorra suficiente energía para satisfacer las necesidades de
                una familia mediana durante varias semanas.
              </p>
              <p>
                El galvanizado por inmersión en caliente representa el uso más eficiente de zinc para proteger el hierro y
                el acero durante largos períodos, lo que significa un ahorro de recursos con un impacto mínimo en el medio ambiente.
                El zinc, el elemento natural responsable de la resistencia a la corrosión, es esencial para los seres humanos,
                animales y plantas.
              </p>
            </div>

            {/* Tablas de Información de Corrosión */}
            <div className="mt-12 space-y-8">
              {/* Tabla de Galvanizado en frío */}
              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary p-4">
                  <h3 className="text-sm font-medium text-background">
                    Galvanizado en frío o zincado por electrodeposición de zinc
                  </h3>
                </div>
                <div className="p-4 overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Categoría</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Velocidad</th>
                      </tr>
                    </thead>
                    <tbody className="bg-background divide-y divide-gray-200">
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
                  <p className="text-xs mt-4 text-gray-600">Nota: Recomendado para uso en interiores</p>
                </div>
              </div>

              {/* Tabla de Galvanización en caliente */}
              <div className="bg-background rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary p-4">
                  <h3 className="text-sm font-medium text-background">Galvanización por inmersión en caliente</h3>
                </div>
                <div className="p-4 overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Categoría</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Ambiente</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Riesgo</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Velocidad</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Vida útil</th>
                      </tr>
                    </thead>
                    <tbody className="bg-background divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">1</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Interior: Seco</td>
                        <td className="px-6 py-4 text-sm text-primary font-medium">Muy bajo</td>
                        <td className="px-6 py-4 text-sm text-gray-700">≤ 0.1 micras/año</td>
                        <td className="px-6 py-4 text-sm text-primary font-medium">Más de 100 años</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">2</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Interior: Condensación ocasional<br />Exterior: Rural al interior del país</td>
                        <td className="px-6 py-4 text-sm text-primary font-medium">Bajo</td>
                        <td className="px-6 py-4 text-sm text-gray-700">0,1 a 0,7 micras/año</td>
                        <td className="px-6 py-4 text-sm text-primary font-medium">Más de 100 años</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">3</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Interior: Humedad elevada<br />Exterior: Urbano o costero de baja salinidad</td>
                        <td className="px-6 py-4 text-sm text-primary font-medium">Medio</td>
                        <td className="px-6 py-4 text-sm text-gray-700">0,7 a 2 micras/año</td>
                        <td className="px-6 py-4 text-sm text-primary font-medium">Entre 40 y 100 años</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">4</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Interior: Piscinas, plantas químicas<br />Exterior: Industrial o urbano costero</td>
                        <td className="px-6 py-4 text-sm text-primary font-medium">Elevado</td>
                        <td className="px-6 py-4 text-sm text-gray-700">2 a 4 micras/año</td>
                        <td className="px-6 py-4 text-sm text-primary font-medium">Entre 20 y 40 años</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">5</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Exterior: Industrial muy húmedo o costero de elevada salinidad</td>
                        <td className="px-6 py-4 text-sm text-primary font-medium">Muy elevado</td>
                        <td className="px-6 py-4 text-sm text-gray-700">4 a 8 micras/año</td>
                        <td className="px-6 py-4 text-sm text-primary font-medium">Entre 10 y 20 años</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs mt-4 text-gray-600">Nota: Recomendado para uso en exteriores a la intemperie</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proceso de Galvanizado */}
        <section className="max-w-6xl mx-auto my-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-light text-primary mb-8">Proceso de Galvanización</h2>
            <p className="text-lg text-gray-700 mb-8">
              Galvanizar representa el uso más eficiente de zinc para proteger el hierro y el acero durante largos periodos.
              Su proceso de recubrimiento consiste en sumergir las estructuras o piezas de hierro o de acero en un crisol
              o cuba con zinc fundido a temperatura de 450°C.
            </p>

            {/* Imagen del proceso */}
            <div className="relative mt-12 mb-8 bg-white rounded-lg p-4 shadow-sm">
              <Image
                src="/images/a1.jpg"
                alt="Proceso de galvanizado"
                width={1200}
                height={300}
                className="w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Características Principales */}
        <section className="max-w-6xl mx-auto my-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Protección Catódica",
                description: "El zinc, al ser más electronegativo que el acero, sufre de corrosión preferencial y es sacrificado para protegerlo, ofreciendo una protección catódica efectiva."
              },
              {
                icon: <Leaf className="w-8 h-8 text-primary" />,
                title: "Sostenibilidad",
                description: "Se ha producido una importante reducción de la contaminación atmosférica, especialmente en dióxido de azufre, permitiendo una mayor duración de la protección."
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "Durabilidad",
                description: "En ambientes C4 puede durar de 42 a 84 años y en C5 de 18 a 37 años sin mantenimiento, dependiendo de las condiciones específicas."
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

        {/* Comparativa Económica */}
        <section className="max-w-6xl mx-auto my-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-light text-primary mb-8">Ventajas Económicas</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">VIGAS IP 200</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">GALVANIZADO En caliente</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">PINTURA</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Costo protección inicial (Kg)</td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">$850*</td>
                    <td className="px-6 py-4 text-sm text-gray-700">$1.000*</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Duración protección</td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">Hasta más de 30 años</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Ocho años</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Mantenimiento</td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">No necesita</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Al noveno año y cada dos años sucesivos</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700">Tiempo de aplicación en días aproximadamente</td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">2 días</td>
                    <td className="px-6 py-4 text-sm text-gray-700">7 días</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
