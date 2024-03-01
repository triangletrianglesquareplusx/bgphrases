import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PhrasesService {
  constructor(private readonly prisma: PrismaService) {}

  createPhrase(data: Prisma.PhraseCreateInput) {
    /*in order to create a phrase
    1.find a user by displayName(that is unique)
    2.If user found, use their id in the POST
    3. If no user - create a user and use their id in the POST
    
    */
    return this.prisma.phrase.create({ data });
  }
}
