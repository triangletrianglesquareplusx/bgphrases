import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  deleteAllTags() {
    return this.prisma.tag.deleteMany({});
  }
}
