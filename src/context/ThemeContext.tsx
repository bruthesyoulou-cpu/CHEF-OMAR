'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type AccentColor = 
  | 'bleu-nuit'
  | 'or-or'
  | 'rouge-piment'
  | 'vert-afrique'
  | 'terracotta'
  | 'violet-royal'
  | 'cyan-miroir';

interface ThemeContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  accent: AccentColor;
  setAccent: (accent: AccentColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ACCENT_COLORS: Record<AccentColor, string> = {
  'bleu-nuit': '#0F172A',
  'or-or': '#D4AF37',
  'rouge-piment': '#DC2626',
  'vert-afrique': '#16A34A',
  'terracotta': '#C2410C',
  'violet-royal': '#7C3AED',
  'cyan-miroir': '#0891B2'
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [accent, setAccent] = useState<AccentColor>('bleu-nuit');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accent, setAccent }}>
      <div 
        data-accent={accent} 
        className={`${theme === 'dark' ? 'bg-[#0a0a0c] text-white' : 'bg-[#FDFBF7] text-[#1a1a1a]'} min-h-screen transition-colors duration-300`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme doit être utilisé dans un ThemeProvider');
  }
  return context;
};