import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '@app/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '@appComponents/core.module';
import { DashboardOutletDirective } from './dashboard-outlet.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, DashboardOutletDirective],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CoreModule,
    FormsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }