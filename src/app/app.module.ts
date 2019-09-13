import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MeComponent } from './components/me/me.component';
import { FriendsComponent } from './components/friends/friends.component';
import { TodosComponent } from './components/todos/todos.component';
import {HttpClientModule} from "@angular/common/http";
import {TodosFilterPipe} from "./shared/todos-filter.pipe";
import {OrganizerModule} from "./organizer/organizer.module";

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    FriendsComponent,
    TodosComponent,
    TodosFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OrganizerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
