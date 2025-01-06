// app/nosotros/page.tsx
import { Shield, Target, Heart, Zap, Wrench, Award, Beaker, Factory, Ruler } from 'lucide-react';

export default function NosotrosPage() {
  return (
    <main className="container mx-auto px-4 py-12 mb-16">
      {/* Hero Section con patrón industrial */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-primary rounded-2xl mb-16 p-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l9.9-9.9h-2.83zM32 0l-3.486 3.485-1.414-1.414L30.586 0H32zM0 0c2.116 0 4.1.562 5.8 1.54L5.2 2.55C3.684 1.76 2.148 1.33 0 1.33V0zm0 8.44c3.133 0 6.1.89 8.6 2.42L8 11.47C5.684 10.13 3.148 9.33 0 9.33v-.89zm0 8.44c3.133 0 6.1.89 8.6 2.42L8 19.91c-2.316-1.34-4.852-2.14-8-2.14v-.89zm0 8.44c3.133 0 6.1.89 8.6 2.42L8 28.35c-2.316-1.34-4.852-2.14-8-2.14v-.89zm0 8.44c3.133 0 6.1.89 8.6 2.42L8 36.79c-2.316-1.34-4.852-2.14-8-2.14v-.89zm0 8.44c3.133 0 6.1.89 8.6 2.42L8 45.23c-2.316-1.34-4.852-2.14-8-2.14v-.89zm0 8.44c3.133 0 6.1.89 8.6 2.42L8 53.67C5.684 52.33 3.148 51.53 0 51.53v-.89zm0 8.44c2.116 0 4.1.562 5.8 1.54L5.2 60C3.684 59.21 2.148 58.78 0 58.78v-.89zm60 0v.89c-2.148 0-3.684.43-5.2 1.22L54.2 59.5c1.7-.978 3.684-1.54 5.8-1.54zm0-8.44v.89c-3.148 0-4.852.8-7.2 2.14l-.6-.6c2.5-1.53 5.467-2.42 8.6-2.42zm0-8.44v.89c-3.148 0-4.852.8-7.2 2.14l-.6-.6c2.5-1.53 5.467-2.42 8.6-2.42zm0-8.44v.89c-3.148 0-4.852.8-7.2 2.14l-.6-.6c2.5-1.53 5.467-2.42 8.6-2.42zm0-8.44v.89c-3.148 0-4.852.8-7.2 2.14l-.6-.6c2.5-1.53 5.467-2.42 8.6-2.42zm0-8.44v.89c-3.148 0-4.852.8-7.2 2.14l-.6-.6c2.5-1.53 5.467-2.42 8.6-2.42zm0-8.44v.89c-3.148 0-4.852.8-7.2 2.14l-.6-.6c2.5-1.53 5.467-2.42 8.6-2.42zm0-8.44v.89c-2.148 0-3.684.43-5.2 1.22L54.2 2.55C55.9 1.572 57.884 1.01 60 1.01V0z\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="relative">
          <h1 className="text-5xl font-bold text-white mb-6">GALVA GROUP</h1>
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <span>Confianza</span>
            <span className="w-2 h-2 bg-white/50 rounded-full"></span>
            <span>Soluciones</span>
            <span className="w-2 h-2 bg-white/50 rounded-full"></span>
            <span>Servicio</span>
          </div>
        </div>
      </section>

      {/* Quiénes Somos con elementos industriales */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Factory className="w-8 h-8 text-primary mr-4" />
          <h2 className="text-3xl font-bold text-primary">Quiénes Somos</h2>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-primary">
          <p className="text-gray-700 leading-relaxed mb-8">
            GALVA GROUP es una Marca Registrada para el Grupo Empresarial, dedicado exclusivamente a la prestación del servicio en procesos y recubrimientos sobre metales, especializado en tecnologías avanzadas de protección superficial.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Beaker className="w-6 h-6 text-primary mr-3" />
                <h3 className="font-semibold text-gray-800">Galvanización en Caliente</h3>
              </div>
              <p className="text-gray-600 text-sm">Inmersión en caliente sobre hierro y acero, garantizando la máxima protección contra la corrosión.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-primary mr-3" />
                <h3 className="font-semibold text-gray-800">Galvanizado en Frío</h3>
              </div>
              <p className="text-gray-600 text-sm">Zincado por electrodeposición, ideal para piezas que requieren acabados precisos.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Wrench className="w-6 h-6 text-primary mr-3" />
                <h3 className="font-semibold text-gray-800">Procesos Especiales</h3>
              </div>
              <p className="text-gray-600 text-sm">Recubrimientos especiales de metales no férricos por electrodeposición.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones y Normas */}
      <section className="mb-16 bg-gray-900 text-white rounded-lg p-8">
        <div className="flex items-center mb-8">
          <Award className="w-8 h-8 mr-4" />
          <h2 className="text-3xl font-bold">Certificaciones y Normas</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-white/5">
            <h3 className="text-xl font-bold mb-3">NTC 3320</h3>
            <p className="text-white/70">Homologada a ASTM A 123</p>
          </div>
          <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-white/5">
            <h3 className="text-xl font-bold mb-3">NTC 2076</h3>
            <p className="text-white/70">Homologada a ASTM A 153</p>
          </div>
          <div className="border border-white/10 rounded-lg p-6 backdrop-blur-sm bg-white/5">
            <h3 className="text-xl font-bold mb-3">NTC 2150</h3>
            <p className="text-white/70">Homologada a ASTM B 633</p>
          </div>
        </div>
      </section>

      {/* Direccionamiento Estratégico con diseño industrial */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Target className="w-8 h-8 text-primary mr-4" />
          <h2 className="text-3xl font-bold text-primary">Direccionamiento Estratégico</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <Ruler className="w-6 h-6 mr-3" />
              Misión
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Enfocados a la excelencia en la prestación del servicio en procesos y recubrimientos sobre metales, aportando soluciones innovadoras y servicio excepcional a todos nuestros clientes del sector industrial – Metalmecánico.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-3" />
              Visión
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Siempre visionando al cambio, la mejora y la diferencia. Comprometidos con la innovación tecnológica y la implementación de procesos productivos sostenibles para crear las mejores soluciones en recubrimientos metálicos.
            </p>
          </div>
        </div>
      </section>

      {/* Valores Corporativos con estilo industrial */}
      <section className="relative">
        <div className="flex items-center mb-8">
          <Shield className="w-8 h-8 text-primary mr-4" />
          <h2 className="text-3xl font-bold text-primary">Valores Corporativos</h2>
        </div>
        
        {/* Patrón de fondo industrial */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l9.9-9.9h-2.83zM32 0l-3.486 3.485-1.414-1.414L30.586 0H32z\' fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            backgroundSize: '30px 30px',
          }} />
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {/* Servicio */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg p-8 border-b-4 border-primary hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary text-center mb-4">Servicio</h3>
            <p className="text-gray-700 text-center">
              Dar confianza, soluciones y satisfacción al cliente superando sus necesidades y expectativas con la mejor actitud y conocimiento técnico en recubrimientos metálicos.
            </p>
          </div>

          {/* Disciplina */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg p-8 border-b-4 border-primary hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Target className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary text-center mb-4">Disciplina</h3>
            <p className="text-gray-700 text-center">
              Filosofía fundamental de nuestra organización que nos permite alcanzar la excelencia en cada proceso y garantizar resultados superiores en cada proyecto.
            </p>
          </div>

          {/* Pasión */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg p-8 border-b-4 border-primary hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Heart className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary text-center mb-4">Pasión</h3>
            <p className="text-gray-700 text-center">
              Motivación constante por la excelencia, sentido de pertenencia y perseverancia en ser líderes en la industria del galvanizado, traduciendo nuestra pasión en satisfacción para nuestros clientes.
            </p>
          </div>
        </div>

        {/* Franja decorativa inferior */}
        <div className="mt-12 bg-gradient-to-r from-primary/20 to-transparent h-1 rounded-full"></div>
      </section>
    </main>
  );
}