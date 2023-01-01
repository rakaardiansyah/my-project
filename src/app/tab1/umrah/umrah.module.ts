import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UmrahPageRoutingModule } from './umrah-routing.module';

import { UmrahPage } from './umrah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UmrahPageRoutingModule
  ],
  declarations: [UmrahPage]
})
export class UmrahPageModule {}
