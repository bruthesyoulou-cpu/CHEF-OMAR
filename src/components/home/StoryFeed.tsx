'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const STORIES = [
  { id: 1, title: 'Thieboudienne Royale', duration: '30s', tag: 'Spécialité' },
  { id: 2, title: 'Coulisses Cuisine', duration: '45s', tag: 'Direct' },
  { id: 3, title: 'Dressage Yassa', duration: '20s', tag: 'Tuto' },
  { id: 4, title: 'Pastels de Poisson', duration: '35s', tag: 'Entrée' },
  { id: 5, title: 'Jus de Bissap Artisan', duration: '25s', tag: 'Boisson' },
];

export default function StoryFeed() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Statuts & Stories du Chef</h2>
          <p className="text-xs md:text-sm text-gray-400">Aperçus exclusifs et coulisses (20s - 1min)</p>
        </div>

        {/* Contrôles du carrousel */}
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-xl glass-miroir hover:border-amber-500/50 transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5 text-gray-300" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-xl glass-miroir hover:border-amber-500/50 transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5 text-gray-300" />
          </button>
        </div>
      </div>

      {/* Track du carrousel horizontal */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar py-2 scroll-smooth"
      >
        {STORIES.map((story) => (
          <div 
            key={story.id}
            className="flex-shrink-0 w-36 h-60 md:w-44 md:h-72 rounded-2xl glass-miroir relative overflow-hidden group cursor-pointer border border-white/10 hover:border-amber-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
            
            <div className="absolute top-3 left-3 z-20 px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-[10px] font-semibold text-amber-400">
              {story.tag}
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
              <div className="w-10 h-10 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center pl-0.5 shadow-lg">
                <Play className="w-5 h-5 fill-current" />
              </div>
            </div>

            <div className="absolute bottom-3 left-3 right-3 z-20">
              <p className="text-xs font-bold text-white line-clamp-1">{story.title}</p>
              <p className="text-[10px] text-gray-400">{story.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}