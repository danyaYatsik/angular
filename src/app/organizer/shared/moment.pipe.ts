import {Pipe, PipeTransform} from "@angular/core";
import * as moment from "moment"

@Pipe({
  name: "moment",
  pure: false
})
export class MomentPipe implements PipeTransform{

  transform(m: moment.Moment, pattern: string = "MMMM YYYY"): string {
    return m.format(pattern);
  }

}
