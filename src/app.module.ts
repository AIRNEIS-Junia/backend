import { Module } from '@nestjs/common';
import { AuthController } from './application/controllers/auth.controller';
import { AuthService } from './domain/services/auth.service';
import { PrismaService } from './domain/services/prisma.service';
import { UserRepository } from './infrastructure/repositories/user.repository';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configurationEnvConfig } from './infrastructure/config/configurationEnv.config';
import { JwtAtStrategy } from './domain/strategies/jwt-at.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env`,
      load: [configurationEnvConfig],
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get('JWT_AT_SECRET'),
          signOptions: { expiresIn: '60m' },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [
    PrismaService,
    JwtAtStrategy,
    JwtService,
    AuthService,
    UserRepository,
  ],
})
export class AppModule {}
