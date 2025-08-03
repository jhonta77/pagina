import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, BarChart3, Smartphone, Brain, MessageSquare } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'automatizacion',
      icon: Zap,
      title: 'Automatización',
      subtitle: 'Automatiza Procesos, Incrementa la Eficiencia',
      description: 'Eliminamos tareas repetitivas y reducimos errores humanos utilizando herramientas líderes como:',
      tools: ['n8n y Make: para automatizaciones rápidas y personalizadas', 'Google ADK: Automatizaciones robustas integradas'],
      example: 'Imagina que cada vez que un cliente te contacte por correo electrónico, la información se agregue automáticamente a tu sistema CRM, generando alertas automáticas para tu equipo. Todo esto sin intervención manual.',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      id: 'analisis',
      icon: BarChart3,
      title: 'Análisis Profesional de Dados',
      subtitle: 'Decisiones Basadas en Datos Reales',
      description: 'Recopilamos y analizamos los datos de tu empresa para brindarte claridad y control:',
      tools: ['Juntas explicativas con análisis fáciles de entender', 'Dashboards interactivos y personalizados'],
      example: 'Podrás conocer en tiempo real qué productos tienen mayor rotación, identificar rápidamente tus clientes más valiosos y tomar decisiones informadas basadas en datos claros y actualizados.',
      gradient: 'from-green-600 to-green-700'
    },
    {
      id: 'aplicativos',
      icon: Smartphone,
      title: 'Aplicativos Personalizados',
      subtitle: 'Herramientas Hechas a la Medida',
      description: 'Desarrollamos aplicaciones internas adaptadas específicamente a los flujos de trabajo de tu empresa para:',
      tools: ['Gestión eficiente de tareas', 'Comunicación interna simplificada', 'Registro y almacenamiento seguro'],
      example: 'Aplicaciones que se adaptan perfectamente a tus procesos únicos, mejorando la productividad y facilitando el trabajo de tu equipo.',
      gradient: 'from-purple-600 to-purple-700'
    },
    {
      id: 'ia',
      icon: Brain,
      title: 'Inteligencia Artificial',
      subtitle: 'Inteligencia Artificial al Servicio de tu Negocio',
      description: 'Utilizamos redes neuronales avanzadas para:',
      tools: ['Predecir tendencias de mercado', 'Clasificar automáticamente productos y clientes'],
      example: 'Si tienes un inventario amplio, nuestro sistema automáticamente categoriza tus productos en función del rendimiento histórico, permitiéndote planificar mejor tus estrategias comerciales.',
      gradient: 'from-indigo-600 to-indigo-700'
    },
    {
      id: 'crm',
      icon: MessageSquare,
      title: 'Integración CRM',
      subtitle: 'Todas tus Comunicaciones en un Solo Lugar',
      description: 'Integramos tu CRM con herramientas de comunicación como correos, WhatsApp y redes sociales:',
      tools: ['Centraliza todas las interacciones', 'Mejora la respuesta y atención al cliente'],
      example: 'Si un cliente escribe por WhatsApp, automáticamente se crea una ficha en tu CRM y se asigna un representante de ventas para atenderlo de inmediato.',
      gradient: 'from-teal-600 to-teal-700'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones tecnológicas integrales diseñadas para transformar y optimizar tu negocio
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <React.Fragment key={service.id}>
              <div id={service.id} className="scroll-mt-20">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-lg text-blue-600 font-medium">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700">{service.description}</p>

                    <ul className="space-y-3">
                      {service.tools.map((tool, toolIndex) => (
                        <li key={toolIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{tool}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl border-l-4 border-blue-500">
                      <h4 className="font-semibold text-gray-900 mb-2">Ejemplo:</h4>
                      <p className="text-gray-700 italic">"{service.example}"</p>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 max-w-md">
                    <Link to="/servicios/automatizacion">
                      <div className={`bg-gradient-to-br ${service.gradient} rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center">
                          <service.icon className="w-20 h-20 text-white mx-auto mb-4" />
                          <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
                          <p className="text-white/90">Solución profesional adaptada a tu negocio</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {index === 2 && (
                <div className="my-20">
                  
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;