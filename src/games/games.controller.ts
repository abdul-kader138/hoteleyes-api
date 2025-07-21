import {
    Controller
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GamesService } from './games.service';

// DTO to return after a successful upload
export class PhotoCreateOne {
  photo_id: number;
  serial: string;
}

@ApiTags('games')
@Controller('games')
export class GamesController {
    constructor(private readonly gamesService: GamesService) {}


}
