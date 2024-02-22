import { Injectable } from '@nestjs/common';
import { CheckoutRepository } from '../../infrastructure/repositories/checkout.repository';
import {
  CheckoutDto,
  CheckoutAddressDto,
  CheckoutItemDto,
} from '../../application/dto/checkout.dto';

@Injectable()
export class CheckoutService {
  constructor(private readonly checkoutRepository: CheckoutRepository) {}

  findByUserId(id: string) {
    return this.checkoutRepository.findByUserId(id);
  }

  create(body: CheckoutDto) {
    return this.checkoutRepository.create({
      userId: body.userId,
      status: body.status,
    });
  }

  delete(id: string) {
    return this.checkoutRepository.delete(id);
  }

  modify(id: string, body: CheckoutDto) {
    return this.checkoutRepository.modify(id, body);
  }

  findAll() {
    return this.checkoutRepository.findAll();
  }

  getCheckoutAdressById(id: string) {
    return this.checkoutRepository.getCheckoutAdressById(id);
  }

  createCheckoutAdress(body: CheckoutAddressDto) {
    return this.checkoutRepository.createCheckoutAdress(body);
  }

  updateCheckoutAdress(id: string, body: CheckoutAddressDto) {
    return this.checkoutRepository.updateCheckoutAdress(id, body);
  }

  deleteCheckoutAdress(id: string) {
    return this.checkoutRepository.deleteCheckoutAdress(id);
  }

  getCheckoutItemsById(id: string) {
    return this.checkoutRepository.getCheckoutItemsById(id);
  }

  createCheckoutItem(body: CheckoutItemDto) {
    return this.checkoutRepository.createCheckoutItem(body);
  }

  updateCheckoutItem(id: string, body: CheckoutItemDto) {
    return this.checkoutRepository.updateCheckoutItem(id, body);
  }

  deleteCheckoutItem(id: string) {
    return this.checkoutRepository.deleteCheckoutItem(id);
  }
}
