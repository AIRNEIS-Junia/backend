import { ProductCategory } from '@prisma/client';

export const SEED_PRODUCT_CATEGORIES: Partial<ProductCategory>[] = [
  {
    id: '330145b6-142e-47fa-8c85-44c484980b37',
    name: 'Salon',
    description: 'Salon confortable',
    slug: 'salon',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    createdAt: new Date('2024-06-06T06:53:35.508Z'),
    updatedAt: new Date('2024-06-06T06:55:24.125Z'),
  },
  {
    id: 'e3816067-382c-4c8a-a9d0-d2a527fbf110',
    name: 'Rangement',
    description: 'Pour ranger vos objets idéalement',
    slug: 'rangement',
    image: 'https://www.miliboo.com/images_upload/mediatheque/bibliotheque.jpg',
    createdAt: new Date('2024-06-06T07:50:16.033Z'),
    updatedAt: new Date('2024-06-06T07:49:24.736Z'),
  },
  {
    id: 'de09946d-0519-40ea-a85a-a0844400b316',
    name: 'Chambre',
    description: "Chambre où l'on se sent à l'aise",
    slug: 'chambre',
    image: 'https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    createdAt: new Date('2024-06-06T06:55:24.125Z'),
    updatedAt: new Date('2024-06-06T07:50:16.033Z'),
  },
  {
    id: 'ac41fabd-90a0-4437-9413-c6f372e1aba4',
    name: 'Bureau',
    description: 'Pour travailler dans des bonnes conditions',
    slug: 'bureau',
    image: 'https://www.miliboo.com/images_upload/mediatheque/categorie_fauteuils_de_bureau.jpg',
    createdAt: new Date('2024-06-06T08:03:22.706Z'),
    updatedAt: new Date('2024-06-06T08:02:42.782Z'),
  },
];
