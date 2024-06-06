import { SEED_PRODUCT_CATEGORIES } from './seed/productCategories';
import { PrismaClient } from '@prisma/client';
import { SEED_PRODUCTS } from './seed/product';
import chalk from 'chalk';
import { SEED_PRODUCT_TYPES } from './seed/productType';
import _ from 'lodash';

const prisma = new PrismaClient();

class Seed {
  async run() {
    await this.createProductTypes();
    await this.createProductCategories();
    await this.createProducts();
  }

  async createProductTypes() {
    await Promise.all(
      SEED_PRODUCT_TYPES.map(async (pt) => {
        await prisma.productType.create({
          data: {
            id: pt.id,
            name: pt.name,
          },
        });
      }),
    );
  }

  async createProductCategories() {
    chalk.cyan('[Seed] Creating ProductCategories');
    await Promise.all(
      SEED_PRODUCT_CATEGORIES.map(async (pc) => {
        await prisma.productCategory.create({
          data: {
            ...pc,
            id: pc.id,
            description: pc.description,
            image: pc.image,
            name: pc.name,
            slug: pc.slug,
          },
        });
      }),
    );
    chalk.green('[Seed] ProductCategories created');
  }

  async createProducts() {
    chalk.cyan('[Seed] Product created');
    await Promise.all(
      SEED_PRODUCTS.map(async (p) => {
        await prisma.product.create({
          data: {
            ..._.omit(p, ['productTypesId']),
            id: p.id,
            name: p.name,
            description: p.description,
            slug: p.slug,
            images: p.images,
            categoryId: p.categoryId,
            price: p.price,
            productTypes: {
              connect: p.productTypesId?.map((pt) => ({
                id: pt,
              })),
            },
          },
        });
      }),
    );
    chalk.green('[Seed] Product created');
  }
}

new Seed().run();
