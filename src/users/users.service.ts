import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUserById(id: number) {
    return this.prisma.author.findUnique({ where: { id } });
  }

  /*for the time being we will allow finding 
  author by displayName since in the schema we have confirmed that
  displayName is unique
  */

  getUserByDisplayName(displayName: string) {
    return this.prisma.author.findUnique({ where: { displayName } });
  }
  createUser(data: Prisma.AuthorCreateInput) {
    return this.prisma.author.create({ data });
  }
}
