import { Directive, ViewContainerRef, Input } from '@angular/core';
import { WidgetDetails } from '@appShared/models/dashboard.model';
/**
 *
 *
 * @export
 * @class DashboardOutletDirective
 * @description To Load dynamic widget, we need a reference to the ViewContainerRef
 *  of each widget. To get access to it, So creating a directive (dashboardOutlet)
 * and add ViewContainerRef, to the constructor and an @Input() for the widget.
 */
@Directive({
  selector: '[appDashboardOutlet]',
})
export class DashboardOutletDirective {
  @Input() widgetDetails: WidgetDetails ;

  constructor(public viewContainerRef: ViewContainerRef) {}
}
