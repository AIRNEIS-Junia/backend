import { Module } from '@nestjs/common';
import { AuthController } from './application/controllers/auth.controller';
import { AuthService } from './domain/services/auth.service';
import { PrismaService } from './domain/services/prisma.service';
import { UserRepository } from './infrastructure/repositories/user.repository';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configurationEnvConfig } from './infrastructure/config/configurationEnv.config';
import { JwtAtStrategy } from './domain/strategies/jwt-at.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ProductRepository } from './infrastructure/repositories/product.repository';
import { ProductService } from './domain/services/product.service';
import { ProductController } from './application/controllers/product.controller';
import { UserController } from './application/controllers/user.controller';
import { JwtRtStrategy } from './domain/strategies/jwt-rt.strategy';
import { UserService } from './domain/services/user.service';
import { ContactController } from './application/controllers/contact.controller';
import { ContactService } from './domain/services/contact.service';
import { ContactRepository } from './infrastructure/repositories/contact.repository';
import { OrdersController } from './application/controllers/orders.controller';
import { OrdersService } from './domain/services/orders.service';

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
  controllers: [
    AuthController,
    UserController,
    ProductController,
    ContactController,
    OrdersController,
  ],
  providers: [
    PrismaService,
    JwtAtStrategy,
    JwtRtStrategy,
    JwtService,
    AuthService,
    UserService,
    UserRepository,
    ProductRepository,
    ProductService,
    ContactService,
    ContactRepository,
    OrdersService,
  ],
})
export class AppModule {}
