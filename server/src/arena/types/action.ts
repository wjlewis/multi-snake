import { ActionDirection } from './action-direction';

export interface Action {
  id: string;
  direction: ActionDirection;
}
