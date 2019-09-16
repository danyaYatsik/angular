import {Component, OnInit} from '@angular/core';
import {ThemePalette} from "@angular/material";

@Component({
  selector: 'app-users',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  private name: string = "stranger";
  private firmVisible: boolean = false;
  private buttonText: "NO" | "Yes" = "NO";
  private buttonStyle: ThemePalette = "warn";

  constructor() {
  }

  ngOnInit() {
  }

  onButtonClicked() {
    this.firmVisible = !this.firmVisible;
    this.buttonText = this.firmVisible ? "Yes" : "NO";
    this.buttonStyle = this.firmVisible ? undefined : "warn";
  }

}
