export interface CourseModule {
  id: string;
  title: string;
  duration: string;
  isFreePreview: boolean;
  videoUrl?: string;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  level: 'Débutant' | 'Intermédiaire' | 'Master / Pro';
  price: number; // Prix en FCFA
  currency: string;
  instructor: string;
  thumbnail: string;
  modulesCount: number;
  totalDuration: string;
  modules: CourseModule[];
}

export const ACADEMY_COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'L\'Art du Thiéboudienne Gastronomique',
    subtitle: 'Techniques de bouillon intense, cuisson du riz parfait et dressage d\'exception.',
    category: 'Cuisine Traditionnelle Revisitée',
    level: 'Intermédiaire',
    price: 25000,
    currency: 'FCFA',
    instructor: 'Chef Omar',
    thumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    modulesCount: 5,
    totalDuration: '2h 15min',
    modules: [
      {
        id: 'm1-1',
        title: 'Module 1 : Sélection des poissons & Marinade Nokoss secret',
        duration: '18 min',
        isFreePreview: true,
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-chef-cutting-vegetables-43096-large.mp4',
        description: 'Découvrez la composition exacte du Nokoss traditionnel rehaussé d\'épices d\'Afrique de l\'Ouest.',
      },
      {
        id: 'm1-2',
        title: 'Module 2 : Confection du bouillon concentré & Gestion de la fumée',
        duration: '25 min',
        isFreePreview: false,
        description: 'Apprenez à concentrer les saveurs du poisson et à réduire le bouillon pour gorger le riz de parfum.',
      },
      {
        id: 'm1-3',
        title: 'Module 3 : Cuisson à la vapeur & Maîtrise de la brisure de riz',
        duration: '32 min',
        isFreePreview: false,
        description: 'La méthode infaillible en deux étapes pour un grain détaché et savoureux.',
      },
      {
        id: 'm1-4',
        title: 'Module 4 : Confection du Soul de Guédj et Beugueulle',
        duration: '20 min',
        isFreePreview: false,
        description: 'Les condiments d\'accompagnement indispensables pour la touche acidulée et pimentée.',
      },
      {
        id: 'm1-5',
        title: 'Module 5 : Dressage Haute Gastronomie & Fiche Technique PDF',
        duration: '40 min',
        isFreePreview: false,
        description: 'Présentation sur assiette moderne, accords textures et téléchargement des fiches recettes.',
      },
    ],
  },
  {
    id: 'course-2',
    title: 'Sauces Africaines & Gastronomie Fusion',
    subtitle: 'Yassa, Mafé, Sauce Gombo & Réductions aux agrumes du Sénégal.',
    category: 'Sauces & Marinades',
    level: 'Master / Pro',
    price: 35000,
    currency: 'FCFA',
    instructor: 'Chef Omar',
    thumbnail: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    modulesCount: 4,
    totalDuration: '1h 50min',
    modules: [
      {
        id: 'm2-1',
        title: 'Module 1 : Caramélisation des oignons Yassa & Acidité équilibrée',
        duration: '22 min',
        isFreePreview: true,
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-fresh-vegetables-in-a-pan-43093-large.mp4',
        description: 'Obtenir la texture soyeuse des oignons sans amertume avec le jus de citron vert local.',
      },
      {
        id: 'm2-2',
        title: 'Module 2 : La Sauce Mafé onctueuse à la pâte d\'arachide torréfiée',
        duration: '30 min',
        isFreePreview: false,
        description: 'Maîtriser l\'émulsion huile-arachide pour une sauce veloutée et digeste.',
      },
      {
        id: 'm2-3',
        title: 'Module 3 : Jus de viande réduit au Ditakh & Piment Kani',
        duration: '28 min',
        isFreePreview: false,
        description: 'Création d\'un jus signature pour viandes braisées au feu de bois.',
      },
      {
        id: 'm2-4',
        title: 'Module 4 : Dressage et Fiches d\'Ingrédients',
        duration: '30 min',
        isFreePreview: false,
        description: 'Guide complet pour former vos équipes de cuisine.',
      },
    ],
  },
];