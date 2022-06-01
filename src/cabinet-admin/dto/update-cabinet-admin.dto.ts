import { PartialType } from '@nestjs/mapped-types';
import { CreateCabinetAdminDto } from './create-cabinet-admin.dto';

export class UpdateCabinetAdminDto extends PartialType(CreateCabinetAdminDto) {}
