import {EnumValue} from "@angular/compiler-cli/src/ngtsc/partial_evaluator";
import {RealEstateType} from "../models/enums/realEstateType";
import {WarmingType} from "../models/enums/warmingType";
import {CustomerType} from "../models/enums/customerType";

export class EnumTypeClassHelper{

  static  changeRealEstateClass(type: RealEstateType) :string{
    switch (type){
      case RealEstateType.RESIDENTIAL_PROPERTIES:
        return "badge rounded-pill badge-soft-primary text-dark";
      case RealEstateType.COMMERCIAL_PROPERTIES:
        return "badge rounded-pill badge-soft-secondary text-dark";
      case RealEstateType.INDUSTRIAL_PROPERTIES:
        return "badge rounded-pill badge-soft-success text-dark";
      default:return "badge bg-light text-dark";
    }
  }
  static  changeWarmingClass(type:WarmingType) :string{
    switch (type){
      case WarmingType.CENTRAL_HEATING:
        return "badge badge-soft-primary text-dark";
      case WarmingType.INFRARED_HEATING:
        return "badge badge-soft-secondary text-dark";
      case WarmingType.ELECTRIC_HEATING:
        return "badge badge-soft-success text-dark";
      case WarmingType.NATURAL_GAS_HEATING:
        return "badge badge-soft-info text-dark";
      case WarmingType.FIREPLACE_AND_WOOD_STOVE:
        return "badge badge-soft-danger text-dark";
      default:return "badge bg-light text-dark";
    }
  }

  static changeCustomerClass(type: CustomerType):string{
    switch (type){
      case CustomerType.REAL_ESTATE:
        return "badge bg-primary";
      case CustomerType.THE_LESSOR:
        return "badge bg-secondary";
      case CustomerType.SELLING:
        return "badge bg-light text-dark";
      case CustomerType.RENTER:
        return "badge bg-dark dark__bg-dark";
      default:return "badge bg-light text-dark";
    }
  }
}
