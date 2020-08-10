import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguidosPage } from './seguidos.page';

const routes: Routes = [
  {
    path: '',
    component: SeguidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguidosPageRoutingModule {}
