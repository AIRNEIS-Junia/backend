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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from '../../domain/services/user.service';
import { JwtReqUser } from '../../infrastructure/types/jwt.type';
import { AuthGuard } from '@nestjs/passport';
import {
  UserAddressCreateDto,
  UserAddressUpdateDto,
  UserCreditCardCreateDto,
  UserCreditCardUpdateDto,
  UserFindByIdDto,
  UserUpdateDto,
} from '../dto/user.dto';
import {
  UserCreateCardResponse,
  UserResponse,
} from '../../infrastructure/types/user.type';

@Controller('user')
@ApiTags('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard('jwt-at'))
  @UsePipes(new ValidationPipe())
  @ApiOkResponse({ type: UserResponse })
  async findMe(@Req() req: JwtReqUser) {
    return req.user;
  }

  @Patch()
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

  @Get('credit-card')
  @UseGuards(AuthGuard('jwt-at'))
  @UsePipes(new ValidationPipe())
  @ApiOkResponse({ type: [UserCreateCardResponse] })
  async findAllCreditCard(@Req() req: JwtReqUser) {
    return this.userService.findAllCreditCardByUserId(req.user.id);
  }

  @Post('credit-card')
  @UseGuards(AuthGuard('jwt-at'))
  @UsePipes(new ValidationPipe())
  @ApiOkResponse({ type: UserCreateCardResponse })
  async createCreditCard(
    @Body() body: UserCreditCardCreateDto,
    @Req() req: JwtReqUser,
  ) {
    return this.userService.createCreditCard(body, req.user.id);
  }

  @Patch('credit-card/:id')
  @UseGuards(AuthGuard('jwt-at'))
  @UsePipes(new ValidationPipe())
  async updateCreditCard(
    @Param() params: UserFindByIdDto,
    @Body() body: UserCreditCardUpdateDto,
    @Req() req: JwtReqUser,
  ) {
    return this.userService.updateCreditCard(params.id, body, req.user.id);
  }

  @Delete('credit-card/:id')
  @UseGuards(AuthGuard('jwt-at'))
  @UsePipes(new ValidationPipe())
  async deleteCreditCard(
    @Param() params: UserFindByIdDto,
    @Req() req: JwtReqUser,
  ) {
    return this.userService.deleteCreditCard(params.id, req.user.id);
  }
}
