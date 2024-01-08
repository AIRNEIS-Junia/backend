import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { AuthLoginDto } from '../../application/dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}
  async login(data: AuthLoginDto) {
    const findEmail = await this.userRepository.findByEmail(data.email);

    if (!findEmail) throw new NotFoundException('EMAIL_OR_PASSWORD_WRONG');

    return {
      status: 'success',
      message: 'login working',
    };
  }
}
