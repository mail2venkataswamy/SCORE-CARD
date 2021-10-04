import { Component, OnInit, Inject, Input } from "@angular/core";

interface SmallTilesData {
  name: string;
  count: number;
}
interface byInfomrationCategory {
  parameter: string;
  cdeCount: number;
  dqScore: string;
  scannedRecs: number;
  dqIssueRecords: number;
  cols: number;
}
interface byDimention {
  parameter: string;
  cdeCount: number;
  dqScore: string;
  scannedRecs: number;
  dqIssueRecords: number;
  cols: number;
}
export interface data {
  byInformationCategory: Array<byInfomrationCategory>;
  byDimention: Array<byDimention>;
  byReportingType: Array<byDimention>;
  smallTilesData: Array<SmallTilesData>;
}

@Component({
  selector: "et-small-tile",
  templateUrl: "./small-tile.component.html",
  styleUrls: ["./small-tile.component.css"],
})
export class SmallTileComponent implements OnInit {
  application = "";
  @Input() title: string | undefined;
  @Input() smallTilesData: Array<SmallTilesData> = [];
  @Input() executiveSummaryObject: Object = [];
  @Input() data: {} = {};
  @Input() execSummaryData: object = {};

  constructor() {
    //this.application = "swamy";
    //console.log("samll", this.data);
  }

  ngOnInit() {
    console.log("samll", this.data);
  }
}
