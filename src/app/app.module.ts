import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdalService } from 'adal-angular4';

import { AuthModule } from '@appComponents/auth/auth.module';
import { CoreModule } from '@appComponents/core.module';
import { AppComponent } from '@app/app.component';
import { AppRouterModule } from '@app/app.router.module';
import { AuthenticationGuard } from '@appComponents/auth/authentication-guard';
import { DashboardModule } from '@appModules/dashboard/dashboard.module';
import { RequestInterceptorService } from '@appServices/request-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Material Module
import { MaterialModule } from './material-module';

import { FlexLayoutModule } from '@angular/flex-layout';



// NGRX Related Modules
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '@app/global-store/reducers/index';
import { effects } from '@app/global-store/effects';
import { MatPaginatorIntl } from '@angular/material';
import { getDutchPaginatorIntl } from './components/widgets/real-time-currents/real-time-currents.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    CommonModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    CoreModule,
    AppRouterModule,
    DashboardModule,
    MaterialModule,
    FlexLayoutModule,
    
  ],

  providers: [AdalService, AuthenticationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true
    },
    { provide: MatPaginatorIntl, useValue: getDutchPaginatorIntl() }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
