import { Concert } from '@full-stack-mono/concert/shared';
import { Controller, Get } from '@nestjs/common';

@Controller('concert')
export class ConcertController {
  @Get('all')
  loadConcerts(): Concert[] {
    return [
      { title: 'Metallica', location: 'Wiesbaden / Schlachthof', date: new Date('2023-09-19').toISOString() },
      { title: 'Iron Maiden', location: 'Mainz / KUZ', date: new Date('2023-04-08').toISOString() },
      { title: 'Anthrax', location: 'Frankfurt / Ponyhof', date: new Date('2023-05-05').toISOString() },
    ];
  }
}
