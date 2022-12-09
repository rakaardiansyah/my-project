import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page,
  },  {
    path: 'profilesaya',
    loadChildren: () => import('./profilesaya/profilesaya.module').then( m => m.ProfilesayaPageModule)
  },
  {
    path: 'daftartransaksi',
    loadChildren: () => import('./daftartransaksi/daftartransaksi.module').then( m => m.DaftartransaksiPageModule)
  },
  {
    path: 'referralfee',
    loadChildren: () => import('./referralfee/referralfee.module').then( m => m.ReferralfeePageModule)
  },
  {
    path: 'fasilitasmembership',
    loadChildren: () => import('./fasilitasmembership/fasilitasmembership.module').then( m => m.FasilitasmembershipPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab4PageRoutingModule {}
