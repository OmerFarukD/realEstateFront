import {CustomerType} from "../enums/customerType";

export interface CustomerResponseDto{
  customerId:number;
  name:string;
  surname:string;
  phoneNumber:string;
  email:string;
  customerType:CustomerType;
}
