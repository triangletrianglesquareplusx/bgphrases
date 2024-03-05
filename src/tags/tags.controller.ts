import { Controller, Post } from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post('del')
  async deleteAllTags() {
    try {
      const result = await this.tagsService.deleteAllTags();
      return result;
    } catch (error) {
      return { message: error.message };
    }
  }
}
