import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeComponent } from './components/me/me.component';
import { FriendsComponent } from './components/friends/friends.component';
import { TodosComponent } from './components/todos/todos.component';
import {MainComponent} from "./organizer/main/main.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "me"},
  {path: 'me', component: MeComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'organizer', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
