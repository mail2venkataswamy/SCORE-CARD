import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "et-table-component",
  templateUrl: "./table-component.component.html",
  styleUrls: ["./table-component.component.css"],
})
export class TableComponentComponent implements OnInit {
  constructor() {}
  @Input() bigTilesDataByInformationCat: Array<any> = [];
  @Input() bigTilesDataByDimension: Array<any> = [];
  @Input() bigTilesDataByReportingType: Array<any> = [];
  @Input() tableData: Array<any> = [];
  ngOnInit(): void {}
}
