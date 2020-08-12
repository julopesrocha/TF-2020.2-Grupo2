import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThreadPageRoutingModule } from './thread-routing.module';

import { ThreadPage } from './thread.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThreadPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ThreadPage]
})
export class ThreadPageModule {}
