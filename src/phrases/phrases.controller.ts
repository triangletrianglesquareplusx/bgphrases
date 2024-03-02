import {
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  Req,
} from '@nestjs/common';
import { CreatePhraseDto } from './dtos/CreatePhrase.dto';
import { PhrasesService } from './phrases.service';

@Controller('phrases')
export class PhrasesController {
  constructor(private readonly phrasesService: PhrasesService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  createPhrase(
    @Body() { displayName, ...createPhraseDto }: CreatePhraseDto,
    @Req() request: any,
  ) {
    console.log(request.body);
    return this.phrasesService.createPhrase(displayName, createPhraseDto);
  }
}
