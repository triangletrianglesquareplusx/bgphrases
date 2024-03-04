import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { UsersService } from 'src/users/users.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PhrasesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly users: UsersService,
  ) {}

  async createPhrase(displayName, data: Prisma.PhraseCreateWithoutAuthorInput) {
    try {
      const user = await this.users.getUserByDisplayName(displayName);
      const { id } = user;
      if (user) {
        const phrase = await this.prisma.phrase.create({
          data: {
            ...data,
            author: {
              connect: {
                id,
              },
            },
          },
        });
        return phrase;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getAllPhrases() {
    return this.prisma.phrase.findMany();
  }
}
