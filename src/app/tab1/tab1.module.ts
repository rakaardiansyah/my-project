import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { Tab1Page } from './tab1.page';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CategoryItemModule } from './category-item/category-item.module';

@NgModule({

  declarations: [Tab1Page],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    CategoryItemModule,
  ],
  exports: [Tab1Page],
})

export class Tab1PageModule {}
