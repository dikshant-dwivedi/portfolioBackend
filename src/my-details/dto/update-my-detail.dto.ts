import { PartialType } from '@nestjs/mapped-types';
import { CreateMyDetailDto } from './create-my-detail.dto';

export class UpdateMyDetailDto extends PartialType(CreateMyDetailDto) {}
