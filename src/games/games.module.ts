import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';


@Module({
  imports: [
    MulterModule.register({
      storage: memoryStorage(),
    }),
  ],  
  controllers: [GamesController],
  providers: [GamesService]
})
export class GamesModule {}
