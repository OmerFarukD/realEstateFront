import { Pipe, PipeTransform } from '@angular/core';
import {RealEstateResponseDto} from "../models/RealEstate/realEstateResponseDto";

@Pipe({
  name: 'realestatefilter'
})
export class RealestatefilterPipe implements PipeTransform {

  transform(estates: RealEstateResponseDto[], filter: string): RealEstateResponseDto[] {
    filter= filter ? filter.toLocaleLowerCase(): ""
    return filter ? estates.filter((e:RealEstateResponseDto)=>
      e.title && e.title.toLocaleLowerCase().indexOf(filter)!==-1):estates;
  }

}
