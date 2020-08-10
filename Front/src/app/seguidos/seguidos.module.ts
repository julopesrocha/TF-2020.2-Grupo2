import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguidosPageRoutingModule } from './seguidos-routing.module';

import { SeguidosPage } from './seguidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguidosPageRoutingModule
  ],
  declarations: [SeguidosPage]
})
export class SeguidosPageModule {}
