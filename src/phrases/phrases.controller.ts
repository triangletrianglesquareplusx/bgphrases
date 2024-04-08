import {
  Controller,
  Post,
  Patch,
  UsePipes,
  ValidationPipe,
  Body,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreatePhraseDto } from './dtos/CreatePhrase.dto';
import { PhrasesService } from './phrases.service';

@Controller('phrases')
export class PhrasesController {
  constructor(private readonly phrasesService: PhrasesService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  createPhrase(
    @Body()
    { displayName, tagsInUse, location, ...createPhraseDto }: CreatePhraseDto,
  ) {
    return this.phrasesService.createPhrase(
      displayName,
      location,
      tagsInUse,
      createPhraseDto,
    );
  }

  @Patch('incrlike/:id')
  increaseSpecificPhraseLikes(@Param('id', ParseIntPipe) id: number) {
    this.phrasesService.updatePhraseLikes(id);
  }

  @Patch('incrdislike/:id')
  increaseSpecificPhraseDislikes(@Param('id', ParseIntPipe) id: number) {
    this.phrasesService.updatePhraseDislikes(id);
  }

  @Get('all')
  getAllPhrases() {
    return this.phrasesService.getAllPhrases();
  }

  @Get(':id')
  getTagsOfSpecificPhrase(@Param('id', ParseIntPipe) id: number) {
    return this.phrasesService.getAllTagsOfSpecificPhrase(id);
  }

  @Get('/author/:id')
  getAllPhrasesOfSpecificAuthor(@Param('id', ParseIntPipe) id: number) {
    return this.phrasesService.getAllPhrasesOfSpecificAuthor(id);
  }

  @Get('/multiple/:title')
  getAllPhrasesWithSpecificName(@Param('title') title: string) {
    console.log(`title is ${title}`);
    return this.phrasesService.getAllPhrasesBySpecificTitle(title);
  }
}
