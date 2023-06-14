import {WarmingType} from "../enums/warmingType";
import {RealEstateType} from "../enums/realEstateType";

export interface RealEstateResponseDto{
  realEstateId:number;
  m2:number;
  title:string;
  description:string;
  numberOfRooms:number;
  numberOfFloors:number;
  buildingFloor:number;
  warmingType:WarmingType;
  realEstateType:RealEstateType
}
