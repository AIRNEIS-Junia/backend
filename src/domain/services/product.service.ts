import {Injectable} from "@nestjs/common";
import {ProductRepository} from "../../infrastructure/repositories/product.repository";
import {ProductCreateDto} from "../../application/dto/product.dto";

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository) {}

    create(body: ProductCreateDto) {
        return this.productRepository.create(body);
    }

    modify(id: string, body: ProductCreateDto) {
        return this.productRepository.modify(id, body);
    }

    delete(id: string) {
        return this.productRepository.delete(id);
    }
}