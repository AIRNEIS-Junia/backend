import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { AuthLoginDto, AuthRegisterDto } from '../../application/dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import bcrypt from 'bcrypt';
import {
  AuthLoginResponse,
  AuthRefreshResponse,
  AuthRegisterResponse,
} from '../../application/responses/auth.response';
import _ from 'lodash';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}
  async login(data: AuthLoginDto): Promise<AuthLoginResponse> {
    const findEmail = await this.userRepository.findByEmail(data.email);

    if (!findEmail) throw new NotFoundException('EMAIL_OR_PASSWORD_WRONG');

    const verifyHash = await bcrypt.compare(data.password, findEmail.password);

    if (!verifyHash) throw new NotFoundException('EMAIL_OR_PASSWORD_WRONG');

    const payload = {
      firstName: findEmail.firstName,
      lastName: findEmail.lastName,
      sub: findEmail.id,
      roles: findEmail.role,
    };

    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_AT_SECRET'),
    });
    const refreshToken = this.jwtService.sign(
      _.omit(payload, ['firstName', 'lastName', 'roles']),
      {
        secret: this.configService.get('JWT_RT_SECRET'),
        expiresIn: '365d',
      },
    );

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  async register(data: AuthRegisterDto): Promise<AuthRegisterResponse> {
    const verifyEmail = await this.userRepository.findByEmail(data.email);

    if (verifyEmail) throw new BadRequestException('EMAIL_ALREADY_USED');

    const create = await this.userRepository.create(data);

    const payload = {
      firstName: create.firstName,
      lastName: create.lastName,
      sub: create.id,
      roles: create.role,
    };

    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_AT_SECRET'),
    });
    const refreshToken = this.jwtService.sign(
      _.omit(payload, ['firstName', 'lastName', 'roles']),
      {
        secret: this.configService.get('JWT_RT_SECRET'),
        expiresIn: '365d',
      },
    );

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  async refresh(userId: string): Promise<AuthRefreshResponse> {
    const findUser = await this.userRepository.findById(userId);

    if (!findUser) throw new NotFoundException('USER_NOT_FOUND');

    const payload = {
      firstName: findUser.firstName,
      lastName: findUser.lastName,
      sub: findUser.id,
      roles: findUser.role,
    };

    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_AT_SECRET'),
    });

    const refreshToken = this.jwtService.sign(
      _.omit(payload, ['firstName', 'lastName', 'roles']),
      {
        secret: this.configService.get('JWT_RT_SECRET'),
        expiresIn: '365d',
      },
    );

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }
}
