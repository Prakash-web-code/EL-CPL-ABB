import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from '@appComponents/loader/loader.component';
import { FooterComponent } from '@appComponents/footer/footer.component';
import { HeaderComponent } from '@appComponents/header/header.component';
import { HomeComponent } from '@appModules/home/home.component';
import { NotFoundComponent } from '@appComponents/not-found/not-found.component';
import { NavigationsComponent } from '@appComponents/navigations/navigations.component';
import { TableComponent } from './table/table.component';
// Material Module
import { MaterialModule } from '@app/material-module';

import { FlexLayoutModule } from '@angular/flex-layout';



// Widgets imports
import { RealTimeCurrentsComponent } from '@appComponents/widgets/real-time-currents/real-time-currents.component';
import { RealTimePowerComponent } from '@appComponents/widgets/real-time-power/real-time-power.component';
import { RealTimeVoltageComponent } from '@appComponents/widgets/real-time-voltage/real-time-voltage.component';
import { EnergyCostComponent } from '@appComponents/widgets/energy-cost/energy-cost.component';
import { AppRouterModule } from '@app/app.router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlantListDialogComponent } from './plant-list-dialog/plant-list-dialog.component';
import { TableHeaderComponent } from './table-header/table-header.component';

@NgModule({
  declarations: [
    LoaderComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    NavigationsComponent,
    TableComponent,
    RealTimeCurrentsComponent,
    RealTimePowerComponent,
    RealTimeVoltageComponent,
    EnergyCostComponent,
    PlantListDialogComponent,
    TableHeaderComponent
  ],
  entryComponents: [
     RealTimeCurrentsComponent,
     RealTimePowerComponent,
     RealTimeVoltageComponent,
     EnergyCostComponent,
     PlantListDialogComponent
    ],
  imports: [
    AppRouterModule,
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  exports: [
    LoaderComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    NavigationsComponent,
    TableComponent,
    RealTimeCurrentsComponent,
    RealTimePowerComponent,
    RealTimeVoltageComponent,
    EnergyCostComponent
  ]
})
export class CoreModule { }
