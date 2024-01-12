import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from '../../domain/services/user.service';
import { JwtReqUser } from '../../infrastructure/types/jwt.type';
import { AuthGuard } from '@nestjs/passport';
import {
  UserAddressCreateDto,
  UserFindByIdDto,
  UserUpdateDto,
} from '../dto/user.dto';

@Controller('user')
@ApiTags('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard('jwt-at'))
  async findMe(@Req() req: JwtReqUser) {
    return req.user;
  }

  @Patch()
  @UseGuards(AuthGuard('jwt-at'))
  async update(@Body() body: UserUpdateDto, @Req() req: JwtReqUser) {
    return this.userService.update(body, req.user.id);
  }

  @Get('address')
  @UseGuards(AuthGuard('jwt-at'))
  async findAllAddress(@Req() req: JwtReqUser) {
    return this.userService.findAllAddressByUserId(req.user.id);
  }

  @Post('address')
  @UseGuards(AuthGuard('jwt-at'))
  async createAddress(
    @Body() body: UserAddressCreateDto,
    @Req() req: JwtReqUser,
  ) {
    return this.userService.createAddress(body, req.user.id);
  }

  @Patch('address/:id')
  @UseGuards(AuthGuard('jwt-at'))
  async updateAddress(
    @Param() params: UserFindByIdDto,
    @Body() body: UserAddressCreateDto,
    @Req() req: JwtReqUser,
  ) {
    return this.userService.updateAddress(params.id, body, req.user.id);
  }

  @Delete('address/:id')
  @UseGuards(AuthGuard('jwt-at'))
  async deleteAddress(
    @Param() params: UserFindByIdDto,
    @Req() req: JwtReqUser,
  ) {
    return this.userService.deleteAddress(params.id, req.user.id);
  }
}
