'use client';

import React from 'react';
import { useTheme, ACCENT_COLORS, AccentColor } from '@/context/ThemeContext';
import { Sun, Moon, Sparkles } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme, accent, setAccent } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full glass-miroir border-b border-white/10 px-4 lg:px-8 py-4 mb-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Branding Novakorax */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-200 flex items-center justify-center font-black text-slate-950 text-xl shadow-lg shadow-amber-500/20">
            CO
          </div>
          <div>
            <h1 className="font-black text-lg tracking-wider text-white uppercase">CHEF OMAR</h1>
            <p className="text-[10px] text-amber-400 font-semibold tracking-widest uppercase flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> Novakorax Corporation
            </p>
          </div>
        </div>

        {/* Sélection des 7 Accents & Changement de Thème */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 p-1 rounded-full bg-slate-900/80 border border-white/10">
            {(Object.keys(ACCENT_COLORS) as AccentColor[]).map((key) => (
              <button
                key={key}
                onClick={() => setAccent(key)}
                style={{ backgroundColor: ACCENT_COLORS[key] }}
                className={`w-5 h-5 rounded-full transition-transform ${
                  accent === key ? 'scale-125 ring-2 ring-white' : 'opacity-70 hover:opacity-100'
                }`}
                title={key}
              />
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl glass-miroir hover:border-amber-500/50 transition-colors text-amber-400"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-slate-900" />}
          </button>
        </div>
      </div>
    </header>
  );
}
