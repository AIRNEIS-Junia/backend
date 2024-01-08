import { Module } from '@nestjs/common';
import { AuthController } from './application/controllers/auth.controller';
import { AuthService } from './domain/services/auth.service';
import { PrismaService } from './domain/services/prisma.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [PrismaService, AuthService],
})
export class AppModule {}
