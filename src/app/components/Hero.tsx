'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contenido de texto - Lado izquierdo */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-blue-400 leading-tight">
              Lucas Dev
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Donde la creatividad se encuentra con la tecnología. Desarrollador full-stack que crea experiencias digitales elegantes que inspiran y elevan tu presencia en línea.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#work"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                Ver mi trabajo
              </Link>
              
              <Link 
                href="#about"
                className="text-white hover:text-blue-400 font-medium transition-colors inline-flex items-center group"
              >
                Conoce más
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Ilustración 3D - Lado derecho */}
          <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Fondo del "libro" */}
              <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-2xl transform rotate-3">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg"></div>
              </div>
              
              {/* Marcador de página */}
              <div className="absolute -bottom-2 -right-4 w-8 h-16 bg-blue-500 rounded-t-lg shadow-lg"></div>
              
              {/* Herramientas de diseño */}
              <div className="absolute top-8 left-8 space-y-4">
                {/* Triángulo naranja */}
                <div className="w-8 h-8 bg-orange-500 rounded-sm transform rotate-45"></div>
                
                {/* Círculo rojo */}
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                
                {/* Pluma */}
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-6 bg-purple-600 rounded-sm"></div>
                  <div className="w-2 h-4 bg-white rounded-sm"></div>
                </div>
                
                {/* Texto */}
                <div className="w-8 h-8 bg-green-500 rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
              </div>
              
              {/* Herramientas de color */}
              <div className="absolute top-8 right-8 space-y-4">
                {/* Barra de herramientas */}
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                {/* Gradientes */}
                <div className="space-y-2">
                  <div className="w-8 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-sm"></div>
                  <div className="w-8 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-sm"></div>
                </div>
                
                {/* Rueda de colores */}
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Elementos centrales */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Cuadrados y círculos conectados */}
                  <div className="absolute -top-4 -left-4 w-3 h-3 bg-blue-400 rounded-sm"></div>
                  <div className="absolute -top-4 -right-4 w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-blue-400 rounded-sm"></div>
                  
                  {/* Líneas de conexión */}
                  <div className="absolute top-0 left-0 w-8 h-0.5 bg-blue-400 transform rotate-45 origin-left"></div>
                  <div className="absolute top-0 right-0 w-8 h-0.5 bg-blue-400 transform -rotate-45 origin-right"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-400 transform -rotate-45 origin-left"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-0.5 bg-blue-400 transform rotate-45 origin-right"></div>
                  
                  {/* Pluma central */}
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-2 h-3 bg-gray-800 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 