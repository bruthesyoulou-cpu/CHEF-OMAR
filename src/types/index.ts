export type AccentColor = 
  | 'bleu-nuit'
  | 'or-or'
  | 'rouge-piment'
  | 'vert-afrique'
  | 'terracotta'
  | 'violet-royal'
  | 'cyan-miroir';

export interface ChefInfo {
  name: string;
  title: string;
  location: string;
  bio: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  tiktok: string;
  email: string;
}

export interface MenuItem {
  id: string;
  title: string;
  category: 'entrée' | 'plat' | 'dessert' | 'boisson' | 'signature';
  description: string;
  price: string;
  reelUrl: string; // Vidéo 20-30 sec
  model3dUrl?: string; // Fichier 3D (.gltf / .glb)
  ingredients: string[];
}

export interface StoryItem {
  id: string;
  title: string;
  videoUrl: string; // Vidéo 30s-1min
  duration: number;
  date: string;
}

export interface BookingSlot {
  id: string;
  date: string;
  time: string;
  isAvailable: boolean;
  serviceType: 'Dîner Privé' | 'Atelier Cuisine' | 'Traiteur VIP';
}