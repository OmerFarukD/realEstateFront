import { Pipe, PipeTransform } from '@angular/core';
import {CustomerResponseDto} from "../models/Customer/customerResponseDto";
import {WorkPlaceResponseDto} from "../models/WorkPlace/workPlaceResponseDto";

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

  transform(customers: CustomerResponseDto[], filter: string): CustomerResponseDto[] {
    filter= filter ? filter.toLocaleLowerCase(): ""
    return filter ? customers.filter((e:CustomerResponseDto)=>
      e.name && e.surname.toLocaleLowerCase().indexOf(filter)!==-1):customers;
  }

}
