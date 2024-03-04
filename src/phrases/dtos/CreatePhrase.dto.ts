import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  IsArray,
} from 'class-validator';

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

  @IsString()
  @IsNotEmpty()
  displayName: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  location?: string;

  @IsArray()
  tagsInUse: string[];
}
