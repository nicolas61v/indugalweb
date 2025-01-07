// components/GalvanizadoCarousel.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Clock, Award, Leaf, Zap, Factory } from 'lucide-react';
import Image from 'next/image';

const GalvanizadoCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const companyInfo = [
    {
      logo: "/logos/indugal-logo.png",
      stats: [
        { value: "20+", label: "Años de Experiencia" },
        { value: "100%", label: "Garantía de Calidad" }
      ]
    },
    {
      logo: "/logos/logo-galvanizados.png",
      stats: [
        { value: "ISO", label: "Certificación 9001" },
        { value: "ECO", label: "Compromiso Verde" }
      ]
    }
  ];

  const slides = [
    {
      bgImg: "/images/galvanizado-proceso.jpg",
      title: "Proceso de Inmersión en Caliente",
      subtitle: "Tecnología Avanzada de Galvanización",
      content: {
        mainText: "Proceso de recubrimiento a 450°C",
        stats: [
          { 
            icon: <Factory className="w-8 h-8 text-primary" />,
            value: "450°C",
            label: "Temperatura de Inmersión"
          },
          {
            icon: <Shield className="w-8 h-8 text-primary" />,
            value: "100+",
            label: "Años de Protección"
          }
        ],
        description: "Galvanización por inmersión en caliente, el proceso más eficiente para proteger el hierro y el acero."
      }
    },

    {
      bgImg: "/images/proteccion-catodica.jpg",
      title: "Protección Catódica Superior",
      subtitle: "Tecnología de Protección Avanzada",
      company: "galvanizados",
      content: {
        mainText: "Protección Dúplex",
        stats: [
          {
            icon: <Zap className="w-8 h-8 text-primary" />,
            value: "42-84",
            label: "Años en Ambiente C4"
          },
          {
            icon: <Shield className="w-8 h-8 text-primary" />,
            value: "18-37",
            label: "Años en Ambiente C5"
          }
        ],
        description: "El zinc actúa como ánodo de sacrificio, protegiendo el acero de la corrosión de manera activa."
      }
    },
    {
      bgImg: "/images/sostenibilidad.jpg",
      title: "Compromiso Ambiental",
      subtitle: "Sostenibilidad y Eficiencia",
      company: "indugal",
      content: {
        mainText: "Proceso Ecológico",
        stats: [
          {
            icon: <Leaf className="w-8 h-8 text-primary" />,
            value: "4%",
            label: "Ahorro en PIB"
          },
          {
            icon: <Clock className="w-8 h-8 text-primary" />,
            value: "30+",
            label: "Años sin Mantenimiento"
          }
        ],
        description: "Reducción significativa de la contaminación atmosférica y mayor duración de la protección."
      }
    }
  ];

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      if (!isAnimating) {
        handleNextSlide();
      }
    }, 7000);

    return () => clearInterval(autoSlideInterval);
  }, [currentSlide, isAnimating]);

  const handleSlideChange = (newSlide: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(newSlide);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handleNextSlide = () => {
    handleSlideChange((currentSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-[700px] relative overflow-hidden bg-gray-900">
      {/* Barra superior fija con logos */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-8 py-4">
            {companyInfo.map((company, index) => (
              <div key={index} className="relative w-72 h-24 bg-white rounded-lg p-2">
                <Image
                  src={company.logo}
                  alt={`Logo corporativo ${index + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div 
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full relative">
            {/* Fondo con efecto parallax */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-700"
              style={{ 
                backgroundImage: `url(${slide.bgImg})`,
                transform: isAnimating ? 'scale(1.05)' : 'scale(1)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
            
            {/* Contenido del slide */}
            <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
              <div className="text-center mb-8 space-y-4">
                <h3 className="text-white/80 text-xl font-light tracking-wide">
                  {slide.subtitle}
                </h3>
                <h2 className="text-white text-5xl font-bold tracking-tight">
                  {slide.title}
                </h2>
              </div>

              <div className="w-full max-w-4xl">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 transform transition-all duration-500">
                  <div className="text-center mb-6">
                    <h4 className="text-primary text-2xl font-semibold mb-4">
                      {slide.content.mainText}
                    </h4>
                    <p className="text-gray-600 text-lg">
                      {slide.content.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 mt-8">
                    {slide.content.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          {stat.icon}
                        </div>
                        <div className="text-left">
                          <div className="text-primary text-3xl font-bold">
                            {stat.value}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white backdrop-blur-md
                 transition-all duration-300 hover:bg-white/20 hover:scale-105 disabled:opacity-50
                 border border-white/20 hover:border-white/40"
        disabled={isAnimating}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 text-white backdrop-blur-md
                 transition-all duration-300 hover:bg-white/20 hover:scale-105 disabled:opacity-50
                 border border-white/20 hover:border-white/40"
        disabled={isAnimating}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicadores de slide */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            disabled={isAnimating}
            className={`w-3 h-3 rounded-full transition-all duration-500 
              ${currentSlide === index 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/30 hover:bg-white/50'}
              transform hover:scale-110`}
          />
        ))}
      </div>
    </div>
  );
};

export default GalvanizadoCarousel;