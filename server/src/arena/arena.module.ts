import { Module } from '@nestjs/common';
import { DenModule } from '../den/den.module';
import { ArenaService } from './arena.service';

@Module({
  imports: [DenModule],
  providers: [ArenaService],
})
export class ArenaModule {}
