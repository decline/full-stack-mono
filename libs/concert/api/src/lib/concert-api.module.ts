import { Module } from '@nestjs/common';
import { ConcertController } from './concert/concert.controller';

@Module({
  controllers: [ConcertController],
  providers: [],
  exports: [],
})
export class ConcertApiModule {}
