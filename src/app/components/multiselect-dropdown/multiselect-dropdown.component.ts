import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit, EventEmitter } from "@angular/core";
import { IDropdownSettings } from "ng-multiselect-dropdown";

@Component({
  selector: "et-multiselect-dropdown",
  templateUrl: "./multiselect-dropdown.component.html",

  styleUrls: ["./multiselect-dropdown.component.css"],
})
export class MultiselectDropdownComponent implements OnInit {
  dropdownList: Array<any> = [];
  selectedItems: Array<any> = [];
  dropdownSettings: IDropdownSettings = {};
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: "Accounts" },
      { item_id: 2, item_text: "Cards" },
      { item_id: 3, item_text: "CDM" },
      { item_id: 4, item_text: "Claims" },
      { item_id: 5, item_text: "COODS" },
      { item_id: 4, item_text: "Inventory" },
      { item_id: 5, item_text: "Policy" },
    ];
    this.selectedItems = [
      { item_id: 3, item_text: "CDM" },
      { item_id: 4, item_text: "Inventory" },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  constructor() {}
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
