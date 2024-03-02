import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PhrasesModule } from './phrases/phrases.module';

@Module({
  imports: [UsersModule, PhrasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
