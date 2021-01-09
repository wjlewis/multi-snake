import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { JoinInfo } from './types/join-info';
import { Denizen } from './types/denizen';
import { HandleInfo } from './types/handle-info';
import { VacancyInfo } from './types/vacancy-info';

@Injectable()
export class DenService {
  static readonly MAX_DEN_SIZE = 20;
  private den: Denizen[] = [];

  join(info: JoinInfo): Denizen {
    const { handle } = info;

    this.checkFit();
    this.checkHandle(handle);

    const denizen = { id: uuid(), handle };
    this.den.push(denizen);

    return denizen;
  }

  vacancyInfo(): VacancyInfo {
    return {
      vacancy: this.hasVacancy(),
    };
  }

  handleInfo(handle: string): HandleInfo {
    return {
      handle,
      available: this.handleAvailable(handle),
    };
  }

  private hasVacancy(): boolean {
    return this.den.length < DenService.MAX_DEN_SIZE;
  }

  private handleAvailable(handle: string): boolean {
    const handlesInUse = this.den.map(({ handle }) => handle);
    return !handlesInUse.includes(handle);
  }

  private checkFit(): void {
    if (!this.hasVacancy()) {
      throw new BadRequestException('The den has no vacancy.');
    }
  }

  private checkHandle(handle: string): void {
    if (!this.handleAvailable(handle)) {
      throw new BadRequestException(`The handle "${handle}" is taken.`);
    }
  }
}
