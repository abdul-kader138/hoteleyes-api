import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
import { ContactModule } from './contact/contact.module';
import { NewsletterModule } from './newsletter/newsletter.module';
import { PhotosModule } from './photos/photos.module';
import { WalletModule } from './websoket/wallet/wallet.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PhotosModule,
    ContactModule,
    ArticlesModule,
    NewsletterModule,
    WalletModule,
    PrismaModule,
  ],
})
export class AppModule {}
