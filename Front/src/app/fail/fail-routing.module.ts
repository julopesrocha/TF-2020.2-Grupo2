import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FailPage } from './fail.page';

const routes: Routes = [
  {
    path: '',
    component: FailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FailPageRoutingModule {}
