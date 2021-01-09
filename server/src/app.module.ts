import { Module } from '@nestjs/common';
import { DenModule } from './den/den.module';
import { InfoModule } from './info/info.module';
import { ArenaModule } from './arena/arena.module';
import { SyncModule } from './sync/sync.module';

@Module({
  imports: [DenModule, InfoModule, ArenaModule, SyncModule],
})
export class AppModule {}
