import {Injectable} from "@nestjs/common";
import {PrismaService} from "../../domain/services/prisma.service";
import {Product, ProductCategory, ProductType} from '@prisma/client';


@Injectable()
export class ProductRepository {
    constructor(private readonly prismaService: PrismaService) {}

    async findByName(name: string) {
        return this.prismaService.product.findFirst({
            where: {
                name,
            },
        });
    }

    async getAll() {
        return this.prismaService.product.findMany();
    }

    async create(data: Partial<Product>) {
        return this.prismaService.product.create({
            data: {
                name: data.name,
                description: data.description,
                price: data.price,
                categoryId: data.categoryId,
                ...data,
            },
        });
    }

    async modify(id: string, data: Partial<Product>) {
        return this.prismaService.product.update({
            where: {
                id,
            },
            data,
        });
    }

    async delete(id: string) {
        return this.prismaService.product.delete({
            where: {
                id,
            },
        });
    }

    async findCategoryByName(name: string) {
        return this.prismaService.productCategory.findFirst({
            where: {
                name,
            },
        });
    }

    async getAllCategories() {
        return this.prismaService.productCategory.findMany();
    }

    async createCategory(data: Partial<ProductCategory>) {
        return this.prismaService.productCategory.create({
            data: {
                name: data.name,
                description: data.description,
                image: data.image,
                ...data,
            },
        });
    }

    async deleteCategory(id: string) {
        return this.prismaService.productCategory.delete({
            where: {
                id,
            },
        });
    }

    async getAllTypes() {
        return this.prismaService.productType.findMany();
    }

    async createType(data: Partial<ProductType>) {
        return this.prismaService.productType.create({
            data: {
                name: data.name,
                ...data,
            },
        });
    }

    async deleteType(id: string) {
        return this.prismaService.productType.delete({
            where: {
                id,
            },
        });
    }

    async modifyType(id: string, data: Partial<ProductType>) {
        return this.prismaService.productType.update({
            where: {
                id,
            },
            data,
        });
    }

    async findTypeByName(name: string) {
        return this.prismaService.productType.findFirst({
            where: {
                name,
            },
        });
    }
}