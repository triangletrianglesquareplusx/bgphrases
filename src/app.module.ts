import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PhrasesModule } from './phrases/phrases.module';
import { TagsModule } from './tags/tags.module';
@Module({
  imports: [UsersModule, PhrasesModule, TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
