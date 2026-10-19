import { PartialType } from '@nestjs/mapped-types';
import { CreateEmbeddingDto } from './create-embedding.dto.js';

export class UpdateEmbeddingDto extends PartialType(CreateEmbeddingDto) {}
