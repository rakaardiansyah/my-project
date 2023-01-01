import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GadaiemasPage } from './gadaiemas.page';

const routes: Routes = [
  {
    path: '',
    component: GadaiemasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GadaiemasPageRoutingModule {}
