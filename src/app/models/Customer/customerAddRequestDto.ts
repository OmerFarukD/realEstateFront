import {CustomerType} from "../enums/customerType";

export interface CustomerAddRequestDto{
  workplaceId:number;
  name:string;
  surname:string;
  phoneNumber:string;
  email:string;
  customerType:CustomerType;
}
