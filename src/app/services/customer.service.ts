import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListDataResult} from "../models/Result/listDataResult";
import {SingleDataResult} from "../models/Result/singleDataResult";
import {CustomerResponseDto} from "../models/Customer/customerResponseDto";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="http://localhost:8080/api/customers"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ListDataResult<CustomerResponseDto>>{
    const url=this.apiUrl+"/getall";
    return this.httpClient.get<ListDataResult<CustomerResponseDto>>(url)
  }

  getCustomerById(id : number): Observable<SingleDataResult<CustomerResponseDto>>{
    const url=this.apiUrl+`/getbyid?id=${id}`;
    return this.httpClient.get<SingleDataResult<CustomerResponseDto>>(url);
  }

}
