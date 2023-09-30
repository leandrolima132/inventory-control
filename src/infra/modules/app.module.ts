import { AppService } from '@application/services/app.service';
import { Module } from '@nestjs/common';
import { DataBaseModule } from './database.module';

@Module({
  imports: [DataBaseModule],
  providers: [AppService],
})
export class AppModule {}
