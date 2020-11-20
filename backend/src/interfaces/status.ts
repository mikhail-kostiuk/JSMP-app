import { StatusState } from '../constants/statusState';

export interface Status {
  state: StatusState;
  updated: Date;
}
