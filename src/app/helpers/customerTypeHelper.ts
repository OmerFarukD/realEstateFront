import {CustomerType} from "../models/enums/customerType";

export class CustomerTypeHelper{
 static getDisplayName(type : CustomerType):string{
    switch (type){
      case CustomerType.REAL_ESTATE:
        return "Emlakçı";
      case CustomerType.THE_LESSOR:
        return "Kiralık Emlak Sahibi";
      case CustomerType.SELLING:
        return "Satıcı";
      case CustomerType.RENTER:
        return "Kiracı";
      default:
        return "";
    }
  }
}
