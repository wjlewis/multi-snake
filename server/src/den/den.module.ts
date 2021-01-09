import { Module } from '@nestjs/common';
import { DenController } from './den.controller';
import { DenService } from './den.service';

@Module({
  controllers: [DenController],
  providers: [DenService],
  exports: [DenService],
})
export class DenModule {}
