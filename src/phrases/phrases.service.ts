import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PhrasesService {
  constructor(private readonly prisma: PrismaService) {}

  async createPhrase(
    displayName,
    location,
    tagsInUse,
    values: Prisma.PhraseCreateWithoutAuthorInput,
  ) {
    try {
      console.log(location, 'in first line of code');
      const user = await this.prisma.author.findUnique({
        where: { displayName },
      });

      if (user) {
        const { id } = user;
        const phrase = await this.prisma.phrase.create({
          data: {
            ...values,
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
      } else if (!user) {
        console.log(values);
        console.log(displayName);
        console.log('location is', location);
        /*const newUser = await this.prisma.author.create({
          data: {
            displayName,
            location,
          },
        });*/
      }
    } catch (error) {
      return { message: error.message };
    }
  }

  async getAllPhrases() {
    return this.prisma.phrase.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  async getAllTagsOfSpecificPhrase(id: number) {
    return this.prisma.phrase.findUnique({
      where: { id },
      include: {
        tags: true,
      },
    });
  }

  async getAllPhrasesOfSpecificAuthor(id: number) {
    return this.prisma.phrase.findMany({
      where: {
        authorId: id,
      },
    });
  }

  async getAllPhrasesBySpecificTitle(title: string) {
    return this.prisma.phrase.findMany({
      where: {
        word: title,
      },
    });
  }

  async updatePhraseLikes(id: number) {
    return await this.prisma.phrase.update({
      where: {
        id: id,
      },
      data: {
        likes: { increment: 1 },
      },
    });
  }

  async updatePhraseDislikes(id: number) {
    return await this.prisma.phrase.update({
      where: {
        id: id,
      },
      data: {
        dislikes: { increment: 1 },
      },
    });
  }
}
