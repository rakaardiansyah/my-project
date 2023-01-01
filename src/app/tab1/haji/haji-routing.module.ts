import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HajiPage } from './haji.page';

const routes: Routes = [
  {
    path: '',
    component: HajiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HajiPageRoutingModule {}
