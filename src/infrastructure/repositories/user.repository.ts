import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../domain/services/prisma.service';
import { User } from '@prisma/client';
import bcrypt from 'bcrypt';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

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
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hash,
        passwordSalt: salt,
        ...data,
      },
    });
  }
}
