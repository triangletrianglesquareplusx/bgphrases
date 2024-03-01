import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreatePhraseDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  word: string;

  @IsString()
  @IsNotEmpty()
  definition: string;

  @IsString()
  @IsNotEmpty()
  example_usage: string;

  @IsNumber()
  @IsNotEmpty()
  user: number;
}
