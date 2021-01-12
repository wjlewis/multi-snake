import { IsString } from 'class-validator';

export class LeaveInfo {
  @IsString()
  id: string;
}
