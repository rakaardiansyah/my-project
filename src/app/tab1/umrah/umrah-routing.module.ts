import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UmrahPage } from './umrah.page';

const routes: Routes = [
  {
    path: '',
    component: UmrahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UmrahPageRoutingModule {}
