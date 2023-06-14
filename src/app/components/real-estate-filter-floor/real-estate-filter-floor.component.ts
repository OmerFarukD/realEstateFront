import {Component, OnInit} from '@angular/core';
import {RealEstateResponseDto} from "../../models/RealEstate/realEstateResponseDto";
import {RealestateService} from "../../services/realestate.service";
import {RealEstatehelperService} from "../../services/real-estatehelper.service";
import {RealEstateType} from "../../models/enums/realEstateType";
import {WarmingType} from "../../models/enums/warmingType";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-real-estate-filter-floor',
  templateUrl: './real-estate-filter-floor.component.html',
  styleUrls: ['./real-estate-filter-floor.component.css']
})
export class RealEstateFilterFloorComponent implements OnInit{
  realEstateResponseList: RealEstateResponseDto[]=[];
  min:number;
  max:number;
  constructor(private realestateService:RealestateService,
              private realEstateHelper:RealEstatehelperService,
              private formBuilder:FormBuilder) {}

  form : FormGroup= new FormGroup({
    min: new FormControl(0),
    max: new FormControl(0)
  })
  ngOnInit(): void {
    if (this.realEstateResponseList.length == 0) {
      this.getall();
    } else {
      this.form=this.formBuilder.group({
        min:["",Validators.required],
        max:["",Validators.required]
      });
    }
  }
  onChange():void{
    if (this.form.invalid){
      return;
    }
    this.min=this.form.value["min"]
    this.max=this.form.value["max"];
    this.getAllByFloorRange(this.min,this.max);
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
  getAllByFloorRange(min:number, max:number){
    this.realestateService.getByFloorsRange(min, max).subscribe({
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
