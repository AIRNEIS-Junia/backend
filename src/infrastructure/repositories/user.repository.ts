import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../domain/services/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findByEmail() {}
}
