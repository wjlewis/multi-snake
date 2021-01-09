import { IsString } from 'class-validator';

export class JoinInfo {
  @IsString()
  handle: string;
}
