import {WarmingType} from "../enums/warmingType";
import {RealEstateType} from "../enums/realEstateType";

export interface RealEstateUpdateRequestDto{
  realEstateId:number;
  customerId:number;
  m2:number;
  title:string;
  description:string;
  numberOfRooms:number;
  numberOfFloors:number;
  warmingType:WarmingType;
  realEstateType:RealEstateType
}
