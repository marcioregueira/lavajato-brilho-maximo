import React from 'react';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';
import { Reveal } from './ui/Reveal';

const plans: PricingPlan[] = [
  {
    id: 1,
    name: 'Básico',
    price: '50',
    features: ['Lavagem Externa', 'Aspiração Interna', 'Pretinho nos Pneus', 'Cera Líquida'],
    isPopular: false,
  },
  {
    id: 2,
    name: 'Premium',
    price: '120',
    features: ['Tudo do Básico', 'Higienização de Bancos', 'Limpeza Técnica de Motor', 'Cera em Pasta'],
    isPopular: true,
  },
  {
    id: 3,
    name: 'Deluxe',
    price: '350',
    features: ['Tudo do Premium', 'Polimento Técnico', 'Vitrificação de Plásticos', 'Oxi-Sanitização'],
    isPopular: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-primary-dark relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-2">Investimento</h2>
            <h3 className="text-4xl font-heading font-bold text-white">
              Planos e Preços
            </h3>
            <p className="text-blue-200 mt-4">Escolha o melhor pacote para a sua necessidade</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.1} className="h-full">
              <div
                className={`relative flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 ${
                  plan.isPopular ? 'shadow-2xl shadow-accent/20 ring-4 ring-accent scale-105 z-10' : 'shadow-xl opacity-95 hover:opacity-100'
                }`}
              >
                {plan.isPopular && (
                  <div className="bg-accent text-white text-xs font-bold uppercase py-1 px-4 absolute top-0 right-0 rounded-bl-xl">
                    Mais Popular
                  </div>
                )}
                
                <div className="p-8 text-center border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-600 mb-2">{plan.name}</h4>
                  <div className="flex items-center justify-center text-gray-900">
                    <span className="text-xl font-medium mt-1">R$</span>
                    <span className="text-5xl font-extrabold">{plan.price}</span>
                    <span className="text-gray-400 text-sm ml-1">/visita</span>
                  </div>
                </div>

                <div className="p-8 flex-1">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600">
                        <div className="bg-green-100 p-1 rounded-full">
                           <Check size={16} className="text-green-600" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0 mt-auto">
                  <a
                    href={`https://wa.me/5511999999999?text=Olá, gostaria de agendar o plano ${plan.name}`}
                    className={`block w-full py-3 px-6 rounded-lg font-bold text-center transition-colors ${
                      plan.isPopular
                        ? 'bg-primary text-white hover:bg-primary-dark'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    Escolher Plano
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};