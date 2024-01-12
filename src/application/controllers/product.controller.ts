import {ApiTags} from "@nestjs/swagger";
import {Controller, Param, Put, Body, Post, Delete} from "@nestjs/common";
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

    @Put('modify/:id')
    async modify(@Param('id') id: string, @Body() body: ProductCreateDto) {
        return this.productService.modify(id, body);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: string) {
        return this.productService.delete(id);
    }
}