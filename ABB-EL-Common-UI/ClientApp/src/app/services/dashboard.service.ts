import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Import dashboard Model
import { WidgetDetails } from '@appShared/models/dashboard.model';

/* Import authentication service using method like, reset password, verification code*/
import { PlantService } from '@appServices/plant.service';

@Injectable({
    providedIn: 'root',
})

export class DashboardService {

    enegryMgntWidget: WidgetDetails[];
    private subject = new BehaviorSubject<WidgetDetails[]>(this.enegryMgntWidget);
    widgets$ = this.subject.asObservable();

    constructor(private _PlantService: PlantService) {

        this.enegryMgntWidget = this._PlantService.getWidgetsList();
        this.subject.next(this.enegryMgntWidget);

        this.widgets$.subscribe(() => {
            this.saveWidgetToStorage();
        });
    }

    setState = (tracks: Array<WidgetDetails>) => {
        this.subject.next(tracks);
    }


    loadWidgetFromStorage = () => {
        const widget = JSON.parse(localStorage.getItem('widgetDetails') as string);
        if (widget) {
            this.subject.next(widget);
        }
    }

    saveWidgetToStorage = () => {
        const state = this.subject.getValue();
        localStorage.setItem('widgetDetails', JSON.stringify(state));
    }
}
