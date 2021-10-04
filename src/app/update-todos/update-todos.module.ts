import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTodosPageRoutingModule } from './update-todos-routing.module';

import { UpdateTodosPage } from './update-todos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTodosPageRoutingModule
  ],
  declarations: [UpdateTodosPage]
})
export class UpdateTodosPageModule {}
