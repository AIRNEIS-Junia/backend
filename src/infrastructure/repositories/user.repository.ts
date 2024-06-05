import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../domain/services/prisma.service';
import { User, UserAddress, UserCreditCard } from '@prisma/client';
import bcrypt from 'bcrypt';
import _ from 'lodash';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findById(id: string) {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prismaService.user.findFirst({
      where: {
        email,
      },
    });
  }

  async create(data: Partial<User>) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(data.password, salt);

    return this.prismaService.user.create({
      data: {
        ...data,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email.toLowerCase(),
        password: hash,
        passwordSalt: salt,
      },
    });
  }

  async update(data: Partial<User>) {
    let salt: string;
    let hash: string;

    if (data.password) {
      salt = await bcrypt.genSalt();
      hash = await bcrypt.hash(data.password, salt);
    }

    return this.prismaService.user.update({
      where: {
        id: data.id,
      },
      data: {
        ..._.omit(data, 'id'),
        ...(data.password && {
          password: hash,
          passwordSalt: salt,
        }),
      },
    });
  }

  async findAddressById(id: string) {
    return this.prismaService.userAddress.findUnique({
      where: {
        id,
      },
    });
  }

  async findAllAddressByUserId(userId: string) {
    return this.prismaService.userAddress.findMany({
      where: {
        userId,
      },
    });
  }

  async createAddress(data: Partial<UserAddress>) {
    return this.prismaService.userAddress.create({
      data: {
        name: data.name,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        streetNumber: data.streetNumber,
        street: data.street,
        zipCode: data.zipCode,
        city: data.city,
        country: data.country,
        userId: data.userId,
      },
    });
  }

  async updateAddressById(data: Partial<UserAddress>) {
    return this.prismaService.userAddress.update({
      where: {
        id: data.id,
      },
      data: {
        ..._.omit(data, ['id']),
      },
    });
  }

  async deleteAddressById(id: string) {
    return this.prismaService.userAddress.delete({
      where: {
        id,
      },
    });
  }

  // credit card

  async findCreditCardById(id: string) {
    return this.prismaService.userCreditCard.findUnique({
      where: {
        id,
      },
    });
  }

  async findAllCreditCardByUserId(userId: string) {
    return this.prismaService.userCreditCard.findMany({
      where: {
        userId: userId,
      },
    });
  }

  async createCreditCard(data: Partial<UserCreditCard>) {
    return this.prismaService.userCreditCard.create({
      data: {
        cardHolderName: data.cardHolderName,
        cardNumber: data.cardNumber,
        expiryDate: data.expiryDate,
        cvv: data.cvv,
        userId: data.userId,
      },
    });
  }

  async updateCreditCardById(data: Partial<UserAddress>) {
    return this.prismaService.userAddress.update({
      where: {
        id: data.id,
      },
      data: {
        ..._.omit(data, ['id']),
      },
    });
  }

  async deleteCreditCardById(id: string) {
    return this.prismaService.userCreditCard.delete({
      where: {
        id,
      },
    });
  }
}
