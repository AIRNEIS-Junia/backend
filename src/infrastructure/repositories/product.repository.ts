import {Injectable} from "@nestjs/common";
import {PrismaService} from "../../domain/services/prisma.service";
import { Product } from '@prisma/client';


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

    async getProductByCategory(categoryId: string) {
        return this.prismaService.product.findMany({
            where: {
                categoryId,
            },
        });
    }
}