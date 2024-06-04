import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { OrderCreateDto } from '../../application/dto/order.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrder(
    orderCreateDto: OrderCreateDto,
    userId: string,
  ): Promise<Order> {
    const { items, addressId, creditCardId } = orderCreateDto;

    return this.prisma.order.create({
      data: {
        user: { connect: { id: userId } },
        address: { connect: { id: addressId } },
        creditCard: { connect: { id: creditCardId } },
        orderItems: {
          create: items.map((item) => ({
            product: { connect: { slug: item.slug } },
            quantity: item.quantity,
          })),
        },
      },
      include: { orderItems: true },
    });
  }

  async getUserOrders(userId: string): Promise<Order[]> {
    return this.prisma.order.findMany({
      where: { userId },
      include: {
        orderItems: { include: { product: true } },
        address: true,
        creditCard: true,
      },
    });
  }
}
