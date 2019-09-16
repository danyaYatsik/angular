import {Component, OnInit} from '@angular/core';
import * as moment from "moment";
import {MomentService} from "../shared/moment.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  private calendar: Week[];

  constructor(private momentService: MomentService) {
  }

  ngOnInit() {
    this.momentService.date.subscribe(this.generate.bind(this));
  }

  generate(now: moment.Moment) {
    const startDay = now.clone().startOf("month").startOf("week");
    const endDay = now.clone().endOf("month").endOf("week");

    const date = startDay.clone().subtract(1, "day")

    const calendar: Week[] = [];

    while (date.isBefore(endDay, "day")) {
      calendar.push({
        days: new Array(7)
          .fill(0)
          .map(() => {
            const value = date.add(1, "day").clone();
            const isActive = moment().isSame(value, "date");
            const isDisabled = !now.isSame(value, "month");
            const isSelected = now.isSame(value, "date");
            return {
              value, isActive, isSelected, isDisabled
            }
          })
      });

      this.calendar = calendar;
    }
  }

  select(day: Day) {
    this.momentService.changeDate(day.value);
  }

}

interface Week {
  days: Day[];
}

interface Day {
  value: moment.Moment,
  isActive: boolean,
  isSelected: boolean,
  isDisabled: boolean
}
