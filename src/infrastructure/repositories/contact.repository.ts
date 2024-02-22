import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../domain/services/prisma.service';
import { Contact } from '@prisma/client';

@Injectable()
export class ContactRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Partial<Contact>) {
    return this.prismaService.contact.create({
      data: {
        title: data.title,
        message: data.message,
        email: data.email,
      },
    });
  }
}
