'use client';

import React, { useState } from 'react';
import { REELS_DATA, ReelItem } from '@/data/mediaData';
import { Heart, Share2, Play, Flame, ChefHat } from 'lucide-react';

export default function ReelsSection() {
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);
  const [likes, setLikes] = useState<Record<string, number>>(
    REELS_DATA.reduce((acc, reel) => ({ ...acc, [reel.id]: reel.likes }), {})
  );

  const handleLike = (id: string) => {
    setLikes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  return (
    <section className="space-y-6 my-12">
      <div>
        <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <ChefHat className="w-6 h-6 text-[var(--color-accent)]" />
          Les Menus en Vidéo & Réels (20s - 30s)
        </h2>
        <p className="text-sm text-gray-400">
          Découvrez la préparation et le dressage de nos spécialités signature.
        </p>
      </div>

      {/* Grille de cartes Réels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REELS_DATA.map((reel) => (
          <div
            key={reel.id}
            className="rounded-2xl glass-miroir overflow-hidden border border-white/10 group flex flex-col justify-between"
          >
            {/* Conteneur Vidéo / Miniature */}
            <div className="relative aspect-[9/16] bg-black overflow-hidden">
              <video
                src={reel.reelUrl}
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-between p-4">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-white text-[10px] font-bold uppercase tracking-wider">
                    {reel.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-mono">
                    {reel.duration}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-white leading-snug">{reel.title}</h3>
                  <p className="text-xs text-gray-300 line-clamp-2">{reel.description}</p>
                  
                  {/* Tags Ingrédients */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {reel.ingredients.map((ing, i) => (
                      <span key={i} className="text-[9px] px-2 py-0.5 rounded-full bg-white/10 text-gray-200">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Barre d'action bas */}
            <div className="p-4 flex items-center justify-between bg-black/40">
              <span className="font-extrabold text-base text-amber-400">{reel.price}</span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleLike(reel.id)}
                  className="flex items-center gap-1 text-xs text-gray-300 hover:text-red-500 transition-colors"
                >
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  {likes[reel.id]}
                </button>

                <button
                  onClick={() => setSelectedReel(reel)}
                  className="px-3 py-1.5 rounded-lg bg-[var(--color-accent)] text-white text-xs font-semibold flex items-center gap-1 shadow-md hover:opacity-90"
                >
                  <Play className="w-3.5 h-3.5 fill-white" /> Voir Reel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal d'affichage du Reel complet */}
      {selectedReel && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-md h-[85vh] rounded-3xl overflow-hidden bg-black border border-white/20 flex flex-col justify-between shadow-2xl">
            <button
              onClick={() => setSelectedReel(null)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 text-white hover:bg-black/80"
            >
              ✕
            </button>

            <video
              src={selectedReel.reelUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}