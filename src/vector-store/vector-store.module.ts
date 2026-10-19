import { Module } from '@nestjs/common';
import { VectorStoreService } from './vector-store.service.js';
import { VectorStoreController } from './vector-store.controller.js';

@Module({
  controllers: [VectorStoreController],
  providers: [VectorStoreService],
})
export class VectorStoreModule {}
