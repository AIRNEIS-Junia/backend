import { Product } from '@prisma/client';

export const SEED_PRODUCTS: Partial<Product>[] = [
  {
    id: '5cd04b6a-fb8c-4b8e-a4f8-b62a57b4dec9',
    name: 'Banquette-lit ECO-NATURA',
    description:
      "Passe partout et toujours utile dans un studio, une chambre d’ami ou sous une mezzanine, la banquette NATURA est dotée d'un système BZ avec  fermeture assistée qui se transforme en lit confortable. Choisissez parmi l’un des nombreux coloris proposés selon le style de votre déco.",
    slug: 'banquette-lit-eco-natura-17935',
    images: [
      'https://cocktail-scandinave.fr/wp-content/uploads/2024/02/GRNATBLC404.jpg',
      'https://cocktail-scandinave.fr/wp-content/uploads/2023/03/GRNATTC402-amb.jpg',
      'https://cocktail-scandinave.fr/wp-content/uploads/2024/02/GRNAT-sanscouette.jpg',
      'https://cocktail-scandinave.fr/wp-content/uploads/2024/02/GRNAT-deplie.jpg',
    ],
    quantity: 1000,
    categoryId: '5618cca5-ae13-45b5-908b-9933c8fa260a',
    price: 499,
  },
  {
    name: 'Canapé d’angle BARDWELL',
    description:
      'Avec ses vastes proportions et son revêtement microfibre façon cuir vieilli, il trouvera parfaitement sa place dans un intérieur de style loft new-yorkais, tout comme dans un intérieur rétro ou moderne !',
    slug: 'canape-angle-barwell-52815',
    images: [
      'https://cocktail-scandinave.fr/wp-content/uploads/2023/04/LTBARANGGOHARD-amb.jpg',
    ],
    quantity: 1000,
    categoryId: '5618cca5-ae13-45b5-908b-9933c8fa260a',
    price: 499,
  },
];
