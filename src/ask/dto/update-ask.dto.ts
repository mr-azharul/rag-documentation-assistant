import { PartialType } from '@nestjs/mapped-types';
import { CreateAskDto } from './create-ask.dto.js';

export class UpdateAskDto extends PartialType(CreateAskDto) {}
