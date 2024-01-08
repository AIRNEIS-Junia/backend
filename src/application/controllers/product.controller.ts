import {Controller} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {Body, Post} from "@nestjs/common";
import { ProductService } from "../../domain/services/product.service";
import { ProductCreateDto } from "../dto/product.dto";

@Controller('product')
@ApiTags('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}
    @Post('create')
    async create(@Body() body: ProductCreateDto) {
        return this.productService.create(body);
    }
}