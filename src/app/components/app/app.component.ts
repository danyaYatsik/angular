import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navLinks: NavLink[] = [
    {path: "/me", label: "Me"},
    {path: "/friends", label: "Friends"},
    {path: "/todos", label: "Todos"},
    {path: "/organizer", label: "Organizer"},
  ];

  activeLink = this.navLinks[0];

  constructor() {
  }

}

interface NavLink {
  path: string,
  label: string
}
