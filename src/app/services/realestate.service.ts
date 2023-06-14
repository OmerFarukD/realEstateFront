import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Result} from "../models/Result/result";
import {RealEstateAddRequestDto} from "../models/RealEstate/realEstateAddRequestDto";
import {ListDataResult} from "../models/Result/listDataResult";
import {RealEstateResponseDto} from "../models/RealEstate/realEstateResponseDto";
import {RealEstateDetailDto} from "../models/RealEstate/realEstateDetailDto";
import {WarmingType} from "../models/enums/warmingType";
import {RealEstateType} from "../models/enums/realEstateType";
import {SingleDataResult} from "../models/Result/singleDataResult";

@Injectable({
  providedIn: 'root'
})
export class RealestateService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="http://localhost:8080/api/realEstates"

  addRealEstate(addDto: RealEstateAddRequestDto): Observable<Result>{
    const url=this.apiUrl+"/add";
    return this.httpClient.post<Result>(url,addDto);
  }
  getAll(): Observable<ListDataResult<RealEstateResponseDto>>{
    const url= this.apiUrl+"/getall";
    return this.httpClient.get<ListDataResult<RealEstateResponseDto>>(url);
  }
  getDetails(): Observable<ListDataResult<RealEstateDetailDto>>{
    const  url=this.apiUrl+"/getdetails";
    return this.httpClient.get<ListDataResult<RealEstateDetailDto>>(url);
  }
  getDetailsByCustomerId(id: number): Observable<ListDataResult<RealEstateDetailDto>>{
    const url=this.apiUrl+`/getDetailsById?id=${id}`;
    return this.httpClient.get<ListDataResult<RealEstateDetailDto>>(url);
  }

  getByRoomsRange(min : number, max: number):Observable<ListDataResult<RealEstateResponseDto>>{
    const url=this.apiUrl+`/getbyrooms?min=${min}&max=${max}`;
    return this.httpClient.get<ListDataResult<RealEstateResponseDto>>(url);
  }

  getByFloorsRange(min: number, max: number):Observable<ListDataResult<RealEstateResponseDto>>{
    const url=this.apiUrl+`/getbyfloors?min=${min}&max=${max}`;
    return this.httpClient.get<ListDataResult<RealEstateResponseDto>>(url);
  }
  getByAreaRange(min : number, max: number): Observable<ListDataResult<RealEstateResponseDto>>{
    const url=this.apiUrl+`/getbyarea?min=${min}&max=${max}`;
    return this.httpClient.get<ListDataResult<RealEstateResponseDto>>(url);
  }

  getByWarmingType(warmingType: WarmingType): Observable<ListDataResult<RealEstateResponseDto>>{
    const url= this.apiUrl+`/getbywarmingtype?warmingType=${warmingType}`;
    return this.httpClient.get<ListDataResult<RealEstateResponseDto>>(url);
  }

  getByRealEstateType(realEstateType: RealEstateType):Observable<ListDataResult<RealEstateResponseDto>>{
    const url=this.apiUrl+`/getbyrealestate?realEstateType=${realEstateType}`
    return this.httpClient.get<ListDataResult<RealEstateResponseDto>>(url);
  }
  getDetailByRealEstateId(id: number):Observable<SingleDataResult<RealEstateDetailDto>>{
    const url=this.apiUrl+`/getdetailbyrealestate?id=${id}`;
    return this.httpClient.get<SingleDataResult<RealEstateDetailDto>>(url)
  }
}
