import { PartialType } from '@nestjs/mapped-types';
import { CreateIngestionDto } from './create-ingestion.dto.js';

export class UpdateIngestionDto extends PartialType(CreateIngestionDto) {}
