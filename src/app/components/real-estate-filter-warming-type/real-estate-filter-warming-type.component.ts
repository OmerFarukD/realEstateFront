import {Component, OnInit} from '@angular/core';
import {RealEstateResponseDto} from "../../models/RealEstate/realEstateResponseDto";
import {RealestateService} from "../../services/realestate.service";
import {RealEstatehelperService} from "../../services/real-estatehelper.service";
import {RealEstateType} from "../../models/enums/realEstateType";
import {WarmingType} from "../../models/enums/warmingType";

@Component({
  selector: 'app-real-estate-filter-warming-type',
  templateUrl: './real-estate-filter-warming-type.component.html',
  styleUrls: ['./real-estate-filter-warming-type.component.css']
})
export class RealEstateFilterWarmingTypeComponent implements OnInit{

  realEstateResponseList: RealEstateResponseDto[]=[];
  typeWarmingKeys=[];
  selectedWarmingType:WarmingType;

  constructor(private realestateService:RealestateService,private realEstateHelper:RealEstatehelperService) {
  }

  ngOnInit(): void {
    if (this.realEstateResponseList.length == 0) {
      this.getall();
    }
      // @ts-ignore
      this.typeWarmingKeys=Object.values(WarmingType);


  }
  onSelectWarmingChange(event:Event){
    // @ts-ignore
    this.selectedWarmingType=(<HTMLSelectElement>event.target).value;
    this.getAllByWarmingType(this.selectedWarmingType);
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
  setRealEstateClass(type:RealEstateType):string{
    return this.realEstateHelper.setRealEstateTypeClass(type);
  }
  setWarmingClass(type:WarmingType):string{
    return this.realEstateHelper.setWarmingTypeClass(type);
  }
  getRealEstateDisplayName(type:RealEstateType){
    return this.realEstateHelper.getRealEstateTypeDisplayName(type);
  }
  getWarmingDisplayName(type:WarmingType){
    return this.realEstateHelper.getWarmingTypeDisplayName(type);
  }

  getAllByWarmingType(type: WarmingType){
    this.realestateService.getByWarmingType(type).subscribe({
      next:response=>{
        if (response.success){
          this.realEstateResponseList=response.data;
        }
      },
      error: err => {
        alert(err.message)
      }
    })
  }
}
