import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ContactService } from './contact.service';
import { ContactDto } from './dto/contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async sendMessage(@Body() dto: ContactDto) {
    return await this.contactService.saveMessage(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/countries/search')
  async searchCountries(@Query('q') query: string) {
    return this.contactService.searchCountries(query);
  }
}
