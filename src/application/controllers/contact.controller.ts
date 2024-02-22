import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from '../../domain/services/contact.service';
import { ContactCreateDto } from '../dto/contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async send(@Body() body: ContactCreateDto) {
    return this.contactService.create(body);
  }
}
