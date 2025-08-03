import React from 'react';
import { ArrowRight, Users, Cog, Database, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const teamMembers = [
    { icon: Cog, title: 'Arquitecto de Soluciones', description: 'Diseña el plan tecnológico personalizado' },
    { icon: Brain, title: 'Ingeniero de Prompts', description: 'Optimiza interacciones con IA' },
    { icon: Database, title: 'Ingeniero Backend', description: 'Sistemas sólidos y seguros' },
    { icon: Users, title: 'Especialistas Adicionales', description: 'Según necesidades del negocio' },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Transforma tu Empresa con{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Tecnología Integral
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
            Somos tu aliado estratégico en tecnología, ofreciéndote un equipo completo sin la carga 
            administrativa y económica de crear un departamento interno.
          </p>

          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full text-lg hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Comenzar Ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Team showcase */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <member.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{member.title}</h3>
              <p className="text-blue-100 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;