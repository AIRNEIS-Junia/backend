import { SEED_PRODUCT_CATEGORIES } from './seed/productCategories';
import { PrismaClient } from '@prisma/client';
import { SEED_PRODUCTS } from './seed/product';
import chalk from 'chalk';

const prisma = new PrismaClient();

class Seed {
  async run() {
    await this.createProductCategories();
    await this.createProducts();
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
            ...p,
            id: p.id,
            name: p.name,
            description: p.description,
            slug: p.slug,
            images: p.images,
            categoryId: p.categoryId,
            price: p.price,
          },
        });
      }),
    );
    chalk.green('[Seed] Product created');
  }
}

new Seed().run();
