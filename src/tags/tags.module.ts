import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { PrismaService } from 'src/shared/prisma.service';
import { TagsController } from './tags.controller';

@Module({
  imports: [],
  controllers: [TagsController],
  providers: [TagsService, PrismaService],
})
export class TagsModule {}
