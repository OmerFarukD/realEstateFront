import {Result} from "./result";

export interface SingleDataResult<T> extends Result{
  data: T;
}
