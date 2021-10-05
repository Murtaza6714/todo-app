import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoDetailPageRoutingModule } from './todo-detail-routing.module';

import { TodoDetailPage } from './todo-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoDetailPageRoutingModule
  ],
  declarations: [TodoDetailPage]
})
export class TodoDetailPageModule {}
