import { Module } from '@nestjs/common';
import { AskService } from './ask.service.js';
import { AskController } from './ask.controller.js';

@Module({
  controllers: [AskController],
  providers: [AskService],
})
export class AskModule {}
