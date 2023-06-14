import {Result} from "./result";
export interface ListDataResult<T> extends Result{
  data : T[];
}
