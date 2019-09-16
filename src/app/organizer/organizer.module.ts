import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {SelectorComponent} from './selector/selector.component';
import {OrganizerComponent} from './organizer/organizer.component';
import {CalendarComponent} from './calendar/calendar.component';
import {MomentPipe} from "./shared/moment.pipe";
import {ReactiveFormsModule} from "@angular/forms";

import {MomentService} from "./shared/moment.service";
import {TasksService} from "./shared/tasks.service";
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule} from "@angular/material";

@NgModule({
  declarations: [
    MainComponent,
    SelectorComponent,
    OrganizerComponent,
    CalendarComponent,
    MomentPipe
  ],
  providers: [
    MomentService,
    TasksService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class OrganizerModule {
}
