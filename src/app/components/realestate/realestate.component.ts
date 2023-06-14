import {Component, OnInit} from '@angular/core';
import {RealestateService} from "../../services/realestate.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ListDataResult} from "../../models/Result/listDataResult";
import {RealEstateResponseDto} from "../../models/RealEstate/realEstateResponseDto";
import {RealEstateDetailDto} from "../../models/RealEstate/realEstateDetailDto";
import {WarmingType} from "../../models/enums/warmingType";
import {WarmingTypesHelper} from "../../helpers/warmingTypeHelper";
import {RealEstateType} from "../../models/enums/realEstateType";
import {RealEstateTypeHelper} from "../../helpers/realEstateTypeHelper";
import {RealEstatehelperService} from "../../services/real-estatehelper.service";

@Component({
  selector: 'app-realestate',
  templateUrl: './realestate.component.html',
  styleUrls: ['./realestate.component.css']
})
export class RealestateComponent implements OnInit{

  realEstateResponseList: RealEstateResponseDto[]=[];
  realEstateDetailList: RealEstateDetailDto[]=[];
  filterText:string;
  constructor(private realestateService: RealestateService, private realEstateHelper: RealEstatehelperService) {
  }
  ngOnInit(): void {
    this.getall();
  }
  setRealEstateClass(type:RealEstateType):string{
    return this.realEstateHelper.setRealEstateTypeClass(type);
  }
  setWarmingClass(type:WarmingType):string{
    return this.realEstateHelper.setWarmingTypeClass(type);
  }
  getRealEstateTypeDisplayName(type: RealEstateType):string{
    return this.realEstateHelper.getRealEstateTypeDisplayName(type);
}
  getWarmingTypeDisplayName(type: WarmingType){
    return this.realEstateHelper.getWarmingTypeDisplayName(type);
}
  getall(){
    return this.realestateService.getAll().subscribe({
      next: response=>{
        if (response.success){
          this.realEstateResponseList=response.data;
        }
      },
      error: error=>{
        alert(error.response.message)
      }
    })
}
getAllDetails(){
    return this.realestateService.getDetails().subscribe({
      next:response=>{
        if (response.success){
          this.realEstateDetailList=response.data;
        }
      },
      error: error=>{
        alert(error.response.message)
      }
    })
}

  getDetailsByCustomerId(id: number){
    return this.realestateService.getDetailsByCustomerId(id).subscribe({
      next:response=>{
        if (response.success){
          this.realEstateDetailList=response.data
        }
      },
      error: error=>{
        alert(error.response.message)
    }
    })
  }
}
