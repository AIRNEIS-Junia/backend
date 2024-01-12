import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from '../../domain/services/auth.service';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthLoginDto, AuthRegisterDto } from '../dto/auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtReqUser } from '../../infrastructure/types/jwt.type';
import {
  AuthLoginResponse,
  AuthRefreshResponse,
  AuthRegisterResponse,
} from '../responses/auth.response';
import {
  CommonBadRequestResponse,
  CommonNotFoundResponse,
} from '../responses/common.response';

@Controller('auth')
@ApiTags('auth')
@ApiBearerAuth()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @ApiOkResponse({
    description: 'Login success',
    type: AuthLoginResponse,
  })
  @ApiNotFoundResponse({
    description: 'Email or password wrong',
    type: CommonNotFoundResponse,
  })
  async login(@Body() body: AuthLoginDto): Promise<AuthLoginResponse> {
    return this.authService.login(body);
  }

  @Post('register')
  @ApiOkResponse({
    description: 'Login success',
    type: AuthRegisterResponse,
  })
  @ApiBadRequestResponse({
    description: 'Login error',
    type: CommonBadRequestResponse,
  })
  async register(@Body() body: AuthRegisterDto): Promise<AuthRegisterResponse> {
    return this.authService.register(body);
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

  @Post('refresh')
  @UseGuards(AuthGuard('jwt-rt'))
  async refresh(@Req() req: JwtReqUser): Promise<AuthRefreshResponse> {
    return this.authService.refresh(req.user.id);
  }
}
