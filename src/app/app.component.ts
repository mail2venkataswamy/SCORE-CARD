import { Component, OnInit } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import executiveSummaryObject from "src/assets/json/small-tiles-data.json";

import applicationDropdownData from "src/assets/json/error-details-page/dropdowns/application-dropdown-values.json";
import mngInfoStewardDropdownData from "src/assets/json/error-details-page/dropdowns/managing-info-steward-dropdown-values.json";
import dimentionDropdownData from "src/assets/json/error-details-page/dropdowns/dimention-dropdown-values.json";
import infoCatDrpdownData from "src/assets/json/error-details-page/dropdowns/information-category-dropdownvalues.json";
//import busDateDropdownData from "src/assets/json/dropdowns/
import databaseDropdownData from "src/assets/json/error-details-page/dropdowns/database-dropdown-values.json";
import ruleDropdownData from "src/assets/json/error-details-page/dropdowns/rule-dropdown-values.json";
import infoStewardDropdownData from "src/assets/json/error-details-page/dropdowns/info-steward-dropdown-values.json";
import reportingTypeDropdownData from "src/assets/json/error-details-page/dropdowns/reporting-type-dropdown-values.json";
import tableDropdownData from "src/assets/json/error-details-page/dropdowns/table-dropdown-values.json";
import cdeDropdownData from "src/assets/json/error-details-page/dropdowns/rule-dropdown-values.json";
import reportExecDropdownData from "src/assets/json/error-details-page/dropdowns/report-exec-dropdown-values.json";
import reportNameDropdownData from "src/assets/json/error-details-page/dropdowns/reportNameDropdown.json";

import summaryApplicationDropdownData from "src/assets/json/summary-page/dropdowns/application.json";
import summaryMngInfoExecDropdownData from "src/assets/json/summary-page/dropdowns/managing-info-exec.json";
import summaryDateDropdownData from "src/assets/json/summary-page/dropdowns/date.json";
import summaryInfoExecDropdownData from "src/assets/json/summary-page/dropdowns/info-exec.json";

interface SmallTileData {
  name: string;
  count: number;
}
interface Tiles {
  name: string;
  count: number;
}

interface SmallTiles {
  smallTilesData: Array<Tiles>;
}

@Component({
  selector: "et-root",
  //templateUrl: './app.component.html',
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  ngOnInit() {}
  app_title: string | undefined = "SCORECARD";
  //Error Details State
  mngInfoStewardDropdownData: Array<any> = mngInfoStewardDropdownData;
  infoCatDrpdownData: Array<any> = infoCatDrpdownData;
  //busDateDropdownData: Array<any> = busDateDropdownData;
  databaseDropdownData: Array<any> = databaseDropdownData;
  ruleDropdownData: Array<any> = ruleDropdownData;
  infoStewardDropdownData: Array<any> = infoStewardDropdownData;
  reportingTypeDropdownData: Array<any> = reportingTypeDropdownData;
  tableDropdownData: Array<any> = tableDropdownData;
  cdeDropdownData: Array<any> = cdeDropdownData;
  reportExecDropdownData: Array<any> = reportExecDropdownData;
  reportNameDropdownData: Array<any> = reportNameDropdownData;

  //Summary State
  data: Object = executiveSummaryObject.data;
  //executiveSummaryObject["bigTilesData"].byDimention;
  smallTilesData: Array<any> = executiveSummaryObject.data.smallTilesData;
  bigTilesDataByInformationCat: Array<any> =
    executiveSummaryObject.data.byInfomrationCategory;
  bigTilesDataByDimension: Array<any> = executiveSummaryObject.data.byDimention;
  bigTilesDataByReportingType: Array<any> =
    executiveSummaryObject.data.ByReportingType;
  applicationDropdownData: Array<any> = applicationDropdownData;
  dimentionDropdownData: Array<any> = dimentionDropdownData;
  summaryApplicationDropdownData: Array<any> = summaryApplicationDropdownData;
  summaryMngInfoExecDropdownData: Array<any> = summaryMngInfoExecDropdownData;
  summaryDateDropdownData: Array<any> = summaryDateDropdownData;
  summaryInfoExecDropdownData: Array<any> = summaryInfoExecDropdownData;

  constructor() {
    //console.log(Object.keys(executiveSummaryObject.data));
  }
}
