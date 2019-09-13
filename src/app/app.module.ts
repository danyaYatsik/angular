import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MeComponent } from './components/me/me.component';
import { FriendsComponent } from './components/friends/friends.component';
import { TodosComponent } from './components/todos/todos.component';
import { HttpClientModule } from "@angular/common/http";
import { TodosFilterPipe } from "./shared/todos-filter.pipe";
import { OrganizerModule } from "./organizer/organizer.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule, MatTabsModule} from "@angular/material";
import {CdkTableModule} from "@angular/cdk/table";

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
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTabsModule,
    CdkTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
