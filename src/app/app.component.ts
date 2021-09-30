import { Component, OnInit } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { IDropdownSettings } from "ng-multiselect-dropdown";

@Component({
  selector: "et-root",
  //templateUrl: './app.component.html',
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  ngOnInit() {}
  title = "QUALITY-SCORE-CARD";
}
