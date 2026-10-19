import { PartialType } from '@nestjs/mapped-types';
import { CreateVectorStoreDto } from './create-vector-store.dto.js';

export class UpdateVectorStoreDto extends PartialType(CreateVectorStoreDto) {}
