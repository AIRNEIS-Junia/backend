import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login() {
    return {
      status: 'success',
      message: 'login working',
    };
  }
}
