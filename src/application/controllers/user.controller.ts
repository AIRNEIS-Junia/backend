import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from '../../domain/services/user.service';
import { JwtReqUser } from '../../infrastructure/types/jwt.type';
import { AuthGuard } from '@nestjs/passport';
import {
  UserAddressCreateDto,
  UserAddressUpdateDto,
  UserFindByIdDto,
  UserUpdateDto,
} from '../dto/user.dto';
import { Response } from 'express';

@Controller('user')
@ApiTags('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard('jwt-at'))
  @UsePipes(new ValidationPipe())
  async findMe(@Req() req: JwtReqUser) {
    return req.user;
  }

  @Get('all')
  @UseGuards(AuthGuard('jwt-at'))
  async findAll(@Res() res: Response) {
    const users = await this.userService.findAllUsers();
    const total = users.length;

    res.set('Content-Range', `users 0-10/${total}`);
    res.json(users);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt-at'))
  @UsePipes(new ValidationPipe())
  async update(@Body() body: UserUpdateDto, @Req() req: JwtReqUser) {
    return this.userService.update(body, req.user.id);
  }

  @Get('address')
  @UseGuards(AuthGuard('jwt-at'))
  @UsePipes(new ValidationPipe())
  async findAllAddress(@Req() req: JwtReqUser) {
    return this.userService.findAllAddressByUserId(req.user.id);
  }

  @Post('address')
  @UseGuards(AuthGuard('jwt-at'))
  @UsePipes(new ValidationPipe())
  async createAddress(
    @Body() body: UserAddressCreateDto,
    @Req() req: JwtReqUser,
  ) {
    console.log(req.user);
    return this.userService.createAddress(body, req.user.id);
  }

  @Patch('address/:id')
  @UseGuards(AuthGuard('jwt-at'))
  @UsePipes(new ValidationPipe())
  async updateAddress(
    @Param() params: UserFindByIdDto,
    @Body() body: UserAddressUpdateDto,
    @Req() req: JwtReqUser,
  ) {
    return this.userService.updateAddress(params.id, body, req.user.id);
  }

  @Delete('address/:id')
  @UseGuards(AuthGuard('jwt-at'))
  @UsePipes(new ValidationPipe())
  async deleteAddress(
    @Param() params: UserFindByIdDto,
    @Req() req: JwtReqUser,
  ) {
    return this.userService.deleteAddress(params.id, req.user.id);
  }
}
