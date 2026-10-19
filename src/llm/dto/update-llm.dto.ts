import { PartialType } from '@nestjs/mapped-types';
import { CreateLlmDto } from './create-llm.dto.js';

export class UpdateLlmDto extends PartialType(CreateLlmDto) {}
