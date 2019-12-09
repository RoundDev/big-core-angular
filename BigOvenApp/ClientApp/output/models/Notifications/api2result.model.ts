import { SystemObject } from './systemobject.model'

export interface API2Result {
  Message: string;
  StatusCode: number;
  Data: SystemObject;
}
