import { WorkPlaceResponseDto } from './../models/WorkPlace/workPlaceResponseDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ListDataResult} from "../models/Result/listDataResult";
import {SingleDataResult} from "../models/Result/singleDataResult";
import {Result} from "../models/Result/result";
import {WorkPlaceAddRequestDto} from "../models/WorkPlace/workPlaceAddRequestDto";


@Injectable({
  providedIn: 'root'
})
export class WorkplaceService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="http://localhost:8080/api/workplace"
  getAllWorkPlace(): Observable<ListDataResult<WorkPlaceResponseDto>>{
    let url= this.apiUrl+"/getall";
    return this.httpClient.get<ListDataResult<WorkPlaceResponseDto>>(url);
  }
 addWorkPlace(addDto: WorkPlaceAddRequestDto): Observable<Result>{
    let url= this.apiUrl+"/add";
    return this.httpClient.post<Result>(url,addDto);
 }
}
