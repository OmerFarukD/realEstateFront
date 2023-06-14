import {Component, OnInit} from '@angular/core';
import {RealEstateResponseDto} from "../../models/RealEstate/realEstateResponseDto";
import {RealestateService} from "../../services/realestate.service";
import {RealEstatehelperService} from "../../services/real-estatehelper.service";
import {RealEstateType} from "../../models/enums/realEstateType";
import {WarmingType} from "../../models/enums/warmingType";

@Component({
  selector: 'app-real-estate-filter-property-type',
  templateUrl: './real-estate-filter-property-type.component.html',
  styleUrls: ['./real-estate-filter-property-type.component.css']
})
export class RealEstateFilterPropertyTypeComponent implements OnInit{
  typeKeys=[];

  selectedPropType: RealEstateType;
  realEstateResponseList: RealEstateResponseDto[]=[];
  constructor(private realestateService:RealestateService,private realEstateHelper:RealEstatehelperService) {}

  ngOnInit(): void {
    if (this.realEstateResponseList.length == 0) {
      this.getall();
    }
      // @ts-ignore
      this.typeKeys=Object.values(RealEstateType);

    }
  getRealEstateDisplayName(type:RealEstateType){
    return this.realEstateHelper.getRealEstateTypeDisplayName(type);
  }
  getWarmingDisplayName(type:WarmingType){
    return this.realEstateHelper.getWarmingTypeDisplayName(type);
  }

  onSelectChange(event:Event){
    // @ts-ignore
    this.selectedPropType=(<HTMLSelectElement>event.target).value;
    this.getAllByRealEstateType(this.selectedPropType);
  }
  setRealEstateClass(type:RealEstateType):string{
    return this.realEstateHelper.setRealEstateTypeClass(type);
  }
  setWarmingClass(type:WarmingType):string{
    return this.realEstateHelper.setWarmingTypeClass(type);
  }
  getAllByRealEstateType(type:RealEstateType){
    this.realestateService.getByRealEstateType(type).subscribe({
      next:response=>{
        if (response.success){
          this.realEstateResponseList=response.data;
        }
      },
      error:err => {
        alert(err.message)
      }
    })
  }
  getall(){
    this.realestateService.getAll().subscribe({
      next:response=>{
        if (response.success){
          this.realEstateResponseList=response.data;
        }
      },
      error:err => {
        alert(err.message)
      }
    })
  }
}
