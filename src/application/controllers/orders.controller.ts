import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { JwtReqUser } from '../../infrastructure/types/jwt.type';
import { OrderCreateDto, OrderDto } from '../dto/order.dto';
import { OrdersService } from '../../domain/services/orders.service';

@Controller('orders')
@ApiTags('orders')
@ApiBearerAuth()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UseGuards(AuthGuard('jwt-at'))
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Create an order' })
  @ApiResponse({
    status: 201,
    description: 'The order has been successfully created.',
    type: OrderDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async createOrder(
    @Body() orderCreateDto: OrderCreateDto,
    @Req() req: JwtReqUser,
  ) {
    return this.ordersService.createOrder(orderCreateDto, req.user.id);
  }

  @Get()
  @UseGuards(AuthGuard('jwt-at'))
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Get orders of the authenticated user' })
  @ApiResponse({
    status: 200,
    description: 'Return the list of orders.',
    type: [OrderDto],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async getUserOrders(@Req() req: JwtReqUser) {
    return this.ordersService.getUserOrders(req.user.id);
  }
}
