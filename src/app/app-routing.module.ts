import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RealestateComponent} from "./components/realestate/realestate.component";
import {CustomerListComponent} from "./components/customer-list/customer-list.component";
import {WorkplaceListComponent} from "./components/workplace-list/workplace-list.component";
import {RealEstateFilterAreaComponent} from "./components/real-estate-filter-area/real-estate-filter-area.component";
import {RealEstateFilterRoomComponent} from "./components/real-estate-filter-room/real-estate-filter-room.component";
import {RealEstateFilterFloorComponent} from "./components/real-estate-filter-floor/real-estate-filter-floor.component";
import {
  RealEstateFilterPropertyTypeComponent
} from "./components/real-estate-filter-property-type/real-estate-filter-property-type.component";
import {
  RealEstateFilterWarmingTypeComponent
} from "./components/real-estate-filter-warming-type/real-estate-filter-warming-type.component";
import {RealEstateDetailComponent} from "./components/real-estate-detail/real-estate-detail.component";

const routes: Routes = [
  {path:"",pathMatch:"full",component:RealestateComponent},
  {path:"realestates",component:RealestateComponent},
  {path:"workplaces",component:WorkplaceListComponent},
  {path:"customers",component:CustomerListComponent},
  {path:"realestates/byarea",component:RealEstateFilterAreaComponent},
  {path:"realestates/byrooms",component:RealEstateFilterRoomComponent},
  {path:"realestates/byfloors",component:RealEstateFilterFloorComponent},
  {path:"realestates/byproptype",component:RealEstateFilterPropertyTypeComponent},
  {path:"realestates/bywarmingtype",component:RealEstateFilterWarmingTypeComponent},
  {path:"realestate/detail/:realEstateId",component:RealEstateDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
