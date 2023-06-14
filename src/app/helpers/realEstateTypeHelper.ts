import {WarmingType} from "../models/enums/warmingType";
import {RealEstateType} from "../models/enums/realEstateType";

export class RealEstateTypeHelper{
  static getDisplayName(type: RealEstateType): string{
    switch (type){
      case RealEstateType.RESIDENTIAL_PROPERTIES:
        return "Yerleşim Yeri";
      case RealEstateType.COMMERCIAL_PROPERTIES:
        return "Ticari Amaçlı Emlak";
      case RealEstateType.INDUSTRIAL_PROPERTIES:
        return "Endüstriyel Emlak";
      default: return "";
    }
  }
}
