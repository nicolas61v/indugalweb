// components/carousel.tsx
"use client";

import { ChevronLeft, ChevronRight, Shield, Clock, Award, Leaf } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface CompanySection {
  logo: string;
  stats: Stat[];
  description: string;
}

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const companies: CompanySection[] = [
    {
      logo: "/logos/indugal-logo.png",
      stats: [
        { value: "20+", label: "Años de Experiencia", icon: <Clock className="w-6 h-6 text-primary mb-2" /> },
        { value: "100%", label: "Garantía de Calidad", icon: <Shield className="w-6 h-6 text-primary mb-2" /> }
      ],
      description: "Especialistas en galvanización por inmersión en caliente"
    },
    {
      logo: "/logos/logo-galvanizados.png",
      stats: [
        { value: "ISO", label: "Certificación 9001", icon: <Award className="w-6 h-6 text-primary mb-2" /> },
        { value: "ECO", label: "Compromiso Verde", icon: <Leaf className="w-6 h-6 text-primary mb-2" /> }
      ],
      description: "Soluciones de protección contra la corrosión"
    }
  ];

  const slides = [
    {
      bgImg: "/images/p1.jpg",
      title: "Excelencia en Galvanizado"
    },
    {
      bgImg: "/images/p2.jpg",
      title: "Tecnología de Punta"
    },
    {
      bgImg: "/images/p3.jpg",
      title: "Compromiso con la Calidad"
    }
  ];

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      if (!isAnimating) {
        handleNextSlide();
      }
    }, 5000);

    return () => clearInterval(autoSlideInterval);
  }, [currentSlide, isAnimating]);

  const handleSlideChange = (newSlide: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(newSlide);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNextSlide = () => {
    handleSlideChange((currentSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-[600px] relative overflow-hidden">
      <div 
        className="flex w-full h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full relative">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-50 transition-all duration-500"
              style={{ backgroundImage: `url(${slide.bgImg})` }}
            />
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Contenedor principal */}
            <div className="relative flex flex-col items-center justify-center h-full z-10">
              <h2 className="text-white text-4xl font-bold mb-8">{slide.title}</h2>
              
              <div className="w-[90%] max-w-6xl h-auto bg-white/95 rounded-lg shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {companies.map((company, idx) => (
                    <div key={idx} className="flex flex-col items-center space-y-6 p-6">
                      {/* Logo */}
                      <div className="relative w-48 h-16">
                        <Image
                          alt={`Logo ${idx + 1}`}
                          src={company.logo}
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>

                      {/* Descripción */}
                      <p className="text-gray-600 text-center font-medium">
                        {company.description}
                      </p>

                      {/* Estadísticas */}
                      <div className="grid grid-cols-2 gap-6 w-full mt-4">
                        {company.stats.map((stat, statIdx) => (
                          <div key={statIdx} className="flex flex-col items-center text-center">
                            {stat.icon}
                            <div className="text-primary text-2xl font-bold">
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-600">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <button
        onClick={handlePrevSlide}
        disabled={isAnimating}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white backdrop-blur-sm
                 transition-all duration-300 hover:bg-white/20 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={handleNextSlide}
        disabled={isAnimating}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white backdrop-blur-sm
                 transition-all duration-300 hover:bg-white/20 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicadores de slide */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            disabled={isAnimating}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${currentSlide === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;