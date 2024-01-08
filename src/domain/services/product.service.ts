import {Injectable} from "@nestjs/common";
import {ProductRepository} from "../../infrastructure/repositories/product.repository";
import {ProductCreateDto} from "../../application/dto/product.dto";

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository) {}

    create(body: ProductCreateDto) {

    }
}