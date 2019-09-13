import {Component} from '@angular/core';
import {NavService} from "../../shared/nav.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private menuService: NavService){}
}
