import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CicilemasPageRoutingModule } from './cicilemas-routing.module';

import { CicilemasPage } from './cicilemas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CicilemasPageRoutingModule
  ],
  declarations: [CicilemasPage]
})
export class CicilemasPageModule {}
