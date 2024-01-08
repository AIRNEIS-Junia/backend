import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from '../../domain/services/auth.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthLoginDto } from '../dto/auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtReqUser } from '../../infrastructure/types/jwt.type';

@Controller('auth')
@ApiTags('auth')
@ApiBearerAuth()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() body: AuthLoginDto) {
    return this.authService.login(body);
  }

  @Post('register')
  async register() {
    return this.authService.register();
  }

  @Get('verify')
  @UseGuards(AuthGuard('jwt-at'))
  async verify(@Req() req: JwtReqUser) {
    console.log(req.user);
    return {
      status: 'success',
      message: 'ok',
    };
  }
}
