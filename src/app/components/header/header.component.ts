import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "et-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Input() summaryApplicationDropdownData: Array<any> = [];
  @Input() summaryMngInfoExecDropdownData: Array<any> = [];
  @Input() summaryDateDropdownData: Array<any> = [];
  @Input() summaryInfoExecDropdownData: Array<any> = [];

  ngOnInit(): void {}
}
