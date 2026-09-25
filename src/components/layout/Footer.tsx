'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-center text-xs text-gray-500 glass-miroir">
      <p>© {new Date().getFullYear()} CHEF OMAR. Tous droits réservés.</p>
      <p className="mt-1 font-semibold tracking-wider text-gray-400">
        Développé par <span className="text-[var(--color-accent)]">NOVAKORAX CORPORATION</span>
      </p>
    </footer>
  );
}