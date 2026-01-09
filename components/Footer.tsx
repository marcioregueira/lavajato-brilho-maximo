import React from 'react';
import { Car, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-full bg-primary text-white">
                <Car size={24} />
              </div>
              <span className="text-xl font-heading font-bold uppercase tracking-wider">
                Brilho<span className="text-accent">Máximo</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em fazer seu carro brilhar como novo. Utilizamos produtos de alta performance e técnicas avançadas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-accent transition-colors">Início</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-accent transition-colors">Preços</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-accent transition-colors">Galeria</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Horário</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span>Seg - Sex:</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>09:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Lava Jato Brilho Máximo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};