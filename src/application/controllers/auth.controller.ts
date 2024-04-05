import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from '../../domain/services/auth.service';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  AuthLoginDto,
  AuthRefreshTokenDto,
  AuthRegisterDto,
} from '../dto/auth.dto';
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
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  async login(@Body() body: AuthLoginDto): Promise<AuthLoginResponse> {
    return this.authService.login(body);
  }

  @Post('register')
  @ApiCreatedResponse({
    description: 'Registration success',
    type: AuthRegisterResponse,
  })
  @ApiBadRequestResponse({
    description: 'Registration error',
    type: CommonBadRequestResponse,
  })
  @HttpCode(201)
  @UsePipes(new ValidationPipe())
  async register(@Body() body: AuthRegisterDto): Promise<AuthRegisterResponse> {
    return this.authService.register(body);
  }

  @Get('verify')
  @UseGuards(AuthGuard('jwt-at'))
  @UsePipes(new ValidationPipe())
  async verify(@Req() req: JwtReqUser) {
    console.log(req.user);
    return {
      status: 'success',
      message: 'ok',
    };
  }

  @Post('refresh')
  async refresh(
    @Body() body: AuthRefreshTokenDto,
  ): Promise<AuthRefreshResponse> {
    return this.authService.refresh(body.refreshToken);
  }
}
