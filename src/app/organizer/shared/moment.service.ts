import {Injectable,} from "@angular/core";
import {BehaviorSubject} from "rxjs";

import * as moment from "moment";

@Injectable()
export class MomentService {

  date = new BehaviorSubject(moment());

  changeMonth(n: number) {
    const moment1 = this.date.getValue().add(n, "month");
    this.date.next(moment1);
  }

  changeDate(date: moment.Moment) {
     const moment1 = this.date.getValue().set({
       date: date.date(),
       month: date.month()
     });
     this.date.next(moment1);
  }

}
