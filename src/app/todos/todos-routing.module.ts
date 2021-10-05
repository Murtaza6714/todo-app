import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosPage } from './todos.page';

const routes: Routes = [
  {
    path: '',
    component: TodosPage
  },
  {
    path: 'todo-detail/:id',
    loadChildren: () => import('./todo-detail/todo-detail.module').then( m => m.TodoDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosPageRoutingModule {}
