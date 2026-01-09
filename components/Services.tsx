import React from 'react';
import { Droplets, Sparkles, Wind, ShieldCheck } from 'lucide-react';
import { Service } from '../types';
import { Reveal } from './ui/Reveal';

const servicesList: Service[] = [
  {
    id: 1,
    title: 'Lavagem Completa',
    description: 'Lavagem detalhada da carroceria, caixas de roda e secagem com microfibra para evitar riscos.',
    icon: Droplets,
  },
  {
    id: 2,
    title: 'Polimento Técnico',
    description: 'Remoção de riscos superficiais e restauração do brilho original da pintura com produtos premium.',
    icon: Sparkles,
  },
  {
    id: 3,
    title: 'Higienização Interna',
    description: 'Limpeza profunda de estofados, teto, carpetes e painel, eliminando ácaros e odores.',
    icon: Wind,
  },
  {
    id: 4,
    title: 'Proteção Cerâmica',
    description: 'Aplicação de vitrificador que cria uma camada de proteção duradoura contra sol e chuva.',
    icon: ShieldCheck,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <Reveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-2">Nossos Serviços</h2>
            <h3 className="text-4xl font-heading font-bold text-gray-900">
              Cuidado Especializado
            </h3>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1} direction="up">
              <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-accent hover:-translate-y-2 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon size={32} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};