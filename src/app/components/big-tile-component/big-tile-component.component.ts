import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "et-big-tile-component",
  templateUrl: "./big-tile-component.component.html",
  styleUrls: ["./big-tile-component.component.css"],
})
export class BigTileComponentComponent implements OnInit {
  constructor() {}
  @Input() bigTilesDataByInformationCat: Array<any> = [];
  @Input() bigTilesDataByDimension: Array<any> = [];
  @Input() bigTilesDataByReportingType: Array<any> = [];

  ngOnInit(): void {}
}
