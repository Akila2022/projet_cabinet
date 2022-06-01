import { Module } from '@nestjs/common';
import { CabinetAdminService } from './cabinet-admin.service';
import { CabinetAdminController } from './cabinet-admin.controller';

@Module({
  controllers: [CabinetAdminController],
  providers: [CabinetAdminService]
})
export class CabinetAdminModule {}
