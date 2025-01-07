// app/certificaciones/page.tsx
import { Award, CheckCircle, Shield, Building2, Zap, CircuitBoard, Cog, Gauge } from 'lucide-react';
import Image from 'next/image';

export default function CertificacionesPage() {
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
            <p className="text-2xl text-white tracking-wide text-center mb-3">Confianza · Soluciones · Servicio</p>
            <p className="text-xl font-medium text-white/90 tracking-wider text-center">Enfocados a la excelencia</p>
          </div>
        </div>
      </section>

      {/* Contenedor principal */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        {/* Sección de Certificados destacada */}
        <section className="w-full -mt-16 mb-24">
          <div className="bg-primary rounded-xl overflow-hidden shadow-2xl relative">
            {/* Elementos decorativos */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
            </div>
            
            <div className="py-20 px-8 text-center relative">
              <div className="bg-white/10 rounded-full p-8 w-32 h-32 mx-auto mb-10 flex items-center justify-center backdrop-blur-sm">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-4xl font-light text-white mb-4 tracking-wide">
                Sistema Integrado de Gestión
              </h2>
              <p className="text-2xl text-white/90 tracking-wider mb-8">ISO 9001:2015</p>
              <div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>

          {/* Contenido Principal */}
          <div className="bg-white rounded-lg shadow-xl p-8 lg:p-12 mt-12">
            {/* Mensaje a Clientes */}
            <div className="mb-16 max-w-4xl mx-auto">
              <h3 className="text-2xl font-light text-primary mb-8 flex items-center">
                <CircuitBoard className="w-8 h-8 mr-4 text-primary" />
                Apreciados clientes
              </h3>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Tenemos el agrado de comunicarles y compartir con ustedes, nuestra razón de ser, 
                  el logro obtenido de la certificación de nuestro sistema de gestión de calidad bajo 
                  la norma ISO 9001:2015; certificado otorgado por la entidad certificadora Bureau Veritas 
                  Colombia y acreditada por la ONAC.
                </p>
                <p>
                  La certificación en ISO 9001:2015 garantiza en nuestros procesos de la cadena de valor, 
                  los estándares nacionales e internacionales evidencian el compromiso de mejora continua 
                  y la participación de una empresa sostenible.
                </p>
                <p>
                  Este logro nos permite construir y mantener la confianza de nuestros clientes, 
                  proveedores y demás partes interesadas.
                </p>
              </div>
            </div>

            {/* Alcance de la Certificación con logos mejorados */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Tarjeta Indugal */}
              <div className="bg-primary rounded-xl p-8 relative overflow-hidden group">
                {/* Decoración industrial */}
                <div className="absolute top-0 right-0 text-white/5 transform translate-x-1/4 -translate-y-1/4">
                  <Cog className="w-48 h-48" />
                </div>
                
                <div className="relative w-full h-48 mb-8 bg-white rounded-lg p-6 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/logos/indugal-logo.png"
                    alt="Indugal"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-white leading-relaxed text-lg relative z-10">
                  Servicios de galvanización por inmersión en caliente y procesos especiales sobre metales.
                </p>
              </div>

              {/* Tarjeta Galvanizados */}
              <div className="bg-primary rounded-xl p-8 relative overflow-hidden group">
                {/* Decoración industrial */}
                <div className="absolute top-0 right-0 text-white/5 transform translate-x-1/4 -translate-y-1/4">
                  <Gauge className="w-48 h-48" />
                </div>
                
                <div className="relative w-full h-48 mb-8 bg-white rounded-lg p-6 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/logos/logo-galvanizados.png"
                    alt="Galvanizados"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-white leading-relaxed text-lg relative z-10">
                  Servicios de galvanizado en frío y recubrimientos especiales por electrodeposición.
                </p>
              </div>
            </div>

            {/* Beneficios con diseño industrial */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-10 h-10 text-primary" />,
                  title: "Calidad Integral",
                  description: "Procesos certificados bajo estándares internacionales que garantizan la excelencia."
                },
                {
                  icon: <Zap className="w-10 h-10 text-primary" />,
                  title: "Excelencia Operativa",
                  description: "Compromiso con la innovación y mejora continua en todos nuestros procesos."
                },
                {
                  icon: <Building2 className="w-10 h-10 text-primary" />,
                  title: "Respaldo Global",
                  description: "Certificación internacional que respalda nuestra calidad y compromiso."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-0 right-0 text-primary/5 transform translate-x-1/4 -translate-y-1/4 group-hover:text-primary/10 transition-colors duration-300">
                    {benefit.icon}
                    <div className="w-32 h-32" />
                  </div>
                  <div className="bg-white rounded-full p-4 w-20 h-20 flex items-center justify-center mb-6 shadow-md">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-medium text-primary mb-4">{benefit.title}</h4>
                  <p className="text-gray-600 text-lg">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}