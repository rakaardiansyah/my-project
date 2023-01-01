import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QurbanPageRoutingModule } from './qurban-routing.module';

import { QurbanPage } from './qurban.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QurbanPageRoutingModule
  ],
  declarations: [QurbanPage]
})
export class QurbanPageModule {}
