import { Injectable } from '@nestjs/common';
import { ContactRepository } from '../../infrastructure/repositories/contact.repository';
import { ContactCreateDto } from '../../application/dto/contact.dto';

@Injectable()
export class ContactService {
  constructor(private readonly contactRepository: ContactRepository) {}

  async create(data: ContactCreateDto) {
    return this.contactRepository.create(data);
  }
}
