import {ApiTags} from "@nestjs/swagger";
import {Controller, Param, Put, Body, Post, Delete, Get, Patch} from "@nestjs/common";
import { ProductService } from "../../domain/services/product.service";
import { ProductCreateDto } from "../dto/product.dto";

@Controller('products')
@ApiTags('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async getAll() {
        return this.productService.getAll();
    }

    @Post()
    async create(@Body() body: ProductCreateDto) {
        return this.productService.create(body);
    }

    @Patch(':id')
    async modify(@Param('id') id: string, @Body() body: ProductCreateDto) {
        return this.productService.modify(id, body);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.productService.delete(id);
    }

    @Get('categories')
    async getAllCategory() {
        return this.productService.getAllCategories();
    }

    @Post('categories')
    async createCategory(@Body() body: ProductCreateDto) {
        return this.productService.createCategory(body);
    }

    @Delete('categories/:id')
    async deleteCategory(@Param('id') id: string) {
        return this.productService.deleteCategory(id);
    }
}