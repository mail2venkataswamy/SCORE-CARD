import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "et-error-details",
  templateUrl: "./error-details.component.html",
  styleUrls: ["./error-details.component.css"],
})
export class ErrorDetailsComponent implements OnInit {
  @Input() reportNameDropdownData: Array<any> = [];
  @Input() reportingTypeDropdownData: Array<any> = [];
  @Input() infoCatDrpdownData: Array<any> = [];
  @Input() reportExecDropdownData: Array<any> = [];
  @Input() infoStewardDropdownData: Array<any> = [];
  @Input() mngInfoStewardDropdownData: Array<any> = [];
  @Input() cdeDropdownData: Array<any> = [];
  @Input() ruleDropdownData: Array<any> = [];
  @Input() dimentionDropdownData: Array<any> = [];
  @Input() tableDropdownData: Array<any> = [];
  @Input() databaseDropdownData: Array<any> = [];
  @Input() applicationDropdownData: Array<any> = [];
  @Input() dropdownList: Array<any> = [];
  @Input() onSlectApplicationItem: (args: any) => void;
  @Input() applicationSelectedItems: Array<any> = [];
  @Input() errorDetailsGridData: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}
}
