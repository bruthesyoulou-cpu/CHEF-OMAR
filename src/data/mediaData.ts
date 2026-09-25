import { StoryItem, MenuItem } from '@/types';

export interface ReelItem extends MenuItem {
  duration: string;
  likes: number;
}

export const STORIES_DATA: StoryItem[] = [
  {
    id: 'story-1',
    title: 'Préparation du Thiéboudienne Penda Mbaye 🐟',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-fresh-vegetables-in-a-pan-43093-large.mp4',
    duration: 45,
    date: 'Aujourd\'hui',
  },
  {
    id: 'story-2',
    title: 'Arrivée du Yassa Poulet braisé au feu de bois 🔥',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-chef-plating-a-gourmet-dish-43095-large.mp4',
    duration: 30,
    date: 'Hier',
  },
  {
    id: 'story-3',
    title: 'Aperçu du Diner Privé VIP à Almadies 🥂',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-chef-cutting-vegetables-43096-large.mp4',
    duration: 60,
    date: 'Il y a 2 jours',
  },
];

export const REELS_DATA: ReelItem[] = [
  {
    id: 'reel-1',
    title: 'Thiéboudienne Rouge D\'Exception',
    category: 'signature',
    description: 'Riz au poisson fumé, brisure de riz de la vallée du fleuve Sénégal, légumes mijotés et tamarin souring.',
    price: '15 000 FCFA',
    reelUrl: 'https://assets.mixkit.co/videos/preview/mixkit-chef-plating-a-gourmet-dish-43095-large.mp4',
    ingredients: ['Thiof frais', 'Légumes du pays', 'Bissap blanc', 'Tamarin', 'Piment vert'],
    duration: '0:25',
    likes: 342,
  },
  {
    id: 'reel-2',
    title: 'Supra Yassa Poulet de la Petite-Côte',
    category: 'plat',
    description: 'Poulet fermier mariné à la moutarde de Dijon, oignons doux caramélisés et jus de citron vert acidulé.',
    price: '12 500 FCFA',
    reelUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-fresh-vegetables-in-a-pan-43093-large.mp4',
    ingredients: ['Poulet fermier', 'Oignons doux', 'Moutarde ancienne', 'Citron vert'],
    duration: '0:28',
    likes: 512,
  },
  {
    id: 'reel-3',
    title: 'Pastels de Crevettes & Sauce Kani',
    category: 'entrée',
    description: 'Beignets croustillants farcis aux crevettes sautées à l\'ail et leur piquant emblématique au piment habanero.',
    price: '8 000 FCFA',
    reelUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-chef-cutting-vegetables-43096-large.mp4',
    ingredients: ['Crevettes gambas', 'Piment Kani', 'Pâte croustillante', 'Ail frais'],
    duration: '0:20',
    likes: 890,
  },
];