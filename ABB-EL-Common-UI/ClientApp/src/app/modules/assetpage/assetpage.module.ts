import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAssetsComponent } from './all-assets/all-assets.component';
import {AssetpageRoutingModule} from './assetpage-routing.module';
import {CdkTableModule} from '@angular/cdk/table';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [AllAssetsComponent],
  imports: [
    CommonModule,
    AssetpageRoutingModule,
    MatButtonModule,
    CdkTableModule,
    MatProgressBarModule,
    MatIconModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSortModule,
    MatProgressSpinnerModule,
  ],

})
export class AssetpageModule { }
