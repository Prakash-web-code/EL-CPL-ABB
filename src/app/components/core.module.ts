import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from '@appComponents/loader/loader.component';
import { FooterComponent } from '@appComponents/footer/footer.component';
import { HeaderComponent } from '@appComponents/header/header.component';
import { HomeComponent } from '@appModules/home/home.component';
import { NotFoundComponent } from '@appComponents/not-found/not-found.component';
import { NavigationsComponent } from '@appComponents/navigations/navigations.component';
import { TableComponent } from './table/table.component';
import { DynamicChartComponent } from './charts/dynamic-chart/dynamic-chart.component';

// Material Module
import { MaterialModule } from '@app/material-module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HighchartsChartComponent } from 'highcharts-angular';

import { NgSelect2Module } from 'ng-select2';
// Widgets imports
import { RealTimeCurrentsComponent } from '@appComponents/widgets/real-time-currents/real-time-currents.component';
import { RealTimePowerComponent } from '@appComponents/widgets/real-time-power/real-time-power.component';
import { RealTimeVoltageComponent } from '@appComponents/widgets/real-time-voltage/real-time-voltage.component';
import { EnergyCostComponent } from '@appComponents/widgets/energy-cost/energy-cost.component';
import { AppRouterModule } from '@app/app.router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupPeakMonitoringComponent } from './widgets/group-peak-monitoring/group-peak-monitoring.component';
import { PeakMonitoringComponent } from './widgets/peak-monitoring/peak-monitoring.component';
import { AnalogDataMonitoringComponent } from './widgets/analog-data-monitoring/analog-data-monitoring.component';
import { DigitalDataMonitoringComponent } from './widgets/digital-data-monitoring/digital-data-monitoring.component';
import { PowerGenerationComponent } from './widgets/power-generation/power-generation.component';
import { AssetRiskComponent } from './widgets/asset-risk/asset-risk.component';
import { PowerFactorComponent } from './widgets/power-factor/power-factor.component';
import { DynamicSearchDropdownComponent } from './dynamic-search-dropdown/dynamic-search-dropdown.component';
import { BasicsearchdropdownComponent } from './basicsearchdropdown/basicsearchdropdown.component';
import { ConnectivityTrendComponent } from './widgets/connectivity-trend/connectivity-trend.component';
import { DeviceHealthComponent } from './widgets/device-health/device-health.component';
import { EventsTrendComponent } from './widgets/events-trend/events-trend.component';
import { HealthOverviewComponent } from './widgets/health-overview/health-overview.component';

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
    DynamicChartComponent,
    GroupPeakMonitoringComponent,
    HighchartsChartComponent,
    PeakMonitoringComponent,
    AnalogDataMonitoringComponent,
    DigitalDataMonitoringComponent,
    PowerGenerationComponent,
    AssetRiskComponent,
    PowerFactorComponent,
    DynamicSearchDropdownComponent,
    BasicsearchdropdownComponent,
    ConnectivityTrendComponent,
    DeviceHealthComponent,
    EventsTrendComponent,
    HealthOverviewComponent,
  ],
  entryComponents: [RealTimeCurrentsComponent,
     RealTimePowerComponent,
      RealTimeVoltageComponent,
       EnergyCostComponent,
       GroupPeakMonitoringComponent,
       PeakMonitoringComponent,
    AnalogDataMonitoringComponent,
    DigitalDataMonitoringComponent,
    AssetRiskComponent,
    PowerFactorComponent,
    PowerGenerationComponent,
    ConnectivityTrendComponent,
    DeviceHealthComponent,
    EventsTrendComponent,
    HealthOverviewComponent
      ],
  imports: [
    AppRouterModule,
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgSelect2Module

  ],
  exports: [
    LoaderComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    NavigationsComponent,
    TableComponent,
    DynamicChartComponent,
    RealTimeCurrentsComponent,
    RealTimePowerComponent,
    RealTimeVoltageComponent,
    EnergyCostComponent,
    GroupPeakMonitoringComponent,
    PeakMonitoringComponent,
    AnalogDataMonitoringComponent,
    DigitalDataMonitoringComponent,
    AssetRiskComponent,
    PowerFactorComponent,
    PowerGenerationComponent, ConnectivityTrendComponent,
    DeviceHealthComponent,
    EventsTrendComponent,
    HealthOverviewComponent
  ]
})
export class CoreModule { }
