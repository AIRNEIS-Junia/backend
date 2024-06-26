import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../infrastructure/repositories/product.repository';
import {
  ProductCategoryCreateDto,
  ProductCreateDto,
  ProductCursorDto,
  ProductTypeCreateDto,
} from '../../application/dto/product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async get(id: string) {
    return this.productRepository.findById(id);
  }

  async getAll(data: ProductCursorDto) {
    const results = await this.productRepository.getAll({
      cursor: data.cursor,
    });
    const total = await this.productRepository.countAll();

    return {
      total,
      results,
    };
  }

  create(body: ProductCreateDto) {
    return this.productRepository.create(body);
  }

  modify(id: string, body: ProductCreateDto) {
    return this.productRepository.modify(id, body);
  }

  delete(id: string) {
    return this.productRepository.delete(id);
  }

  getAllCategories() {
    return this.productRepository.getAllCategories();
  }

  getCategoryByName(name: string) {
    return this.productRepository.findCategoryByName(name);
  }

  getCategoryBySlug(slug: string) {
    return this.productRepository.findCategoryBySlug(slug);
  }

  findByCategoryId(id: string) {
    return this.productRepository.findByCategoryId(id);
  }

  createCategory(body: ProductCategoryCreateDto) {
    return this.productRepository.createCategory(body);
  }

  deleteCategory(id: string) {
    return this.productRepository.deleteCategory(id);
  }

  getAllTypes() {
    return this.productRepository.getAllTypes();
  }

  createType(body: ProductTypeCreateDto) {
    return this.productRepository.createType(body);
  }

  deleteType(id: string) {
    return this.productRepository.deleteType(id);
  }

  modifyType(id: string, body: ProductTypeCreateDto) {
    return this.productRepository.modifyType(id, body);
  }

  findByName(name: string) {
    return this.productRepository.findByName(name);
  }

  findBySlug(slug: string) {
    return this.productRepository.findBySlug(slug);
  }
}
