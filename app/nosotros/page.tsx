// app/nosotros/page.tsx
import { Shield, Target, Heart, Zap, Wrench, Award, Beaker, Factory, Ruler } from 'lucide-react';
import Image from 'next/image';

export default async function NosotrosPage() {
  return (
    <div className="container mx-auto px-4 py-12 mb-16">
      {/* Hero Section with solid background */}
      <section className="relative overflow-hidden bg-[#28338c] rounded mb-16 p-12">
        <div className="relative flex flex-col items-center justify-center">
          <div className="bg-white p-4 rounded-lg mb-6">
            <Image
              src="/logos/galvagroup-logo.png"
              alt="GALVA GROUP"
              width={300}
              height={100}
              className="h-auto"
              priority
            />
          </div>
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <span>Confianza</span>
            <span className="w-2 h-2 bg-white/50 rounded"></span>
            <span>Soluciones</span>
            <span className="w-2 h-2 bg-white/50 rounded"></span>
            <span>Servicio</span>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Factory className="w-8 h-8 text-primary mr-4" />
          <h2 className="text-3xl font-bold text-primary">Quiénes Somos</h2>
        </div>
        <div className="bg-white rounded shadow-lg p-8 border-l-4 border-primary">
          <p className="text-gray-700 leading-relaxed mb-8">
            GALVA GROUP es una Marca Registrada para el Grupo Empresarial, dedicado exclusivamente a la prestación del servicio en procesos y recubrimientos sobre metales, especializado en tecnologías avanzadas de protección superficial.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded border border-gray-200">
              <div className="flex items-center mb-4">
                <Beaker className="w-6 h-6 text-primary mr-3" />
                <h3 className="font-semibold text-gray-800">Galvanización en Caliente</h3>
              </div>
              <p className="text-gray-600 text-sm">Inmersión en caliente sobre hierro y acero, garantizando la máxima protección contra la corrosión.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded border border-gray-200">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-primary mr-3" />
                <h3 className="font-semibold text-gray-800">Galvanizado en Frío</h3>
              </div>
              <p className="text-gray-600 text-sm">Zincado por electrodeposición, ideal para piezas que requieren acabados precisos.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded border border-gray-200">
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
      <section className="mb-16 bg-gray-900 text-white rounded p-8">
        <div className="flex items-center mb-8">
          <Award className="w-8 h-8 mr-4" />
          <h2 className="text-3xl font-bold">Certificaciones y Normas</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-white/10 rounded p-6 backdrop-blur-sm bg-white/5">
            <h3 className="text-xl font-bold mb-3">NTC 3320</h3>
            <p className="text-white/70">Homologada a ASTM A 123</p>
          </div>
          <div className="border border-white/10 rounded p-6 backdrop-blur-sm bg-white/5">
            <h3 className="text-xl font-bold mb-3">NTC 2076</h3>
            <p className="text-white/70">Homologada a ASTM A 153</p>
          </div>
          <div className="border border-white/10 rounded p-6 backdrop-blur-sm bg-white/5">
            <h3 className="text-xl font-bold mb-3">NTC 2150</h3>
            <p className="text-white/70">Homologada a ASTM B 633</p>
          </div>
        </div>
      </section>

      {/* Direccionamiento Estratégico */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Target className="w-8 h-8 text-primary mr-4" />
          <h2 className="text-3xl font-bold text-primary">Direccionamiento Estratégico</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded shadow-lg p-8 border-t-4 border-primary">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <Ruler className="w-6 h-6 mr-3" />
              Misión
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Enfocados a la excelencia en la prestación del servicio en procesos y recubrimientos sobre metales, aportando soluciones innovadoras y servicio excepcional a todos nuestros clientes del sector industrial – Metalmecánico.
            </p>
          </div>
          <div className="bg-white rounded shadow-lg p-8 border-t-4 border-primary">
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

      {/* Valores Corporativos */}
      <section className="relative">
        <div className="flex items-center mb-8">
          <Shield className="w-8 h-8 text-primary mr-4" />
          <h2 className="text-3xl font-bold text-primary">Valores Corporativos</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {/* Servicio */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded shadow-lg p-8 border-b-4 border-primary hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary text-center mb-4">Servicio</h3>
            <p className="text-gray-700 text-center">
              Dar confianza, soluciones y satisfacción al cliente superando sus necesidades y expectativas con la mejor actitud y conocimiento técnico en recubrimientos metálicos.
            </p>
          </div>

          {/* Disciplina */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded shadow-lg p-8 border-b-4 border-primary hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded">
                <Target className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary text-center mb-4">Disciplina</h3>
            <p className="text-gray-700 text-center">
              Filosofía fundamental de nuestra organización que nos permite alcanzar la excelencia en cada proceso y garantizar resultados superiores en cada proyecto.
            </p>
          </div>

          {/* Pasión */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded shadow-lg p-8 border-b-4 border-primary hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded">
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
        <div className="mt-12 bg-gradient-to-r from-primary/20 to-transparent h-1 rounded"></div>
      </section>
    </div>
  );
}