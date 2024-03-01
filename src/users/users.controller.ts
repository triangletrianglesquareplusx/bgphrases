import {
  Controller,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller('authors')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.getUserById(id);
    if (!user) throw new HttpException('Author Not Found', 404);
    return user;
  }

  @Get('find/:displayName')
  async getUserByDisplayName(@Param('displayName') displayName: string) {
    const user = await this.usersService.getUserByDisplayName(displayName);
    if (!user) return null;
    return user;
  }

  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}
