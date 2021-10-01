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
  app_title: string | undefined = "SCORECARD";
  applicationTilesData: Array<any> = [];
  constructor() {
    this.applicationTilesData = [
      { name: "Application", count: 1 },
      { name: "Database", count: 2 },
      { name: "Tables", count: 3 },
      { name: "CDE Count", count: 4 },
      { name: "Rule Count", count: 5 },
      { name: "Records Scaned", count: 6 },
      { name: "Records Failed", count: 7 },
      { name: "DQ Score", count: 8 },
    ];
  }
  OnInit() {}
}
