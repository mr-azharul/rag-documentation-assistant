import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { DocumentsModule } from './documents/documents.module.js';
import { KnowledgeBaseModule } from './knowledge-base/knowledge-base.module.js';
import { IngestionModule } from './ingestion/ingestion.module.js';
import { EmbeddingsModule } from './embeddings/embeddings.module.js';
import { VectorStoreModule } from './vector-store/vector-store.module.js';
import { RagModule } from './rag/rag.module.js';
import { LlmModule } from './llm/llm.module.js';
import { AskModule } from './ask/ask.module.js';

@Module({
  imports: [AuthModule, DocumentsModule, KnowledgeBaseModule, IngestionModule, EmbeddingsModule, VectorStoreModule, RagModule, LlmModule, AskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
