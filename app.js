// Enregistrement du Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('[PWA] Service Worker enregistré avec succès:', registration.scope);

      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
            console.log('[PWA] Une nouvelle version est disponible. Veuillez rafraîchir.');
          }
        };
      };
    } catch (error) {
      console.error('[PWA] Échec de l\'enregistrement du Service Worker:', error);
    }
  });
}

// Interception discrète du prompt d'installation
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Afficher le bouton d'installation uniquement s'il est disponible
  const installBtn = document.getElementById('pwa-install-btn');
  if (installBtn) {
    installBtn.style.display = 'inline-flex';
    installBtn.addEventListener('click', async () => {
      installBtn.style.display = 'none';
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`[PWA] Choix d'installation : ${outcome}`);
      deferredPrompt = null;
    });
  }
});

// Détecter l'état de connexion en temps réel
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

function updateOnlineStatus() {
  const statusBadge = document.getElementById('status-badge');
  if (statusBadge) {
    if (navigator.onLine) {
      statusBadge.textContent = 'En ligne';
      statusBadge.className = 'status online';
    } else {
      statusBadge.textContent = 'Hors-ligne';
      statusBadge.className = 'status offline';
    }
  }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
  updateOnlineStatus();
});