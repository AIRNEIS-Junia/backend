import { ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CheckoutService } from '../../domain/services/checkout.service';
import {
  CheckoutDto,
  CheckoutAddressDto,
  CheckoutItemDto,
} from '../dto/checkout.dto';

@Controller('checkout')
@ApiTags('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Get(':id')
  async findByUserId(@Param('id') id: string) {
    return this.checkoutService.findByUserId(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() body: CheckoutDto) {
    return this.checkoutService.create(body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.checkoutService.delete(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async modify(@Param('id') id: string, @Body() body: CheckoutDto) {
    return this.checkoutService.modify(id, body);
  }

  @Get()
  @UsePipes(new ValidationPipe())
  async findAll() {
    return this.checkoutService.findAll();
  }

  @Get('address/:id')
  @UsePipes(new ValidationPipe())
  getCheckoutAdressById(@Param('id') id: string) {
    return this.checkoutService.getCheckoutAdressById(id);
  }

  @Post('address')
  @UsePipes(new ValidationPipe())
  createCheckoutAdress(@Body() body: CheckoutAddressDto) {
    return this.checkoutService.createCheckoutAdress(body);
  }

  @Patch('address/:id')
  @UsePipes(new ValidationPipe())
  updateCheckoutAdress(
    @Param('id') id: string,
    @Body() body: CheckoutAddressDto,
  ) {
    return this.checkoutService.updateCheckoutAdress(id, body);
  }

  @Delete('address/:id')
  @UsePipes(new ValidationPipe())
  deleteCheckoutAdress(@Param('id') id: string) {
    return this.checkoutService.deleteCheckoutAdress(id);
  }

  @Get('items/:id')
  @UsePipes(new ValidationPipe())
  getCheckoutItemsById(@Param('id') id: string) {
    return this.checkoutService.getCheckoutItemsById(id);
  }

  @Post('items')
  @UsePipes(new ValidationPipe())
  createCheckoutItem(@Body() body: CheckoutItemDto) {
    return this.checkoutService.createCheckoutItem(body);
  }

  @Patch('items/:id')
  @UsePipes(new ValidationPipe())
  updateCheckoutItem(@Param('id') id: string, @Body() body: CheckoutItemDto) {
    return this.checkoutService.updateCheckoutItem(id, body);
  }

  @Delete('items/:id')
  @UsePipes(new ValidationPipe())
  deleteCheckoutItem(@Param('id') id: string) {
    return this.checkoutService.deleteCheckoutItem(id);
  }
}
