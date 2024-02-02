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
import { CheckoutDto } from '../dto/checkout.dto';

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
}
