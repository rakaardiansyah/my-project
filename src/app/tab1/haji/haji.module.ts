import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HajiPageRoutingModule } from './haji-routing.module';

import { HajiPage } from './haji.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HajiPageRoutingModule
  ],
  declarations: [HajiPage]
})
export class HajiPageModule {}
