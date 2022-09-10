import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchievePage } from './archieve.page';

const routes: Routes = [
  {
    path: '',
    component: ArchievePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchievePageRoutingModule {}
