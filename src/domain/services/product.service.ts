import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../infrastructure/repositories/product.repository';
import {
  ProductCategoryCreateDto,
  ProductCreateDto,
  ProductTypeCreateDto,
} from '../../application/dto/product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  getAll() {
    return this.productRepository.getAll();
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

  getCategoryById(id: string) {
    return this.productRepository.getCategoryById(id);
  }

  getAllCategories() {
    return this.productRepository.getAllCategories();
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

  findById(id: string) {
    return this.productRepository.findById(id);
  }
}
