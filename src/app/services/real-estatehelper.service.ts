import { Injectable } from '@angular/core';
import {WarmingType} from "../models/enums/warmingType";
import {WarmingTypesHelper} from "../helpers/warmingTypeHelper";
import {RealEstateType} from "../models/enums/realEstateType";
import {RealEstateTypeHelper} from "../helpers/realEstateTypeHelper";
import {CustomerType} from "../models/enums/customerType";
import {CustomerTypeHelper} from "../helpers/customerTypeHelper";
import {EnumTypeClassHelper} from "../helpers/enumTypeClassHelper";

@Injectable({
  providedIn: 'root'
})
export class RealEstatehelperService {

  constructor() { }
  getWarmingTypeDisplayName(type: WarmingType): string{
    return WarmingTypesHelper.getDisplayName(type);
  }
  getRealEstateTypeDisplayName(type: RealEstateType): string{
    return RealEstateTypeHelper.getDisplayName(type);
  }
  getCustomerTypeDisplayName(type: CustomerType):string{
    return CustomerTypeHelper.getDisplayName(type);
  }

  setCustomerTypeClass(type: CustomerType): string{
    return EnumTypeClassHelper.changeCustomerClass(type);
  }
  setRealEstateTypeClass(type:RealEstateType): string{
    return EnumTypeClassHelper.changeRealEstateClass(type);
  }
  setWarmingTypeClass(type:WarmingType):string{
    return EnumTypeClassHelper.changeWarmingClass(type);
  }
}
