import { Module } from '@nestjs/common';
import { PhrasesController } from './phrases.controller';
import { PhrasesService } from './phrases.service';
import { PrismaService } from 'src/shared/prisma.service';

@Module({
  imports: [],
  controllers: [PhrasesController],
  providers: [PhrasesService, PrismaService],
})
export class PhrasesModule {}
