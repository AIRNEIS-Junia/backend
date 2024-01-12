import {Injectable} from "@nestjs/common";
import {ProductRepository} from "../../infrastructure/repositories/product.repository";
import {ProductCreateDto} from "../../application/dto/product.dto";

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

    getAllCategories() {
        return this.productRepository.getAllCategories();
    }

    createCategory(body: ProductCreateDto) {
        return this.productRepository.createCategory(body);
    }

    deleteCategory(id: string) {
        return this.productRepository.deleteCategory(id);
    }

}