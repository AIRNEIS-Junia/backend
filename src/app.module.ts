import { Module } from '@nestjs/common';
import { AuthController } from './application/controllers/auth.controller';
import { AuthService } from './domain/services/auth.service';
import { PrismaService } from './domain/services/prisma.service';
import { UserRepository } from './infrastructure/repositories/user.repository';
import { ConfigModule } from '@nestjs/config';
import { configurationEnvConfig } from './infrastructure/config/configurationEnv.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env`,
      load: [configurationEnvConfig],
    }),
  ],
  controllers: [AuthController],
  providers: [PrismaService, AuthService, UserRepository],
})
export class AppModule {}
