import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FailPageRoutingModule } from './fail-routing.module';

import { FailPage } from './fail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FailPageRoutingModule
  ],
  declarations: [FailPage]
})
export class FailPageModule {}
