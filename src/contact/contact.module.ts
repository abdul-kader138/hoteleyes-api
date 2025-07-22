import { Module } from '@nestjs/common';
import { MailerModule } from 'src/mailer/mailer.module';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';

@Module({
  imports: [MailerModule],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
