import { RealTimeCurrentsComponent } from '@appComponents/widgets/real-time-currents/real-time-currents.component';
import { RealTimePowerComponent } from '@appComponents/widgets/real-time-power/real-time-power.component';
import { RealTimeVoltageComponent } from '@appComponents/widgets/real-time-voltage/real-time-voltage.component';
import { EnergyCostComponent } from '@appComponents/widgets/energy-cost/energy-cost.component';
import { GroupPeakMonitoringComponent } from '@app/components/widgets/group-peak-monitoring/group-peak-monitoring.component';
import { PeakMonitoringComponent } from '@app/components/widgets/peak-monitoring/peak-monitoring.component';
import { DigitalDataMonitoringComponent } from '@app/components/widgets/digital-data-monitoring/digital-data-monitoring.component';
import { AnalogDataMonitoringComponent } from '@app/components/widgets/analog-data-monitoring/analog-data-monitoring.component';
import { AssetRiskComponent } from '@app/components/widgets/asset-risk/asset-risk.component';
import { PowerFactorComponent } from '@app/components/widgets/power-factor/power-factor.component';
import { PowerGenerationComponent } from '@app/components/widgets/power-generation/power-generation.component';
import { EventsTrendComponent } from '@app/components/widgets/events-trend/events-trend.component';
import { ConnectivityTrendComponent } from '@app/components/widgets/connectivity-trend/connectivity-trend.component';
import { DeviceHealthComponent } from '@app/components/widgets/device-health/device-health.component';
import { HealthOverviewComponent } from '@app/components/widgets/health-overview/health-overview.component';

export const dashboardCards = {
    RealTimeCurrents: RealTimeCurrentsComponent,
    RealTimePower: RealTimePowerComponent,
    RealTimeVoltage: RealTimeVoltageComponent,
    EnergyCost: EnergyCostComponent,
    GroupPeakMonitoring:GroupPeakMonitoringComponent,
    PeakMonitoring:PeakMonitoringComponent,
    AnalogPeakMonitoring:AnalogDataMonitoringComponent,
    DigitalPeakMonitoring:DigitalDataMonitoringComponent,
    dashboardChart:AssetRiskComponent,
    powerFactorChart:PowerFactorComponent,
    powerGenerationChart:PowerGenerationComponent,
    EventsTrend: EventsTrendComponent,
    ConnectivityTrend: ConnectivityTrendComponent,
    DeviceHealth: DeviceHealthComponent,
    HealthOverview:HealthOverviewComponent
};
