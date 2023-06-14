import {WarmingType} from "../models/enums/warmingType";

export class WarmingTypesHelper {
  static getDisplayName(type: WarmingType): string {
    switch (type) {
      case WarmingType.CENTRAL_HEATING:
        return 'Merkezi ısıtma';
      case WarmingType.INFRARED_HEATING:
        return "KızılÖtesi Isıtma"

      case WarmingType.NATURAL_GAS_HEATING:
        return "Doğal Gaz Isıtma";
      case WarmingType.FIREPLACE_AND_WOOD_STOVE:
        return "Soba veya Şömineli Isıtma";
      case WarmingType.ELECTRIC_HEATING:
        return "Elektrikli Isıtma"
      default:
        return '';
    }
  }
}
