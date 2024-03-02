import { Module } from '@nestjs/common';
import { PhrasesController } from './phrases.controller';
import { PhrasesService } from './phrases.service';
import { PrismaService } from 'src/shared/prisma.service';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [],
  controllers: [PhrasesController],
  providers: [PhrasesService, PrismaService, UsersService],
})
export class PhrasesModule {}
