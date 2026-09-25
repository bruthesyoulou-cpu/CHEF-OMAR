'use client';

import React, { useState } from 'react';
import { Sparkles, RotateCw, Box, Eye } from 'lucide-react';

export default function Viewer360() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [activeView, setActiveView] = useState<'360' | 'vr'>('360');

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    setRotation((prev) => (prev + delta * 0.5) % 360);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="relative w-full h-96 rounded-3xl overflow-hidden glass-miroir border border-white/10 select-none">
      {/* Header Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur border border-white/10 text-xs font-semibold text-amber-400">
        <Sparkles className="w-4 h-4" /> Vue Interactive 360° Noir Miroir
      </div>

      {/* Conteneur d'inspection 3D/360° */}
      <div 
        className="w-full h-full flex flex-col items-center justify-center cursor-grab active:cursor-grabbing bg-gradient-to-b from-slate-900/50 to-slate-950/80"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div 
          className="relative w-48 h-48 rounded-full border-2 border-amber-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.15)] transition-transform duration-75"
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-amber-500 via-amber-200 to-amber-700 flex flex-col items-center justify-center text-slate-950 font-black tracking-widest text-lg shadow-inner">
            <span>CHEF OMAR</span>
            <span className="text-[10px] font-bold tracking-normal opacity-80">SIGNATURE</span>
          </div>

          <div className="absolute -bottom-4 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-[10px] text-amber-400 font-mono">
            {Math.round((rotation + 360) % 360)}°
          </div>
        </div>
      </div>

      {/* Contrôles de bascule */}
      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-gray-400 bg-slate-900/80 backdrop-blur p-3 rounded-2xl border border-white/10">
        <span className="flex items-center gap-2">
          <RotateCw className="w-4 h-4 text-amber-400 animate-spin" /> 
          Glissez pour tourner à 360°
        </span>

        <div className="flex gap-2">
          <button 
            onClick={() => setActiveView('360')}
            className={`px-3 py-1 rounded-xl text-xs flex items-center gap-1 transition-colors ${activeView === '360' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
          >
            <Eye className="w-3.5 h-3.5" /> Vue 360°
          </button>
          <button 
            onClick={() => setActiveView('vr')}
            className={`px-3 py-1 rounded-xl text-xs flex items-center gap-1 transition-colors ${activeView === 'vr' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
          >
            <Box className="w-3.5 h-3.5" /> Mode Casque VR
          </button>
        </div>
      </div>
    </div>
  );
}