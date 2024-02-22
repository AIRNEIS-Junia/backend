import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../domain/services/prisma.service';
import { Checkout, CheckoutAddress, CheckoutItem } from '@prisma/client';

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
  findAll() {
    return this.prismaService.checkout.findMany();
  }

  getCheckoutAdressById(id: string) {
    return this.prismaService.checkoutAddress.findUnique({
      where: {
        id: id,
      },
    });
  }

  createCheckoutAdress(data: Partial<CheckoutAddress>) {
    return this.prismaService.checkoutAddress.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        streetNumber: data.streetNumber,
        street: data.street,
        additional: data.additional,
        zipCode: data.zipCode,
        city: data.city,
        country: data.country,
        checkoutId: data.checkoutId,
        ...data,
      },
    });
  }

  updateCheckoutAdress(id: string, data: Partial<CheckoutAddress>) {
    return this.prismaService.checkoutAddress.update({
      where: {
        id,
      },
      data,
    });
  }

  deleteCheckoutAdress(id: string) {
    return this.prismaService.checkoutAddress.delete({
      where: {
        id,
      },
    });
  }

  getCheckoutItemsById(id: string) {
    return this.prismaService.checkoutItem.findFirst({
      where: {
        productId: id,
      },
    });
  }

  createCheckoutItem(data: Partial<CheckoutItem>) {
    return this.prismaService.checkoutItem.create({
      data: {
        productId: data.productId,
        orderId: data.orderId,
        quantity: data.quantity,
        ...data,
      },
    });
  }

  updateCheckoutItem(id: string, data: Partial<CheckoutItem>) {
    return this.prismaService.checkoutItem.update({
      where: {
        id,
      },
      data,
    });
  }

  deleteCheckoutItem(id: string) {
    return this.prismaService.checkoutItem.delete({
      where: {
        id,
      },
    });
  }
}
