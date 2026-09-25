'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { CHEF_DATA } from '@/data/chefData';
import PushSubscriber from '@/components/pwa/PushSubscriber';
import StoryFeed from '@/components/home/StoryFeed';
import ReelsSection from '@/components/home/ReelsSection';
import BookingCalendar from '@/components/booking/BookingCalendar';
import AcademySection from '@/components/academy/AcademySection';
import { Phone, Instagram, MessageCircle, Sparkles } from 'lucide-react';

const Viewer360 = dynamic(() => import('@/components/vr/Viewer360'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 rounded-3xl glass-miroir border border-white/10 flex items-center justify-center text-sm text-gray-400">
      Chargement de l'expérience 360°...
    </div>
  ),
});

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Carte ID Chef */}
      <section className="p-8 rounded-3xl glass-miroir relative overflow-hidden flex flex-col md:flex-row items-center gap-8 border border-white/10">
        <div className="w-36 h-36 md:w-48 md:h-48 rounded-2xl bg-gradient-to-tr from-amber-500 to-slate-700 p-1 flex-shrink-0 shadow-2xl">
          <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center font-bold text-4xl text-amber-400">
            CO
          </div>
        </div>

        <div className="space-y-4 text-center md:text-left flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-amber-400">
            <Sparkles className="w-3.5 h-3.5" /> Fait avec passion à Dakar
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            {CHEF_DATA.name}
          </h1>
          <p className="text-base text-amber-400 font-semibold">
            {CHEF_DATA.title}
          </p>
          <p className="text-sm text-gray-400 max-w-2xl">
            {CHEF_DATA.bio}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
            <a href={CHEF_DATA.whatsapp} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl glass-miroir hover:border-green-500 transition-colors text-xs flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-green-500" /> WhatsApp Direct
            </a>
            <a href={CHEF_DATA.instagram} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl glass-miroir hover:border-pink-500 transition-colors text-xs flex items-center gap-2">
              <Instagram className="w-4 h-4 text-pink-500" /> Instagram
            </a>
            <a href={`tel:${CHEF_DATA.phone}`} className="px-4 py-2 rounded-xl glass-miroir hover:border-blue-500 transition-colors text-xs flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" /> Appeler
            </a>
          </div>
        </div>
      </section>

      {/* Stories / Statuts du Chef */}
      <StoryFeed />

      {/* Menus en Vidéos & Réels */}
      <ReelsSection />

      {/* Module 360 / VR */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          Expérience Signature 360° VR
        </h2>
        <p className="text-sm text-gray-400">
          Inspectez les créations du chef sous tous les angles ou connectez votre casque VR.
        </p>
        <Viewer360 />
      </section>

      {/* Réservation & Emploi du Temps Dynamique */}
      <BookingCalendar />

      {/* Académie & Semi-Formations Payantes */}
      <AcademySection />

      {/* Push PWA Notification */}
      <PushSubscriber />
    </div>
  );
}