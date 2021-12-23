// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components Routing
import { ListUserComponent } from './list/list-user.component';
import { UserRoutingModule } from './user-routing.module';
import { AddEditUserComponent } from './add/add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from "ngx-progressbar/http";
import { InputComponent } from '../../containers/input/input.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListUserComponent,
    AddEditUserComponent,
    InputComponent
  ],
  providers: [
  ]
})
export class UserModule { }
