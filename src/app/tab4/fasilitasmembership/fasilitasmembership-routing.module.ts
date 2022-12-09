import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FasilitasmembershipPage } from './fasilitasmembership.page';

const routes: Routes = [
  {
    path: '',
    component: FasilitasmembershipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FasilitasmembershipPageRoutingModule {}
