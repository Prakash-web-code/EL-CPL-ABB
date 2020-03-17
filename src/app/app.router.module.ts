import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@appModules/home/home.component';
import { DashboardComponent } from '@appModules/dashboard/dashboard.component';
import { NotFoundComponent } from '@appComponents/not-found/not-found.component';
import { AuthenticationGuard } from '@appComponents/auth/authentication-guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, },
  {
    path: 'about',
    loadChildren: () => import('@appModules/about/about.module').then(mod => mod.AboutModule),
    canActivate: [AuthenticationGuard], canActivateChild: [AuthenticationGuard]
  },
  {
    path: 'contact',
    loadChildren: () => import('@appModules/contact/contact.module').then(mod => mod.ContactModule),
    canActivate: [AuthenticationGuard], canActivateChild: [AuthenticationGuard]
  },
  {
    path: 'signin',
    loadChildren: () => import('@appModules/signin/signin.module').then(mod => mod.SigninModule),
    canActivate: [AuthenticationGuard], canActivateChild: [AuthenticationGuard]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRouterModule { }
