import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoDetailPage } from './todo-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TodoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoDetailPageRoutingModule {}
