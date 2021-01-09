import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DenService } from './den.service';
import { JoinInfo } from './types/join-info';
import { Denizen } from './types/denizen';
import { HandleInfo } from './types/handle-info';
import { VacancyInfo } from './types/vacancy-info';

@Controller('den')
export class DenController {
  constructor(private readonly den: DenService) {}

  @Post('join')
  join(@Body() info: JoinInfo): Denizen {
    return this.den.join(info);
  }

  @Get('vacancy')
  checkVacancy(): VacancyInfo {
    return this.den.vacancyInfo();
  }

  @Get('handle/:handle')
  handleInfo(@Param('handle') handle: string): HandleInfo {
    return this.den.handleInfo(handle);
  }
}
