import { Component, OnInit, Input } from "@angular/core";
import { NzTableModule } from "ng-zorro-antd/table";
import gridData from "src/assets/json/error-details-page/grid-data.json";

@Component({
  selector: "et-error-details-grid",
  templateUrl: "./error-details-grid.component.html",
  styleUrls: ["./error-details-grid.component.css"],
})
export class ErrorDetailsGridComponent implements OnInit {
  gridData = gridData;
  @Input() errorDetailsGridData: Array<any> = [];
  constructor() {}

  ngOnInit(): void {}
}
