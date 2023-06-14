import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RealestateComponent } from './components/realestate/realestate.component';
import { RealestatefilterPipe } from './pipes/realestatefilter.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { M2Pipe } from './pipes/m2.pipe';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { WorkplaceFilterPipe } from './pipes/workplace-filter.pipe';
import { CustomerFilterPipe } from './pipes/customer-filter.pipe';
import { WorkplaceListComponent } from './components/workplace-list/workplace-list.component';
import { RealEstateFilterRoomComponent } from './components/real-estate-filter-room/real-estate-filter-room.component';
import { RealEstateFilterFloorComponent } from './components/real-estate-filter-floor/real-estate-filter-floor.component';
import { RealEstateFilterAreaComponent } from './components/real-estate-filter-area/real-estate-filter-area.component';
import { RealEstateFilterWarmingTypeComponent } from './components/real-estate-filter-warming-type/real-estate-filter-warming-type.component';
import { RealEstateFilterPropertyTypeComponent } from './components/real-estate-filter-property-type/real-estate-filter-property-type.component';
import { RealEstateDetailComponent } from './components/real-estate-detail/real-estate-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RealestateComponent,
    RealestatefilterPipe,
    NavbarComponent,
    M2Pipe,
    CustomerListComponent,
    WorkplaceFilterPipe,
    CustomerFilterPipe,
    WorkplaceListComponent,
    RealEstateFilterRoomComponent,
    RealEstateFilterFloorComponent,
    RealEstateFilterAreaComponent,
    RealEstateFilterWarmingTypeComponent,
    RealEstateFilterPropertyTypeComponent,
    RealEstateDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
