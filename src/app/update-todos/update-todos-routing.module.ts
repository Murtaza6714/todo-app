import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTodosPage } from './update-todos.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTodosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTodosPageRoutingModule {}
