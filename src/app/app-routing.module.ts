import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    loadChildren: () => import('./todos/todos.module').then( m => m.TodosPageModule)
  },
  {
    path: 'todos/add-todo',
    loadChildren: () => import('./add-todo/add-todo.module').then( m => m.AddTodoPageModule)
  },
  {
    path: 'todos/:id',
    loadChildren: () => import('./update-todos/update-todos.module').then( m => m.UpdateTodosPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
