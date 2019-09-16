import {Component} from '@angular/core';
import {MomentService} from "../shared/moment.service";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent {

  constructor(private momentService: MomentService) {
  }

  go(n: number) {
    this.momentService.changeMonth(n);
  }

}
