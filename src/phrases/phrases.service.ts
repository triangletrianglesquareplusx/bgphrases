import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PhrasesService {
  constructor(private readonly prisma: PrismaService) {}

  async createPhrase(
    displayName,
    tagsInUse,
    data: Prisma.PhraseCreateWithoutAuthorInput,
  ) {
    try {
      const user = await this.prisma.author.findUnique({
        where: { displayName },
      });
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
            tags: {
              connectOrCreate: tagsInUse.map((tag) => {
                return {
                  where: tag,
                  create: tag,
                };
              }),
            },
          },
        });
        return phrase;
      }
    } catch (error) {
      return { message: error.message };
    }
  }

  async getAllPhrases() {
    return this.prisma.phrase.findMany();
  }

  async getAllTagsOfSpecificPhrase(id: number) {
    return this.prisma.phrase.findUnique({
      where: { id },
      include: {
        tags: true,
      },
    });
  }
}
