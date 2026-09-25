'use client';

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, User, CheckCircle2, Send, Sparkles, AlertCircle } from 'lucide-react';

interface ServiceType {
  id: string;
  name: string;
  description: string;
  priceEstimate: string;
  duration: string;
}

const SERVICES: ServiceType[] = [
  {
    id: 'diner-prive',
    name: 'Dîner Privé VIP à Domicile',
    description: 'Service gastronomique sur mesure, menu 5 services préparé et dressé chez vous par le Chef Omar.',
    priceEstimate: 'À partir de 150 000 FCFA',
    duration: '3h à 4h',
  },
  {
    id: 'atelier-cuisine',
    name: 'Atelier & Masterclass Privée',
    description: 'Apprenez les secrets de la cuisine fusion sénégalaise en solo, en couple ou en petit groupe.',
    priceEstimate: 'À partir de 75 000 FCFA',
    duration: '2h30',
  },
  {
    id: 'traiteur-evenement',
    name: 'Prestation Traiteur D\'Exception',
    description: 'Buffet ou dîner assis pour mariages, anniversaires et événements corporatifs jusqu\'à 100 personnes.',
    priceEstimate: 'Sur devis',
    duration: 'Demi-journée / Journée',
  },
];

const TIME_SLOTS = [
  { time: '12:00', period: 'Déjeuner', available: true },
  { time: '13:30', period: 'Déjeuner', available: false },
  { time: '16:00', period: 'Atelier Aprem', available: true },
  { time: '19:30', period: 'Dîner VIP', available: true },
  { time: '21:00', period: 'Dîner VIP', available: true },
];

export default function BookingCalendar() {
  const [selectedService, setSelectedService] = useState<ServiceType>(SERVICES[0]);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0] // J+2 par défaut
  );
  const [selectedSlot, setSelectedSlot] = useState<string>('19:30');
  const [guestCount, setGuestCount] = useState<number>(4);
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [location, setLocation] = useState<string>('Dakar (Almadies, Ngor, Saly...)');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      alert('Veuillez remplir votre nom et votre numéro de téléphone.');
      return;
    }

    // Message préparé pour WhatsApp
    const message = `Bonjour Chef Omar ! 👋%0A%0AJe souhaite réserver une prestation :%0A- *Prestation* : ${selectedService.name}%0A- *Date* : ${selectedDate}%0A- *Heure* : ${selectedSlot}%0A- *Nombre d'invités* : ${guestCount} personnes%0A- *Lieu* : ${location}%0A%0A*Coordonnées client* :%0A- *Nom* : ${clientName}%0A- *Téléphone* : ${clientPhone}`;

    const whatsappUrl = `https://wa.me/221770000000?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section className="space-y-8 my-12">
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight flex items-center gap-2">
          <CalendarIcon className="w-7 h-7 text-[var(--color-accent)]" />
          Réservation & Emploi du Temps Dynamique
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Réservez le Chef Omar pour vos dîners exclusifs, ateliers de cuisine ou événements VIP.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Étape 1 : Choix de la Prestation & Paramètres */}
        <div className="lg:col-span-7 space-y-6">
          {/* Sélection du service */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-300 block">1. Choisissez le type de service :</label>
            <div className="grid grid-cols-1 gap-3">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`p-4 rounded-2xl glass-miroir border cursor-pointer transition-all ${
                    selectedService.id === service.id
                      ? 'border-[var(--color-accent)] ring-1 ring-[var(--color-accent)] bg-white/5'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="font-bold text-base">{service.name}</h4>
                      <p className="text-xs text-gray-400 mt-1">{service.description}</p>
                    </div>
                    <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {service.priceEstimate}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-[11px] text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Durée : {service.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Date & Heure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300 block">2. Date souhaitée :</label>
              <input
                type="date"
                value={selectedDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl glass-miroir border border-white/10 text-sm text-white focus:outline-none focus:border-[var(--color-accent)]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300 block">3. Nombre de convives :</label>
              <div className="flex items-center glass-miroir border border-white/10 rounded-xl px-3 py-2 justify-between">
                <button
                  type="button"
                  onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="text-sm font-semibold">{guestCount} personne(s)</span>
                <button
                  type="button"
                  onClick={() => setGuestCount(guestCount + 1)}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Créneaux Horaires */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300 block">4. Créneaux disponibles pour cette date :</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {TIME_SLOTS.map((slot, idx) => (
                <button
                  key={idx}
                  type="button"
                  disabled={!slot.available}
                  onClick={() => setSelectedSlot(slot.time)}
                  className={`p-3 rounded-xl text-center text-xs border transition-all ${
                    !slot.available
                      ? 'opacity-40 border-red-500/30 cursor-not-allowed bg-red-500/5'
                      : selectedSlot === slot.time
                      ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)] font-bold shadow-lg'
                      : 'glass-miroir border-white/10 hover:border-white/30'
                  }`}
                >
                  <p className="font-bold text-sm">{slot.time}</p>
                  <p className="text-[10px] opacity-80">{slot.period}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Étape 2 : Formulaire de confirmation client */}
        <div className="lg:col-span-5">
          <form
            onSubmit={handleBooking}
            className="p-6 rounded-3xl glass-miroir border border-white/15 space-y-5 sticky top-28"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-white/10">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h3 className="font-bold text-lg">Récapitulatif & Validation</h3>
            </div>

            <div className="space-y-2 text-xs bg-white/5 p-4 rounded-xl border border-white/10">
              <p><span className="text-gray-400">Prestation :</span> <strong className="text-white">{selectedService.name}</strong></p>
              <p><span className="text-gray-400">Date :</span> <strong className="text-amber-400">{selectedDate}</strong> à <strong className="text-amber-400">{selectedSlot}</strong></p>
              <p><span className="text-gray-400">Convives :</span> <strong className="text-white">{guestCount} personnes</strong></p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-300 block mb-1">Votre Nom Complet :</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Amadou Diallo"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl glass-miroir border border-white/10 text-xs text-white focus:outline-none focus:border-[var(--color-accent)]"
                />
              </div>

              <div>
                <label className="text-xs text-gray-300 block mb-1">Numéro Téléphone / WhatsApp :</label>
                <input
                  type="tel"
                  required
                  placeholder="Ex: +221 77 000 00 00"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl glass-miroir border border-white/10 text-xs text-white focus:outline-none focus:border-[var(--color-accent)]"
                />
              </div>

              <div>
                <label className="text-xs text-gray-300 block mb-1">Lieu / Ville / Quartier :</label>
                <input
                  type="text"
                  placeholder="Ex: Les Almadies, Dakar"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl glass-miroir border border-white/10 text-xs text-white focus:outline-none focus:border-[var(--color-accent)]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-green-600 hover:bg-green-500 font-bold text-xs text-white flex items-center justify-center gap-2 shadow-xl transition-transform active:scale-95"
            >
              <Send className="w-4 h-4" /> Envoyer la demande au Chef sur WhatsApp
            </button>

            {isSubmitted && (
              <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                Votre demande a été transférée ! Le Chef vous répondra sous peu.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}