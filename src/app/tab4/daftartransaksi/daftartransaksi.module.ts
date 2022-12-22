import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftartransaksiPageRoutingModule } from './daftartransaksi-routing.module';

import { DaftartransaksiPage } from './daftartransaksi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftartransaksiPageRoutingModule
  ],
  declarations: [DaftartransaksiPage]
})


export class DaftartransaksiPageModule
{
  customPopoverOptions = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color',
  };
}
