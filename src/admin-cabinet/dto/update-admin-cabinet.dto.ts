import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminCabinetDto } from './create-admin-cabinet.dto';

export class UpdateAdminCabinetDto extends PartialType(CreateAdminCabinetDto) {}
