import {Injectable} from "@nestjs/common";
import {PrismaService} from "../../domain/services/prisma.service";

@Injectable()
export class ProductRepository {
    constructor(private readonly prismaService: PrismaService) {}

}