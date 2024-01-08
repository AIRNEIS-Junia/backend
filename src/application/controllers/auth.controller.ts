import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../domain/services/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthLoginDto } from '../dto/auth.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() body: AuthLoginDto) {
    return this.authService.login(body);
  }
}
