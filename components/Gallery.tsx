import React from 'react';
import { GalleryItem } from '../types';
import { Reveal } from './ui/Reveal';

const galleryItems: GalleryItem[] = [
  { 
    id: 1, 
    imageUrl: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', 
    alt: 'Aplicação de Snow Foam', 
    category: 'Processo de Lavagem' 
  },
  { 
    id: 2, 
    imageUrl: 'https://images.unsplash.com/photo-1600661653561-629509216228?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', 
    alt: 'Lavagem de Rodas', 
    category: 'Detalhamento' 
  },
  { 
    id: 3, 
    imageUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', 
    alt: 'Lavagem Detalhada', 
    category: 'Processo Manual' 
  },
  { 
    id: 4, 
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', 
    alt: 'Interior Higienizado', 
    category: 'Resultado Interno' 
  },
  { 
    id: 5, 
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', 
    alt: 'Proteção de Pintura', 
    category: 'Resultado Final' 
  },
  { 
    id: 6, 
    imageUrl: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', 
    alt: 'Vitrificação Concluída', 
    category: 'Acabamento Premium' 
  },
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-2">Portfolio</h2>
            <h3 className="text-4xl font-heading font-bold text-gray-900">
              Resultados Reais
            </h3>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Confira a transformação que realizamos diariamente. Do processo cuidadoso de lavagem ao brilho final incomparável.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1} direction="up">
              <div className="group relative overflow-hidden rounded-xl shadow-md h-64 cursor-pointer">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-accent text-sm font-bold uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.category}
                  </span>
                  <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {item.alt}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};