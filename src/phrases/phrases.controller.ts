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
    @Body() { displayName, tagsInUse, ...createPhraseDto }: CreatePhraseDto,
    @Req() request: any,
  ) {
    console.log(request.body.tagsInUse);
    return this.phrasesService.createPhrase(
      displayName,
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
}
