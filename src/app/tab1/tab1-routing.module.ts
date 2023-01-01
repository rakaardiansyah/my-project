import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'cicilemas',
    loadChildren: () => import('./cicilemas/cicilemas.module').then( m => m.CicilemasPageModule)
  },
  {
    path: 'gadaiemas',
    loadChildren: () => import('./gadaiemas/gadaiemas.module').then( m => m.GadaiemasPageModule)
  },
  {
    path: 'haji',
    loadChildren: () => import('./haji/haji.module').then( m => m.HajiPageModule)
  },
  {
    path: 'umrah',
    loadChildren: () => import('./umrah/umrah.module').then( m => m.UmrahPageModule)
  },
  {
    path: 'qurban',
    loadChildren: () => import('./qurban/qurban.module').then( m => m.QurbanPageModule)
  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule { }
