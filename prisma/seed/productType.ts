import { ProductType } from '@prisma/client';

export const SEED_PRODUCT_TYPES: Partial<ProductType>[] = [
  {
    id: '523cc088-a57e-483d-8444-f01920124755',
    name: 'Tissu',
  },
  {
    id: '5d121744-e135-4802-a392-99abd339957b',
    name: 'Bois',
  },
  {
    id: '4ec2a100-99c6-44e0-a068-55309b510d77',
    name: 'Cuir',
  },
  {
    id: '482bdd8e-19bc-46ee-98ad-29d949f757fa',
    name: 'Métal',
  },
  {
    id: '9d9dac5b-d18f-4bfe-9e40-495338bf559e',
    name: 'Acier',
  },
];
