import {Component, OnInit} from '@angular/core';
import {WorkplaceService} from "../../services/workplace.service";
import {WorkPlaceResponseDto} from "../../models/WorkPlace/workPlaceResponseDto";

@Component({
  selector: 'app-workplace-list',
  templateUrl: './workplace-list.component.html',
  styleUrls: ['./workplace-list.component.css']
})
export class WorkplaceListComponent implements OnInit{
  constructor(private workplaceService: WorkplaceService) {}

  filterText:string;
  workPlaceResponseList:WorkPlaceResponseDto[]=[];
  ngOnInit(): void {
    this.getAll();
  }
getAll(){
    this.workplaceService.getAllWorkPlace().subscribe({
      next:response=>{
        if (response.success){
          this.workPlaceResponseList=response.data;
        }
      },
      error:err => {
        alert(err.message)
      }

    })
}
}
