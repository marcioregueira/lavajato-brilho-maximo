import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Carro brilhando"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-blue-900/70"></div>
        {/* Geometric Shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 transform translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <div className="max-w-3xl">
          <Reveal direction="down" delay={0.1}>
             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-accent mb-6 border border-accent/20">
               <Star size={16} fill="currentColor" />
               <span className="text-sm font-semibold uppercase tracking-wider text-white">Qualidade Premium Garantida</span>
             </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight mb-6">
              Seu carro merece <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-accent">
                Brilho Máximo
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
              Transformamos seu veículo com a melhor tecnologia de lavagem, polimento e higienização. Cuidado profissional para quem ama seu carro.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-accent/30"
              >
                Agendar Lavagem <ArrowRight size={20} />
              </a>
              <a
                href="https://wa.me/5511999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};