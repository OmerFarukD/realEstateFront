import {CustomerType} from "../enums/customerType";

export interface CustomerUpdateRequestDto{
  customerId:number;
  workplaceId:number;
  name:string;
  surname:string;
  phoneNumber:string;
  email:string;
  customerType:CustomerType;
}
