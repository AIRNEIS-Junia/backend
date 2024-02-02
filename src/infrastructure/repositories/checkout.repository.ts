import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../domain/services/prisma.service';
import { Checkout } from '@prisma/client';

@Injectable()
export class CheckoutRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findByUserId(userId: string) {
    return this.prismaService.checkout.findMany({
      where: {
        userId,
      },
    });
  }

  create(data: Partial<Checkout>) {
    return this.prismaService.checkout.create({
      data: {
        userId: data.userId,
        status: data.status,
        ...data,
      },
    });
  }

  delete(id: string) {
    return this.prismaService.checkout.delete({
      where: {
        id,
      },
    });
  }

  modify(id: string, data: Partial<Checkout>) {
    return this.prismaService.checkout.update({
      where: {
        id,
      },
      data,
    });
  }
}
