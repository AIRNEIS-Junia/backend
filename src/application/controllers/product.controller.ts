import {ApiTags} from "@nestjs/swagger";
import {Controller, Param, Body, Post, Delete, Get, Patch, UsePipes, ValidationPipe} from "@nestjs/common";
import { ProductService } from "../../domain/services/product.service";
import {ProductCategoryCreateDto, ProductCreateDto, ProductTypeCreateDto} from "../dto/product.dto";

@Controller('products')
@ApiTags('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async getAll() {
        return this.productService.getAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() body: ProductCreateDto) {
        return this.productService.create(body);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
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
    @UsePipes(new ValidationPipe())
    async createCategory(@Body() body: ProductCategoryCreateDto) {
        return this.productService.createCategory(body);
    }

    @Delete('categories/:id')
    async deleteCategory(@Param('id') id: string) {
        return this.productService.deleteCategory(id);
    }

    @Get('types')
    async getAllType() {
        return this.productService.getAllTypes();
    }

    @Post('types')
    async createType(@Body() body: ProductTypeCreateDto) {
        return this.productService.createType(body);
    }

    @Delete('types/:id')
    async deleteType(@Param('id') id: string) {
        return this.productService.deleteType(id);
    }

    @Patch('types/:id')
    async modifyType(@Param('id') id: string, @Body() body: ProductTypeCreateDto) {
        return this.productService.modifyType(id, body);
    }
}