import { Controller, Get } from '@nestjs/common';
import { Info } from './types/info';

@Controller('info')
export class InfoController {
  @Get()
  info(): Info {
    return {
      info: 'multi-snake server',
    };
  }
}
