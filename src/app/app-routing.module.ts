import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'profilesaya',
    loadChildren: () => import('./tab4/profilesaya/profilesaya.module').then(m => m.ProfilesayaPageModule)
  },
  {
    path: 'daftartransaksi',
    loadChildren: () => import('./tab4/daftartransaksi/daftartransaksi.module').then(m => m.DaftartransaksiPageModule)
  },
  {
    path: 'referralfee',
    loadChildren: () => import('./tab4/referralfee/referralfee.module').then(m => m.ReferralfeePageModule)
  },
  {
    path: 'fasilitasmembership',
    loadChildren: () => import('./tab4/fasilitasmembership/fasilitasmembership.module').then(m => m.FasilitasmembershipPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
