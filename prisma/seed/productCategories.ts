import { ProductCategory } from '@prisma/client';

export const SEED_PRODUCT_CATEGORIES: Partial<ProductCategory>[] = [
  {
    id: '15bc4680-145b-4e82-8203-3272b8f69e5a',
    name: 'Fauteuils',
    description: 'Fauteuils',
    slug: 'fauteuils',
    image:
      'https://www.stressless.com/fr-fr/-/media/stresslesssite/products/recliners/refresh3105/tokyo_cross_palomafog_1920x1280.jpg?cx=0&cy=0&cw=1920&ch=1080&hash=54DF9124574348FEE3E6264C86D56073',
  },
  {
    id: '5618cca5-ae13-45b5-908b-9933c8fa260a',
    name: 'Canapés',
    description: 'Canapés',
    slug: 'canape',
    image:
      'https://www.stressless.com/fr-fr/-/media/stresslesssite/products/sofas/annapalomalightgreygilrs1920x1280.jpg?cx=0.5&cy=0.52&cw=1920&ch=1080&hash=D5975429AB20BDB4A54B0556ED2AC11B',
  },
  {
    id: '83aab4ec-c0e7-4a64-92d8-1f94838e6c5d',
    name: 'Chaises',
    description: 'Chaises',
    slug: 'chaises',
    image:
      'https://www.stressless.com/fr-fr/-/media/stresslesssite/products/dining/0324/bay_calidolightbeige_bordeaux_1920x1280.jpg?cx=0.12&cy=0.64&cw=1920&ch=1080&hash=44B1715779DF95DDC8D974D388E297CA',
  },
  {
    id: '1c399958-6c85-4306-b7b1-8b0661f98f6b',
    name: 'Fauteuils de bureau',
    description: 'auteuils de bureau',
    slug: 'fauteils-bureau',
    image:
      'https://www.stressless.com/fr-fr/-/media/stresslesssite/inspiration/homeoffice/common/laurellowarmofficewoman1440x820.jpg?cx=0&cy=0&cw=1920&ch=1080&hash=8EAAD48CF7FB06505AC2DF9517823992',
  },
];
