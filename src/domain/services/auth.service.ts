import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { AuthLoginDto } from '../../application/dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}
  async login(data: AuthLoginDto) {
    const findEmail = await this.userRepository.findByEmail(data.email);

    if (!findEmail) throw new NotFoundException('EMAIL_OR_PASSWORD_WRONG');

    const verifyHash = await bcrypt.compare(data.password, findEmail.password);

    if (!verifyHash) throw new NotFoundException('EMAIL_OR_PASSWORD_WRONG');

    const payload = {
      firstName: findEmail.firstName,
      lastName: findEmail.lastName,
      sub: findEmail.id,
    };

    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_AT_SECRET'),
    });

    return {
      status: 'success',
      accessToken: accessToken,
    };
  }

  async register() {
    const create = await this.userRepository.create({
      firstName: 'Jean',
      lastName: 'Dupont',
      email: 'demo@demo.fr',
      password: 'demo',
    });

    const payload = {
      firstName: create.firstName,
      lastName: create.lastName,
      sub: create.id,
    };

    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_AT_SECRET'),
    });

    return {
      status: 'success',
      accessToken: accessToken,
      email: 'demo@demo.fr',
      password: 'demo',
    };
  }
}
