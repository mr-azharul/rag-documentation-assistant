import { Injectable } from '@nestjs/common';
import { CreateAskDto } from './dto/create-ask.dto.js';
import { UpdateAskDto } from './dto/update-ask.dto.js';

@Injectable()
export class AskService {
  create(createAskDto: CreateAskDto) {
    return 'This action adds a new ask';
  }

  findAll() {
    return `This action returns all ask`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ask`;
  }

  update(id: number, updateAskDto: UpdateAskDto) {
    return `This action updates a #${id} ask`;
  }

  remove(id: number) {
    return `This action removes a #${id} ask`;
  }
}
