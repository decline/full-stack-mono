import { ConcertApiModule } from '@full-stack-mono/concert/api';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConcertApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
