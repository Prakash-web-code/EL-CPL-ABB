import { RealTimeCurrentsComponent } from '@appComponents/widgets/real-time-currents/real-time-currents.component';
import { RealTimePowerComponent } from '@appComponents/widgets/real-time-power/real-time-power.component';
import { RealTimeVoltageComponent } from '@appComponents/widgets/real-time-voltage/real-time-voltage.component';
import { EnergyCostComponent } from '@appComponents/widgets/energy-cost/energy-cost.component';

export const dashboardCards = {
    RealTimeCurrents: RealTimeCurrentsComponent,
    RealTimePower: RealTimePowerComponent,
    RealTimeVoltage: RealTimeVoltageComponent,
    EnergyCost: EnergyCostComponent
};
