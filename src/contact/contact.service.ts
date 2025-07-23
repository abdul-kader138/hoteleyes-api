import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { MailerService } from 'src/mailer/mailer.service';
import { Helper } from 'src/utils/helper';
import Lang from '../lang/lang';
import { ContactDto } from './dto/contact.dto';

@Injectable()
export class ContactService {
  constructor(
    private prisma: PrismaService,
    private readonly mailerService: MailerService,
  ) {}

  private helper = new Helper();

  async saveMessage(dto: ContactDto) {
    const contact = await this.prisma.contactMessage.create({
      data: { ...dto },
    });

    if (!contact) {
      throw new ConflictException(Lang.unknown_error);
    }
    await this.mailerService.sendMail(
      dto.email,
      Lang.confirm_your_contact,
      this.helper.contact_form_submission_email(
        dto.name,
        dto.subject,
        dto.message,
      ),
    );
    return { message: Lang.subscription_email_sent_message };
  }

  async searchCountries(query: string) {
    return this.prisma.country.findMany({
      where: {
        name: {
          contains: query,
          //mode: 'insensitive', // case-insensitive search
        },
      },
      orderBy: { name: 'asc' },
    });
  }
}
