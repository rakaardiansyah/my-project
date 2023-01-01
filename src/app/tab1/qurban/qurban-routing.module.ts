import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QurbanPage } from './qurban.page';

const routes: Routes = [
  {
    path: '',
    component: QurbanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QurbanPageRoutingModule {}
