import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KnowledgeBaseService } from './knowledge-base.service.js';
import { CreateKnowledgeBaseDto } from './dto/create-knowledge-base.dto.js';
import { UpdateKnowledgeBaseDto } from './dto/update-knowledge-base.dto.js';

@Controller('knowledge-base')
export class KnowledgeBaseController {
  constructor(private readonly knowledgeBaseService: KnowledgeBaseService) {}

  @Post()
  create(@Body() createKnowledgeBaseDto: CreateKnowledgeBaseDto) {
    return this.knowledgeBaseService.create(createKnowledgeBaseDto);
  }

  @Get()
  findAll() {
    return this.knowledgeBaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.knowledgeBaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKnowledgeBaseDto: UpdateKnowledgeBaseDto) {
    return this.knowledgeBaseService.update(+id, updateKnowledgeBaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.knowledgeBaseService.remove(+id);
  }
}
