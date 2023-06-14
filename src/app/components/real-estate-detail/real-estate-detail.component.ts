import {Component, OnInit} from '@angular/core';
import {RealestateService} from "../../services/realestate.service";
import {RealEstatehelperService} from "../../services/real-estatehelper.service";
import {RealEstateDetailDto} from "../../models/RealEstate/realEstateDetailDto";
import {ActivatedRoute} from "@angular/router";
import {RealEstateType} from "../../models/enums/realEstateType";
import {WarmingType} from "../../models/enums/warmingType";

@Component({
  selector: 'app-real-estate-detail',
  templateUrl: './real-estate-detail.component.html',
  styleUrls: ['./real-estate-detail.component.css']
})
export class RealEstateDetailComponent implements OnInit{

  detail:RealEstateDetailDto;
  constructor(private realEstateService:RealestateService,
              private helper:RealEstatehelperService,
              private activatedRoute:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["realEstateId"]){
        this.getDetails(params["realEstateId"]);
      }else {
        alert("Emlak bilgisi bulunamadı.")
      }
    })
  }
  getRealEstateDisplayName(type:RealEstateType){
    return this.helper.getRealEstateTypeDisplayName(type);
  }
  setRealEstateClass(type:RealEstateType):string{
    return this.helper.setRealEstateTypeClass(type);
  }
  setWarmingClass(type:WarmingType):string{
    return this.helper.setWarmingTypeClass(type);
  }
  getWarmingDisplayName(type:WarmingType){
    return this.helper.getWarmingTypeDisplayName(type);
  }
  getDetails(id:number){
    this.realEstateService.getDetailByRealEstateId(id).subscribe({
      next:response=>{
        if (response.success){
          this.detail=response.data;
        }
      },
      error: err => {
        alert(err.message)
      }
    })
  }

}
