import { Injectable } from '@nestjs/common';
import { CheckoutRepository } from '../../infrastructure/repositories/checkout.repository';
import { CheckoutDto } from '../../application/dto/checkout.dto';

@Injectable()
export class CheckoutService {
  constructor(private readonly checkoutRepository: CheckoutRepository) {}

  findByUserId(id: string) {
    return this.checkoutRepository.findByUserId(id);
  }

  create(body: CheckoutDto) {
    return this.checkoutRepository.create(body);
  }

  delete(id: string) {
    return this.checkoutRepository.delete(id);
  }

  modify(id: string, body: CheckoutDto) {
    return this.checkoutRepository.modify(id, body);
  }
}
