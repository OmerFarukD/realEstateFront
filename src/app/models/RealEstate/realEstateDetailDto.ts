import {WarmingType} from "../enums/warmingType";
import {RealEstateType} from "../enums/realEstateType";

export interface RealEstateDetailDto{
  realEstateId:number;
  customerId:number;
  name:string;
  surname:string;
  title:string;
  description:string;
  m2:number;
  numberOfRooms:number;
  numberOfFloors:number;
  buildingFloor:number;
  warmingType:WarmingType;
  realEstateType:RealEstateType;

}
