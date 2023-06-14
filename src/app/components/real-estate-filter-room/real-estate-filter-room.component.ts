import {Component, OnInit} from '@angular/core';
import {RealEstateResponseDto} from "../../models/RealEstate/realEstateResponseDto";
import {RealestateService} from "../../services/realestate.service";
import {RealEstatehelperService} from "../../services/real-estatehelper.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RealEstateType} from "../../models/enums/realEstateType";
import {WarmingType} from "../../models/enums/warmingType";

@Component({
  selector: 'app-real-estate-filter-room',
  templateUrl: './real-estate-filter-room.component.html',
  styleUrls: ['./real-estate-filter-room.component.css']
})
export class RealEstateFilterRoomComponent implements OnInit{
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
  setRealEstateClass(type:RealEstateType):string{
    return this.realEstateHelper.setRealEstateTypeClass(type);
  }
  setWarmingClass(type:WarmingType):string{
    return this.realEstateHelper.setWarmingTypeClass(type);
  }
  onChange():void{
    if (this.form.invalid){
      return;
    }
    this.min=this.form.value["min"]
    this.max=this.form.value["max"];
    this.getAllByRoomRange(this.min,this.max);
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
  getRealEstateDisplayName(type:RealEstateType){
    return this.realEstateHelper.getRealEstateTypeDisplayName(type);
  }
  getWarmingDisplayName(type:WarmingType){
    return this.realEstateHelper.getWarmingTypeDisplayName(type);
  }
  getAllByRoomRange(min:number, max:number){
    this.realestateService.getByRoomsRange(min,max).subscribe({
      next:response=>{
        if (response.success){
          this.realEstateResponseList=response.data
        }
      },
      error:err => {
        alert(err.message)
      }
    })
  }
}
