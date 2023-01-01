import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GadaiemasPageRoutingModule } from './gadaiemas-routing.module';

import { GadaiemasPage } from './gadaiemas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GadaiemasPageRoutingModule
  ],
  declarations: [GadaiemasPage]
})
export class GadaiemasPageModule {}
