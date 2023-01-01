import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CicilemasPage } from './cicilemas.page';

const routes: Routes = [
  {
    path: '',
    component: CicilemasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CicilemasPageRoutingModule {}
