import {Component, OnInit} from '@angular/core';
import {CustomerResponseDto} from "../../models/Customer/customerResponseDto";
import {CustomerService} from "../../services/customer.service";
import {RealEstatehelperService} from "../../services/real-estatehelper.service";
import {CustomerType} from "../../models/enums/customerType";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})


export class CustomerListComponent implements OnInit{
  customerResponseList: CustomerResponseDto[]=[];
  filterText:string;
constructor(private customerService: CustomerService,private realEstateHelper: RealEstatehelperService) {
}

  ngOnInit(): void {
  this.getAll();
  }

  setCustomerTypeClass(type: CustomerType){
  return this.realEstateHelper.setCustomerTypeClass(type);
  }
  getDisplayName(type: CustomerType):string{
  return this.realEstateHelper.getCustomerTypeDisplayName(type);
  }

  getAll(){
    this.customerService.getAll().subscribe({
      next: response=>{
        if (response.success){
          this.customerResponseList=response.data;
        }
      },
      error:err => {
        alert(err.message)
      }
    })
  }
}
