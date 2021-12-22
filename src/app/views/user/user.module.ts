// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components Routing
import { ListUserComponent } from './list/list-user.component';
import { UserRoutingModule } from './user-routing.module';
import { AddEditUserComponent } from './add/add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListUserComponent,
    AddEditUserComponent
  ],
  providers: [
  ]
})
export class UserModule { }
