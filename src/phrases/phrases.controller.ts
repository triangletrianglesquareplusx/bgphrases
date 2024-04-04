import {
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  Req,
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
    @Req() request: any,
  ) {
    console.log(request.body.tagsInUse);
    console.log(`location is in body ${location}`);
    return this.phrasesService.createPhrase(
      displayName,
      location,
      tagsInUse,
      createPhraseDto,
    );
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
  getAllPhrasesWithSpecificName(title: string) {
    return this.phrasesService.getAllPhrasesBySpecificTitle(title);
  }
}
