import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CruellaPage } from './cruella.page';

const routes: Routes = [
  {
    path: '',
    component: CruellaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CruellaPageRoutingModule {}
