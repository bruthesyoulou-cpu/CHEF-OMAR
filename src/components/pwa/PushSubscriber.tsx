'use client';

import React, { useState } from 'react';
import { Bell, CheckCircle } from 'lucide-react';

export default function PushSubscriber() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        setSubscribed(true);
        new Notification('CHEF OMAR', {
          body: 'Vous recevrez désormais les alertes des nouveaux menus et vidéos du Chef !',
          icon: '/icons/icon-192.png'
        });
      }
    }
  };

  return (
    <div className="p-6 rounded-2xl glass-miroir flex flex-col md:flex-row items-center justify-between gap-4 my-8">
      <div>
        <h3 className="font-bold text-lg flex items-center gap-2">
          <Bell className="w-5 h-5 text-[var(--color-accent)]" />
          Abonnement aux Exclusivités du Chef
        </h3>
        <p className="text-sm text-gray-400">
          Recevez directement les notifications des nouveaux plats, lives et disponibilités (Sans inscription).
        </p>
      </div>

      <button
        onClick={handleSubscribe}
        disabled={subscribed}
        className="px-6 py-3 rounded-xl font-semibold text-sm transition-transform active:scale-95 text-white bg-[var(--color-accent)] flex items-center gap-2 shadow-lg"
      >
        {subscribed ? (
          <>
            <CheckCircle className="w-4 h-4 text-green-400" /> Abonné
          </>
        ) : (
          'Activer les Notifications'
        )}
      </button>
    </div>
  );
}