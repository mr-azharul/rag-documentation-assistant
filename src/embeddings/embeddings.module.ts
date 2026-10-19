import { Module } from '@nestjs/common';
import { EmbeddingsService } from './embeddings.service.js';
import { EmbeddingsController } from './embeddings.controller.js';

@Module({
  controllers: [EmbeddingsController],
  providers: [EmbeddingsService],
})
export class EmbeddingsModule {}
