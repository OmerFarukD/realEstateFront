import { Pipe, PipeTransform } from '@angular/core';
import {WorkPlaceResponseDto} from "../models/WorkPlace/workPlaceResponseDto";

@Pipe({
  name: 'workplaceFilter'
})
export class WorkplaceFilterPipe implements PipeTransform {

  transform(workplaces: WorkPlaceResponseDto[], filter: string): WorkPlaceResponseDto[] {
    filter= filter ? filter.toLocaleLowerCase(): ""
    return filter ? workplaces.filter((e:WorkPlaceResponseDto)=>
      e.businessName && e.businessName.toLocaleLowerCase().indexOf(filter)!==-1):workplaces;
  }

}
