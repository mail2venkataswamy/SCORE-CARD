import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "et-executive-summary",
  templateUrl: "./executive-summary.component.html",
  styleUrls: ["./executive-summary.component.css"],
})
export class ExecutiveSummaryComponent implements OnInit {
  @Input() bigTilesDataByInformationCat: Array<any> = [];
  @Input() bigTilesDataByDimension: Array<any> = [];
  @Input() bigTilesDataByReportingType: Array<any> = [];
  @Input() tableData: Array<any> = [];

  @Input() app_title: string | undefined;
  @Input() smallTilesData: Array<any> = [];
  @Input() executiveSummaryObject: Object = [];
  @Input() data: {} = {};
  @Input() execSummaryData: object = {};

  @Input() summaryApplicationDropdownData: Array<any> = [];
  @Input() summaryMngInfoExecDropdownData: Array<any> = [];
  @Input() summaryDateDropdownData: Array<any> = [];
  @Input() summaryInfoExecDropdownData: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}
}
