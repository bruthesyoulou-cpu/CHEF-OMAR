'use client';

import React from 'react';
import { useTheme, ACCENT_COLORS } from '@/context/ThemeContext';
import { AccentColor } from '@/types';

export default function AccentSelector() {
  const { accent, setAccent } = useTheme();

  return (
    <div className="flex items-center gap-2 p-2 rounded-full glass-miroir">
      {(Object.keys(ACCENT_COLORS) as AccentColor[]).map((col) => (
        <button
          key={col}
          onClick={() => setAccent(col)}
          className={`w-5 h-5 rounded-full transition-transform ${
            accent === col ? 'scale-125 ring-2 ring-white' : 'opacity-70 hover:opacity-100'
          }`}
          style={{ backgroundColor: ACCENT_COLORS[col] }}
          title={col}
        />
      ))}
    </div>
  );
}