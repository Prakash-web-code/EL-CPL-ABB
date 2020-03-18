import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllAssetsComponent} from './all-assets/all-assets.component';

const routes: Routes = [
  { path: '', redirectTo:'allAssets',pathMatch:'full'},
  { path: 'allAssets', component: AllAssetsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetpageRoutingModule { }
